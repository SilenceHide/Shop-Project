import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import React, { createContext, ReactNode, useReducer, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ProductItem {
  productID: number;
  title: string;
  price: number;
  img?: string;
  quantity: number;
}

export const BasketContext = createContext<{
  basketItems: Array<ProductItem>;
  addItem: (product: EntityType<ProductType>) => void;
  increaseItem: (productID: number) => void;
  decreaseItem: (productID: number) => void;
  deleteItem: (productID: number) => void;
  getItem: (productID: number) => ProductItem | undefined;
}>({
  basketItems: [],
  addItem: (product: EntityType<ProductType>) => {},
  increaseItem: (productID: number) => {},
  decreaseItem: (productID: number) => {},
  deleteItem: (productID: number) => {},
  getItem: (productID: number) => undefined,
});

type Action =
  | { type: "ADD_ITEM"; product: EntityType<ProductType> }
  | { type: "INCREASE_ITEM"; productID: number }
  | { type: "DECREASE_ITEM"; productID: number }
  | { type: "DELETE_ITEM"; productID: number };

const basketReducer = (currentState: ProductItem[], action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...currentState,
        {
          productID: action.product.id,
          title: action.product.attributes.title,
          price: action.product.attributes.price,
          img: action.product.attributes.thumbnail?.data?.attributes.url,
          quantity: 1,
        },
      ];
    case "INCREASE_ITEM":
      return currentState.map((item) => {
        if (item.productID === action.productID) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    case "DECREASE_ITEM":
      const currentProduct = currentState.find((item) => item.productID === action.productID);

      if (currentProduct && currentProduct.quantity === 1) {
        return currentState.filter((item) => item.productID !== action.productID);
      }

      return currentState.map((item) => {
        if (item.productID === action.productID) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    case "DELETE_ITEM":
      return currentState.filter((item) => item.productID !== action.productID);
    default:
      return currentState;
  }
};

export default function BasketContextProvider({ children }: Props) {
  const [basketItems, dispatch] = useReducer(basketReducer, []);

  const addItemHandler = (product: EntityType<ProductType>) => {
    dispatch({ type: "ADD_ITEM", product: product });
  };

  const increaseItemHandler = (productID: number) => {
    dispatch({ type: "INCREASE_ITEM", productID: productID });
  };

  const decreaseItemHandler = (productID: number) => {
    dispatch({ type: "DECREASE_ITEM", productID: productID });
  };

  const deleteItemHandler = (productID: number) => {
    dispatch({ type: "DELETE_ITEM", productID: productID });
  };

  const getItemHandler = (productID: number): ProductItem | undefined => {
    return basketItems.find((item) => item.productID === productID);
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems: basketItems,
        addItem: addItemHandler,
        increaseItem: increaseItemHandler,
        decreaseItem: decreaseItemHandler,
        deleteItem: deleteItemHandler,
        getItem: getItemHandler,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
