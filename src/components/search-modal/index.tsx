import { SearchIcon } from "components/icons";
import { SearchEntry, searchIndex } from "data/search-index";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import styles from "./search-modal.module.scss";

interface Props {
  onClose: () => void;
}

function highlight(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

function search(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.text.toLowerCase().includes(q) ||
      e.page.toLowerCase().includes(q)
  );
}

const pageOrder = ["Home", "Experiences", "Projects", "Personal"];

export const SearchModal = ({ onClose }: Props) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = search(query);

  // Group results by page, preserving page order
  const grouped = pageOrder.reduce<Record<string, SearchEntry[]>>((acc, page) => {
    const entries = results.filter((e) => e.page === page);
    if (entries.length) acc[page] = entries;
    return acc;
  }, {});

  const flat = results; // flat list for keyboard navigation

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flat.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && flat[activeIndex]) {
        navigate(flat[activeIndex].path);
        onClose();
      }
    },
    [flat, activeIndex, navigate, onClose]
  );

  const handleResultClick = (path: string) => {
    navigate(path);
    onClose();
  };

  let flatIdx = -1;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        {/* Input */}
        <div className={styles.inputRow}>
          <SearchIcon className={styles.inputIcon} />
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="Search across all pages…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
          {query && (
            <button
              className={styles.clearBtn}
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              aria-label="Clear search"
              type="button"
            >
              ✕
            </button>
          )}
          <kbd className={styles.escHint}>Esc</kbd>
        </div>

        {/* Results */}
        {query.trim() && (
          <div className={styles.results}>
            {results.length === 0 ? (
              <p className={styles.empty}>No results for &ldquo;{query}&rdquo;</p>
            ) : (
              Object.entries(grouped).map(([page, entries]) => (
                <div key={page} className={styles.group}>
                  <p className={styles.groupLabel}>{page}</p>
                  {entries.map((entry) => {
                    flatIdx++;
                    const isActive = flat[activeIndex]?.id === entry.id;
                    return (
                      <button
                        key={entry.id}
                        type="button"
                        className={`${styles.result}${isActive ? ` ${styles.resultActive}` : ""}`}
                        onClick={() => handleResultClick(entry.path)}
                        onMouseEnter={() => setActiveIndex(flatIdx)}
                      >
                        <span
                          className={styles.resultTitle}
                          dangerouslySetInnerHTML={{ __html: highlight(entry.title, query) }}
                        />
                        <span
                          className={styles.resultText}
                          dangerouslySetInnerHTML={{ __html: highlight(entry.text, query) }}
                        />
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer hint */}
        {!query.trim() && (
          <div className={styles.hint}>
            <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
            <span><kbd>↵</kbd> open</span>
            <span><kbd>Esc</kbd> close</span>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
