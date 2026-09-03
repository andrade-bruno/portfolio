import React from "react";
import styles from "./icon.module.scss";

type Props = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

const DEFAULT_SIZE = "1em";

export const SvgIcon = ({ title, height, width, className, style, children, ...rest }: Props) => {
  const cls = `${styles.icon} ${className ?? ""}`.trim();

  const svgHeight = height || DEFAULT_SIZE;
  const svgWidth = width || DEFAULT_SIZE;

  return (
    <svg
      className={cls}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      style={{ color: "inherit", display: "block", ...style }}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};
