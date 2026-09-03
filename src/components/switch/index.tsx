import React from "react";
import styles from "./switch.module.scss";

type Props = {
  checked: boolean;
  onChange: (next: boolean) => void;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
};

export const Switch: React.FC<Props> = ({ checked, onChange, ariaLabel, size = "md" }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={`${styles.switch} ${checked ? styles.checked : ""} ${styles[size]}`}
      onClick={() => onChange(!checked)}
    >
      <span className={styles.track} aria-hidden>
        <span className={styles.knob} />
      </span>
    </button>
  );
};

export default Switch;
