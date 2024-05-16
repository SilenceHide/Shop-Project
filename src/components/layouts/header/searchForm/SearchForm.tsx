import React, { useEffect, useState } from "react";
import { IconBox } from "@/components/common";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getAllProductsApiCall } from "@/api/Product";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";

interface FormInput {
  search_box_input: string;
}

interface FilterData {
  title: { $containsi: string };
}

export function SearchForm() {
  const [searchOpen, isSearchOpen] = useState<boolean>(false);

  const [searchResultData, setSearchResultData] = useState<Array<EntityType<ProductType>>>([]);

  const { register, handleSubmit, watch } = useForm<FormInput>();

  const mutation = useMutation({
    mutationFn: (data: FilterData) => getAllProductsApiCall({ filters: data }),
  });

  const searchBoxText = watch("search_box_input");

  useEffect(() => {
    if (searchBoxText) {
      delayApiCall();
    } else {
      setSearchResultData([]);
    }
  }, [searchBoxText]);

  const formOnSubmit = (data: FormInput) => {
    if (data.search_box_input.length <= 1) {
      return;
    }
    mutation.mutate(
      {
        title: {
          $containsi: data.search_box_input,
        },
      },
      {
        onSuccess: (response) => {
          setSearchResultData(response.data);
        },
      },
    );
  };

  const delayApiCall = useDebounce(handleSubmit(formOnSubmit), 1000);

  return (
    <div className="header_search-box_wrapper relative">
      <form
        onSubmit={handleSubmit(formOnSubmit)}
        action="#"
        className="header_search-box flex relative"
      >
        <input
          type="search"
          className={`search-box border-border-light-green rounded-md py-3 font-lato placeholder:text-xs focus:outline-brand-color-one max-w-[220px] sm:max-w-full transition-all duration-300 ${
            searchOpen
              ? "lg:w-full w-[220px] pl-6 pr-12 border-2"
              : "lg:w-full w-0 lg:pl-6 lg:pr-16 p-0 border-0 lg:border-2"
          }`}
          placeholder="Search for items"
          {...register("search_box_input")}
          autoComplete="off"
        />
        <button
          type="submit"
          onClick={() => isSearchOpen(!searchOpen)}
          className={`search-box_svg right-6 top-[16px] ${
            searchOpen ? "absolute" : "lg:absolute static"
          }`}
        >
          <IconBox icon={"icon-search"} />
        </button>
      </form>
      {searchResultData && (
        <div
          className={`search_result_wrapper absolute flex flex-col gap-1 w-full bg-white  border-border-light-green left-0 right-0 top-[55px] rounded-md ${
            searchResultData.length !== 0
              ? "h-fit py-3 z-20 border-[1.5px]"
              : "h-0 py-0 -z-10 border-none"
          }`}
        >
          {searchResultData.map((item: EntityType<ProductType>, index: number) => {
            return (
              <Link
                href={"#"}
                key={index}
                className="font-lato transition-all hover:bg-border-light-green hover:text-black px-7 py-[2px]"
              >
                {item.attributes.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
