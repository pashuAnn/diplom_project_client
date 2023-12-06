import { loadAllCategories } from "../../core/redux/slices/categoriesSlice"
import { serverLink } from './server'

export const getAllCategories = () => (dispatch) => {
    fetch(`${serverLink}/categories/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllCategories(json)))
        .catch(error => console.error('Error fetching categories:', error)); 
};
