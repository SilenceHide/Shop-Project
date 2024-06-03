import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import React from "react";
import { IconBox } from "../../ui";
import { useBasket } from "@/hooks/useBasket";
import { text } from "stream/consumers";

interface Props {
  productData: EntityType<ProductType>;
  className?: string;
  arrowSize?: string;
}

function AddProductInput({
  productData,
  className = "md:w-16 w-12 sm:h-[32px] h-[40px]",
  arrowSize = "text-[14px]",
}: Props) {
  const { addItem, updateItem, getItem } = useBasket();

  const currentProductInBasket = getItem(productData.id);

  return (
    <div className="product_add-btn_wrapper">
      {currentProductInBasket ? (
        <div
          className={`product_count-wrapper text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:px-3 px-2 font-bold text-sm py-1 flex items-center justify-between ${className}`}
        >
          <p className={`product_count ${arrowSize ? arrowSize : "text-[14px]"}`}>
            {currentProductInBasket.quantity}
          </p>
          <div className="flex flex-col justify-between items-center">
            <IconBox
              icon="up icon-angle-small-up"
              size={`${arrowSize}`}
              className="cursor-pointer"
              onClick={() => updateItem(productData.id, "increase")}
            />
            <IconBox
              icon="down icon-angle-small-down"
              size={`${arrowSize}`}
              className="cursor-pointer"
              onClick={() => updateItem(productData.id, "decrease")}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => addItem(productData.id)}
          className={
            "product_add-btn flex items-center justify-center gap-2 md:w-16 w-12 sm:h-[32px] h-[40px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 "
          }
          type="button"
        >
          <span className="product_add-span">
            <span className="hidden md:inline-block">Add</span> +
          </span>
        </button>
      )}
    </div>
  );
}

export default React.memo(AddProductInput);
