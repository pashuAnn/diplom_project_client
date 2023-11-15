import React from "react";
import s from "./DiscountSection.module.css";
import { useForm } from "react-hook-form";
import { adNewProduct } from "../../UI/requsts/getAllProducts";
export default function DiscountSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const submit = (data) => {
    adNewProduct(data);
    reset();
  };

  const getDiscount = register("discount", {
    required: "* Please enter a number to get  discount",
    pattern: {
      value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
      message: "* Please,enter a valid phone number",
    },
  });

  return (
    <div className={s.discountSection}>
      <div className={s.discountContainer}>
        <div className={s.discountText}>
          <h2>5% off </h2>
          <h3>on the first order</h3>
        </div>

        <form className={s.discountForm} onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            name="discount"
            placeholder="+49"
            {...getDiscount}
          />
          {errors.discount && (
            <p className={s.error}>{errors.discount.message}</p>
          )}
          <button onClick={handleSubmit(submit)}>Get a discount</button>
        </form>
      </div>
    </div>
  );
}
