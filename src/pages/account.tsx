import { ImageView } from "@/components";
import { Order } from "@/components/pages/account";
import { orderMock } from "@/mock/Order";
import React from "react";

export default function Account() {
  return (
    <section className="container lg:mt-[100px] mt-10 mb-[220px]">
      <div className="flex flex-wrap xl:justify-center items-center">
        <div className="flex xl:flex-col flex-wrap gap-2.5 font-quickSand text-heading6 lg:mr-[73px] sm:mr-0 mb-10">
          <div className="dashboard-tab flex cursor-pointer gap-3.5 px-7 py-3 rounded-[10px] items-center border border-border-gray hover:border-brand-color-one hover:shadow-main-shadow transition-all w-[330px] h-[64px]">
            <ImageView src={"/icons/fi-rs-settings.svg"} alt={"image"} width={26} height={24} />
            <div className="font-black text-text-body">Dashboard</div>
          </div>

          <div className="dashboard-tab flex cursor-pointer gap-3.5 px-7 py-3 rounded-[10px] items-center border border-border-gray hover:border-brand-color-one hover:shadow-main-shadow transition-all w-[330px] h-[64px] dashboard-tab-active">
            <ImageView src={"/icons/fi-rs-truck white.svg"} alt={"image"} width={26} height={24} />
            <div className="font-black text-text-body dashboard-tab-activate">Orders list</div>
          </div>

          <div className="dashboard-tab flex cursor-pointer gap-3.5 px-7 py-3 rounded-[10px] items-center border border-border-gray hover:border-brand-color-one hover:shadow-main-shadow transition-all w-[330px] h-[64px]">
            <ImageView src={"/icons/fi-rs-shopping-bag.svg"} alt={"image"} width={26} height={24} />
            <div className="font-black text-text-body">Track your orders</div>
          </div>

          <div className="dashboard-tab flex cursor-pointer gap-3.5 px-7 py-3 rounded-[10px] items-center border border-border-gray hover:border-brand-color-one hover:shadow-main-shadow transition-all w-[330px] h-[64px]">
            <ImageView src={"/icons/fi-rs-marker.svg"} alt={"image"} width={26} height={24} />
            <div className="font-black text-text-body">My address</div>
          </div>

          <div className="dashboard-tab flex cursor-pointer gap-3.5 px-7 py-3 rounded-[10px] items-center border border-border-gray hover:border-brand-color-one hover:shadow-main-shadow transition-all w-[330px] h-[64px]">
            <ImageView src={"/icons/fi-rs-user.svg"} alt={"image"} width={26} height={24} />
            <div className="font-black text-text-body">Account details</div>
          </div>

          <div className="dashboard-tab flex cursor-pointer gap-3.5 px-7 py-3 rounded-[10px] items-center border border-border-gray hover:border-brand-color-one hover:shadow-main-shadow transition-all w-[330px] h-[64px]">
            <ImageView src={"/icons/fi-rs-sign-out.svg"} alt={"image"} width={26} height={24} />
            <div className="font-black text-text-body">Log out</div>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[820px] w-full">
          <div className="text-4xl font-black mb-[22px]">Your Orders</div>
          <div className="flex flex-col w-full">
            <div className="w-full bg-gray-100 justify-between items-start rounded-2xl mb-[24px] py-[16px] px-[30px] sm:flex hidden">
              <div className="font-black max-w-[160px] w-full">Order ID</div>
              <div className="font-black max-w-[160px] w-full">Date</div>
              <div className="font-black max-w-[160px] w-full">Status</div>
              <div className="font-black max-w-[160px] w-full">Total</div>
              <div className="font-black max-w-[160px] w-full">Actions</div>
            </div>
            {orderMock.map((order, index) => {
              return (
                <Order
                  key={index}
                  order_id={order.order_id}
                  data={order.data}
                  status={order.status}
                  total_price={order.total_price}
                  total_item={order.total_item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
