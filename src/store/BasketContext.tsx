import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import React, { createContext, ReactNode, useState } from "react";

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

export default function BasketContextProvider({ children }: Props) {
  const [basketItems, setBasketItems] = useState<Array<ProductItem>>([]);

  const addItemHandler = (product: EntityType<ProductType>) => {
    const newProduct: ProductItem = {
      productID: product.id,
      title: product.attributes.title,
      price: product.attributes.price,
      img: product.attributes.thumbnail?.data?.attributes.url,
      quantity: 1,
    };

    setBasketItems((prevState) => [...prevState, newProduct]);
  };

  const increaseItemHandler = (productID: number) => {
    const newBasket = basketItems.map((item) => {
      if (item.productID === productID) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setBasketItems(newBasket);
  };

  const decreaseItemHandler = (productID: number) => {
    const currentProduct = basketItems.find((item) => item.productID === productID);

    if (currentProduct && currentProduct.quantity === 1) {
      deleteItemHandler(productID);
    } else {
      const newBasket = basketItems.map((item) => {
        if (item.productID === productID) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      setBasketItems(newBasket);
    }
  };

  const deleteItemHandler = (productID: number) => {
    const newBasket = basketItems.filter((item) => item.productID !== productID);

    setBasketItems(newBasket);
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
