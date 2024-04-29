import React from "react";

export default function SingleProduct() {
  return (
    <main>
      <section className="container flex flex-col items-center mb-[68px]">
        <div className="flex flex-row justify-center w-4/5">
          <div className="w-1/2 mr-[28px]">
            <div className="w-full mb-[28px] p-[40px] border-[1px] border-gray-200 rounded-2xl">
              <div className="top-0 left-0 flex justify-end">
                <i className="icon-search text-[24px] text-gray-200 mb-20"></i>
              </div>
              <img src="./../assets/images/18%201.png" className="w-11/12" />
            </div>
            <div className="flex flex-row gap-[25px] justify-center items-center">
              <div className="bg-green-200 rounded-full flex flex-row-reverse items-center p-2">
                <i className="icon-arrow-small-right rotate-180 text-[24px]"></i>
              </div>
              <div className="w-1/4 border border-[1px] border-green-200 rounded-2xl p-2">
                <img src="./../assets/images/3%20389454.png" className="w-full" />
              </div>
              <div className="w-1/4 border border-[1px] rounded-xl p-2">
                <img src="./../assets/images/zppb2xd1%201.png" className="w-full" />
              </div>
              <div className="w-1/4 border border-[1px] rounded-xl p-2">
                <img src="./../assets/images/6%201.png" className="w-full" />
              </div>
              <div className="w-1/4 border border-[1px] rounded-xl p-2">
                <img src="./../assets/images/7%201.png" className="w-full" />
              </div>
              <div className="bg-green-200 rounded-full flex items-center p-2">
                <i className="icon-arrow-small-right text-[24px]"></i>
              </div>
            </div>
          </div>
          <div className="w-1/2 border border-[1px] border-gray-200"></div>
        </div>
      </section>
    </main>
  );
}
