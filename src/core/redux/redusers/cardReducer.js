import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('product')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count++;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    deleteItemFromCart: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    incrementItem: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product) product.count++;
    },
    decrementItem: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product && product.count > 1) product.count--;
      else return state.filter(product => product.id !== action.payload);
    },
    deleteAllItems: () => []
  }
});

export const { addToCart, deleteItemFromCart, incrementItem, decrementItem, deleteAllItems } = cartSlice.actions;
export default cartSlice.reducer;