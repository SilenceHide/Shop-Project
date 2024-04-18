import React from "react";
import Link from "next/link";
import { ImageView } from "@/components/common";
import { menuMockData } from "@/mockData/menu";

export function Menu() {
  return (
    <>
      <div className="category_browser-wrapper flex lg:flex-row flex-col text-white lg:relative">
        <div className="category_content bg-brand-color-one flex items-center px-5 py-[12px] gap-2 rounded-md">
          <ImageView
            className={"category_browser-icon"}
            src={"/images/menu/fi-rs-apps.svg"}
            alt={"category_browser-icon"}
            width={17}
            height={17}
          />
          <p className="category_browser-title">Browse All Categories</p>
          <ImageView
            className={"category_browser-arrow"}
            src={"/images/menu/Vector down.svg"}
            alt={"category_browser-arrow"}
            width={10}
            height={6}
          />
        </div>

        <div className="category_browser hidden lg:absolute bg-white lg:top-12 lg:left-0 text-text-heading font-bold text-sm lg:border-border-light-green lg:border-[1px] items-center justify-between max-w-60 lg:max-w-[500px] lg:min-w-[500px] rounded-md lg:px-8 lg:pt-8 pt-5 lg:pb-6 pb-2 lg:gap-4 gap-5 flex-wrap">
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/001-groceries 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Milks and Dairies</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/002-drinks 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Wines & Drinks</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/003-dress 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Clothing & beauty</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/004-crab 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Fresh Seafood</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/005-pet food 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Pet Foods & Toy</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/006-sweet 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Fast food</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/007-dairy products 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Baking material</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/008-grocery 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Vegetables</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/009-fruit 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Fresh Fruit</p>
            </Link>
          </div>
          <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 hover:shadow-main-shadow">
            <Link className="category_link flex items-center gap-3" href="#">
              <ImageView
                className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                src={"/images/menu-categories/010-milk products 1.svg"}
                alt={"category_img"}
                width={31}
                height={31}
              />
              <p className="category_name">Bread and Juice</p>
            </Link>
          </div>
          <div className="more_category rounded-md px-4 py-2 basis-full flex-shrink-0 text-text-body hidden lg:block">
            <Link
              className="more_category-link flex items-center gap-3 justify-center mx-auto my-0 max-w-44"
              href="#"
            >
              <ImageView
                className={"category_add-icon"}
                src={"/images/menu-categories/fi-rs-add 1.svg"}
                alt={"category_add-icon"}
                width={25}
                height={25}
              />
              <p className="category_name">More Categories</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="category_browser-wrapper-border w-full h-px bg-gray-300 lg:hidden"></div>

      <div className="nav_wrapper flex flex-col lg:flex-row lg:items-center lg:gap-9 gap-6 pt-7 lg:p-0 lg:m-0 border-gray-300 border-t lg:border-none">
        {menuMockData.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className={`${item.hotDeals ? "nav_link flex items-center gap-1" : "nav_link"}`}
            >
              {item.hotDeals ? (
                <>
                  <ImageView
                    className={"hot_deals-icon"}
                    src={"/images/menu/fi-rs-flame 1.svg"}
                    alt={"hot_deals-icon"}
                    width={20}
                    height={21}
                  />
                  {item.title}
                </>
              ) : (
                item.title
              )}
            </Link>
          );
        })}
      </div>
      <div className="category_browser-wrapper-border w-full h-px bg-gray-300 lg:hidden"></div>

      <div className="nav_contact lg:flex items-center gap-3 mt-7 lg:m-0 hidden">
        <ImageView
          className={"nav_contact-icon"}
          src={"/images/menu/fi-rs-headset 1.svg"}
          alt={"nav_contact-icon"}
          width={36}
          height={36}
        />
        <div className="contact_wrapper">
          <p className="contact_number text-brand-color-one text-2xl">1900 - 8888</p>
          <h5 className="contact_desc text-text-body text-xs font-normal">24/7 Support Center</h5>
        </div>
      </div>
    </>
  );
}
