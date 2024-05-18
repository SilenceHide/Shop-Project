import React, { ReactNode } from "react";
import Portal from "../portal/Portal";

interface Props {
  children: ReactNode;
  title: string;
  closeModal: () => void;
}

export default function Modal({ children, title, closeModal }: Props) {
  return (
    <Portal closeModal={closeModal}>
      <div className="absolute z-10 top-[50px] min-w-[300px] 2xs:max-w-[480px] w-full rounded-md overflow-hidden">
        <div className="flex justify-between bg-white 2xs:p-8 p-4  text-[22px]">
          <h1 className="text-5xl mb-2 font-bold">{title}</h1>
          <div
            className="cursor-pointer text-[40px] rounded-full hover:text-brand-color-one w-[35px] h-[35px] flex items-center justify-center transition-all font-medium"
            onClick={closeModal}
          >
            &times;
          </div>
        </div>
        <div className="flex 2xs:px-8 2xs:pb-8 px-4 pb-4 text-[18px] bg-white w-full overflow-y-scroll max-h-[500px]">
          {children}
        </div>
      </div>
    </Portal>
  );
}
