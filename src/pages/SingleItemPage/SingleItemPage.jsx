import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../UI/requsts/getAllProducts";
import s from "./SingleItem.module.css";
import { addToCart } from "../../core/redux/redusers/cardReducer";

export default function SingleItemPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(id)); 
  }, [dispatch, id]);
  const singleProductState = useSelector((store) => store.singleProduct);
  console.log(singleProductState);
  const { title, price, description, image, discont_price } = singleProductState;
  const link = `http://localhost:3333${image}`; 
  const discont = Math.floor(((price - discont_price) / price) * 100);
  return (
    <div className={s.singleProduct}>
      <div className={s.details}>
        <div className={s.bigImg}>
          <img src={link} alt={title} /> 
        </div>
     
     <div className={s.box}>
      <div className={s.row}>
      <h2>{title}</h2>
     
      </div>
      <div className={s.prices}>
{
  discont_price?
  <div className={s.priceBox}>
          <span className={s.discont_price}>${discont_price}</span>
          <span className={s.price}>${price}</span>
          <span className={s.discont}>- {discont}%</span>
          </div> :
           <span >$ {price}</span>
}
      </div>
    
     <p>{description}</p>

     <button className={s.cart} onClick={()=>dispatch(addToCart({id,title,description,price,image}))}>Add to cart</button>
     </div>
      </div>
    </div>
  );
}
