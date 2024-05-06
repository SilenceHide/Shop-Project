import { ImageView } from "@/components";
import React from "react";

export default function Contact() {
  return (
    <section className="container mt-14 mb-[100px]">
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

      <div className="flex flex-wrap lg:justify-center justify-between xl:gap-[150px] md:gap-[40px] gap-9">
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

      <div className="md:mt-[68px] mt-14 flex justify-center items-center gap-[60px]">
        <form action="#" className="max-w-[875px] w-full flex flex-col">
          <h3 className="font-black text-brand-color-one text-2xl">Contact form</h3>
          <h2 className="md:text-5xl text-4xl font-black mb-3">Drop Us a Line</h2>
          <p className="font-lato text-sm text-text-body">
            Your email address will not be published. Required fields are marked *
          </p>
          <div className="md:mt-12 mt-9 flex flex-col gap-6 font-lato placeholder:text-text-body-2">
            <div className="flex sm:items-center justify-between gap-6 sm:flex-row flex-col">
              <input
                type="text"
                className="max-w-[440px] w-full h-[64px] px-6 rounded-[10px] border border-border-gray"
                placeholder="Your name *"
              />
              <input
                type="email"
                className="max-w-[440px] w-full h-[64px] px-6 rounded-[10px] border border-border-gray"
                placeholder="Email *"
              />
            </div>
            <div className="flex sm:items-center justify-between gap-6 sm:flex-row flex-col">
              <input
                type="text"
                className="max-w-[440px] w-full h-[64px] px-6 rounded-[10px] border border-border-gray"
                placeholder="Phone number *"
              />
              <input
                type="text"
                className="max-w-[440px] w-full h-[64px] px-6 rounded-[10px] border border-border-gray"
                placeholder="Subject *"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="contact-message"
                className="sm:max-w-[875px] max-w-[440px] h-[245px] w-full resize-none p-6 rounded-[10px] border border-border-gray outline-none"
                placeholder="Message *"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-[190px] h-[64px] rounded-[10px] text-white bg-text-heading mt-7 font-black"
          >
            Send Message
          </button>
        </form>
        <div className="hidden lg:block">
          <ImageView
            src={"/images/contact/pic01.png"}
            alt={"image"}
            width={380}
            height={415}
            className="bg-center bg-cover"
          />
        </div>
      </div>
    </section>
  );
}
