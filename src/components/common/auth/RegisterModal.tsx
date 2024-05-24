import React from "react";
import Modal from "../ui/modal/Modal";
import Link from "next/link";
import { useModal } from "@/store/ModalContext";
import { useForm } from "react-hook-form";
import Input from "../ui/form/Input";
import { useMutation } from "@tanstack/react-query";
import { registerApiCall } from "@/api/Auth";
import { useUser } from "@/store/AuthContext";
import { toast } from "react-toastify";
import { useBasket } from "@/hooks/useBasket";

interface FormData {
  username: string;
  email: string;
  password: string;
  re_password: string;
  security: number;
}

export default function RegisterModal() {
  const { openModal, closeModal } = useModal();

  const { login } = useUser();

  const { uuidToUser } = useBasket();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const mutate = useMutation({ mutationFn: registerApiCall });

  // console.log(isLogin);
  const onFormSubmit = (data: FormData) => {
    mutate.mutate(data, {
      onSuccess: (response) => {
        // console.log("response", response);
        login(response.jwt, response.user);
        toast.success("Register Successfully");
        closeModal();
        uuidToUser();
      },
    });
  };

  return (
    <Modal title="Register" closeModal={closeModal}>
      <form className="font-lato max-w-[480px] h-full" onSubmit={handleSubmit(onFormSubmit)}>
        <p className="mb-5 text-xs text-text-body-2">
          Your personal data will be used to support your experience throughout this website, to
          manage access to your account, and for other purposes described in our privacy policy
        </p>
        <p
          className="text-sm text-brand-color-one font-bold cursor-pointer mb-5"
          onClick={() => openModal("login")}
        >
          I have an account
        </p>

        <Input
          type={"text"}
          {...{ placeholder: "Username *" }}
          register={register("username", {
            required: "Please Enter Your Username",
            minLength: 6,
          })}
          errors={errors}
        />
        <Input
          type={"email"}
          {...{ placeholder: "Email *" }}
          register={register("email", { required: "Please Enter Your Email" })}
          errors={errors}
        />
        <Input
          type={"password"}
          {...{ placeholder: "Password *" }}
          register={register("password", {
            required: "Please Enter Your Password ",
            minLength: 8,
            maxLength: 15,
          })}
          errors={errors}
        />
        <Input
          type={"password"}
          {...{ placeholder: "Confirm password *" }}
          register={register("re_password", {
            required: "Please Repeat Your Password ",
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
                className=" w-[18px] h-[18px] mr-3 cursor-pointer"
              />
              <span className="text-sm text-brand-color-one">I agree to terms & Policy.</span>
            </label>
          </div>
          <Link href={"#"} className="text-sm font-bold text-text-body-2">
            Learn more
          </Link>
        </div>
        <button className="h-16 px-11 bg-text-heading font-bold text-white rounded-xl font-quicksand">
          Submit & Register
        </button>
      </form>
    </Modal>
  );
}
