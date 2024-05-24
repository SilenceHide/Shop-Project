import {
  basketApiCall,
  updateBasketApiCall,
  UpdateBasketData,
  UUIDtoUSerApiCall,
} from "@/api/Basket";
import { BasketItemType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useBasket() {
  const queryClient = useQueryClient();

  const { data: basketData } = useQuery({ queryKey: ["get-basket"], queryFn: basketApiCall });

  const mutate = useMutation({ mutationFn: updateBasketApiCall });

  const mutateUUIDtoUSer = useMutation({
    mutationFn: UUIDtoUSerApiCall,
    onSuccess: (response) => {
      // console.log("response", response);
      window.localStorage.removeItem("uuid");
      queryClient.invalidateQueries({ queryKey: ["get-basket"] });
    },
  });

  const basketItems = basketData?.data.attributes.basket_items ?? [];

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

  return {
    basketItems: basketItems,
    addItem: addItemHandler,
    updateItem: updateItemHandler,
    getItem: getItemHandler,
    uuidToUser: uuidToUserHandler,
  };
}
