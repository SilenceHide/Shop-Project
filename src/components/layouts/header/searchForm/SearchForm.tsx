import React from "react";
import { ImageView } from "@/components/common";

export function SearchForm() {
  return (
    <div className="header_search-box_wrapper">
      <form action="#" className="header_search-box flex relative">
        <input
          type="search"
          className="search-box w-full border-2 border-border-light-green rounded-md px-6 py-3 font-lato text-xs hidden lg:inline-block focus:outline-brand-color-one"
          placeholder="Search for items"
        />
        <button type="submit">
          <ImageView
            className={"search-box_svg lg:absolute right-6 top-3"}
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
