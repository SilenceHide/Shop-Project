import React from "react";
import Link from "next/link";
import { IconBox, ImageView } from "@/components/common";
import { browsCategoriesMock } from "@/mock/browsCategory";
import { menuMock } from "@/mock/menu";

export function Menu() {
  // TODO load menu data from api
  return (
    <>
      <div className="category_browser-wrapper flex lg:flex-row flex-col text-white lg:relative">
        <div className="category_content bg-brand-color-one flex items-center px-5 py-[12px] gap-2 rounded-md">
          <IconBox icon={"icon-apps"} />
          <p className="category_browser-title">Browse All Categories</p>
          <IconBox
            icon={"icon-angle-small-down"}
            size={"text-[22px]"}
            className={"category_browser-arrow"}
          />
        </div>
        <div className="category_browser-inner-wrapper bg-transparent opacity-0 invisible transition-all duration-200 lg:absolute lg:top-12 lg:left-0 h-0 lg:w-[266px] relative z-10">
          <div className="category_browser bg-white flex text-text-heading font-bold text-sm lg:border-border-light-green lg:border-[1px] items-center justify-between max-w-60 lg:max-w-[500px] lg:min-w-[500px] rounded-md lg:px-8 lg:pt-8 pt-5 lg:pb-6 pb-2 lg:gap-4 gap-5 flex-wrap lg:mt-[26px]">
            {browsCategoriesMock.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="category rounded-md hover:border-border-light-green transition-all duration-200 lg:px-4 lg:py-[7px] lg:border-border-light lg:border-2 lg:basis-[48%] basis-full flex-shrink-0 lg:hover:shadow-main-shadow"
                  >
                    <Link className="category_link flex items-center gap-3" href="#">
                      <IconBox
                        icon={item.icon}
                        size={"text-[30px]"}
                        title={item.title}
                        titleClassName={"category_name"}
                        path={item.iconPath}
                      />
                    </Link>
                  </div>
                </>
              );
            })}

            <div className="more_category rounded-md px-4 pt-2 basis-full flex-shrink-0 text-text-body hidden lg:block">
              <Link
                className="more_category-link flex items-center gap-3 justify-center mx-auto my-0 max-w-44"
                href="#"
              >
                <IconBox icon={"icon-add"} />
                <p className="category_name">More Categories</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="category_browser-wrapper-border w-full h-px bg-gray-300 lg:hidden"></div> */}

      <div className="nav_wrapper flex flex-col lg:flex-row lg:items-center lg:gap-9 gap-6 pt-7 lg:p-0 lg:m-0 border-gray-300 border-t lg:border-none">
        {menuMock.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className={`${item.icon ? "nav_link flex items-center gap-1" : "nav_link"}`}
            >
              {item.icon ? (
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
      {/* <div className="category_browser-wrapper-border w-full h-px bg-gray-300 lg:hidden"></div> */}

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
