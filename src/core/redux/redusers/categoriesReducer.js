// const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES'


// export const loadAllCategoriesAction = payload => ({type:LOAD_ALL_CATEGORIES,payload})

// export const categoriesReducer = (state=[],action) => {
//     if (action.type===LOAD_ALL_CATEGORIES) {
//         return action.payload
//     }else return state
// }
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
