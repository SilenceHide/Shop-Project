import { BasketContext } from "@/store/BasketContext";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import React, { useContext } from "react";
import { IconBox } from "../../ui";

interface Props {
  productData: EntityType<ProductType>;
}

function AddProductInput({ productData }: Props) {
  const basket = useContext(BasketContext);

  const currentProductInBasket = basket.getItem(productData.id);

  // console.log(currentProductInBasket);

  return (
    <div className="product_add-btn_wrapper">
      {currentProductInBasket ? (
        <div
          className={
            "product_count-wrapper md:w-16 w-12  text-brand-color-one focus:outline-0 border border-brand-color-one rounded md:px-3 px-2  font-bold text-sm py-1 sm:h-[32px] h-[40px] flex items-center justify-between "
          }
        >
          <p className="product_count">{currentProductInBasket.quantity}</p>
          <div className="flex flex-col justify-between">
            <IconBox
              icon="up icon-angle-small-up"
              size="10"
              className="cursor-pointer"
              onClick={() => basket.increaseItem(productData.id)}
            />
            <IconBox
              icon="down icon-angle-small-down"
              size="10"
              className="cursor-pointer"
              onClick={() => basket.decreaseItem(productData.id)}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => basket.addItem(productData)}
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
