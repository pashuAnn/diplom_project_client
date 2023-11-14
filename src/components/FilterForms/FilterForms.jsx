import React from "react";
import SortForm from "./SortForm/SortForm";
import DiscontForm from "./DiscountForm/DiscountForm";
import FilterForm from "./FilterForm/FilterForm";
import s from './FilterForms.module.css'
export default function FIlterForms() {
  return (
    <div >
      <div className={s.formsWrapper}>
      <FilterForm />
      <SortForm />
      <DiscontForm />
      </div>
    </div>
  );
}