import React from "react";

// interface Props {
//   orderData: Array<any>;
// }

interface Props {
  order_id: number;
  data: string;
  status: string;
  total_price: number;
  total_item: number;
}

export function Order({ order_id, data, status, total_price, total_item }: Props) {
  return (
    <div className="flex max-w-[820px] w-full justify-between items-start sm:mb-[30px] px-[30px] font-lato sm:flex-nowrap flex-wrap sm:border-none border-b border-text-body sm:py-0 py-5 sm:gap-0 gap-5">
      <div className="text-text-body max-w-[160px] w-full">#{order_id}</div>
      <div className="text-text-body max-w-[160px] w-full">{data}</div>
      {status === "Completed" ? (
        <div className="text-brand-color-one max-w-[160px] w-full">{status}</div>
      ) : (
        <div className="text-brand-color-two max-w-[160px] w-full">{status}</div>
      )}

      <div className="text-text-body max-w-[160px] w-full mr-3">
        ${total_price} for {total_item} item
      </div>
      <button className="text-brand-color-one max-w-[160px] w-full text-start">View</button>
    </div>
  );
}
