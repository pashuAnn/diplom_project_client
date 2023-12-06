import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { shuffleArray } from '../../App';
import ProductContainer from '../Products/ProductContainer';
import s from './RandomSaleProduct.module.css';

const selectAllProducts = state => state.allProducts;

const selectDiscountedProducts = createSelector(
  [selectAllProducts],
  (allProducts) => allProducts.filter(el => el.discont_price !== null).slice(0, 4)
);

export default function RandomSaleProduct() {
  const allProducts = useSelector(selectDiscountedProducts);

  const shuffled_discont_products = shuffleArray(allProducts);

  return (
    <div className={s.random}>
      <h2 className={s.title}>Recommended</h2>
      <div className={s.randomContainer}>
        <div className={s.randomWrapper}>
          <ul className={s.randomItems}>
            <ProductContainer state={shuffled_discont_products} />
          </ul>
        </div>
      </div>
    </div>
  );
}
