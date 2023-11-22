import { createSlice } from '@reduxjs/toolkit';

const initialState = { category: {}, data: [] };

const productsByCategorySlice = createSlice({
  name: 'productsByCategory',
  initialState,
  reducers: {
    loadProductByCategory: (state, action) => {
      const { data, category } = action.payload;
      state.data = data.map(el => ({ ...el, show_product: true, show_sale: true }));
      state.category = category;
    },
    sortProductsByCategory: (state, action) => {
      switch (action.payload) {
        case 'title':
          state.data.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'priceAsc':
          state.data.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          state.data.sort((a, b) => b.price - a.price);
          break;
        case 'default':
          state.data.sort((a, b) => a.id - b.id);
          break;
        default:
          break;
      }
    },
    filterProductsByCategory: (state, action) => {
      const { minValue, maxValue } = action.payload;
      state.data = state.data.map(el => {
        let actualPrice = el.discont_price || el.price;
        el.show_product = actualPrice >= minValue && actualPrice <= maxValue;
        return el;
      });
    },
    getDiscontProductsByCategory: (state, action) => {
      if (action.payload) {
        state.data.forEach(el => {
          el.show_sale = !!el.discont_price;
        });
      } else {
        state.data.forEach(el => {
          el.show_sale = true;
        });
      }
    }
  }
});

export const { loadProductByCategory, sortProductsByCategory, filterProductsByCategory, getDiscontProductsByCategory } = productsByCategorySlice.actions;
export default productsByCategorySlice.reducer;
