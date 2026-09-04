import React from "react"

type Props = React.ImgHTMLAttributes<HTMLImageElement> &
  {
    path: string,
    label: string
  }

export const ImgIcon = ({ path, label, className, ...rest }: Props) => {
	return (
    <img
      src={`${process.env.PUBLIC_URL || ""}/${path}`}
      alt={label ? `${label} icon` : ""}
      aria-hidden={!label}
      className={className || ""}
      loading="lazy"
      {...rest}
    />
  )
}
