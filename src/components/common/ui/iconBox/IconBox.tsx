import React from "react";

interface Props {
  icon: string;
  size?: string;
  className?: string;
  title?: string;
  titleClassName?: string;
  path?: number;
  onClick?: () => void;
}

export function IconBox({
  icon,
  size = "text-[22px]",
  className = "",
  title,
  titleClassName,
  path = 0,
  onClick,
}: Props) {
  let span = [];
  for (let i = 1; i <= path; i++) {
    span.push(<span className={`path${i}`} key={i}></span>);
  }

  return (
    <>
      <i className={`${icon} ${size} ${className}`} onClick={onClick}>
        {span}
      </i>

      {title && (
        <p className={`${titleClassName}`} onClick={onClick}>
          {title}
        </p>
      )}
    </>
  );
}
