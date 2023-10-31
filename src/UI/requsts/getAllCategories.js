import { loadAllCategoriesAction } from "./core/redux/redusers/categoriesReducer"
import { serverLink } from './server'

export const getAllCategories =dispatch =>{
    fetch(`${serverLink}/categories/all`)
    .then(res=>res.json())
    .then(json=>dispatch(loadAllCategoriesAction(json)))
} 