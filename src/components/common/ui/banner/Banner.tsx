import React from "react";
import { IconBox, ImageView } from "@/components/common";

interface Props {
  title: string;
  subtitle: string;
  bgImage: string;
  image: string;
}

export function Banner({ title, subtitle, bgImage, image }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="hero_bg rounded-[30px] 2xl:h-[530px] bg-hero-bg mt-8 flex items-center justify-between sm:min-h-[250px] xs:min-h-[200px] min-h-[160px] lg:static relative"
    >
      <div className="hero_content 2xl:ml-20 md:ml-8 ml-6 flex flex-col flex-grow lg:basis-[70%]">
        <h1 className="hero_title font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-xl 2xl:mt-0 mt-6 lg:mr-0 md:mr-96 sm:mr-60 xs:mr-56 mr-32">
          {title}
        </h1>
        <p className="hero_desc font-lato xl:text-3xl text-2xl text-text-body mt-8 xl:mb-16 mb-8 hidden lg:block">
          {subtitle}
        </p>
        <div className="hero_subscribe-form lg:static absolute -bottom-16 w-full left-0">
          <form
            action="#"
            className="subscribe_form flex lg:bg-white bg-zinc-100 lg:max-w-[440px] items-center justify-between overflow-hidden rounded-[30px] w-full"
          >
            <IconBox
              icon={"icon-paper-plane-dark"}
              className={"sm:ml-6 ml-3 "}
              size={"text-[26px]"}
            />
            <input
              type="email"
              name="email"
              className="subscribe_form-input sm:py-3 py-2 outline-none border-none caret-brand-color-one w-2/4 bg-transparent text-sm"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="subscribe_form-btn bg-brand-color-one text-white sm:py-3 sm:px-5 py-2 px-4 rounded-[30px] w-[150px] font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="hero_img-wrapper lg:mr-4 lg:mt-0 lg:static lg:w-full lg:h-full absolute sm:w-[400px] xs:w-[300px] w-[200px] right-0 top-0">
        <ImageView
          className={"hero_img bg-center bg-cover bg-no-repeat"}
          src={image}
          alt={"apples"}
          width={828}
          height={507}
        />
      </div>
    </div>
  );
}
