import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductContainer from "../../components/Products/ProductContainer";
import { getProductsByCategory } from "../../UI/requsts/getProducts";
import FIlterForms from "../../components/FilterForms/FilterForms";

export default function ItemsFromCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProductsByCategory(id)), []);

  const category_state = useSelector(store => store.productsByCategory.data);
  const category_name = useSelector(store => store.productsByCategory.category);
console.log(category_state);
  return (
    <div>
      <h1>{category_name?.title}</h1>
      <FIlterForms />
      <ProductContainer state={category_state}  />
    </div>
  );
}
