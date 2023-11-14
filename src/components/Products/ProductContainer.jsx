import React from "react";
import ProductsItem from './ProductItem';
import s from "./ProductContainer.module.css";
export default function ProductContainer({ state }) {

  return (
    <div className={s.product}>
      {state &&
        state
        .filter((el)=>el.show_product && el.show_sale)
          .map((el) => <ProductsItem key={el.id} {...el} />)}
    </div>
    
  );
}