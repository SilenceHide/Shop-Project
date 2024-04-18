import React, { useState } from "react";
import { IconBox, ImageView } from "@/components/common";

export function SearchForm() {
  const [searchOpen, isSearchOpen] = useState(false);

  return (
    // TODO should implement form
    <div className="header_search-box_wrapper">
      <form action="#" className="header_search-box flex relative">
        <input
          type="search"
          className={`search-box border-border-light-green rounded-md py-3 font-lato placeholder:text-xs focus:outline-brand-color-one max-w-[220px] sm:max-w-full transition-all duration-300 ${
            searchOpen
              ? "lg:w-full w-[220px] pl-6 pr-12 border-2"
              : "lg:w-full w-0 lg:pl-6 lg:pr-16 p-0 border-0 lg:border-2"
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
          <IconBox icon={"icon-search"} />
        </button>
      </form>
    </div>
  );
}
