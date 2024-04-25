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
import { BestSellers } from "@/mock/BestSellers";
import { DealsOfTheDaysMock } from "@/mock/DealsOfTheDays";
import { popularFruits } from "@/mock/PopularFruits";
import { popularProducts } from "@/mock/PopularProducts";

export default function Home() {
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
        <SimpleProductSlider
          sliderData={popularProducts}
          prevSlide={".popular-products_section-left_arrow"}
          nextSlide={".popular-products_section-right_arrow"}
        />
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
        <SimpleProductSlider
          sliderData={popularFruits}
          prevSlide={".popular-fruits_section-left_arrow"}
          nextSlide={".popular-fruits_section-right_arrow"}
        />
      </Section>

      <Section className={"our-offers_section md:mt-16 mt-10"}>
        <BestSellerSlider sliderData={BestSellers} />
      </Section>

      <Section className={"deals_section md:mt-16 mt-8"}>
        <DealsSlider sliderData={DealsOfTheDaysMock} />
      </Section>

      <Section className={"category_section md:mt-[68px] mt-9"}>
        <CategorySlider />
      </Section>
    </>
  );
}
