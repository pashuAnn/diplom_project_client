import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { deleteAllItems } from "../../../core/redux/redusers/cardReducer"
import s from "./CartContainer.module.css";
import { Link } from "react-router-dom";
export default function CartContainer() {
  const dispatch = useDispatch();
  
  const cartState =  useSelector((store) => store.cart);
  
  const total = cartState.reduce((acc, { price, discont_price, count }) => {
    const totalPrice = discont_price ? discont_price : price;
    return acc + totalPrice * count;
  }, 0);
  
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartState));
  }, [cartState]);
  return (
    <div>
      {cartState.length > 0 ? (
        <div className={s.cartContainer}>
          <div className={s.cartWrapper}>
            <div className={s.cartItems}>
              {cartState.map((el) => (
                <CartItem key={el.id} {...el} />
              ))}
            </div>
            <div className={s.orderContainer}>
              <h3>Details </h3>

              <p>Total: ${total.toFixed(2)}</p>

              <div
                className={s.clearCartBtn}
                onClick={() => dispatch(deleteAllItems())}
              >
                Clear cart
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.emptyCartContainer}>
          <div className={s.emptyCartWrapper}>
            <div className={s.emptyCartIcon}>
              <i class="fa-solid fa-basket-shopping"></i>
            </div>
            <div className={s.emptyCartText}>
              <h3>Your cart is currently empty</h3>
              <div>
                <p>
                  Before you proceed to checkout,you must add some products to
                  your cart.
                </p>
                <p>
                  You will find a lot of interesting products on our "Products"
                  page
                </p>
              </div>
            </div>
            <Link to={"/allProducts"}>
              <div className={s.returnBtn}>
                <i className="fa-solid fa-cart-shopping"> </i>
                RETURN TO PRODUCTS
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}