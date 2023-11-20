// const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT'

// export const loadSingleProductAction = payload => ({type:LOAD_SINGLE_PRODUCT,payload})

// export const singleProdReducer= (state=[],action)=>{
//     if (action.type===LOAD_SINGLE_PRODUCT) {
//         return action.payload
//     }else return state
// }


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

