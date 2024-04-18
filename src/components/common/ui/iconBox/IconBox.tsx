import React from "react";

interface Props {
  icon: string;
  size?: string;
  className?: string;
  title?: string;
  titleClassName?: string;
  path?: number;
}

export function IconBox({
  icon,
  size = "text-[22px]",
  className,
  title,
  titleClassName,
  path = 0,
}: Props) {
  let span = [];
  for (let i = 1; i <= path; i++) {
    span.push(<span className={`path${i}`}></span>);
  }

  return (
    <>
      <i className={`${icon} ${size} ${className}`}>{span}</i>

      {title && <p className={`${titleClassName}`}>{title}</p>}
    </>
  );
}
