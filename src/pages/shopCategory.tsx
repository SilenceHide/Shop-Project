import { IconBox, ImageView } from "@/components";
import React from "react";

export default function ShopCategory() {
  return (
    <>
      <section className="mb-[68px] container">
        <div className="bg-hero-pattern rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-[#3bb77e33] bg-opacity-20 bg-cover bg-top bg-no-repeat flex justify-between mt-[38px] relative h-[235px]">
          <div className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
            <h2 className="max-w-[100%] text-5xl font-bold">Vegetables & tubers</h2>
          </div>
        </div>
      </section>

      {/* <!--shop Start--> */}
      <section className="container md:flex md:flex-row sm:flex-col md:justify-between">
        {/* <!--sidebar Start--> */}
        <div className="flex flex-col mr-7">
          {/* <!-- 1 --> */}
          <div className="flex flex-col border-[1px] border-border-gray rounded-[15px] px-[30px] pt-7 mb-[55px] pb-4">
            <p className="text-2xl font-bold mb-[14px] pb-[14px] border-b-2">Filter items</p>
            <div className="flex items-center justify-between mt-3 mb-[30px]">
              <div className="flex items-center gap-5">
                <p className="font-lato text-text-body-2 ">Price Range:</p>
                <p className="text-brand-color-one text-xl font-bold">$16 - $173</p>
              </div>
            </div>
            <div className="catalog_filter_price-range_wrapper mb-[14px] relative min-h-[20px]">
              <input
                id="fromSlider"
                type="range"
                className="catalog_filter_price-range"
                value={0}
                min={0}
                max={50}
              />
              <input
                id="toSlider"
                type="range"
                className="catalog_filter_price-range"
                value={100}
                min={51}
                max={100}
              />
            </div>
            <p className="font-lato text-text-body-2 mb-[21px]">Used for:</p>
            <div className="flex flex-col items-start mb-[30px]">
              <div className="flex mb-[10px] items-center w-full gap-2.5">
                <input
                  type="checkbox"
                  id="filter_appetizer"
                  className="w-[18px] h-[18px] focus:text-text-heading"
                />
                <label
                  htmlFor="filter_appetizer"
                  className="font-lato text-text-body-2 focus:text-text-heading"
                >
                  Appetizer
                </label>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <p className="text-medium text-text-body-2 hover:text-blue-300">Salad</p>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <p className="text-medium text-text-body-2 hover:text-blue-300">Eat fresh</p>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <p className="text-medium text-text-body-2 hover:text-blue-300">Juice</p>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <p className="text-medium text-text-body-2 hover:text-blue-300">Smoothie</p>
              </div>
            </div>

            <p className="font-lato  font-normal text-text-body-2 mb-[21px]">Brand:</p>
            <div className="flex flex-col items-start mb-[30px]">
              <div className="flex mb-[10px] items-center justify-center">
                <i className="icon-play mr-[10px]"></i>
                <p className="text-medium text-text-body-2 hover:text-blue-300">Cobblestone</p>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <i className="icon-play mr-[10px]"></i>
                <p className="text-medium text-text-body-2 hover:text-blue-300">McVitie's</p>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <i className="icon-play mr-[10px]"></i>
                <p className="text-medium text-text-body-2 hover:text-blue-300">Tastykake</p>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <i className="icon-play mr-[10px]"></i>
                <p className="text-medium text-text-body-2 hover:text-blue-300">Warburtons</p>
              </div>
              <div className="flex mb-[10px] items-center justify-center">
                <i className="icon-play mr-[10px]"></i>
                <p className="text-medium text-text-body-2 hover:text-blue-300">Wonder Bread</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="rounded bg-green-100 px-[32px] py-[14px] text-green-200 flex justify-center items-center">
                <i></i>Filter
              </button>
              <img
                className="hidden md:block"
                src="../assets/images/fresh-chinese-cabbage.png"
                alt="#"
              />
            </div>
          </div>
          {/* <!-- 2 --> */}
          <div className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 gap-6 pb-[36px] pr-[180px] mb-10">
            <p className=" mb-[14px] pb-[14px] border-b-2">Popular Items</p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 lg:gap-5">
                <img src="../assets/images/products/avocado.png" width="120" height="120" />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className=" text-blue-300 mb-1">Seeds of Change Organic</div>
                    <div className="flex gap-4">
                      <ul className="flex gap-1">
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-empty text-[12px]"></i>
                        </li>
                      </ul>
                      <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-heading5 text-green-200">$2.51</span>
                    <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 lg:gap-5">
                <img src="../assets/images/products/banana.png" width="120" height="120" />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className=" text-blue-300 mb-1">Seeds of Change Organic</div>
                    <div className="flex gap-4">
                      <ul className="flex gap-1">
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-empty text-[12px]"></i>
                        </li>
                      </ul>
                      <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-heading5 text-green-200">$2.51</span>
                    <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 lg:gap-5">
                <img src="../assets/images/products/orange-fruit.png" width="120" height="120" />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className=" text-blue-300 mb-1">Seeds of Change Organic</div>
                    <div className="flex gap-4">
                      <ul className="flex gap-1">
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-empty text-[12px]"></i>
                        </li>
                      </ul>
                      <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-heading5 text-green-200">$2.51</span>
                    <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 lg:gap-5">
                <img src="../assets/images/products/watter-melon.png" width="120" height="120" />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className=" text-blue-300 mb-1">Seeds of Change Organic</div>
                    <div className="flex gap-4">
                      <ul className="flex gap-1">
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-full text-[12px]"></i>
                        </li>
                        <li className="flex">
                          <i className="icon-star-empty text-[12px]"></i>
                        </li>
                      </ul>
                      <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-heading5 text-green-200">$2.51</span>
                    <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--sidebar End--> */}

        {/* <!--Right_col Start--> */}
        <div>
          <div className="flex justify-between rounded-[15px] bg-[#f5f5f5] py-[25px] px-[30px] mb-[48px]">
            <div className=" text-text-body font-bold">
              There are <span className="text-brand-color-one">568</span> products in this category
            </div>
            <div className="text-text-body font-lato gap-1 flex justify-center items-center">
              <ImageView
                src={"/images/category/fi-rs-sort.svg"}
                alt={"image"}
                width={16}
                height={16}
              />
              Sort by: Featured{" "}
              <IconBox icon="icon-angle-small-down" className="text-text-body-2" />
            </div>
          </div>
          {/* <!-- Cards Start --> */}
          <div className="flex flex-col md:flex md:flex-row md:flex-wrap gap-4 md:gap-6 lg:gap-2 mb-[45px]">
            {/* <!-- 1 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/8 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 2 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/18 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 3 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/1 902.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 4 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/8 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 5 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/9 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 6 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/11 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 7 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/12 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 8 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/16 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 9 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/1 902.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 10 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/3 389454.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 11 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/5 7.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 12 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <div className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                  <i className="icon-heart text-[15px] text-brand1"></i>
                </div>
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                  <i className="icon-shuffle text-[15px]"></i>
                </div>
                <div className="p-2.5 hover:bg-green-150">
                  <i className="icon-eye text-[15px]"></i>
                </div>
              </div>
              <img
                src="../assets/images/7 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 13 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/11 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 14 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/12 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 15 --> */}
            <div className="group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
              <img
                src="../assets/images/21 1.png"
                className="m-auto w-full aspect-[3/2] mb-[28px]"
              />
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">Hodo Foods</div>
                <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden max-w-[72%]">
                  Blue Diamond Almonds Lightly Salted Packing Paper
                </h3>
                <div className="flex gap-4">
                  <ul className="flex gap-1">
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-full text-[12px]"></i>
                    </li>
                    <li className="flex">
                      <i className="icon-star-empty text-[12px]"></i>
                    </li>
                  </ul>
                  <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                </div>
                <div className="font-lato text-xsmall text-gray-500">500 gram</div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-heading5 text-green-200">$2.51</span>
                  <span className="text-heading-sm line-through text-gray-500">$2.80</span>
                </div>
                <div className="add-product">
                  <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                    Adds +
                  </button>
                  <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                    <input
                      type="number"
                      value="1"
                      className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
                    />
                    <div className="flex flex-col justify-between">
                      <i className="up icon-angle-small-up text-[10px]"></i>
                      <i className="down icon-angle-small-down text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Cards Ends --> */}
          {/* <!-- buttons----> */}
          <div className="flex flex-wrap gap-[10px] justify-center items-start mb-[60px]">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">
              <i className="icon-angle-small-left"></i>
            </div>
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">
              1
            </div>
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">
              2
            </div>
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">
              3
            </div>
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer pb-1">
              ...
            </div>
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">
              <i className="icon-angle-small-right flex justify-center items-center"></i>
            </div>
          </div>
        </div>
        {/* <!--Right_col End--> */}
      </section>
      {/* <!--shop End--> */}
    </>
  );
}
