import { IconBox, ImageView } from "@/components";
import Link from "next/link";
import React from "react";

export default function NotFound404() {
  return (
    <section className="container mt-[150px] md:mb-[150px] max-w-[600px]">
      <div className="flex flex-col justify-center items-center">
        <ImageView
          className={"mb-4"}
          src={"/images/404 1.png"}
          alt={"logo 404"}
          width={510}
          height={194}
        />
        <h1 className="font-quicksand sm:text-7xl text-6xl mb-[22px] font-black text-center">
          Page Not Found
        </h1>
        <p className="mb-[34px] text-medium text-text-body text-center max-w-[500px] font-lato">
          The link you clicked may be broken or the page may have been removed. visit the
          <Link className="text-brand-color-one font-semibold" href="#">
            {" "}
            Homepage{" "}
          </Link>
          or
          <Link className="text-brand-color-one font-semibold" href="#">
            {" "}
            Contact{" "}
          </Link>
          us about the problem
        </p>
        <form
          name="search-form"
          action="#"
          method="post"
          className="flex items-center text-medium border rounded-xl mb-6 shadow-main-shadow max-w-[378px] w-full overflow-hidden"
        >
          <button id="text" className="mr-4 pt-2 pl-[30px]" type="submit">
            <IconBox icon="icon-search" />
          </button>
          <input
            type="text"
            name="search_text"
            placeholder="Enter your keywords..."
            className="w-full h-16 outline-none placeholder:text-text-body-2"
          />
        </form>
      </div>
    </section>
  );
}
