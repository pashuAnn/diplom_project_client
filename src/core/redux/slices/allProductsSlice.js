import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    loadAllProducts(state, action) {
      return action.payload.map(el => ({ ...el, show_product: true, show_sale: true }));
    },
    sortProducts(state, action) {
      const sortedState = [...state];
      switch (action.payload) {
        case 'title':
          return sortedState.sort((a, b) => a.title.localeCompare(b.title));
        case 'priceAsc':
          return sortedState.sort((a, b) => a.price - b.price);
        case 'priceDesc':
          return sortedState.sort((a, b) => b.price - a.price);
        case 'default':
          return sortedState.sort((a, b) => a.id - b.id);
        default:
          return state;
      }
    },
    filterProducts(state, action) {
      const { minValue, maxValue } = action.payload;
      state.forEach(el => {
        el.show_product = (el.discont_price ?? el.price) >= minValue && (el.discont_price ?? el.price) <= maxValue;
      });
    },
    getDiscontProducts(state, action) {
      state.forEach(el => {
        el.show_sale = action.payload ? el.discont_price !== null : true;
      });
    }
  }
});

export const { loadAllProducts, sortProducts, filterProducts, getDiscontProducts } = allProductsSlice.actions;
export default allProductsSlice.reducer;
