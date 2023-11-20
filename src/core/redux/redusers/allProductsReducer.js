// const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS"
// const SORT_PRODUCTS = "SORT_PRODUCTS"
// const FILTER_PRODUCTS = "FILTER_PRODUCTS"
// const GET_DISCONT_PRODUCTS = 'GET_DISCONT_PRODUCTS';

// export const loadAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload })
// export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload })
// export const filterProductsAction = payload => ({ type: FILTER_PRODUCTS, payload })
// export const getDiscontProductsAction = payload => ({ type: GET_DISCONT_PRODUCTS, payload });

// export const allProductsReducer = (state = [], action) => {
//     if (action.type === LOAD_ALL_PRODUCTS) {
//         return action.payload.map(el => ({ ...el, show_product: true , show_sale:true}))
//     } 
//     else if (action.type === SORT_PRODUCTS) {
//         if (action.payload === 'title') {
//             state.sort((a, b) => a.title.localeCompare(b.title))
//         } else if (action.payload === 'priceAsc') {
//             state.sort((a, b) => a.price - b.price)
//         } else if (action.payload === 'priceDesc') {
//             state.sort((a, b) => b.price - a.price)
//         } else if (action.payload === 'default') {
//             state.sort((a, b) => a.id - b.id)
//         } 
//         return [...state]
//     } else if (action.type === FILTER_PRODUCTS) {
//         const { minValue, maxValue } = action.payload
//         return state.map(el => {
//             if (
//                 (el.discont_price ? el.discont_price : el.price) >= minValue &&
//                 (el.discont_price ? el.discont_price : el.price) <= maxValue
//               ) {
//                 el.show_product = true
//             } else {
//                 el.show_product = false
//             }
//             return el
//         })
//     } 
//     else if (action.type === GET_DISCONT_PRODUCTS) {
//         if(action.payload){
//             return state.map(el => {
//               if(el.discont_price===null){
//                 el.show_sale = false
//               }
//               return el
//             })
//           } else {
//             return state.map(el => {
//               el.show_sale = true;
//               return el
//             })
//           }
//     }
//     else return state
// }

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
