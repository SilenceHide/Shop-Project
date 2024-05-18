import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

export default function Portal({ children, closeModal }: Props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return createPortal(
    <div className="fixed top-0 right-0 bottom-0 left-0  bg-[#000000a3] z-20 " onClick={closeModal}>
      <div
        className="relative bg-white flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal")!,
  );
}
