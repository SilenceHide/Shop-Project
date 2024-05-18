import React, { Dispatch, SetStateAction } from "react";
import Modal from "../ui/modal/Modal";
import Link from "next/link";

interface Props {
  onClose: () => void;
  setShowModal: Dispatch<SetStateAction<"login" | "register" | null>>;
}

export default function RegisterModal({ onClose, setShowModal }: Props) {
  return (
    <Modal title="Register" closeModal={onClose}>
      <form className="font-lato max-w-[480px] h-full">
        <p className="mb-5 text-xs text-text-body-2">
          Your personal data will be used to support your experience throughout this website, to
          manage access to your account, and for other purposes described in our privacy policy
        </p>
        <p
          className="text-sm text-brand-color-one font-bold cursor-pointer mb-5"
          onClick={() => setShowModal("login")}
        >
          I have an account
        </p>
        <input
          type="text"
          aria-label="username"
          placeholder="Username"
          className="placeholder:text-text-body-2  border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
        />
        <input
          type="email"
          aria-label="email"
          placeholder="Email"
          className="placeholder:text-text-body-2  border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
        />
        <input
          type="password"
          aria-label="password"
          placeholder="Password"
          className="placeholder:text-text-body-2 placeholder:text-base placeholder:font-lato placeholder:tracking-normal border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
        />
        <input
          type="password"
          aria-label="password"
          placeholder="Confirm password"
          className="placeholder:text-text-body-2 placeholder:text-base placeholder:font-lato placeholder:tracking-normal border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
        />
        <div className="flex gap-5">
          <input
            type="number"
            aria-label="securityCode"
            placeholder="Security code *"
            className="placeholder:text-text-body-2  border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
          />
          <div className="rounded-xl min-w-[115px] h-[65px] bg-border-light-green flex items-center justify-center">
            <p className="text-2xl font-bold">
              <span className="text-[#3F7C35]">6</span>
              <span className="text-[#7E396B]">8</span>
              <span className="text-[#ADA05B]">8</span>
              <span className="text-[#C14A83]">6</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-10">
          <div className="flex gap-2 items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="checkbox"
                className=" w-[18px] h-[18px] mr-3 cursor-pointer"
              />
              <span className="text-sm text-brand-color-one">I agree to terms & Policy.</span>
            </label>
          </div>
          <Link href={"#"} className="text-sm font-bold text-text-body-2">
            Learn more
          </Link>
        </div>
        <button
          type="submit"
          className="h-16 px-11 bg-text-heading font-bold text-white rounded-xl font-quicksand"
        >
          Submit & Register
        </button>
      </form>
    </Modal>
  );
}
