import React from "react";
import CatalogItem from "../Item/CatalogItem";
import s from './CatalogContainer.module.css'
export default function CatalogContainer({categories,categories_sliced_3}) {
  return (
    <div className={s.catalog}>
    
    <div className={s.catalogContainer}>
      <div className={s.catalogWrapper}>
      <ul className={s.catalogItems}>

{
categories.map((el) => (
  <CatalogItem key={el.id} category={el} {...el} />
))
}
</ul>
<ul className={s.catalogItems}>

{
categories_sliced_3.map((el) => (
  <CatalogItem key={el.id} category={el} {...el} />
))
}
</ul>
            </div>
        </div>
    </div>
  );
}