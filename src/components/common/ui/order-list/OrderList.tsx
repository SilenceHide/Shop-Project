import React, { Dispatch, SetStateAction } from "react";
import { ImageView } from "../../imageView";
import { useBasket } from "@/hooks/useBasket";
import Link from "next/link";
import { useOverlay } from "@/hooks/useOverlay";
import AddProductInput from "../../product/productCard/AddProductInput";

interface Props {
  hasButton?: boolean;
  isOrderListOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function OrderList({
  hasButton,
  isOrderListOpen = () => {
    true;
  },
}: Props) {
  const { basketItems, basketItemImage } = useBasket();

  useOverlay({
    stateFunc: () => {
      isOrderListOpen(false);
    },
  });

  if (basketItems.length > 0) {
    return (
      <div
        className={`bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px]  py-7 px-8 sm:max-h-[560px] xl:min-w-[605px] sm:min-w-[520px] max-w-[605px] shadow-main-shadow overflow-y-auto ${
          hasButton ? "border-brand-color-one" : "border-border-gray"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="font-bold text-2xl">Your Orders</div>
          <div className="text-text-body-2 font-bold">Subtotal</div>
        </div>
        <div className="h-[1px] w-full bg-gray-200"></div>
        {basketItems.map((basketItem, index) => {
          const basketData = basketItem.product.data.attributes;
          const basketItemID = basketItem.product.data.id;

          return (
            <div
              className={`sm:grid sm:grid-cols-[minmax(0,_2fr)_minmax(0,_2fr)_minmax(0,_3fr)] gap-7 w-full flex flex-wrap items-center justify-center my-3 sm:my-0 ${
                hasButton
                  ? "sm:grid-cols-[minmax(0,_2fr)_minmax(0,_2fr)_minmax(0,_3fr)]"
                  : "sm:grid-cols-[minmax(0,_2fr)_minmax(0,_4fr)_minmax(0,_3fr)]"
              }`}
              key={index}
            >
              <div className="flex justify-center items-center w-[115px] h-[115px] border border-border-gray rounded-[8px] p-1">
                <ImageView
                  src={basketItemImage(basketItemID)}
                  alt={"orange"}
                  width={210}
                  height={168}
                  className={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}
                  key={index}
                />
              </div>
              <div className="text-text-heading font-bold flex  items-center sm:py-[22px] max-w-[150px] text-center sm:text-start">
                {basketData.title}
              </div>
              <div className="flex gap-10 w-full sm:justify-between justify-center">
                {hasButton ? (
                  <div className="text-2xl font-bold text-text-body-2 flex justify-center items-center">
                    <AddProductInput
                      productData={basketItem.product.data}
                      className="w-20 h-13"
                      arrowSize="text-[18px]"
                    />
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-text-body-2 flex justify-center items-center">
                    x{basketItem.quantity}
                  </div>
                )}
                {basketData.sell_price ? (
                  <div className="text-2xl font-bold text-brand-color-one flex justify-center items-center">
                    ${basketData.sell_price * basketItem.quantity}
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-brand-color-one flex justify-center items-center">
                    ${basketData.price * basketItem.quantity}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {hasButton && (
          <Link
            href={"/cart"}
            target="_blank"
            className="lg:mt-6 px-[50px] h-[50px] min-h-[50px] max-w-[250px] min-w-[250px] w-full rounded-[3px] text-white bg-brand-color-one gap-3 flex items-center justify-center font-bold"
            onClick={() => isOrderListOpen(false)}
          >
            Proceed
            <ImageView
              src={"/icons/fi-rs-sign-out white.svg"}
              alt={"sign-out"}
              width={16}
              height={16}
            />
          </Link>
        )}
      </div>
    );
  } else {
    return (
      <div className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-danger-color py-7 px-8 sm:max-h-[560px] xl:min-w-[605px] sm:min-w-[520px] max-w-[605px] shadow-main-shadow overflow-y-auto">
        <p className="text-2xl font-bold text-text-heading">Your Basket Is Empty!!!</p>
      </div>
    );
  }
}
