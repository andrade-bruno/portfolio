export const ImgIcon = ({ path, label, className }: { path: string; label?: string; className?: string }) => (
	<img
    src={`${process.env.PUBLIC_URL || ""}/${path}`}
    alt={label ? `${label} icon` : ""}
    aria-hidden={!label}
    className={className || ""}
    loading="lazy"
  />
);
