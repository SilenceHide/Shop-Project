import { IconBox, Logo } from "@/components";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import { SearchForm } from "./searchForm";
import { Menu } from "./menu";
import { useOverlay } from "@/hooks/useOverlay";
import LoginModal from "@/components/common/auth/LoginModal";
import RegisterModal from "@/components/common/auth/RegisterModal";
import { useModal } from "@/store/ModalContext";
import { useUser } from "@/store/AuthContext";
import { toast } from "react-toastify";
import { useBasket } from "@/hooks/useBasket";
import { useQueryClient } from "@tanstack/react-query";
import OrderList from "@/components/common/ui/order-list/OrderList";

export function Header() {
  const [orderListOpen, isOrderListOpen] = useState<boolean>(false);

  const { basketItems } = useBasket();

  const queryClient = useQueryClient();

  const { isLogin, logout } = useUser();

  const [navOpen, isNavOpen] = useState<boolean>(false);

  const { currentModal, openModal } = useModal();

  const navOpenClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    isOrderListOpen(false);
    isNavOpen((prevState) => !prevState);
  };

  const menuClickHandler = (e: MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
    }
  };

  const orderListClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    isNavOpen(false);
    isOrderListOpen((prevState) => !prevState);
  };

  const orderListBodyClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useOverlay({
    stateFunc: () => {
      isNavOpen(false);
    },
    state: navOpen,
  });

  useOverlay({
    stateFunc: () => {
      isOrderListOpen(false);
    },
  });

  const accountHandler = () => {
    isOrderListOpen(false);
    if (isLogin) {
      logout();
      queryClient.invalidateQueries({ queryKey: ["get-basket"] });
      toast.success("Logout Successfully");
    } else {
      openModal("login");
    }
  };

  return (
    <>
      <header className="header border-b-gray-300 border-b">
        {currentModal === "login" && <LoginModal />}
        {currentModal === "register" && <RegisterModal />}
        <div className="container">
          <div className="header_wrapper lg:mt-8 mt-3 text-text-body">
            <div className="header_content flex lg:mb-8 mb-[12px] items-center flex-wrap lg:flex-nowrap">
              <div className="header_logo flex flex-shrink-0 flex-grow basis-full lg:basis-0 justify-between items-center">
                <Logo />
                <div className="header_menu-button-wrapper h-8">
                  <div className="header_menu-button" onClick={navOpenClickHandler}></div>
                </div>
              </div>

              <div className="header_right-wrapper flex items-center justify-between lg:flex-grow 2xl:basis-[47%] xl:basis-[60%] lg:pl-[40px] mt-[29px] lg:mt-0 w-full h-[45px] ">
                <SearchForm />

                <div className="header_account-wrapper flex font-lato relative">
                  <div className="header_account flex mr-7">
                    <p
                      className="header_account-link flex items-center cursor-pointer"
                      onClick={accountHandler}
                    >
                      <IconBox
                        icon={"icon-user"}
                        size={"text-[26px]"}
                        className={"text-text-heading"}
                      />
                      <span className="account_title ml-1 lg:inline-block hidden">
                        {isLogin ? "Logout" : "Account"}
                      </span>
                    </p>
                  </div>
                  <div className="header_cart flex" onClick={orderListClickHandler}>
                    <Link className="header_account-link flex items-center relative" href="#">
                      <IconBox
                        icon={"icon-shopping-cart"}
                        size={"text-[26px]"}
                        className={"text-text-heading"}
                      />
                      {basketItems.length ? (
                        <div className="header_cart-number_wrapper absolute top-[-10px] lg:right-[28px] right-[-9px] bg-brand-color-one text-white rounded-full w-5 h-5 flex items-center justify-center">
                          <p className="header_cart-number text-xs">{basketItems.length}</p>
                        </div>
                      ) : (
                        ""
                      )}
                      <span className="shopping-cart_title ml-1 lg:inline-block hidden">Cart</span>
                    </Link>
                  </div>
                  <div
                    onClick={orderListBodyClickHandler}
                    className={`header_order-wrapper absolute right-[-5px] top-[40px] z-20 sm:w-auto w-[340px] overflow-hidden rounded-[10px]  ${
                      orderListOpen ? "block" : "hidden"
                    }`}
                  >
                    <OrderList hasButton={true} isOrderListOpen={isOrderListOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--*******--------**** Menu ****--------*******--> */}
          <div
            onClick={menuClickHandler}
            className={`menu_wrapper flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mb-[14px] lg:mt-11 font-bold fixed lg:relative lg:left-0 top-0 bg-white bottom-0 px-6 py-4 lg:p-0 gap-2 rounded-r-3xl lg:rounded-none transition-all z-10 overflow-y-scroll lg:overflow-visible overflow-x-hidden ${
              navOpen ? "left-0" : "-left-full"
            }`}
          >
            <Menu isOrderListOpen={isOrderListOpen} />
          </div>
          <div
            className={`cover lg:hidden fixed top-0 right-0 w-full h-full bg-[#000000a3] ${
              navOpen ? "z-[5] opacity-100 visible" : "z-[-10] opacity-0 invisible"
            }`}
          ></div>
        </div>
      </header>
      <div className="header_mobile-line w-full h-px bg-gray-300 mt-4 absolute -z-10"></div>
    </>
  );
}
