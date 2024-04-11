import { ImageView, Logo } from "@/components/common";
import Link from "next/link";
import React from "react";
import { SearchForm } from "./searchForm";
import { Menu } from "./menu";

export function Header() {
  return (
    <>
      <header className="header border-b-gray-300 border-b">
        <div className="container">
          <div className="header_wrapper lg:mt-8 mt-3 text-text-body">
            <div className="header_content flex lg:mb-8 mb-[12px] items-center flex-wrap lg:flex-nowrap">
              <div className="header_logo flex flex-shrink-0 flex-grow basis-full lg:basis-0 justify-between items-center">
                <Logo />
                <div className="header_menu-button-wrapper h-8">
                  <div className="header_menu-button"></div>
                </div>
              </div>

              <div className="header_right-wrapper flex items-center justify-between lg:flex-grow 2xl:basis-[47%] xl:basis-[60%] lg:pl-[40px] mt-[29px] lg:mt-0 w-full h-[45px]">
                <SearchForm />

                <div className="header_account-wrapper flex font-lato">
                  <div className="header_account flex mr-7">
                    <Link className="header_account-link flex items-center" href="#">
                      <ImageView
                        className={"header_account-svg"}
                        src={"/images/header/fi-rs-user.svg"}
                        alt={"header_account-svg"}
                        width={24}
                        height={25}
                      />
                      <span className="account_title ml-1 lg:inline-block hidden">Account</span>
                    </Link>
                  </div>
                  <div className="header_cart flex">
                    <Link className="header_account-link flex items-center relative" href="#">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--*******--------**** Menu ****--------*******--> */}
          <Menu />
        </div>
      </header>
      <div className="header_mobile-line w-full h-px bg-gray-300 mt-4 absolute -z-10"></div>
    </>
  );
}
