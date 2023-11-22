import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../core/redux/redusers/cardSlice";
import s from "./ProductsItem.module.css";
export default function Item({ id, title, image, price, discont_price,description }) {
  const dispatch = useDispatch();
const discont = Math.floor(((price - discont_price) / price) * 100);
  return (

  
    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </Link>
      <div className={s.content}>
        <h3>
          <Link to={`/products/${id}`}>{title}</Link>
        </h3>
        
        <div>
        {
          discont_price ?
          <div className={s.priceBox}>
          <span className={s.discont_price}>${discont_price}</span>
          <span className={s.price}>${price}</span>
          <span className={s.discont}>- {discont}%</span>
          </div> :
          <span >$ {price}</span>
        
        }
        </div>
     
       
        <p>{description}</p>
        <button className={s.add_btn} onClick={()=>dispatch(addToCart({id,title,image,price,discont_price,description}))}>Add to cart</button> 
      </div>
    </div>
  

  );
}