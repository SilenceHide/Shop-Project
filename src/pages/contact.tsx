import { ImageView } from "@/components";
import React from "react";

export default function Contact() {
  return (
    <section className="container mt-14 mb-[120px]">
      <div className="flex lg:flex-row flex-col justify-center items-end xl:gap-[90px] gap-10">
        <div className="flex flex-col max-w-[415px] w-full gap-5 self-start">
          <h3 className="text-2xl font-bold text-brand-color-one">How can help you ?</h3>
          <h1 className="md:text-5xl text-4xl font-bold">let us know how we can help you</h1>
          <p className="text-justify text-text-body font-lato mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-justify text-text-body font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="flex max-w-[805px] w-full xl:justify-between flex-wrap 2xl:gap-[45px] lg:gap-5 gap-10 lg:justify-center">
          <div className="flex flex-col lg:max-w-[360px] max-w-[330px] w-full gap-4 group/contact">
            <h3 className="text-xl font-bold group-hover/contact:text-brand-color-one transition-all">
              01. Visit Feedback
            </h3>
            <p className="text-text-body font-lato text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex flex-col lg:max-w-[360px] max-w-[330px] w-full gap-4 group/contact">
            <h3 className="text-xl font-bold group-hover/contact:text-brand-color-one transition-all">
              02. Employer Services
            </h3>
            <p className="text-text-body font-lato text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex flex-col lg:max-w-[360px] max-w-[330px] w-full gap-4 group/contact">
            <h3 className="text-xl font-bold group-hover/contact:text-brand-color-one transition-all">
              03. Billing Inquiries
            </h3>
            <p className="text-text-body font-lato text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex flex-col lg:max-w-[360px] max-w-[330px] w-full gap-4 group/contact">
            <h3 className="text-xl font-bold group-hover/contact:text-brand-color-one transition-all">
              04.General Inquiries
            </h3>
            <p className="text-text-body font-lato text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-16 rounded-2xl overflow-hidden">
        <ImageView
          src={"/images/contact/map.png"}
          alt={"image"}
          width={1585}
          height={485}
          className="bg-center bg-cover sm:h-fit min-h-[150px] max-h-[485px] "
        />
      </div>

      <div className="flex flex-wrap justify-center xl:gap-[150px] gap-[50px]">
        <div className="flex flex-col max-w-[315px] gap-4 items-start">
          <h4 className="text-2xl font-black">Office</h4>
          <div className="flex flex-col font-lato text-text-body text-lg">
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@Evara.com</p>
          </div>
          <button
            className="bg-brand-color-one w-[115px] h-[36px] text-white rounded text-sm font-black"
            type="button"
          >
            View map
          </button>
        </div>
        <div className="flex flex-col max-w-[315px] gap-4 items-start">
          <h4 className="text-2xl font-black">Studio</h4>
          <div className="flex flex-col font-lato text-text-body text-lg">
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@Evara.com</p>
          </div>
          <button
            className="bg-brand-color-one w-[115px] h-[36px] text-white rounded text-sm font-black"
            type="button"
          >
            View map
          </button>
        </div>
        <div className="flex flex-col max-w-[315px] gap-4 items-start">
          <h4 className="text-2xl font-black">Shop</h4>
          <div className="flex flex-col font-lato text-text-body text-lg">
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@Evara.com</p>
          </div>
          <button
            className="bg-brand-color-one w-[115px] h-[36px] text-white rounded text-sm font-black"
            type="button"
          >
            View map
          </button>
        </div>
      </div>

      <div></div>
    </section>
  );
}
