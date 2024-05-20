import React from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface Props {
  type?: "text" | "email" | "password" | "tel" | "number";
  label?: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn<any>;
  errors: FieldErrors<any>;
}

export default function Input({
  type = "text",
  label,
  placeholder = "",
  className,
  register,
  errors,
}: Props) {
  const name = register.name;
  let hasError = false;

  if (errors && errors[name]) {
    hasError = true;
  }

  return (
    <div className="flex flex-col mb-6 gap-1">
      <input
        type={type}
        placeholder={placeholder}
        className={`placeholder:text-text-body-2 border  rounded-xl px-9 h-[64px] w-full placeholder:text-base placeholder:font-lato placeholder:tracking-normal ${
          hasError ? "border-danger-system-color" : "border-border-gray"
        }`}
        {...register}
      />
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
