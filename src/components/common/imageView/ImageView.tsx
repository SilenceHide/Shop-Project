import React from "react";
import Image from "next/image";

interface Props {
  src?: string | null;
  alt: string;
  width: number | string;
  height: number | string;
  className?: string;
}

export function ImageView({ src = "", alt, width, height, className = "" }: Props) {
  const imageSrc = src
    ? src.startsWith("/uploads")
      ? "https://nest.navaxcollege.com" + src
      : src
    : "/images/section1/cat-9.png";

  return (
    <Image
      className={className}
      src={imageSrc}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
    />
  );
}
