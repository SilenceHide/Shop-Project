import { ImageView } from "@/components";
import React from "react";

export default function cart() {
  return (
    <div className="container m-auto mt-[45px] mb-[150px]">
      <h1 className="xs:text-[40px] text-3xl font-bold">Your Cart</h1>
      <form className="">
        <div className="mt-4 font-bold text-text-body">
          There are <span className="text-brand-color-one">3</span> products in your cart
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12">
          <div>
            <div className="flex items-center justify-end pb-[20px]">
              <button type="button" className="flex justify-center items-center  gap-2 mr-3">
                <ImageView
                  src={"/icons/fi-rs-trash.svg"}
                  alt={"trash bin"}
                  width={16}
                  height={17}
                />
                Clear Cart
              </button>
            </div>
            <div className="w-full text-center">
              <div className="max-h-[500px] overflow-auto">
                <div className="min-w-[500px] flex flex-col gap-[30px]">
                  <div className="bg-gray-100 rounded-[15px] h-[58px] w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] items-center">
                    <div className="flex justify-center items-center">
                      <label htmlFor="all-checkbox" className="hidden"></label>
                      <input
                        type="checkbox"
                        name="all-checkbox"
                        id="all-checkbox"
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </div>
                    <div className="flex justify-center items-center font-black">Products</div>
                    <div className="flex justify-center items-center font-black">Unit Price</div>
                    <div className="flex justify-center items-center font-black">Quantity</div>
                    <div className="flex justify-center items-center font-black">Subtotal</div>
                    <div className="flex justify-center items-center font-black">Remove</div>
                  </div>
                  <div className=" md: w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]">
                    <div className="flex justify-center items-center">
                      <label htmlFor="checkbox1" className="hidden"></label>
                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </div>
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                      <ImageView
                        src={"/images/cart/orange.png"}
                        alt={"orange"}
                        width={210}
                        height={168}
                        className={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}
                      />
                      <div className="font-black text-start">
                        Field Roast Chao Cheese Creamy Original
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="font-black text-text-body-2 text-2xl">$2.51</div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center items-center focus-within:border-brand-color-one focus-within:border-[1.5px] focus-within:rounded-[7px] focus-within:text-brand-color-one text-text-body-2 border-[1.5px] border-text-body-2 rounded-[7px] max-h-[50px] max-w-[118px] px-4 py-2">
                        <label htmlFor="price1" className="hidden"></label>
                        <input
                          type="number"
                          id="price1"
                          min="1"
                          max="10"
                          name="price1"
                          placeholder="1"
                          className="cart_input-number pl-4 flex justify-center items-center focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="font-black text-brand-color-one text-2xl">$2.51</div>
                    </div>
                    <div className="flex justify-center items-center">
                      <ImageView
                        src={"/icons/fi-rs-cross-circle.svg"}
                        alt={"clean sign"}
                        width={25}
                        height={25}
                        className={"cursor-pointer"}
                      />
                    </div>
                  </div>
                  <div className="  md: w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]">
                    <div className="flex justify-center items-center">
                      <label htmlFor="checkbox2" className="hidden"></label>
                      <input
                        type="checkbox"
                        name="checkbox2"
                        id="checkbox2"
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </div>
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                      <ImageView
                        src={"/images/cart/lemon.png"}
                        alt={"orange"}
                        width={210}
                        height={168}
                        className={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}
                      />
                      <div className="font-black text-start">
                        Seeds of Change Organic Quinoa, Brown, & Red Rice
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="font-black text-text-body-2 text-2xl">$2.8</div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center items-center focus-within:border-brand-color-one focus-within:border-[1.5px] focus-within:rounded-[7px] focus-within:text-brand-color-one text-text-body-2 border-[1.5px] border-text-body-2 rounded-[7px] max-h-[50px] max-w-[118px] px-4 py-2">
                        <label htmlFor="price2" className="hidden"></label>
                        <input
                          type="number"
                          id="price2"
                          min="1"
                          max="10"
                          name="price2"
                          placeholder="1"
                          className="cart_input-number pl-4 flex justify-center items-center focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="font-black text-brand-color-one text-2xl">$2.8</div>
                    </div>
                    <div className="flex justify-center items-center">
                      <ImageView
                        src={"/icons/fi-rs-cross-circle.svg"}
                        alt={"clean sign"}
                        width={25}
                        height={25}
                        className={"cursor-pointer"}
                      />
                    </div>
                  </div>
                  <div className="  md: w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]">
                    <div className="flex justify-center items-center">
                      <label htmlFor="checkbox3" className="hidden"></label>
                      <input
                        type="checkbox"
                        name="checkbox3"
                        id="checkbox3"
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </div>
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                      <ImageView
                        src={"/images/cart/pork.png"}
                        alt={"orange"}
                        width={210}
                        height={168}
                        className={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}
                      />
                      <div className="font-black text-start">
                        Angie’s Boomchickapop Sweet & Salty Kettle Corn
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="font-black text-text-body-2 text-2xl">$3.5</div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center items-center focus-within:border-brand-color-one focus-within:border-[1.5px] focus-within:rounded-[7px] focus-within:text-brand-color-one text-text-body-2 border-[1.5px] border-text-body-2 rounded-[7px] max-h-[50px] max-w-[118px] px-4 py-2">
                        <label htmlFor="price3" className="hidden"></label>
                        <input
                          type="number"
                          id="price3"
                          min="1"
                          max="10"
                          name="price3"
                          placeholder="2"
                          className="cart_input-number pl-4 flex justify-center items-center focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="font-black text-brand-color-one text-2xl">$7</div>
                    </div>
                    <div className="flex justify-center items-center">
                      <ImageView
                        src={"/icons/fi-rs-cross-circle.svg"}
                        alt={"clean sign"}
                        width={25}
                        height={25}
                        className={"cursor-pointer"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] mt-[26px]">
                <div className="h-[1px] w-full bg-gray-200"></div>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <button
                    type="submit"
                    className="mt-6 py-2 bg-brand-color-two h-[50px] w-[242px] rounded-[4px] cursor-pointer flex justify-center items-center gap-2.5"
                  >
                    <i className="icon-arrow-small-right text-[24px] rotate-180"></i>
                    <span className="text-white text-lg font-bold">Continue Shopping</span>
                  </button>
                  <button
                    type="submit"
                    className="mt-6 h-[50px] w-[175px] py-2 bg-brand-color-one rounded-[4px] cursor-pointer flex justify-center items-center gap-2.5"
                  >
                    <ImageView
                      src={"/icons/fi-rs-refresh.svg"}
                      alt={"refresh"}
                      width={17}
                      height={17}
                    />
                    <div className="text-lg font-black text-white">Update Cart</div>
                  </button>
                </div>
                <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,_1.5fr)_minmax(0,_1fr)] gap-[45px] text-left">
                  <div className="bg-white flex flex-col gap-[30px] md:gap-[14px] items-start justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
                    <div className=" text-heading4">Calculate Shipping</div>
                    <div className="flex justify-start items-center gap-4">
                      <span className="font-lato text-medium text-gray-400">Flat rate:</span>
                      <span className="text-brand-color-one">5%</span>
                    </div>
                    <div className="w-full focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                      <label htmlFor="country" className="hidden"></label>
                      {/* <!--when index 0 is select bg-gray-400 must be set--> */}
                      <select
                        name="country"
                        id="country"
                        className="w-full bg-transparent placeholder-gray-400 focus:outline-none  text-medium border-none"
                      >
                        <option>State / Country</option>
                        <option>Iran</option>
                        <option>United State</option>
                      </select>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-[30px]">
                      <div className="w-full md:w-auto focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                        <label htmlFor="city" className="hidden"></label>
                        <input
                          name="city"
                          id="city"
                          type="text"
                          placeholder="City / Town"
                          className="w-full bg-transparent placeholder-gray-400 focus:outline-none  text-medium"
                        />
                      </div>
                      <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 w-full">
                        <label htmlFor="postal-zip" className="hidden"></label>
                        <input
                          name="postal-zip"
                          id="postal-zip"
                          type="text"
                          placeholder="Postcode / Zip"
                          className="w-full bg-transparent placeholder-gray-400 focus:outline-none  text-medium"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-center">
                    <div className=" text-heading4">Apply Coupon</div>
                    <div className="font-lato text-medium text-gray-400">Using A Promo Code?</div>
                    <div className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium  flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 w-full">
                      {/* <!--<i className="fi-rs-user"></i>--> */}
                      <div className="flex gap-[7px] ml-[22px] flex-1 w-full">
                        <ImageView
                          src={"/icons/fi-rs-label.svg"}
                          alt={"unanimous user"}
                          width={16}
                          height={16}
                        />
                        <label htmlFor="coupon-code" className="hidden"></label>
                        <input
                          name="coupon-code"
                          id="coupon-code"
                          type="text"
                          placeholder="Coupon Code"
                          className="w-full placeholder-gray-400 focus:outline-none text-medium"
                        />
                      </div>
                      <button className="bg-brand-color-one h-full min-h-[52px] rounded-r-[10px] text-white px-7">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[70px]">
            <div className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
              <div className="flex justify-between items-center w-full">
                <div className="  text-gray-400">Subtotal</div>
                <div className=" text-heading4 text-green-200">$12.31</div>
              </div>
              <div className="h-[1px] w-full bg-gray-200"></div>
              <div className="grid grid-cols-2 gap-7 w-full">
                <div className="font-lato   flex justify-start items-center">Shipping</div>
                <div className="font-lato text-heading5 flex justify-end items-center">
                  Free Shipping
                </div>
              </div>
              <div className="grid grid-cols-2 gap-7 w-full">
                <div className="font-lato   flex justify-start items-center">Estimate for</div>
                <div className="font-lato text-heading5 flex justify-end items-center">
                  United Kingdom
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-200"></div>
              <div className="flex justify-between items-center w-full">
                <div className="  text-gray-400">Total</div>
                <div className=" text-heading4 text-green-200">$12.31</div>
              </div>
              <button
                type="submit"
                className="mt-6 px-[50px] py-2 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5"
              >
                <div className="  text-white">Proceed to Checkout</div>
                <img
                  src="../assets/icons/fi-rs-sign-out%201.svg"
                  alt="arrow right"
                  width="16"
                  height="16"
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
