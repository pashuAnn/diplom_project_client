import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    loadSingleProduct: (state, action) => {
      return action.payload;
    }
  }
});

export const { loadSingleProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;

