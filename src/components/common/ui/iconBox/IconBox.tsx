import React from "react";

interface Props {
  icon: string;
  size?: string;
}

export function IconBox({ icon, size = "text-[22px]" }: Props) {
  return <i className={`${icon} ${size}`}></i>;
}
