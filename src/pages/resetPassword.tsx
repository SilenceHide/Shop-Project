import { ImageView } from "@/components";
import React from "react";

export default function ResetPassword() {
  return (
    <section className="container flex sm:flex-row flex-col justify-center sm:items-center sm:gap-20 gap-10 mt-[100px] sm:mb-[150px] mb-[100px] overflow-hidden">
      <div className="flex flex-col items-center xs:items-start">
        <ImageView
          src={"/images/reset password.svg"}
          alt={"image"}
          width={85}
          height={95}
          className={"xs:mb-9 mb-5"}
        />
        <form className="max-w-[480px] w-full">
          <h1 className="xs:text-[40px] text-3xl mb-2 font-bold xs:text-start text-center">
            Set new password
          </h1>
          <div className="font-lato">
            <p className="text-sm text-text-body mb-10 max-w-[470px] xs:text-start text-centers">
              Please create a new password that you don’t use on any other site.
            </p>
            <input
              type="password"
              aria-label="password"
              placeholder="Password"
              className="placeholder:text-text-body-2 placeholder:text-base placeholder:font-lato placeholder:tracking-normal border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
            />
            <input
              type="password"
              aria-label="confirmPassword"
              placeholder="Confirm you password"
              className="placeholder:text-text-body-2 placeholder:text-base placeholder:font-lato placeholder:tracking-normal border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
            />
            <button
              type="submit"
              className="h-16 px-11 bg-text-heading font-bold text-white rounded-xl font-quicksand"
            >
              Set new password
            </button>
          </div>
        </form>
      </div>
      <div className="font-lato text-text-body text-sm sm:mt-[120px]">
        <p className=" font-bold">Password must:</p>
        <div className="pl-4">
          <p>
            Be between 9 and 64 characters <br />
            Include at least two of the following:
          </p>
          <ul className="list-disc list-inside pl-2">
            <li>An uppercase character</li>
            <li>A lowercase character</li>
            <li>A number</li>
            <li>A special character</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
