import { ImageView, Rating } from "@/components/common";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { timerHelper } from "@/utils/timer";

import React, { useEffect, useState } from "react";

interface Props {
  data: EntityType<ProductType>;
}

export function DealsSlide({ data }: Props) {
  const [showAddInput, setShowAddInput] = useState<boolean>(false);

  const [remainTime, setRemainTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timerObj = timerHelper(data.attributes.discount_expire_date);
      setRemainTime(timerObj);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="deal relative h-[310px] md:h-[440px] max-w-[340px] md:max-w-[380px]" id="deal">
      <ImageView
        className={"deal_img object-cover w-[342px] h-[200px] rounded-2xl md:w-full md:h-fit"}
        src={data.attributes.thumbnail?.data?.attributes.url}
        alt={"deal-img"}
        width={342}
        height={200}
      />

      <div className="deal_content-wrapper absolute left-0 bottom-2 right-0 flex flex-col items-center justify-center gap-3 w-full">
        <div className="deal_remaining-time-wrapper flex items-center gap-3">
          <div className="deal_remaining-days-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
            {remainTime.days < 10 ? (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                0{remainTime.days}
              </p>
            ) : (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                {remainTime.days}
              </p>
            )}
            <p className="deal_remaining-days-subtitle font-lato text-sm">Days</p>
          </div>
          <div className="deal_remaining-hours-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
            {remainTime.hours < 10 ? (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                0{remainTime.hours}
              </p>
            ) : (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                {remainTime.hours}
              </p>
            )}
            <p className="deal_remaining-hours-subtitle font-lato text-sm">Hours</p>
          </div>
          <div className="deal_remaining-mins-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
            {remainTime.minutes < 10 ? (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                0{remainTime.minutes}
              </p>
            ) : (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                {remainTime.minutes}
              </p>
            )}
            <p className="deal_remaining-mins-subtitle font-lato text-sm">Mins</p>
          </div>
          <div className="deal_remaining-sec-wrapper bg-white w-[60px] h-[60px] rounded-md flex flex-col items-center justify-center shadow-[5px_5px_5px_0_rgba(24,24,24,0.07)]">
            {remainTime.seconds < 10 ? (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                0{remainTime.seconds}
              </p>
            ) : (
              <p className="deal_remaining-sec-number text-brand-color-one font-bold text-[28px] leading-none">
                {remainTime.seconds}
              </p>
            )}
            <p className="deal_remaining-sec-subtitle font-lato text-sm">Sec</p>
          </div>
        </div>

        <div className="deal_content md:max-w-[325px] max-w-[285px] w-full bg-white lg:px-8 px-6 py-6 rounded-xl shadow-[5px_5px_5px_0_rgba(24,24,24,0.05)]">
          <h3 className="deal_title h-8 font-bold md:text-sm text-xs my-1">
            {data.attributes.title}
          </h3>
          <div className="deal_rate-wrapper flex mt-2">
            <Rating rate={data.attributes.rate} />
          </div>
          <h5 className="deal_weight font-lato text-xs text-text-body mt-1 mb-3">
            {data.attributes.weight} gram
          </h5>
          <div className="deal_price-wrapper flex items-center justify-between">
            {data.attributes.sell_price ? (
              <p className="deal_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                ${data.attributes.sell_price}
                <span className="deal_price-discount line-through text-xs text-text-body">
                  ${data.attributes.price}
                </span>
              </p>
            ) : (
              <p className="deal_price flex items-center justify-between md:gap-2 gap-1 font-bold text-xl text-brand-color-one">
                ${data.attributes.price}
              </p>
            )}
            <div className="deal_add-btn_wrapper">
              <button
                onClick={() => setShowAddInput(true)}
                type="button"
                className={`deal_add-btn flex items-center justify-center gap-2 w-16 min-h-[32px] bg-[#DEF9EC] py-1 rounded text-brand-color-one hover:bg-brand-color-two transition-all hover:bg-opacity-40 ${
                  showAddInput ? "hidden" : "block"
                }`}
              >
                <span className="deal_add-span">Add +</span>
              </button>
              <input
                type="number"
                name="number"
                min="1"
                value="1"
                className={`deal_number-input max-w-16 text-brand-color-one focus:outline-0 border border-brand-color-one rounded pl-4 font-bold text-sm py-1 h-[32px] ${
                  showAddInput ? "block" : "hidden"
                }`}
                max="100"
                maxLength={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
