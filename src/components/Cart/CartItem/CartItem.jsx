import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  deleteItemFromCart,
  incrementItem,
} from "../../../core/redux/redusers/cardSlice";
import { Link } from "react-router-dom";
import s from "./CartItem.module.css";
export default function CartItem({
  id,
  title,
  image,
  price,
  count,
  discont_price,
  description,
}) {
  const dispatch = useDispatch();
  const discont = Math.floor(((price - discont_price) / price) * 100);
  const description_short = description.slice(0, 170) + "...";

  const price_cart = discont_price
    ? (discont_price * count).toFixed(2)
    : price * count;
  console.log(price);

  return (
    <div className={s.cartItemContainer}>
      <div className={s.cartItemWrapper}>
        <div>
          <Link to={`/products/${id}`}>
            <img src={`http://localhost:3333${image}`} alt={title} />
          </Link>
        </div>

        <div className={s.cartItemInfo}>
          <Link to={`/products/${id}`}>
            <h2>{title}</h2>
            <p>{description_short}</p>
          </Link>

          <div className={s.priceContainer}>
            {discont_price ? (
              <div className={s.priceBox}>
                <span className={s.discont_price}>${discont_price}</span>
                <span className={s.price}>${price}</span>
                <span className={s.discont}>- {discont}%</span>
              </div>
            ) : (
              <span className={s.priceBox}>$ {price_cart}</span>
            )}
          </div>

          <div className={s.counterContainer}>
            <button
              className={s.counterBtn}
              onClick={() => dispatch(decrementItem(id))}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className={s.counterBtn}
              onClick={() => dispatch(incrementItem(id))}
            >
              +
            </button>
          </div>
        </div>

        <div
          className={s.deleteBtn}
          onClick={() => dispatch(deleteItemFromCart(id))}
        >
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  );
}