import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../../core/redux/redusers/allProductsSlice'
import { filterProductsByCategory } from '../../../core/redux/redusers/productsByCatSlice'
import s from'./FilterForm.module.css'
export default function FilterForm() {
  const dispatch = useDispatch()
  
  const submit =e =>{
    e.preventDefault()
    const {min,max} = e.target
    const minValue = min.value || 0;
    const maxValue = max.value || Infinity;
    dispatch(filterProducts({minValue,maxValue}))
    
    dispatch(filterProductsByCategory({minValue,maxValue})
    )
  }
  
  return (
    <form className={s.filterContainer} onSubmit={submit}>
      <div className={s.filterWrapper}>
      <p>Price</p>
      <input type="number" placeholder='From' name='min' />
      <input type="number" placeholder='To' name='max' />
      <button>Search</button>
      </div>
    </form>
  )
}