import React from "react";
import Modal from "../ui/modal/Modal";
import Link from "next/link";
import { useModal } from "@/store/ModalContext";
import Input from "../ui/form/Input";
import { useUser } from "@/store/AuthContext";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginApiCall } from "@/api/Auth";
import { toast } from "react-toastify";
import { useBasket } from "@/hooks/useBasket";

interface FormData {
  identifier: string;
  password: string;
  security: number;
}

export default function LoginModal() {
  const { openModal, closeModal } = useModal();

  const { login } = useUser();

  const { uuidToUser } = useBasket();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const mutate = useMutation({ mutationFn: loginApiCall });

  // console.log(isLogin);
  const onFormSubmit = (data: FormData) => {
    mutate.mutate(data, {
      onSuccess: (response) => {
        // console.log("response", response);
        login(response.jwt, response.user);
        toast.success("Login Successfully");
        closeModal();
        uuidToUser();
      },
    });
  };

  return (
    <Modal title="Login" closeModal={closeModal}>
      <form className="max-w-[480px] h-full" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="font-lato">
          <p className="text-sm text-text-body-2 mb-10">
            Don't have an account?{" "}
            <span
              className="text-brand-color-one font-bold cursor-pointer"
              onClick={() => openModal("register")}
            >
              Create here
            </span>
          </p>

          <Input
            type={"text"}
            {...{ placeholder: "Username or Email *" }}
            register={register("identifier", {
              required: "Please Enter Your Username",
              minLength: 6,
            })}
            errors={errors}
          />
          <Input
            type={"password"}
            {...{ placeholder: "Your password *" }}
            register={register("password", {
              required: "Please Enter Your Password ",
              minLength: 8,
              maxLength: 15,
            })}
            errors={errors}
          />

          <div className="flex gap-5">
            <Input
              type={"number"}
              {...{ placeholder: "Security code *" }}
              register={register("security", {
                required: "Please Enter The Security Number",
                minLength: 4,
                maxLength: 4,
              })}
              errors={errors}
            />
            <div className="rounded-xl min-w-[115px] h-[65px] bg-border-light-green flex items-center justify-center">
              <p className="text-2xl font-bold">
                <span className="text-[#3F7C35]">6</span>
                <span className="text-[#7E396B]">8</span>
                <span className="text-[#ADA05B]">8</span>
                <span className="text-[#C14A83]">6</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-2 items-center">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="w-[18px] h-[18px] mr-3 cursor-pointer"
                />
                <span className="text-sm text-brand-color-one">Remember me</span>
                <i className="fa-solid fa-user"></i>
              </label>
            </div>
            <Link href={"#"} className="text-sm font-bold text-text-body-2">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="h-16 px-11 bg-text-heading font-bold text-white rounded-xl font-quicksand"
          >
            Log in
          </button>
        </div>
      </form>
    </Modal>
  );
}
