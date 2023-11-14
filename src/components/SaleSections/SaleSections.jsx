import React from 'react'
import ProductContainer from '../Products/ProductContainer'
import {useSelector } from 'react-redux'
import s from './SaleSections.module.css'

export default function SaleSection() {
  const allProducts = useSelector(store=>store.allProducts)
  const discont_products=allProducts.filter(el=>el.discont_price !== null)
console.log(discont_products);
  return (
    <div className={s.saleContainer}>
   
      <ProductContainer state={discont_products} />
  
    </div>
   
  )
}