import { IconBox, ImageView, Logo } from "@/components/common";
import Link from "next/link";
import React, { useState } from "react";

export function Footer() {
  const [footerCompanyOpen, isFooterCompanyOpen] = useState(false);
  const [footerInfoOpen, isFooterInfoOpen] = useState(false);

  return (
    <footer className="footer md:mt-[74px] mt-7 flex flex-col">
      <div className="container">
        <div className="footer-banner_section">
          <div className="footer-banner_img bg-[#3bb77e33] rounded-2xl overflow-hidden flex xs:max-h-[382px] max-h-[160px] lg:pr-12 lg:pt-7 lg:pl-16 sm:pl-6 pl-3 pt-3 justify-between">
            <div className="footer-banner_content-wrapper flex flex-col flex-shrink-0 flex-grow xs:basis-1/2 basis-[40%] gap-10 relative">
              <h2 className="footer-banner_title font-bold lg:text-5xl sm:text-3xl xs:text-2xl text-xl absolute xs:w-fit w-[210px] xs:static md:mt-[30px] xs:mt-3">
                Stay home & get your daily needs from our shop
              </h2>
              <p className="footer-banner_subtitle font-lato text-xl lg:block hidden">
                Start You'r Daily Sopping with Nest Mart
              </p>
            </div>
            <div className="footer-banner_img-wrapper relative flex-shrink-0 flex-grow xs:basis-1/2 basis-[60%] flex items-center justify-end">
              <div className="footer-banner_main-img_holder object-cover">
                <ImageView
                  src={"/images/section7/delivery-man.png"}
                  alt={"delivery-man"}
                  width={418}
                  height={356}
                  className={"footer-banner_main-img"}
                />
              </div>
              <div className="footer-banner_side-img_holder max-w-[180px] absolute 2xl:left-[260px] 2xl:top-[40px] left-[166px] top-[40px] hidden xl:block">
                <ImageView
                  src={"/images/section7/img01.png"}
                  alt={"delivery-man"}
                  width={180}
                  height={158}
                  className={"footer-banner_side-img"}
                />
              </div>
              <div className="footer-banner_side-img_holder max-w-[180px] absolute 2xl:left-[88px] 2xl:top-[124px] left-[20px] top-[140px] hidden xl:block">
                <ImageView
                  src={"/images/section7/img02.png"}
                  alt={"delivery-man"}
                  width={180}
                  height={150}
                  className={"footer-banner_side-img"}
                />
              </div>
              <div className="footer-banner_side-img_holder max-w-[180px] absolute 2xl:left-[30px] 2xl:top-[264px] left-[-78px] top-[268px] hidden xl:block">
                <ImageView
                  src={"/images/section7/img03.png"}
                  alt={"delivery-man"}
                  width={180}
                  height={131}
                  className={"footer-banner_side-img"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer_inner-wrapper md:mt-[68px] mt-[62px] font-lato">
          <div className="footer_wrapper flex items-start justify-between flex-wrap lg:flex-nowrap flex-col sm:flex-row lg:gap-0 gap-12">
            <div className="footer_company-info-wrapper max-w-[346px] flex flex-col items-start gap-3">
              <Logo />
              <h5 className="footer_company-text lg:my-3 mb-3">
                Pellentesque posuere orci lobortis
              </h5>
              <div className="company_info flex items-start justify-start gap-2">
                <div className="company_info-icon_wrapper w-4 h-4 flex items-center justify-center mt-1">
                  <IconBox icon={"icon-marker-brand"} />
                </div>
                <p className="company_info-title font-bold">
                  Address:
                  <span className="company_info-desc font-normal">
                    5171 W Campbell Ave undefined Kent, Utah 53127 United States
                  </span>
                </p>
              </div>
              <div className="company_info flex items-start justify-start gap-2">
                <div className="company_info-icon_wrapper w-4 h-4 flex items-center justify-center mt-1">
                  <IconBox icon={"icon-headset"} className={"text-brand-color-one"} />
                </div>
                <p className="company_info-title font-bold">
                  Call Us:
                  <span className="company_info-desc font-normal">(+91) - 540-025-124553</span>
                </p>
              </div>
              <div className="company_info flex items-start justify-start gap-2">
                <div className="company_info-icon_wrapper w-4 h-4 flex items-center justify-center mt-1">
                  <IconBox
                    icon={"icon-paper-plane"}
                    className={"text-brand-color-one before:text-brand-color-one "}
                    size={"text-[26px]"}
                  />
                </div>
                <p className="company_info-title font-bold">
                  Email:
                  <span className="company_info-desc font-normal">contact@nestmart.com</span>
                </p>
              </div>
              <div className="company_info flex items-start justify-start gap-2">
                <div className="company_info-icon_wrapper w-4 h-4 flex items-center justify-center mt-1">
                  <IconBox
                    icon={"icon-time-fast"}
                    className={"text-brand-color-one "}
                    size={"text-[20px]"}
                  />
                </div>
                <p className="company_info-title font-bold">
                  Hours:
                  <span className="company_info-desc font-normal">10:00 - 18:00, Mon - Sat</span>
                </p>
              </div>
            </div>
            <div className="footer_company-wrapper flex flex-col gap-7 items-start sm:w-auto w-full transition-all">
              <div
                onClick={() => isFooterCompanyOpen(!footerCompanyOpen)}
                className="company-title_wrapper flex items-center gap-3"
              >
                <h3 className="company-title font-quicksand font-bold sm:text-2xl text-xl">
                  Company
                </h3>
                <ImageView
                  src={"/images/footer/arrow down.svg"}
                  alt={"arrow down"}
                  width={16}
                  height={10}
                  className={`company-title_icon w-4 sm:hidden transition-all duration-300 ${
                    footerCompanyOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`company_subtitle-wrapper flex flex-col gap-[10px] overflow-hidden transition-all duration-300 ${
                  footerCompanyOpen ? "h-[228px]" : " h-0 sm:h-fit sm:min-h-full"
                }`}
              >
                <Link href={"#"} className="company_subtitle">
                  About Us
                </Link>
                <Link href={"#"} className="company_subtitle">
                  Delivery Information
                </Link>
                <Link href={"#"} className="company_subtitle">
                  Privacy Policy
                </Link>
                <Link href={"#"} className="company_subtitle">
                  Terms & Conditions
                </Link>
                <Link href={"#"} className="company_subtitle">
                  Contact Us
                </Link>
                <Link href={"#"} className="company_subtitle">
                  Support Center
                </Link>
                <Link href={"#"} className="company_subtitle">
                  Careers
                </Link>
              </div>
            </div>
            <div className="footer_info-wrapper flex flex-col gap-7 items-start sm:w-auto w-full transition-all">
              <div
                onClick={() => isFooterInfoOpen(!footerInfoOpen)}
                className="info-title_wrapper flex items-center gap-3"
              >
                <h3 className="info-title font-quicksand font-bold sm:text-2xl text-xl">
                  Information
                </h3>
                <ImageView
                  src={"/images/footer/arrow down.svg"}
                  alt={"arrow down"}
                  width={16}
                  height={10}
                  className={`info-title_icon w-4 sm:hidden transition-all duration-300 ${
                    footerInfoOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`info_subtitle-wrapper flex flex-col gap-[10px] overflow-hidden transition-all duration-300 ${
                  footerInfoOpen ? "h-[228px]" : " h-0 sm:h-fit sm:min-h-full"
                }`}
              >
                <Link href={"#"} className="info_subtitle">
                  Search Terms
                </Link>
                <Link href={"#"} className="info_subtitle">
                  Advanced Search
                </Link>
                <Link href={"#"} className="info_subtitle">
                  Help & FAQ's
                </Link>
                <Link href={"#"} className="info_subtitle">
                  Store Location
                </Link>
                <Link href={"#"} className="info_subtitle">
                  Orders & Returns
                </Link>
                <Link href={"#"} className="info_subtitle">
                  Feedback for us
                </Link>
              </div>
            </div>
            <div className="footer_app-payment-wrapper flex flex-col gap-7 items-start max-w-[281px]">
              <h3 className="app-payment-title font-quicksand font-bold sm:text-2xl text-xl">
                App & Payment
              </h3>
              <div className="app-payment_subtitle-wrapper flex flex-col gap-5">
                <p className="app-payment_subtitle text-text-body text-sm max-w-[219px]">
                  Install NetMart App from App Store or Google Play
                </p>
                <div className="app-payment_img-wrapper flex items-center gap-6">
                  <Link className="app-payment_link" href="#">
                    <ImageView
                      src={"/images/footer/apple-store.png"}
                      alt={"apple-store"}
                      width={128}
                      height={38}
                      className={"app-payment_img"}
                    />
                  </Link>
                  <Link className="app-payment_link" href="#">
                    <ImageView
                      src={"/images/footer/google-play.png"}
                      alt={"google-play"}
                      width={128}
                      height={38}
                      className={"app-payment_img"}
                    />
                  </Link>
                </div>
                <p className="app-payment_subtitle text-text-body text-sm max-w-[219px]">
                  Secured Payment Gateways
                </p>
                <Link className="app-payment_link" href="#">
                  <ImageView
                    src={"/images/footer/payment-method.png"}
                    alt={"payment-method"}
                    width={224}
                    height={32}
                    className={"app-payment_img"}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer_button-up mt-7 flex justify-end">
            {/* <Link href="#" className="button-up_wrapper transition-all">
              <ImageView
                src={"/images/footer/go to top.svg"}
                alt={"go to top"}
                width={42}
                height={42}
                className={"button-up_icon cursor-pointer"}
              />
            </Link> */}
            <a className="button-up_wrapper transition-all" href="#">
              <ImageView
                src={"/images/footer/go to top.svg"}
                alt={"go to top"}
                width={42}
                height={42}
                className={"button-up_icon cursor-pointer"}
              />
            </a>
          </div>
          <div className="footer_copyright border-t-2 border-[#D8F1E5] md:py-9 py-5 flex items-center justify-center">
            <h5 className="copyright">All rights reserved</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
