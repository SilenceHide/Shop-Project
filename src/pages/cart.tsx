import { ImageView } from "@/components";
import AddProductInput from "@/components/common/product/productCard/AddProductInput";
import { useBasket } from "@/hooks/useBasket";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Cart() {
  const { basketItems } = useBasket();

  // let total = 0;

  // useEffect(() => {
  //   const elements = document.querySelectorAll(".total-price");
  //   let totalPrice = [];

  //   for (let index = 0; index < elements.length; index++) {
  //     const element = elements[index];
  //     const elementValue = Number(element.innerHTML.substring(1));
  //     totalPrice.push(elementValue);
  //   }

  //   for (let index = 0; index < totalPrice.length; index++) {
  //     total += totalPrice[index];
  //   }
  // }, [basketItems]);

  return (
    <div className="container m-auto mt-[45px] mb-[150px]">
      <h1 className="xs:text-[40px] text-3xl font-bold">Your Cart</h1>
      <form className="">
        <div className="mt-4 font-bold text-text-body">
          There are <span className="text-brand-color-one">3</span> products in your cart
        </div>
        <div className="flex xl:flex-row flex-col gap-8 mt-12 flex-grow-0">
          <div className="max-w-[1050px]">
            <div className="flex items-center justify-end pb-[20px]">
              <button type="button" className="flex justify-center items-center gap-2 mr-3">
                <ImageView
                  src={"/icons/fi-rs-trash.svg"}
                  alt={"trash bin"}
                  width={18}
                  height={18}
                />
                <span className="font-black text-text-body-2">Clear Cart </span>
              </button>
            </div>
            <div className="w-full text-center">
              <div className="md:max-h-[500px] xs:overflow-x-visible overflow-x-scroll">
                <div className="min-w-[500px] flex flex-col gap-[30px]">
                  <div className="bg-[#f5f5f5] rounded-[15px] h-[58px] w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] items-center md:flex-nowrap flex-wrap">
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
                  {basketItems.map((basketItem, index) => {
                    const basketData = basketItem.product.data.attributes;

                    return (
                      <div
                        className="md:w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]"
                        key={index}
                      >
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
                            src={basketData.thumbnail?.data?.attributes.url}
                            alt={"orange"}
                            width={210}
                            height={168}
                            className={
                              "max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"
                            }
                          />
                          <div className="font-black xl:text-start text-center md:text-base text-sm sm:max-w-[200px] w-full">
                            {basketData.title}
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="font-black text-text-body-2 md:text-2xl text-lg ">
                            ${basketData.sell_price ? basketData.sell_price : basketData.price}
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="flex justify-center items-center  rounded-[7px] max-h-[50px] md:max-w-[118px] max-w-[80px] px-4 py-2">
                            <AddProductInput productData={basketItem.product.data} />
                          </div>
                        </div>
                        <div className="flex justify-center items-center ">
                          <div className="total-price font-black text-brand-color-one md:text-2xl text-lg">
                            $
                            {basketData.sell_price
                              ? basketData.sell_price * basketItem.quantity
                              : basketData.price * basketItem.quantity}
                          </div>
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
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[30px] mt-[26px]">
                <div className="h-[1px] w-full bg-gray-200"></div>
                <div className="flex flex-col xs:flex-row justify-between items-center">
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
                <div className="flex lg:flex-row flex-col lg:max-w-[1048px] max-w-[600px] w-full gap-[45px] text-left">
                  <div className="bg-white flex flex-col gap-[30px] md:gap-[14px] items-start justify-between rounded-[15px] border-[1px] border-border-gray py-4 px-8 max-h-[560px] ">
                    <div className="font-black text-2xl">Calculate Shipping</div>
                    <div className="flex justify-start items-center gap-4">
                      <span className="font-lato text-text-body">
                        Flat rate:{" "}
                        <span className="text-brand-color-one font-quicksand font-bold">5%</span>
                      </span>
                    </div>
                    <div className="w-full focus-within:border-brand-color-one bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
                      <label htmlFor="country" className="hidden"></label>
                      {/* <!--when index 0 is select bg-gray-400 must be set--> */}
                      <select
                        name="country"
                        id="country"
                        className="w-full bg-transparent placeholder:text-text-body-2 focus:outline-none border-none"
                      >
                        <option className="text-text-body-2 placeholder:text-text-body-2">
                          State / Country
                        </option>
                        <option>Iran</option>
                        <option>United State</option>
                      </select>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-[30px]">
                      <div className="w-full md:w-auto focus-within:border-brand-color-one bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray  py-4 px-8">
                        <label htmlFor="city" className="hidden"></label>
                        <input
                          name="city"
                          id="city"
                          type="text"
                          placeholder="City / Town"
                          className="w-full bg-transparent placeholder:text-text-body-2 focus:outline-none  text-medium"
                        />
                      </div>
                      <div className="focus-within:border-brand-color-one bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8 w-full">
                        <label htmlFor="postal-zip" className="hidden"></label>
                        <input
                          name="postal-zip"
                          id="postal-zip"
                          type="text"
                          placeholder="Postcode / Zip"
                          className="w-full bg-transparent placeholder:text-text-body-2 focus:outline-none  text-medium"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-center">
                    <div className="font-black text-2xl">Apply Coupon</div>
                    <div className="font-lato text-text-body mb-4">Using A Promo Code?</div>
                    <div className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium  flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray w-full">
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
                      <button className="bg-brand-color-one font-black h-full min-h-[52px] rounded-r-[10px] text-white px-7">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col flex-shrink-0 flex-grow items-center justify-between rounded-[10px] border-[1px] border-border-gray py-12 px-8 lg:max-h-[430px] max-w-[490px] lg:gap-0 gap-7">
            <div className="flex justify-between items-center w-full">
              <div className="text-text-body-2 font-medium">Subtotal</div>
              <div className="sm:text-2xl text-xl font-black text-brand-color-one">$12</div>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="grid grid-cols-2 gap-7 w-full">
              <div className="text-text-body-2 font-medium">Shipping</div>
              <div className="sm:text-xl text-lg font-black text-right">Free Shipping</div>
            </div>
            <div className="grid grid-cols-2 gap-7 w-full">
              <div className="text-text-body-2 font-medium">Estimate for</div>
              <div className="sm:text-xl text-lg font-black text-right">United Kingdom</div>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="flex justify-between items-center w-full">
              <div className="text-text-body-2 font-medium">Total</div>
              <div className="sm:text-2xl text-xl font-black text-brand-color-one">$12.31</div>
            </div>
            <Link
              href={"/checkout"}
              className="mt-6 h-[50px] bg-brand-color-one w-full max-w-[405px] text-white font-black rounded-[4px] cursor-pointer flex items-center justify-center gap-3"
            >
              Proceed to Checkout
              <ImageView
                src={"/icons/fi-rs-sign-out white.svg"}
                alt={"sign-out"}
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
