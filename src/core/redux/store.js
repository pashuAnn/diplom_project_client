import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../../core/redux/slices/categoriesSlice'
import productsByCatSlice from '..//../core/redux/slices/productsByCatSlice';
import allProductsSlice from '..//../core/redux/slices/allProductsSlice';
import singleProdSlice from '../../core/redux/slices/singleProdSlice';
import cardSlice from '../../core/redux/slices/cardSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    productsByCategory: productsByCatSlice,
    allProducts: allProductsSlice,
    singleProduct: singleProdSlice,
    cart: cardSlice,
  },
});