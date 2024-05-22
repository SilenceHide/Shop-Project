import { BasketContext } from "@/store/BasketContext";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import React, { useContext, useState } from "react";
import { IconBox } from "../../ui";

interface Props {
  productData: EntityType<ProductType>;
}

export default function AddProductInput({ productData }: Props) {
  const [showAddInput, setShowAddInput] = useState<boolean>(false);

  const basket = useContext(BasketContext);

  return (
    <div className="product_add-btn_wrapper">
      <button
        onClick={() => {
          basket.addItem(productData);
          setShowAddInput(true);
        }}
        className={`product_add-btn flex items-center justify-center gap-2 md:w-16 w-9 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 ${
          showAddInput ? "hidden" : "block"
        }`}
        type="button"
      >
        <span className="product_add-span">
          <span className="hidden md:inline-block">Add</span>+
        </span>
      </button>
      {/* <input
        type="number"
        name="number"
        min="1"
        max="100"
        className={`product_price-input md:max-w-16 max-w-9  text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:pl-4 pl-2 font-bold text-sm py-1 h-[32px] ${
          showAddInput ? "block" : "hidden"
        }`}
        maxLength={3}
      /> */}
      <div
        // className={`product_price-input md:max-w-16 max-w-9 text-brand-color-one border border-brand-color-one rounded font-bold text-sm overflow-hidden h-[32px] py-1 md:px-3 px-1 flex ${
        //   showAddInput ? "block" : "hidden"
        // }`}
        className={`product_price-input md:max-w-16 max-w-9 text-brand-color-one border border-brand-color-one rounded font-bold text-sm overflow-hidden h-[32px] py-1 md:px-3 px-1  ${
          showAddInput ? "flex" : "hidden"
        }`}
      >
        <input
          type="number"
          name="number"
          min="1"
          max="100"
          value={1}
          maxLength={3}
          className="w-full focus:outline-0 "
        />
        <div className="flex flex-col justify-between">
          <IconBox icon="up icon-angle-small-up" size="10" />
          <IconBox icon="down icon-angle-small-down" size="10" />
        </div>
      </div>
    </div>
  );
}
