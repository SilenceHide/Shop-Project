import { ImageView } from "@/components/common";
import React from "react";

export function Header() {
  return (
    <>
      <header className="header border-b-gray-300 border-b">
        <div className="container">
          <div className="header_wrapper lg:mt-8 mt-3 text-text-body">
            <div className="header_content flex lg:mb-8 mb-[20px] items-center flex-wrap lg:flex-nowrap">
              <div className="header_logo flex flex-shrink-0 flex-grow basis-full lg:basis-0 justify-between items-center">
                <ImageView
                  className={"header_logo-svg"}
                  src={"/images/header/Logo-main.svg"}
                  alt={"header_logo-svg"}
                  width={117}
                  height={66}
                />
                <div className="header_menu-button-wrapper h-8">
                  <div className="header_menu-button"></div>
                </div>
              </div>

              <div className="header_right-wrapper flex items-center justify-between lg:flex-grow 2xl:basis-[47%] xl:basis-[60%] lg:pl-[40px] mt-[35px] lg:mt-0 w-full">
                <div className="header_search-box flex relative">
                  <input
                    type="search"
                    className="search-box w-full border-2 border-border-light-green rounded-md px-6 py-3 font-lato text-xs hidden lg:inline-block focus:outline-brand-color-one"
                    placeholder="Search for items"
                  />
                  <ImageView
                    className={"search-box_svg lg:absolute right-6 top-3"}
                    src={"/images/header/fi-rs-search.svg"}
                    alt={"search-box_svg"}
                    width={20}
                    height={20}
                  />
                </div>

                <div className="header_account-wrapper flex font-lato">
                  <div className="header_account flex mr-7">
                    <a className="header_account-link flex items-center" href="#">
                      <ImageView
                        className={"header_account-svg"}
                        src={"/images/header/fi-rs-user.svg"}
                        alt={"header_account-svg"}
                        width={24}
                        height={25}
                      />
                      <span className="account_title ml-1 lg:inline-block hidden">Account</span>
                    </a>
                  </div>
                  <div className="header_cart flex">
                    <a className="header_account-link flex items-center relative" href="#">
                      <ImageView
                        className={"header_cart-svg"}
                        src={"/images/header/fi-rs-shopping-cart.svg"}
                        alt={"header_cart-svg"}
                        width={25}
                        height={25}
                      />
                      <div className="header_cart-number_wrapper absolute top-[-10px] lg:right-[28px] right-[-9px] bg-brand-color-one text-white rounded-full w-5 h-5 flex items-center justify-center">
                        <p className="header_cart-number text-xs">4</p>
                      </div>
                      <span className="shopping-cart_title ml-1 lg:inline-block hidden">Cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--*******--------**** Menu ****--------*******--> */}
          <div className="menu_wrapper flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mb-[14px] lg:mt-11 font-bold fixed lg:static -left-full top-0 bg-white bottom-0 px-6 py-4 lg:p-0 gap-2 rounded-r-3xl lg:rounded-none transition-all z-10 overflow-scroll lg:overflow-visible">
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
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/001-groceries 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Milks and Dairies</p>
                  </a>
                </div>
                <div
                  className="category rounded-md hover:border-border-light-green transition-all
              duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%]
              basis-full flex-shrink-0"
                >
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/002-drinks 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Wines & Drinks</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/003-dress 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Clothing & beauty</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/004-crab 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Fresh Seafood</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/005-pet food 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Pet Foods & Toy</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/006-sweet 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Fast food</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/007-dairy products 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Baking material</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/008-grocery 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Vegetables</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/009-fruit 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Fresh Fruit</p>
                  </a>
                </div>
                <div className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-2 lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0">
                  <a className="category_link flex items-center gap-3" href="#">
                    <ImageView
                      className={"category_img max-h-[31px] max-w-[31px] min-h-[31px] min-w-[31px]"}
                      src={"/images/menu-categories/010-milk products 1.svg"}
                      alt={"category_img"}
                      width={31}
                      height={31}
                    />
                    <p className="category_name">Bread and Juice</p>
                  </a>
                </div>
                <div className="more_category rounded-md px-4 py-2 basis-full flex-shrink-0 text-text-body hidden lg:block">
                  <a
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
                  </a>
                </div>
              </div>
            </div>

            <div className="nav_wrapper flex flex-col lg:flex-row lg:items-center lg:gap-9 gap-6 pt-7 lg:p-0 lg:m-0 border-gray-300 border-t lg:border-none">
              <div className="hot_deals-wrapper">
                <a href="#" className="nav_link flex items-center gap-1">
                  <ImageView
                    className={"hot_deals-icon"}
                    src={"/images/menu/fi-rs-flame 1.svg"}
                    alt={"hot_deals-icon"}
                    width={20}
                    height={21}
                  />
                  <p className="nav_title">Hot Deals</p>
                </a>
              </div>
              <a href="#" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Vegetables
              </a>
              <a href="#" className="nav_link">
                Drink
              </a>
            </div>

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
                <h5 className="contact_desc text-text-body text-xs font-normal">
                  24/7 Support Center
                </h5>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header_mobile-line w-full h-px bg-gray-300 mt-4 absolute -z-10"></div>
    </>
  );
}
