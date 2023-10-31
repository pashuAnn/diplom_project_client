import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './redusers/categoriesReducer'
import { productsByCatReducer } from './redusers/productsByCatReduser'
import { allProductsReducer } from './redusers/allProductsReducer'
import { singleProdReducer } from './redusers/singleProdReducer'
import { cardReducer } from './redusers/cardReducer'
const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCatReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProdReducer,
    cart:cardReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))