import React, { Dispatch, SetStateAction } from "react";
import Modal from "../ui/modal/Modal";
import Link from "next/link";

interface Props {
  onClose: () => void;
  setShowModal: Dispatch<SetStateAction<"login" | "register" | null>>;
}

export default function LoginModal({ onClose, setShowModal }: Props) {
  return (
    <Modal title="Login" closeModal={onClose}>
      <form className="max-w-[480px] h-full">
        <div className="font-lato">
          <p className="text-sm text-text-body-2 mb-10">
            Don't have an account?{" "}
            <span
              className="text-brand-color-one font-bold cursor-pointer"
              onClick={() => setShowModal("register")}
            >
              Create here
            </span>
          </p>
          <input
            type="text"
            placeholder="Username or Email *"
            aria-label="email"
            className="placeholder:text-text-body-2  border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
          />
          <input
            type="password"
            placeholder="Your password *"
            aria-label="password"
            className="placeholder:text-text-body-2 placeholder:text-base placeholder:font-lato placeholder:tracking-normal border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
          />
          <div className="flex gap-5">
            <input
              type="number"
              placeholder="Security code *"
              aria-label="securityCode"
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
                  className="w-[18px] h-[18px] mr-3 cursor-pointer"
                />
                <span className="text-sm text-brand-color-one">Remember me</span>
                <i className="fa-solid fa-user"></i>
              </label>
            </div>
            <Link href={"#"} className="text-sm font-bold text-text-body-2">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="h-16 px-11 bg-text-heading font-bold text-white rounded-xl font-quicksand"
          >
            Log in
          </button>
        </div>
      </form>
    </Modal>
  );
}
