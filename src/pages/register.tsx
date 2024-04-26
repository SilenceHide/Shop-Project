import { ImageView } from "@/components";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <section className="container mt-[70px] mb-[120px] flex lg:flex-row flex-col lg:gap-[100px] gap-20 justify-center items-center">
      <div className="max-w-[480px] w-full">
        <h1 className=" mb-2 text-4xl font-bold">Create an Account</h1>
        <form className="font-lato">
          <p className="mb-10 text-xs text-text-body-2">
            Your personal data will be used to support your experience throughout this website, to
            manage access to your account, and for other purposes described in our privacy policy
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
      </div>

      <div className="md:p-[50px] p-[20px] flex flex-col gap-5 border rounded-xl h-fit">
        <button className="lg:w-[368px] w-full h-[57px] px-6 md:text-xl font-bold bg-[#1877F2] text-white rounded-2xl flex gap-4 items-center">
          <span>
            <ImageView src={"/images/Facebook Logo.svg"} alt={"image"} width={28} height={28} />
          </span>
          Continue with Facebook
        </button>
        <button className="lg:w-[368px] w-full h-[57px] px-6 md:text-xl font-bold text-text-body bg-[#FFFFFF] rounded-2xl flex gap-4 items-center border border-border-light shadow-main-shadow">
          <span>
            <ImageView src={"/images/Google Logo.svg"} alt={"image"} width={28} height={28} />
          </span>
          Continue with Google
        </button>
        <button className="lg:w-[368px] w-full h-[57px] px-6 md:text-xl font-bold bg-[#000000] text-white rounded-2xl flex gap-4 items-center">
          <span>
            <ImageView src={"/images/Apple Logo.svg"} alt={"image"} width={28} height={28} />
          </span>
          Continue with Apple
        </button>
      </div>
    </section>
  );
}
