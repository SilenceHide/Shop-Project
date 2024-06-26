import { IconBox, ImageView } from "@/components";
import OrderList from "@/components/common/ui/order-list/OrderList";
import { useBasket } from "@/hooks/useBasket";
import Link from "next/link";
import React from "react";

export default function Checkout() {
  const { basketItems } = useBasket();

  return (
    <div className="container m-auto mt-[45px] mb-[150px]">
      <form className="">
        <h1 className="xs:text-[40px] text-3xl font-bold">Checkout</h1>
        <div className="mt-4 font-bold text-text-body">
          There are <span className="text-brand-color-one">{basketItems.length}</span> products in
          your cart
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12 ">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 font-lato">
            <Link
              target="_blank"
              href={"/login"}
              className="lg:col-span-2 2xl:col-span-1 text-medium  bg-white flex gap-[7px] py-[13px] items-center justify-center shadow-c rounded-[10px] border-[1px] border-border-gray hover:shadow-main-shadow transition-all duration-300"
            >
              <IconBox icon="icon-user" className="text-text-body" />
              <div className="text-text-body">Already have an account?</div>
              <p className="text-brand-color-one">Click here to login</p>
            </Link>
            <div className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium  flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray min-h-[52px]">
              {/* <!--<i className="fi-rs-user"></i>--> */}
              <div className="flex gap-[7px] ml-[22px] flex-1">
                <ImageView
                  src={"/icons/fi-rs-label.svg"}
                  alt={"unanimous user"}
                  width={18}
                  height={18}
                />
                <label htmlFor="coupon-code" className="hidden"></label>
                <input
                  name="coupon-code"
                  id="coupon-code"
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full placeholder-text-body-2 focus:outline-none  text-medium"
                />
              </div>
              <button className="font-quickSand bg-text-heading h-full min-h-[52px] rounded-r-[10px] text-white px-7">
                Apply Coupon
              </button>
            </div>
            <div className="font-quickSand font-bold text-2xl col-span-2 mt-12">
              Billing Details
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="fist-name" className="hidden"></label>
              <input
                name="fist-name"
                id="fist-name"
                type="text"
                placeholder="First name *"
                required
                className="autofill:bg-red w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="last-name" className="hidden"></label>
              <input
                name="last-name"
                id="last-name"
                type="text"
                placeholder="Last name *"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="address" className="hidden"></label>
              <input
                name="address"
                id="address"
                type="text"
                placeholder="Address *"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="address-line2" className="hidden"></label>
              <input
                name="address-line2"
                id="address-line2"
                type="text"
                placeholder="Address line 2 *"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="country" className="hidden"></label>
              {/* <!--when index 0 is select bg-gray-400 must be set--> */}
              <select
                name="country"
                id="country"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium border-none"
              >
                <option>State / Country *</option>
                <option>Iran</option>
                <option>United State</option>
              </select>
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="city" className="hidden"></label>
              <input
                name="city"
                id="city"
                type="text"
                placeholder="City / Town *"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="postal-zip" className="hidden"></label>
              <input
                name="postal-zip"
                id="postal-zip"
                type="text"
                placeholder="Postcode / Zip *"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="phone-number" className="hidden"></label>
              <input
                name="phone-number"
                id="phone-number"
                type="tel"
                placeholder="Phone number *"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="email" className="hidden"></label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Email *"
                required
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8">
              <label htmlFor="company" className="hidden"></label>
              <input
                name="company"
                id="company"
                type="text"
                placeholder="Company"
                className="w-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              />
            </div>
            <div className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-4 px-8 min-h-[210px]">
              <label htmlFor="information" className="hidden"></label>
              <textarea
                name="information"
                id="information"
                placeholder="Additional information"
                className="resize-none w-full h-full bg-transparent placeholder-text-body-2 focus:outline-none  text-medium"
              ></textarea>
            </div>
            <div className="col-span-2 bg-white flex gap-2 items-center h-6 ">
              <input
                name="create-account"
                id="create-account"
                type="checkbox"
                className="min-w-[18px] min-h-[18px]"
                checked
              />
              <label htmlFor="create-account" className="cursor-pointer">
                Create an account ?
              </label>
            </div>
            <div className="col-span-2 bg-white flex gap-2 items-center h-6 ">
              <input
                name="diff-address"
                id="diff-address"
                type="checkbox"
                className="min-w-[18px] min-h-[18px]"
              />
              <label htmlFor="diff-address" className="cursor-pointer">
                Ship to a different address?
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[70px] ">
            <div className="overflow-hidden rounded-[10px]">
              <OrderList />
            </div>
            <div>
              <p className="text-2xl font-bold">Payment</p>
              <div className="flex flex-col items-start gap-4 mt-7">
                <div className="flex items-center justify-start gap-2">
                  <input
                    type="radio"
                    name="payment-method"
                    id="direct-transfer"
                    value="direct-transfer"
                    checked
                  />
                  <label className="font-lato text-text-body " htmlFor="direct-transfer">
                    Direct bank transfer
                  </label>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <input
                    type="radio"
                    name="payment-method"
                    id="on-delivery"
                    value="direct-transfer"
                  />
                  <label className="font-lato text-text-body" htmlFor="on-delivery">
                    Cash on delivery
                  </label>
                </div>
                <Link href={"#"}>
                  <ImageView
                    src={"/images/payment.png"}
                    alt={"payment method"}
                    width={307}
                    height={21}
                  />
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="lg:mt-6 px-[50px] h-[50px] max-w-[250px] w-full rounded-[3px] text-white bg-brand-color-one gap-3 flex items-center justify-center font-bold"
            >
              Place an Order
              <ImageView
                src={"/icons/fi-rs-sign-out white.svg"}
                alt={"sign-out"}
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
