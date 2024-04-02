import React, { useState } from "react";
import { useForm } from "react-hook-form";

const StylishForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();

  const [submittedValues, setSubmittedValues] = useState(null);

  const onSubmit = (data) => {                 
    console.log(data);

    if (isValid) {
      reset();
      setSubmittedValues({
        email: data.email,
        password: data.password,
      });
    }
  };

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <form className="w-25" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid Email Format",
                },
              })}
            />
            {errors.email && (
              <div style={{ color: "red" }}>{errors.email.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password.message}</div>
            )}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("termsaccepted", {
                required: "Accept the terms and conditions",
              })}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
            {errors.termsaccepted && (
              <div style={{ color: "red" }}>{errors.termsaccepted.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {submittedValues && (
          <>
            <div>{submittedValues.email}</div>
            <div>{submittedValues.password}</div>
          </>
        )}
      </div>
    </>
  );
};

export default StylishForm;
