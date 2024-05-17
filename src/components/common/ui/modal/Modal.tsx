import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  closeModal: () => void;
}

export default function Modal({ children, title, closeModal }: Props) {
  return (
    <div className="absolute z-10 translate-y-2/4 -translate-x-2/4 left-2/4 top-2/4 min-w-[50vw] max-w-[100vw] ">
      <div className="flex justify-between rounded bg-white p-8 text-[22px]">
        {title}
        <div
          className="cursor-pointer text-[40px] rounded-full hover:text-brand-color-one w-[35px] h-[35px] flex items-center justify-center transition-all font-medium"
          onClick={closeModal}
        >
          &times;
        </div>
      </div>
      <div className="p-8 text-[18px]">{children}</div>
    </div>
  );
}
