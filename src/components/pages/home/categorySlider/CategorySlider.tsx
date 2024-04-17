import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function CategorySlider() {
  return (
    <Swiper
      slidesPerView={1.15}
      spaceBetween={25}
      loop={true}
      breakpoints={{
        540: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1536: {
          loop: false,
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
      className="category_slider"
    >
      <SwiperSlide className="category-slide ">
        <div className="category_wrapper">
          <h3 className="category_title font-bold md:text-2xl">Top Selling</h3>
          <div className="top-selling_wrapper md:mt-10 mt-4 bg-white flex flex-col gap-6">
            <div className="top-selling_item flex items-start gap-5">
              <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="top-selling_img rounded-xl"
                  src="../images/section6/col01-img01.png"
                  alt="img"
                />
              </div>
              <div className="top-selling_content-wrapper">
                <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Nestle Original Coffee-Mate Coffee Creamer
                </p>
                <div className="top-selling-wrapper flex">
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="top-selling-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <div className="top-selling_price-wrapper flex items-center justify-between">
                  <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="top-selling_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="top-selling_item flex items-start gap-5">
              <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="top-selling_img rounded-xl"
                  src="../images/section6/col01-img02.png"
                  alt="img"
                />
              </div>
              <div className="top-selling_content-wrapper">
                <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Organic 100% Grassfed 85_15 Ground Beef
                </p>
                <div className="top-selling-wrapper flex">
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="top-selling-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <div className="top-selling_price-wrapper flex items-center justify-between">
                  <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="top-selling_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="top-selling_item flex items-start gap-5">
              <div className="top-selling_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="top-selling_img rounded-xl"
                  src="../images/section6/col01-img03.png"
                  alt="img"
                />
              </div>
              <div className="top-selling_content-wrapper">
                <p className="top-selling_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Naturally Flavored Salted Caramel Light Roast Coffee
                </p>
                <div className="top-selling-wrapper flex">
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-selling-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="top-selling-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <div className="top-selling_price-wrapper flex items-center justify-between">
                  <p className="top-selling_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="top-selling_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        <div className="category_wrapper">
          <h3 className="category_title font-bold md:text-2xl">Trending Products</h3>
          <div className="trending-products_wrapper md:mt-10 mt-4 bg-white flex flex-col gap-6">
            <div className="trending-products_item flex items-start gap-5">
              <div className="trending-products_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="trending-products_img rounded-xl"
                  src="../images/section6/col02-img01.png"
                  alt="img"
                />
              </div>
              <div className="trending-products_content-wrapper">
                <p className="trending-products_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Organic Cage-Free Grade A Large Brown Eggs
                </p>
                <div className="trending-products-wrapper flex">
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="trending-products-number font-lato text-xs text-text-body ml-2">
                    (4.0)
                  </p>
                </div>
                <div className="trending-products_price-wrapper flex items-center justify-between">
                  <p className="trending-products_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="trending-products_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="trending-products_item flex items-start gap-5">
              <div className="trending-products_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="trending-products_img rounded-xl"
                  src="../images/section6/col02-img02.png"
                  alt="img"
                />
              </div>
              <div className="trending-products_content-wrapper">
                <p className="trending-products_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Seeds of Change Organic Quinoa, Brown, & Red Rice
                </p>
                <div className="trending-products-wrapper flex">
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="trending-products-number font-lato text-xs text-text-body ml-2">
                    (4.0)
                  </p>
                </div>
                <div className="trending-products_price-wrapper flex items-center justify-between">
                  <p className="trending-products_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="trending-products_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="trending-products_item flex items-start gap-5">
              <div className="trending-products_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="trending-products_img rounded-xl"
                  src="../images/section6/col02-img03.png"
                  alt="img"
                />
              </div>
              <div className="trending-products_content-wrapper">
                <p className="trending-products_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Naturally Flavored Cinnamon Vanilla Light Roast Coffee
                </p>
                <div className="trending-products-wrapper flex">
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="trending-products-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="trending-products-number font-lato text-xs text-text-body ml-2">
                    (4.0)
                  </p>
                </div>
                <div className="trending-products_price-wrapper flex items-center justify-between">
                  <p className="trending-products_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="trending-products_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        <div className="category_wrapper">
          <h3 className="category_title font-bold md:text-2xl">Recently added</h3>
          <div className="recently-added_wrapper md:mt-10 mt-4 bg-white flex flex-col gap-6">
            <div className="recently-added_item flex items-start gap-5">
              <div className="recently-added_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="recently-added_img rounded-xl"
                  src="../images/section6/col03-img01.png"
                  alt="img"
                />
              </div>
              <div className="recently-added_content-wrapper">
                <p className="recently-added_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Organic Frozen Triple Berry Blend
                </p>
                <div className="recently-added-wrapper flex">
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="recently-added-number font-lato text-xs text-text-body ml-2">
                    (4.0)
                  </p>
                </div>
                <div className="recently-added_price-wrapper flex items-center justify-between">
                  <p className="recently-added_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="recently-added_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="recently-added_item flex items-start gap-5">
              <div className="recently-added_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="recently-added_img rounded-xl"
                  src="../images/section6/col03-img02.png"
                  alt="img"
                />
              </div>
              <div className="recently-added_content-wrapper">
                <p className="recently-added_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Pepperidge Farm Farmhouse Hearty White Bread
                </p>
                <div className="recently-added-wrapper flex">
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="recently-added-number font-lato text-xs text-text-body ml-2">
                    (4.0)
                  </p>
                </div>
                <div className="recently-added_price-wrapper flex items-center justify-between">
                  <p className="recently-added_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="recently-added_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="recently-added_item flex items-start gap-5">
              <div className="recently-added_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="recently-added_img rounded-xl"
                  src="../images/section6/col03-img03.png"
                  alt="img"
                />
              </div>
              <div className="recently-added_content-wrapper">
                <p className="recently-added_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Oroweat Country Buttermilk Bread
                </p>
                <div className="recently-added-wrapper flex">
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="recently-added-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="recently-added-number font-lato text-xs text-text-body ml-2">
                    (4.0)
                  </p>
                </div>
                <div className="recently-added_price-wrapper flex items-center justify-between">
                  <p className="recently-added_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="recently-added_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="category-slide ">
        <div className="category_wrapper">
          <h3 className="category_title font-bold md:text-2xl">Top Rated</h3>
          <div className="top-rated_wrapper md:mt-10 mt-4 bg-white flex flex-col gap-6">
            <div className="top-rated_item flex items-start gap-5">
              <div className="top-rated_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="top-rated_img rounded-xl"
                  src="../images/section6/col04-img01.png"
                  alt="img"
                />
              </div>
              <div className="top-rated_content-wrapper">
                <p className="top-rated_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Foster Farms Takeout Crispy Classic Buffalo Wings
                </p>
                <div className="top-rated-wrapper flex">
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="top-rated-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <div className="top-rated_price-wrapper flex items-center justify-between">
                  <p className="top-rated_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="top-rated_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="top-rated_item flex items-start gap-5">
              <div className="top-rated_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="top-rated_img rounded-xl"
                  src="../images/section6/col04-img02.png"
                  alt="img"
                />
              </div>
              <div className="top-rated_content-wrapper">
                <p className="top-rated_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  Angie’s Boomchickapop Sweet & Salty Kettle Corn
                </p>
                <div className="top-rated-wrapper flex">
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="top-rated-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <div className="top-rated_price-wrapper flex items-center justify-between">
                  <p className="top-rated_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="top-rated_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="top-rated_item flex items-start gap-5">
              <div className="top-rated_img-wrapper min-w-[120px] min-h-[120px]">
                <img
                  className="top-rated_img rounded-xl"
                  src="../images/section6/col04-img03.png"
                  alt="img"
                />
              </div>
              <div className="top-rated_content-wrapper">
                <p className="top-rated_content-title font-bold h-[72px] overflow-hidden text-ellipsis">
                  All Natural Italian-Style Chicken Meatballs
                </p>
                <div className="top-rated-wrapper flex">
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/002-fill star.svg"
                    alt="star"
                  />
                  <img
                    className="top-rated-img"
                    src="../images/section3/001-empty star.svg"
                    alt="star"
                  />
                  <p className="top-rated-number font-lato text-xs text-text-body ml-2">(4.0)</p>
                </div>
                <div className="top-rated_price-wrapper flex items-center justify-between">
                  <p className="top-rated_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                    $2.51
                    <span className="top-rated_price-discount line-through text-xs text-text-body">
                      $2.80
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
