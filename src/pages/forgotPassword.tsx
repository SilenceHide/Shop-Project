import { ImageView } from "@/components";
import Link from "next/link";
import React from "react";

export default function ForgotPassword() {
  return (
    <section className="container flex justify-center mt-[100px] sm:mb-[150px] mb-[100px]">
      <div className="flex flex-col xs:items-start items-center">
        <ImageView
          src={"/images/forgot password.svg"}
          alt={"image"}
          width={85}
          height={85}
          className={"xs:mb-9 mb-5"}
        />
        <div className="max-w-[480px] w-full">
          <h1 className="xs:text-[40px] text-3xl mb-2 font-bold xs:text-start text-center">
            Forgot your password?
          </h1>
          <form className="font-lato">
            <p className="text-sm text-text-body mb-10 max-w-[470px] xs:text-start text-centers">
              Not to worry, we got you! Let’s get you a new password. Please enter your email
              address or your Username.
            </p>
            <input
              type="text"
              placeholder="Email or Username"
              aria-label="email"
              className="placeholder:text-text-body-2 border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
            />
            <div className="flex gap-5">
              <input
                type="number"
                placeholder="Security Code *"
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
                <label className="flex items-center cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="w-[18px] h-[18px] cursor-pointer"
                  />
                  <span className="text-sm text-brand-color-one">I agree to terms & Policy.</span>
                </label>
              </div>
              <Link href={"#"} className="text-sm font-bold text-text-body-2">
                Lean more
              </Link>
            </div>

            <button
              type="submit"
              className="h-16 px-11 bg-text-heading font-bold text-white rounded-xl font-quicksand"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
