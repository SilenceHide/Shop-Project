import { loginApiCall } from "@/api/Auth";
import { ImageView } from "@/components";
import Input from "@/components/common/ui/form/Input";
import { useBasket } from "@/hooks/useBasket";
import { useUser } from "@/store/AuthContext";
import { useModal } from "@/store/ModalContext";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormData {
  identifier: string;
  password: string;
  security: number;
}

export default function Login() {
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
    <section className="container md:mt-[100px] md:mb-[155px] my-20 flex justify-center items-center gap-14">
      <ImageView
        src={"/images/Rectangle 39.png"}
        alt={"image"}
        width={512}
        height={601}
        className={"rounded-lg hidden sm:block"}
      />
      <form className="max-w-[480px] h-full" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="font-lato">
          <p className="text-sm text-text-body-2 mb-10">
            Don't have an account?{" "}
            <Link href={"/register"} className="text-brand-color-one font-bold cursor-pointer">
              Create here
            </Link>
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
      {/* <form className="w-[480px]">
        <h1 className="text-5xl mb-2 font-bold">Login</h1>
        <div className="font-lato">
          <p className="text-sm text-text-body-2 mb-10">
            Don't have an account?{" "}
            <Link href={"#"} className="text-brand-color-one font-bold">
              Create here
            </Link>
          </p>
          <input
            type="text"
            placeholder="Username or Email *"
            aria-label="email"
            className="placeholder:text-text-body-2  border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
          />
          <input
            type="password"
            placeholder="Your password *"
            aria-label="password"
            className="placeholder:text-text-body-2 placeholder:text-base placeholder:font-lato placeholder:tracking-normal border border-border-gray rounded-xl px-9 h-[64px] w-full mb-6"
          />
          <div className="flex gap-5">
            <input
              type="number"
              placeholder="Security code *"
              aria-label="securityCode"
              className="placeholder:text-text-body-2  border border-border-gray rounded-xl sm:px-9 px-4 h-[64px] w-full mb-6"
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
      </form> */}
    </section>
  );
}
