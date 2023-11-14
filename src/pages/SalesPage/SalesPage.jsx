import React from 'react'
import SaleSection from '../../components/SaleSections/SaleSections'
import s from './SalesPage.module.css'
import DiscountFilterForms from '../../components/FilterForms/DiscountFilterForms'

export default function SalesPage() {
  return (
    <div className={s.salePage} >
      <h1 className={s.sale}>SALE</h1>
      
      <div className={s.filterWrapper}>
      
    <DiscountFilterForms />
      
  
    </div>

     <SaleSection />
    </div>
  )
}
