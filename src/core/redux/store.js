import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../../core/redux/redusers/categoriesSlice'
import productsByCatSlice from '..//../core/redux/redusers/productsByCatSlice';
import allProductsSlice from '..//../core/redux/redusers/allProductsSlice';
import singleProdSlice from '../../core/redux/redusers/singleProdSlice';
import cardSlice from '../../core/redux/redusers/cardSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    productsByCategory: productsByCatSlice,
    allProducts: allProductsSlice,
    singleProduct: singleProdSlice,
    cart: cardSlice,
  },
});