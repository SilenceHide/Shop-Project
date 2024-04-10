import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  className?: string;
}

export function ImageView({ src, alt, width, height, className = "" }: Props) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
    />
  );
}
