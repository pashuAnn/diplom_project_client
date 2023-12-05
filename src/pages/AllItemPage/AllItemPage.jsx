import React from "react";
import { useSelector } from "react-redux";
import ProductContainer from "../../components/Products/ProductContainer";
import FilterForms from '../../components/FilterForms/FilterForm/FilterForm'
import "./AllItemPage.module.css"
export default function AllItemPage() {
  const allProductsState = useSelector((store) => store.allProducts);
  console.log(allProductsState);
  return (
    <div>
      <h1>All products</h1>
      <FilterForms />
      <ProductContainer state={allProductsState} />
    </div>
  );
}
