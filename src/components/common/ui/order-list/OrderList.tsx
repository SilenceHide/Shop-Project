import React from "react";
import { ImageView } from "../../imageView";

export default function OrderList() {
  return (
    <div className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-border-gray py-7 px-8 sm:max-h-[560px] xl:min-w-[605px] sm:min-w-[520px] max-w-[605px] shadow-main-shadow">
      <div className="flex justify-between items-center w-full">
        <div className="font-bold text-2xl">Your Orders</div>
        <div className="text-text-body-2 font-bold">Subtotal</div>
      </div>
      <div className="h-[1px] w-full bg-gray-200"></div>
      <div className="sm:grid sm:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)_minmax(0,_2fr)] gap-7 w-full flex flex-wrap items-center justify-center my-3 sm:my-0">
        <div className="flex justify-center items-center w-[115px] h-[115px] border border-border-gray rounded-[8px] p-1">
          <ImageView
            src={"/images/cart/orange.png"}
            alt={"orange"}
            width={210}
            height={168}
            className={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}
          />
        </div>
        <div className="text-text-heading font-bold flex justify-center items-center sm:py-[22px] max-w-[190px] text-center sm:text-start">
          Field Roast Chao Cheese Creamy Original
        </div>
        <div className="flex gap-10 w-full justify-center">
          <div className="text-2xl font-bold text-text-body-2 flex justify-center items-center">
            ×1
          </div>
          <div className="text-2xl font-bold text-brand-color-one flex justify-center items-center">
            $2.51
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)_minmax(0,_2fr)] gap-7 w-full flex flex-wrap items-center justify-center my-3 sm:my-0">
        <div className="flex justify-center items-center w-[115px] h-[115px] border border-border-gray rounded-[8px] p-1">
          <ImageView
            src={"/images/cart/lemon.png"}
            alt={"orange"}
            width={210}
            height={168}
            className={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}
          />
        </div>
        <div className="text-text-heading font-bold flex justify-center items-center sm:py-[22px] max-w-[190px] text-center sm:text-start">
          Seeds of Change Organic Quinoa, Brown, & Red Rice
        </div>
        <div className="flex gap-10 w-full justify-center">
          <div className="text-2xl font-bold text-text-body-2 flex justify-center items-center">
            ×1
          </div>
          <div className="text-2xl font-bold text-brand-color-one flex justify-center items-center">
            $2.51
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)_minmax(0,_2fr)] gap-7 w-full flex flex-wrap items-center justify-center my-3 sm:my-0">
        <div className="flex justify-center items-center w-[115px] h-[115px] border border-border-gray rounded-[8px] p-1">
          <ImageView
            src={"/images/cart/pork.png"}
            alt={"orange"}
            width={210}
            height={168}
            className={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}
          />
        </div>
        <div className="text-text-heading font-bold flex justify-center items-center sm:py-[22px] max-w-[190px] text-center sm:text-start">
          Angie’s Boomchickapop Sweet & Salty Kettle Corn
        </div>
        <div className="flex gap-10 w-full justify-center">
          <div className="text-2xl font-bold text-text-body-2 flex justify-center items-center">
            ×2
          </div>
          <div className="text-2xl font-bold text-brand-color-one flex justify-center items-center">
            $7.00
          </div>
        </div>
      </div>
    </div>
  );
}
