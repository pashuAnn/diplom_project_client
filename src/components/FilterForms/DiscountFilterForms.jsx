import React from 'react'
import SortForm from './SortForm/SortForm'
import FilterForm from './FilterForm/FilterForm'
import s from './DiscountFilterForms.module.css'

export default function DiscountFilterForms() {
  return (
    <div >
    <div className={s.formsWrapper}>
    <FilterForm />
    <SortForm />
    </div>
  </div>
  )
}