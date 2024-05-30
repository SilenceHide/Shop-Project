import { IconBox, ImageView, Rating, SimpleProductCard } from "@/components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { relatedProducts } from "@/mock/RelatedProducts";

export default function Product() {
  return (
    <main>
      <section className="container flex flex-col items-center mb-[100px] mt-[74px]">
        <div className="product-info flex lg:flex-row flex-col justify-center lg:gap-10 gap-12">
          <div className="flex flex-col xl:max-w-[645px] lg:max-w-[445px] md:max-w-[645px] xs:max-w-[545px] max-w-[345px] w-full md:m-0 m-auto">
            <div className="mb-[28px] p-[40px] border-[1px] border-border-gray rounded-2xl max-h-[695px] h-full flex items-center justify-center relative xl:shrink-0">
              <div className="absolute top-[30px] right-[30px] flex justify-end cursor-pointer">
                <IconBox icon="icon-search" size="text-[24px]" className="text-text-body-2 mb-20" />
              </div>
              <ImageView
                src={"/images/product/pic-01.png"}
                alt={"orange"}
                width={585}
                height={420}
                className={"w-11/12 md:max-w-[585px] max-w-fit"}
              />
            </div>
            <div className="flex flex-row gap-2 justify-center items-center static">
              <div className="product_slider-left-btn bg-brand-color-one rounded-full flex flex-row-reverse items-center p-2 cursor-pointer">
                <IconBox icon="icon-arrow-small-right" size="text-[24px]" className="rotate-180" />
              </div>

              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                navigation={{
                  prevEl: ".product_slider-left-btn",
                  nextEl: ".product_slider-right-btn ",
                }}
                modules={[Navigation]}
                breakpoints={{
                  540: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
                className="xl:max-w-[645px] lg:max-w-[445px] md:max-w-[645px] xs:max-w-[545px] max-w-[345px] w-full"
              >
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-01.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"max-w-[110px] max-h-[100px]"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-02.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"max-w-[110px] max-h-[100px]"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-03.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"max-w-[110px] max-h-[100px]"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-04.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"max-w-[110px] max-h-[100px]"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-w-[117px] h-[117px] rounded-2xl p-2 border border-border-light hover:border-brand-color-one transition-all flex justify-center items-center">
                    <ImageView
                      src={"/images/product/pic-05.png"}
                      alt={"orange"}
                      width={115}
                      height={115}
                      className={"max-w-[110px] max-h-[100px]"}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="product_slider-right-btn bg-brand-color-one rounded-full flex items-center p-2 cursor-pointer">
                <IconBox icon="icon-arrow-small-right" size="text-[24px]" />
              </div>
            </div>
          </div>

          <div className="max-w-[625px] w-full flex flex-col gap-5 xl:shrink-0">
            <div className="bg-[#def9ec] w-[75px] h-[29px] flex items-center justify-center text-brand-color-one text-sm font-bold">
              In Stock
            </div>
            <h1 className="md:text-[40px] text-3xl text font-bold">
              Seeds of Change Organic Quinoa, Brown
            </h1>
            <div className="flex gap-0.5">
              <Rating rate={4} />
            </div>
            <div className="flex items-center gap-5">
              <p className="text-brand-color-one font-bold md:text-7xl text-5xl">$38</p>
              <p className="text-text-body-2 line-through font-bold md:text-[32px] text-2xl">$42</p>
            </div>
            <div className="flex flex-col font-lato md:text-lg text-text-body gap-6">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia,
                corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum
                eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
              </p>
              <p>
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much
                yikes off far quetzal goodness and from for grimaced goodness.
              </p>
            </div>
            <form action="#" className="flex items-center gap-2.5 mt-10">
              <div className="flex justify-center items-center focus-within:border-brand-color-one focus-within:border-[1.5px] focus-within:rounded-[7px] focus-within:text-brand-color-one text-text-body-2 border-[1.5px] border-text-body-2 rounded-[7px] h-[50px] md:max-w-[118px] max-w-[80px] px-4 py-2">
                <label htmlFor="price2" className="hidden"></label>
                <input
                  type="number"
                  id="price2"
                  min="1"
                  max="10"
                  name="price2"
                  placeholder="1"
                  className="product_input-number pl-4 flex justify-center items-center focus:outline-none font-bold"
                />
              </div>
              <button className="offer_add-btn w-full text-white bg-brand-color-one flex items-center justify-center gap-2 rounded py-3 transition-all hover:bg-brand-color-two max-w-[175px] h-[50px]">
                <img
                  className="offer_add-btn_img"
                  src="../images/section4/fi-rs-shopping-cart.svg"
                  alt="shopping-cart"
                />
                <p className="offer_add-btn_title font-bold text-sm">Add To Cart</p>
              </button>
            </form>
            <div className="md:text-lg font-lato mt-10">
              <p className="">
                SKU:
                <span className="text-text-body-2"> FWM15VKT</span>
              </p>
            </div>
          </div>
        </div>
        <div className="product-detail m-auto flex flex-col gap-9 w-full max-w-[1180px] lg:mt-[228px] mt-[40px] border border-border-light rounded-2xl md:p-[50px] p-[20px]">
          <div className="product_tabs-wrapper flex sm:flex-row flex-col sm:items-center gap-6">
            <div className="product_tab px-[30px] h-[45px] border border-border-light flex items-center justify-center font-bold text-lg rounded-[30px] text-text-body-2 cursor-pointer transition-all duration-200 hover:text-brand-color-one hover:shadow-main-shadow product_tab-active">
              Description
            </div>
            <div className="product_tab px-[30px] h-[45px] border border-border-light flex items-center justify-center font-bold text-lg rounded-[30px] text-text-body-2 cursor-pointer transition-all duration-200 hover:text-brand-color-one hover:shadow-main-shadow ">
              Additional info
            </div>
            <div className="product_tab px-[30px] h-[45px] border border-border-light flex items-center justify-center font-bold text-lg rounded-[30px] text-text-body-2 cursor-pointer transition-all duration-200 hover:text-brand-color-one hover:shadow-main-shadow ">
              Reviews (3)
            </div>
          </div>
          <div className="product_details-wrapper flex flex-col gap-7">
            <div className="product_detail-wrapper flex flex-col gap-7 font-lato text-text-body">
              <p>
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much
                yikes off far quetzal goodness and from for grimaced goodness unaccountably and
                meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear
                furiously this apart.
              </p>
              <p>
                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on
                spoon-fed that alas rethought much decently richly and wow against the frequent
                fluidly at formidable acceptably flapped besides and much circa far over the
                bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one
                however because.
              </p>
            </div>
            <div className="product_detail-wrapper flex flex-col gap-3">
              <h3 className="text-xl font-bold">Packaging & Delivery</h3>
              <p className="font-lato text-text-body">
                Less lion goodness that euphemistically robin expeditiously bluebird smugly
                scratched far while thus cackled sheepishly rigid after due one assenting regarding
                censorious while occasional or this more crane went more as this less much amid
                overhung anathematic because much held one exuberantly sheep goodness so where rat
                wry well concomitantly.
              </p>
              <ul className="font-lato text-text-body my-4 text-xs flex flex-col gap-2 ml-1">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-text-body-2 rounded-full"></div>
                  <p className="max-w-[120px] w-full">Type Of Packing</p>
                  <p>Paper wrapping</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-text-body-2 rounded-full"></div>
                  <p className="max-w-[120px] w-full">Color</p>
                  <p>Green, Pink, Brown</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-text-body-2 rounded-full"></div>
                  <p className="max-w-[120px] w-full">Quantity Per Case</p>
                  <p>500g</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-text-body-2 rounded-full"></div>
                  <p className="max-w-[120px] w-full">Fat percentage</p>
                  <p>56%</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-text-body-2 rounded-full"></div>
                  <p className="max-w-[120px] w-full">Piece In One</p>
                  <p>Carton</p>
                </li>
              </ul>
              <p className="font-lato text-text-body">
                Scallop or far crud plain remarkably far by thus far iguana lewd precociously and
                and less rattlesnake contrary caustic wow this near alas and next and pled the yikes
                articulate about as less cackled dalmatian in much less well jeering for the thanks
                blindly sentimental whimpered less across objectively fanciful grimaced wildly some
                wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.{" "}
              </p>
            </div>
            <div className="product_detail-wrapper flex flex-col gap-3">
              <h3 className="text-xl font-bold">Suggested Use</h3>
              <div className="flex flex-col">
                <p className="font-lato text-text-body">Refrigeration not necessary.</p>
                <p className="font-lato text-text-body">Stir before serving.</p>
              </div>
            </div>
            <div className="product_detail-wrapper flex flex-col gap-3">
              <h3 className="text-xl font-bold">Other Ingredients</h3>
              <div className="flex flex-col">
                <p className="font-lato text-text-body">Organic raw pecans, organic raw cashews.</p>
                <p className="font-lato text-text-body">
                  This butter was produced using a LTG (Low Temperature Grinding) process.
                </p>
                <p className="font-lato text-text-body">
                  Made in machinery that processes tree nuts but does not process peanuts, gluten,
                  dairy or soy.
                </p>
              </div>
            </div>
            <div className="product_detail-wrapper flex flex-col">
              <h3 className="text-xl font-bold">Warnings</h3>
              <p className="font-lato text-text-body">
                Oil separation occurs naturally. May contain pieces of shell.
              </p>
            </div>
          </div>
        </div>
        <div className="related-product flex flex-col mt-12">
          <h2 className="text-center font-bold text-[32px]">Related products</h2>
          <div className="flex items-center justify-center max-w-[1180px] gap-5 mt-12 flex-wrap">
            {/* {relatedProducts.map((item, index) => {
              return (
                <div
                  key={index}
                  className="popular-product relative rounded-xl border border-[#e5e5e5] hover:border-brand-color-one overflow-hidden p-5 pb-5 md:pt-14 transition-all max-w-[280px] min-h-[335px]"
                >
                  <SimpleProductCard data={item} />
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
    </main>
  );
}
