import {
  basketApiCall,
  updateBasketApiCall,
  UpdateBasketData,
  UUIDtoUserApiCall,
} from "@/api/Basket";
import { getAllProductsApiCall } from "@/api/Product";
import { ApiResponseType, BasketItemType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useBasket() {
  const { data: products } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "products"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
      }),
  });

  const queryClient = useQueryClient();

  const { data: basketData } = useQuery({ queryKey: ["get-basket"], queryFn: basketApiCall });

  const mutate = useMutation({ mutationFn: updateBasketApiCall });

  const mutateUUIDtoUSer = useMutation({
    mutationFn: UUIDtoUserApiCall,
    onSuccess: (response) => {
      window.localStorage.removeItem("uuid");
      queryClient.invalidateQueries({ queryKey: ["get-basket"] });
    },
  });

  const basketItems = basketData?.data.attributes.basket_items ?? [];

  const clearBasketHandler = () => {
    basketItems.map((item) => {
      item.quantity = 0;
      deleteItemHandler(item.product.data.id);
    });
  };

  const addItemHandler = (productID: number) => {
    const prepareUpdateData = basketItems.map((item) => {
      return {
        product: {
          connect: [{ id: item.product.data.id }],
        },
        quantity: item.quantity,
      };
    });

    prepareUpdateData.push({
      product: {
        connect: [{ id: productID }],
      },
      quantity: 1,
    });

    const updateData: UpdateBasketData = {
      basket_items: prepareUpdateData,
    };

    mutate.mutate(updateData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      },
    });
  };

  const updateItemHandler = (productID: number, type: "increase" | "decrease") => {
    let prepareUpdateData = basketItems.map((item) => {
      return {
        product: {
          connect: [{ id: item.product.data.id }],
        },
        quantity: item.quantity,
      };
    });

    prepareUpdateData = prepareUpdateData.map((item) => {
      if (item.product.connect[0].id === productID) {
        if (type === "increase") {
          item.quantity = item.quantity + 1;
        } else {
          item.quantity = item.quantity - 1;
        }
      }
      return item;
    });

    const updateData: UpdateBasketData = {
      basket_items: prepareUpdateData,
    };

    mutate.mutate(updateData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      },
    });
  };

  const getItemHandler = (productID: number): BasketItemType | undefined => {
    return basketItems.find((item) => item.product.data.id === productID);
  };

  const uuidToUserHandler = () => {
    const token = window.localStorage.getItem("token");
    const uuid = window.localStorage.getItem("uuid");

    if (token && uuid) {
      if (basketItems.length > 0) {
        mutateUUIDtoUSer.mutate(uuid);
      } else {
        window.localStorage.removeItem("uuid");
        queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      }
    }
  };

  const deleteItemHandler = (productID: number) => {
    let prepareUpdateData = basketItems.map((item) => {
      return {
        product: {
          connect: [{ id: item.product.data.id }],
        },
        quantity: item.quantity,
      };
    });

    prepareUpdateData = prepareUpdateData.map((item) => {
      if (item.product.connect[0].id === productID) {
        item.quantity = 0;
      }
      return item;
    });

    const updateData: UpdateBasketData = {
      basket_items: prepareUpdateData,
    };

    mutate.mutate(updateData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      },
    });
  };

  let price: Array<number> = [];
  let totalPrice: number = 0;

  basketItems.map((item) => {
    if (item.product.data.attributes.sell_price) {
      const totalItemPrice = item.quantity * item.product.data.attributes.sell_price;
      price.push(totalItemPrice);
    } else {
      const totalItemPrice = item.quantity * item.product.data.attributes.price;
      price.push(totalItemPrice);
    }
  });

  if (price.length > 1) {
    totalPrice = price.reduce((a, d) => a + d);
  }

  const basketItemImageHandler = (productID: number) => {
    let basketItemImageUrl = "";

    products?.data.map((item) => {
      if (item.id === productID) {
        return (basketItemImageUrl = item.attributes.thumbnail?.data?.attributes.url!);
      }
    });

    return basketItemImageUrl;
  };

  return {
    basketItems: basketItems,
    addItem: addItemHandler,
    updateItem: updateItemHandler,
    getItem: getItemHandler,
    uuidToUser: uuidToUserHandler,
    deleteItem: deleteItemHandler,
    clearBasket: clearBasketHandler,
    totalBasketPrice: totalPrice,
    basketItemImage: basketItemImageHandler,
  };
}
