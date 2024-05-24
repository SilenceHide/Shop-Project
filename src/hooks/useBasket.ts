import { basketApiCall } from "@/api/Basket";
import { useQuery } from "@tanstack/react-query";

export function useBasket() {
  const { data: basketData } = useQuery({ queryKey: ["get-basket"], queryFn: basketApiCall });

  const basketItems = basketData?.data.attributes.basket_items ?? [];

  return { basketItems: basketItems };
}
