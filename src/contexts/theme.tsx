import React from "react";

export type ThemeMode = "light" | "dark";

export type ThemeContextValue = {
  theme: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
};

const THEME_KEY = "site:theme";
const THEME_QUERY = "(prefers-color-scheme: dark)";

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light";

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia(THEME_QUERY).matches ? "dark" : "light";
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = React.useState<ThemeMode>(() => getPreferredTheme());

  const setTheme = React.useCallback((nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  React.useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(THEME_QUERY);

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      const savedTheme = window.localStorage.getItem(THEME_KEY);
      const hasUserOverride = savedTheme === "light" || savedTheme === "dark";

      if (!hasUserOverride) {
        setThemeState(event.matches ? "dark" : "light");
      }
    };

    const mediaListener = (event: MediaQueryListEvent) => syncSystemTheme(event);
    mediaQuery.addEventListener("change", mediaListener);

    return () => {
      mediaQuery.removeEventListener("change", mediaListener);
    };
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      isDark: theme === "dark",
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
