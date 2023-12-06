import React from 'react'
import {useDispatch} from 'react-redux'
import { sortProducts } from '../../../core/redux/slices/allProductsSlice'
import { sortProductsByCategory } from '../../../core/redux/slices/productsByCatSlice'
import s from './SortForm.module.css'
export default function SortForm() {
    const dispatch = useDispatch()
    const sort = e => {
      dispatch(sortProducts(e.target.value))
      dispatch(sortProductsByCategory(e.target.value))
    }
  return (
    <div className={s.sortContainer}>
      <label className={s.sortForm} >
        <p>Sort</p>
        <select onInput={sort}>
        <option value='default'>By default</option>
            <option value="title">By A-Z</option>
            <option value="priceAsc">By price ascending</option>
            <option value="priceDesc">By price descending</option>
        </select>
      </label>
    </div>
  )
}