import React from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "tel" | "number";
  label?: string;
  className?: string;
  register: UseFormRegisterReturn<any>;
  errors: FieldErrors<any>;
}

export default function Input({
  type = "text",
  label,
  className,
  register,
  errors,
  ...rest
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
        className={`placeholder:text-text-body-2 border  rounded-xl px-9 h-[64px] w-full placeholder:text-base placeholder:font-lato placeholder:tracking-normal ${
          hasError ? "border-danger-system-color" : "border-border-gray"
        }`}
        {...register}
        {...rest}
      />
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
