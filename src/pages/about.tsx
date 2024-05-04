import { IconBox, ImageView } from "@/components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function About() {
  return (
    <section className="container mt-[70px] mb-[200px]">
      <div className="flex xl:items-center lg:items-start items-center lg:flex-row flex-col justify-center gap-14 mb-[80px]">
        <div className="max-w-[645px] w-full">
          <ImageView
            src={"/images/about/top-pic.png"}
            alt={"image"}
            width={645}
            height={735}
            className="bg-cover bg-no-repeat"
          />
        </div>
        <div className="flex flex-col lg:items-start items-center gap-11 xl:max-w-[620px] lg:max-w-[500px] max-w-[620px]">
          <h1 className="font-black text-[40px] text-center">Welcome to NestMart</h1>
          <div className="flex flex-col font-lato text-text-body gap-7 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate id est laborum.
            </p>
            <p>
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat
              legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante
              Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa
              tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center relative mt-5">
            <div className="about_slider-left-btn bg-brand-color-one rounded-full flex items-center p-2 cursor-pointer absolute top-[40%] z-10 left-[-15px]">
              <IconBox icon="icon-arrow-small-right" size="text-[24px]" className="rotate-180" />
            </div>

            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              navigation={{
                prevEl: ".about_slider-left-btn",
                nextEl: ".about_slider-right-btn",
              }}
              modules={[Navigation]}
              breakpoints={{
                540: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="xl:max-w-[620px] lg:max-w-[500px] md:max-w-[620px] sm:max-w-[450px] max-w-[310px] w-full"
            >
              <SwiperSlide>
                <div>
                  <ImageView
                    src={"/images/about/top-slide01.png"}
                    alt={"orange"}
                    width={182}
                    height={224}
                    className={""}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <ImageView
                    src={"/images/about/top-slide02.png"}
                    alt={"orange"}
                    width={182}
                    height={224}
                    className={""}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <ImageView
                    src={"/images/about/top-slide03.png"}
                    alt={"orange"}
                    width={182}
                    height={224}
                    className={""}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <ImageView
                    src={"/images/about/top-slide02.png"}
                    alt={"orange"}
                    width={182}
                    height={224}
                    className={""}
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="about_slider-right-btn bg-brand-color-one rounded-full flex items-center p-2 cursor-pointer absolute top-[40%] right-[-15px] z-10">
              <IconBox icon="icon-arrow-small-right" size="text-[24px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl font-black text-center">What We Provide?</h2>
          <div>
            <ImageView
              src={"/images/about/wave.svg"}
              alt={"image"}
              width={150}
              height={15}
              className="bg-cover bg-no-repeat"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="max-w-[420px] max-h-[420px] w-full flex flex-col items-center rounded-2xl border border-border-gray px-8 py-11 transition-all duration-200 hover:shadow-main-shadow text-center gap-6">
            <div>
              <ImageView
                src={"/images/about/provide01.svg"}
                alt={"image"}
                width={100}
                height={100}
                className="bg-cover bg-no-repeat"
              />
            </div>
            <h3 className="text-2xl font-black">Best Prices & Offers</h3>
            <p className="font-lato text-lg text-text-body">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form
            </p>
            <Link href={"#"} className="font-lato text-lg text-brand-color-one">
              Read more
            </Link>
          </div>
          <div className="max-w-[420px] max-h-[420px] w-full flex flex-col items-center rounded-2xl border border-border-gray px-8 py-11 transition-all duration-200 hover:shadow-main-shadow text-center gap-6">
            <div>
              <ImageView
                src={"/images/about/provide02.svg"}
                alt={"image"}
                width={100}
                height={100}
                className="bg-cover bg-no-repeat"
              />
            </div>
            <h3 className="text-2xl font-black">Wide Assortment</h3>
            <p className="font-lato text-lg text-text-body">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form
            </p>
            <Link href={"#"} className="font-lato text-lg text-brand-color-one">
              Read more
            </Link>
          </div>
          <div className="max-w-[420px] max-h-[420px] w-full flex flex-col items-center rounded-2xl border border-border-gray px-8 py-11 transition-all duration-200 hover:shadow-main-shadow text-center gap-6">
            <div>
              <ImageView
                src={"/images/about/provide03.svg"}
                alt={"image"}
                width={100}
                height={100}
                className="bg-cover bg-no-repeat"
              />
            </div>
            <h3 className="text-2xl font-black">Free Delivery</h3>
            <p className="font-lato text-lg text-text-body">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form
            </p>
            <Link href={"#"} className="font-lato text-lg text-brand-color-one">
              Read more
            </Link>
          </div>
          <div className="max-w-[420px] max-h-[420px] w-full flex flex-col items-center rounded-2xl border border-border-gray px-8 py-11 transition-all duration-200 hover:shadow-main-shadow text-center gap-6">
            <div>
              <ImageView
                src={"/images/about/provide04.svg"}
                alt={"image"}
                width={100}
                height={100}
                className="bg-cover bg-no-repeat"
              />
            </div>
            <h3 className="text-2xl font-black">Easy Returns</h3>
            <p className="font-lato text-lg text-text-body">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form
            </p>
            <Link href={"#"} className="font-lato text-lg text-brand-color-one">
              Read more
            </Link>
          </div>
          <div className="max-w-[420px] max-h-[420px] w-full flex flex-col items-center rounded-2xl border border-border-gray px-8 py-11 transition-all duration-200 hover:shadow-main-shadow text-center gap-6">
            <div>
              <ImageView
                src={"/images/about/provide05.svg"}
                alt={"image"}
                width={100}
                height={100}
                className="bg-cover bg-no-repeat"
              />
            </div>
            <h3 className="text-2xl font-black">100% Satisfaction</h3>
            <p className="font-lato text-lg text-text-body">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form
            </p>
            <Link href={"#"} className="font-lato text-lg text-brand-color-one">
              Read more
            </Link>
          </div>
          <div className="max-w-[420px] max-h-[420px] w-full flex flex-col items-center rounded-2xl border border-border-gray px-8 py-11 transition-all duration-200 hover:shadow-main-shadow text-center gap-6">
            <div>
              <ImageView
                src={"/images/about/provide06.svg"}
                alt={"image"}
                width={100}
                height={100}
                className="bg-cover bg-no-repeat"
              />
            </div>
            <h3 className="text-2xl font-black">Great Daily Deal</h3>
            <p className="font-lato text-lg text-text-body">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form
            </p>
            <Link href={"#"} className="font-lato text-lg text-brand-color-one">
              Read more
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[75px] mb-[70px] md:gap-12 gap-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-14">
          <div className="flex items-center justify-center gap-6 ">
            <div className="sm:block hidden">
              <ImageView
                src={"/images/about/mid-pic01.png"}
                alt={"image"}
                width={325}
                height={440}
                className="bg-cover bg-no-repeat"
              />
            </div>
            <div className="sm:max-w-[425px] max-w-[300px]">
              <ImageView
                src={"/images/about/mid-pic02.png"}
                alt={"image"}
                width={425}
                height={575}
                className="bg-cover bg-no-repeat "
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:max-w-[480px] w-full items-center md:items-start text-center md:text-start">
            <h3 className="text-2xl font-black text-text-body">Our performance</h3>
            <h2 className="font-black md:text-5xl text-4xl md:max-w-[400px] max-w-[300px]">
              Your Partner for e-commerce grocery solution
            </h2>
            <p className="font-lato text-text-body text-justify lg:mt-10 mt-5">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia
            </p>
            <p className="font-lato text-text-body text-justify">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
          </div>
        </div>
        <div className="flex justify-center md:gap-[55px] gap-8 md:flex-nowrap flex-wrap">
          <div className="flex flex-col max-w-[400px] md:gap-7 gap-2">
            <h4 className="font-black text-[32px]">Who we are</h4>
            <p className="text-justify text-text-body font-lato">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros
              donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
            </p>
          </div>
          <div className="flex flex-col max-w-[400px] md:gap-7 gap-2">
            <h4 className="font-black text-[32px]">Our history</h4>
            <p className="text-justify text-text-body font-lato">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros
              donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
            </p>
          </div>
          <div className="flex flex-col max-w-[400px] md:gap-7 gap-2">
            <h4 className="font-black text-[32px]">Our mission</h4>
            <p className="text-justify text-text-body font-lato">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros
              donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full rounded-[20px] overflow-hidden lg:h-[350px] bg-[url('/images/about/mid-banner.png')] bg-cover bg-center">
        <div className="w-full h-full bg-[rgba(75,103,90,0.8)] flex items-center lg:justify-between justify-center xl:px-[120px] md:p-20 p-10 lg:flex-nowrap flex-wrap lg:gap-0 gap-10">
          <div className="flex flex-col items-center text-white font-black gap-2.5">
            <p className="md:text-7xl text-5xl">12+</p>
            <p className="md:text-xl">Glorious years</p>
          </div>
          <div className="flex flex-col items-center text-white font-black gap-2.5">
            <p className="md:text-7xl text-5xl">360+</p>
            <p className="md:text-xl">Happy clients</p>
          </div>
          <div className="flex flex-col items-center text-white font-black gap-2.5">
            <p className="md:text-7xl text-5xl">580+</p>
            <p className="md:text-xl">Projects complete</p>
          </div>
          <div className="flex flex-col items-center text-white font-black gap-2.5">
            <p className="md:text-7xl text-5xl">160+</p>
            <p className="md:text-xl">Team advisor</p>
          </div>
          <div className="flex flex-col items-center text-white font-black gap-2.5">
            <p className="md:text-7xl text-5xl">48+</p>
            <p className="md:text-xl">Products Sale</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 mt-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl font-black text-center">Our Team</h2>
          <div>
            <ImageView
              src={"/images/about/wave.svg"}
              alt={"image"}
              width={150}
              height={15}
              className="bg-cover bg-no-repeat"
            />
          </div>
        </div>
        <div className="flex lg:gap-6 gap-10 items-center justify-center lg:flex-nowrap flex-wrap ">
          <div className="w-full xl:max-w-[410px] lg:max-w-[300px] max-w-[410px]">
            <div className="flex flex-col max-w-[390px] w-full items-start">
              <p className="font-bold text-lg text-brand-color-one mb-2.5">Our Team</p>
              <h3 className="font-bold md:text-5xl text-4xl max-w-[300px] mb-7">
                Meet Our Expert Team
              </h3>
              <p className="font-lato text-text-body mb-6 text-justify">
                Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet
                neccon sequata congue idsem. Maecenas malesuada faucibus finibus.{" "}
              </p>
              <p className="font-lato text-text-body mb-6 text-justify">
                Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet
                neccon sequata congue idsem. Maecenas malesuada faucibus finibus.{" "}
              </p>
              <button
                type="button"
                className="h-[50px] max-w-[200px] w-full bg-brand-color-one text-white rounded text-lg font-black"
              >
                View All Members
              </button>
            </div>
          </div>
          <div className="max-w-[480px] relative flex items-center justify-center lg:mb-0 mb-24">
            <ImageView
              src={"/images/about/bottom-pic01.png"}
              alt={"image"}
              width={480}
              height={500}
              className="bg-cover bg-no-repeat"
            />
            <div className="absolute xl:max-w-[355px] lg:max-w-[280px] xs:max-w-[410px] max-w-[280px] w-full xl:h-[170px] lg:h-[150px]  py-7 px-10 rounded-2xl shadow-[20px_20px_40px_0px_rgba(24,24,24,0.07)] bottom-[-75px] flex flex-col items-center justify-center bg-white">
              <p className="text-2xl font-black">H. Merinda</p>
              <p className="text-lg font-lato text-text-body">CEO & Co-Founder </p>
              <div className="flex items-center justify-center gap-4 mt-5">
                <ImageView
                  src={"/images/about/social-01.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <ImageView
                  src={"/images/about/social-02.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <ImageView
                  src={"/images/about/social-03.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <ImageView
                  src={"/images/about/social-04.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="max-w-[480px] relative flex items-center justify-center">
            <ImageView
              src={"/images/about/bottom-pic02.png"}
              alt={"image"}
              width={480}
              height={500}
              className="bg-cover bg-no-repeat"
            />
            <div className="absolute xl:max-w-[355px] lg:max-w-[280px] xs:max-w-[410px] max-w-[280px] w-full xl:h-[170px] lg:h-[150px]  py-7 px-10 rounded-2xl shadow-[20px_20px_40px_0px_rgba(24,24,24,0.07)] bottom-[-75px] flex flex-col items-center justify-center bg-white">
              <p className="text-2xl font-black">H. Merinda</p>
              <p className="text-lg font-lato text-text-body">CEO & Co-Founder </p>
              <div className="flex items-center justify-center gap-4 mt-5">
                <ImageView
                  src={"/images/about/social-01.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <ImageView
                  src={"/images/about/social-02.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <ImageView
                  src={"/images/about/social-03.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <ImageView
                  src={"/images/about/social-04.svg"}
                  alt={"image"}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
