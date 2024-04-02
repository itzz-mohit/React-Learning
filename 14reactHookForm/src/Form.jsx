import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setValue("firstName", data.firstName);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        {errors.firstName && <div>{errors.firstName.message}</div>}

        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        {errors.lastName && <div>{errors.lastName.message}</div>}

        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid Email Format",
            },
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}

        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        {errors.mobileNumber && <div>{errors.mobileNumber.message}</div>}

        <select {...register("title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        {errors.title && <div>{errors.title.message}</div>}

        <input
          {...register("developer", { required: true })}
          type="radio"
          value="Yes"
        />
        <input
          {...register("developer", { required: true })}
          type="radio"
          value="No"
        />
        {errors.developer && <div>{errors.developer.message}</div>}

        <input type="submit" />
      </form>
      <div>{getValues("firstName")}</div>
    </>
  );
}
