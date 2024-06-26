import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function Section({ className = "", children }: Props) {
  return (
    <section className={className}>
      <div className="container">{children}</div>
    </section>
  );
}
