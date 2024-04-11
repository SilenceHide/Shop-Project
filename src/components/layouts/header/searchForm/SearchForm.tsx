import React, { useState } from "react";
import { ImageView } from "@/components/common";

export function SearchForm() {
  const [searchOpen, isSearchOpen] = useState(false);

  return (
    <div className="header_search-box_wrapper">
      <form action="#" className="header_search-box flex relative">
        <input
          type="search"
          className={`search-box w-full border-border-light-green rounded-md py-3 font-lato placeholder:text-xs focus:outline-brand-color-one max-w-[220px] sm:max-w-full transition-all duration-300 ${
            searchOpen
              ? "w-[220px] pl-6 pr-12 border-2"
              : "w-0 lg:w-full lg:pl-6 lg:pr-16 p-0 border-0 lg:border-2"
          }`}
          placeholder="Search for items"
        />
        <button
          type="button"
          onClick={() => isSearchOpen(!searchOpen)}
          className={`search-box_svg right-6 top-[16px] ${
            searchOpen ? "absolute" : "lg:absolute static"
          }`}
        >
          <ImageView
            src={"/images/header/fi-rs-search.svg"}
            alt={"search-box_svg"}
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
}
