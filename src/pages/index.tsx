import { getFeaturedCategoryApiCall } from "@/api/Category";
import { getMenuApiCall } from "@/api/Menu";
import { getAllProductsApiCall } from "@/api/Product";
import {
  Banner,
  BestSellerSlider,
  CategorySlider,
  DealsSlider,
  FeaturedCategories,
  Section,
  SimpleProductSlider,
} from "@/components";
import { ImageView } from "@/components";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: popularProductsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "popular-products"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_popular: { $eq: true } },
      }),
  });

  const { data: popularFruitsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "popular-fruits"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_popular_fruit: { $eq: true } },
      }),
  });

  const { data: bestSellerData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "best-seller"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_best_seller: { $eq: true } },
      }),
  });

  const { data: dealsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, "deals"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { discount_expire_date: { $notNull: true } },
      }),
  });

  return (
    <>
      <Section className={"hero_section"}>
        <Banner
          title={"Don’t miss amazing grocery deals"}
          subtitle={"Sign up for the daily newsletter"}
          bgImage={"/images/hero/3389452.png"}
          image={"/images/hero/fresh-apples-shopping-mesh-bag-with-branch-apples-removebg 1.png"}
        />
      </Section>

      <Section className={"featured-categories_section lg:mt-16 mt-32"}>
        <FeaturedCategories />
      </Section>

      <Section className={"popular-products_section md:mt-16 mt-8"}>
        <div className="popular-products_section-title-wrapper flex items-center justify-between">
          <h2 className="popular-products_section-title font-bold md:text-3xl">Popular Products</h2>
          <div className="popular-products_section-arrows flex items-center justify-between gap-2">
            <div className="popular-products_section-left_arrow hidden md:flex md:w-[35px] w-[20px] md:h-[35px] h-[20px] items-center justify-center bg-border-light rounded-full cursor-pointer">
              <ImageView
                className={"popular-products_section-left_arrow-img object-cover"}
                src={"/images/section3/fi-rs-arrow-small-left 1.svg"}
                alt={"arrow"}
                width={14}
                height={14}
              />
            </div>
            <div className="popular-products_section-right_arrow md:flex md:w-[35px] w-[20px] md:h-[35px] h-[20px] items-center justify-center md:bg-brand-color-one rounded-full cursor-pointer">
              <ImageView
                className={"popular-products_section-right_arrow-img object-cover hidden md:block"}
                src={"/images/section3/fi-rs-arrow-small-right 2.svg"}
                alt={"arrow"}
                width={14}
                height={12}
              />
              <ImageView
                className={"popular-products_section-right_angle mx-auto mt-1 md:hidden"}
                src={"/images/section3/fi-rs-angle-small-right.svg"}
                alt={"angle"}
                width={8}
                height={14}
              />
            </div>
          </div>
        </div>
        {popularProductsData && (
          <SimpleProductSlider
            sliderData={popularProductsData.data}
            prevSlide={".popular-products_section-left_arrow"}
            nextSlide={".popular-products_section-right_arrow"}
          />
        )}
      </Section>

      <Section className={"popular-products_section md:mt-16 mt-8"}>
        <div className="popular-fruits_section-title-wrapper flex items-center justify-between">
          <h2 className="popular-fruits_section-title font-bold md:text-3xl">Popular Fruits</h2>
          <div className="popular-fruits_section-arrows flex items-center justify-between gap-2">
            <div className="popular-fruits_section-left_arrow hidden md:flex md:w-[35px] w-[20px] md:h-[35px] h-[20px] items-center justify-center bg-border-light rounded-full cursor-pointer">
              <ImageView
                className={"popular-fruits_section-left_arrow-img object-cover"}
                src={"/images/section3/fi-rs-arrow-small-left 1.svg"}
                alt={"arrow"}
                width={14}
                height={14}
              />
            </div>
            <div className="popular-fruits_section-right_arrow md:flex md:w-[35px] w-[20px] md:h-[35px] h-[20px] items-center justify-center md:bg-brand-color-one rounded-full cursor-pointer">
              <ImageView
                className={"popular-fruits_section-right_arrow-img object-cover hidden md:block"}
                src={"/images/section3/fi-rs-arrow-small-right 2.svg"}
                alt={"arrow"}
                width={14}
                height={12}
              />
              <ImageView
                className={"popular-fruits_section-right_angle mx-auto mt-1 md:hidden"}
                src={"/images/section3/fi-rs-angle-small-right.svg"}
                alt={"angle"}
                width={8}
                height={14}
              />
            </div>
          </div>
        </div>
        {popularFruitsData && (
          <SimpleProductSlider
            sliderData={popularFruitsData.data}
            prevSlide={".popular-fruits_section-left_arrow"}
            nextSlide={".popular-fruits_section-right_arrow"}
          />
        )}
      </Section>

      <Section className={"our-offers_section md:mt-16 mt-10"}>
        {bestSellerData && <BestSellerSlider sliderData={bestSellerData.data} />}
      </Section>

      <Section className={"deals_section md:mt-16 mt-8 "}>
        {dealsData && <DealsSlider sliderData={dealsData.data} />}
      </Section>

      <Section className={"category_section md:mt-[68px] mt-9"}>
        <CategorySlider />
      </Section>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [getMenuApiCall.name],
    queryFn: getMenuApiCall,
  });

  await queryClient.prefetchQuery({
    queryKey: [getFeaturedCategoryApiCall.name],
    queryFn: () => getFeaturedCategoryApiCall(),
  });

  await queryClient.prefetchQuery({
    queryKey: [getAllProductsApiCall.name, "popular-products"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_popular: { $eq: true } },
      }),
  });

  await queryClient.prefetchQuery({
    queryKey: [getAllProductsApiCall.name, "popular-fruits"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_popular_fruit: { $eq: true } },
      }),
  });

  await queryClient.prefetchQuery({
    queryKey: [getAllProductsApiCall.name, "best-seller"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { is_best_seller: { $eq: true } },
      }),
  });

  await queryClient.prefetchQuery({
    queryKey: [getAllProductsApiCall.name, "deals"],
    queryFn: () =>
      getAllProductsApiCall({
        populate: ["categories", "thumbnail"],
        filters: { discount_expire_date: { $notNull: true } },
      }),
  });

  // await queryClient.prefetchQuery({
  //   queryKey: [getAllProductsApiCall.name, "top-selling"],
  //   queryFn: () =>
  //     getAllProductsApiCall({
  //       populate: ["thumbnail"],
  //       filters: { is_top_selling: { $notNull: true } },
  //       pagination: {
  //         withCount: false,
  //         start: 12,
  //         limit: 3,
  //       },
  //     }),
  // });

  // await queryClient.prefetchQuery({
  //   queryKey: [getAllProductsApiCall.name, "trending"],
  //   queryFn: () =>
  //     getAllProductsApiCall({
  //       populate: ["thumbnail"],
  //       filters: { is_trending: { $notNull: true } },
  //       pagination: {
  //         withCount: false,
  //         start: 1,
  //         limit: 3,
  //       },
  //     }),
  // });

  // await queryClient.prefetchQuery({
  //   queryKey: [getAllProductsApiCall.name, "recently-added"],
  //   queryFn: () =>
  //     getAllProductsApiCall({
  //       populate: ["thumbnail"],
  //       pagination: {
  //         withCount: false,
  //         page: 1,
  //         pageSize: 3,
  //       },
  //     }),
  // });

  // await queryClient.prefetchQuery({
  //   queryKey: [getAllProductsApiCall.name, "top-rated"],
  //   queryFn: () =>
  //     getAllProductsApiCall({
  //       populate: ["thumbnail"],
  //       sort: ["rate:desc"],
  //       pagination: {
  //         withCount: false,
  //         page: 1,
  //         pageSize: 3,
  //       },
  //     }),
  // });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}
