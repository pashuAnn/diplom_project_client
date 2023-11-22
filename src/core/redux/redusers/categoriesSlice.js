import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    loadAllCategories: (state, action) => {
      return action.payload;
    }
  }
});

export const { loadAllCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
