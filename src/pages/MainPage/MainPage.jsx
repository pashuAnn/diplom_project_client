import React from 'react'
import HomeSection from '../../components/HomeSection/HomeSection'
import CatalogSection from '../../components/CatalogSection/CatalogSection'
import DiscountSection from '../../components/DiscountSection/DiscountSection'
import RandomSaleProduct from '../../components/RandomSaleProduct/RandomSaleProduct'


export default function MainPage() {
  return (
    <div>
      <HomeSection/>
      <CatalogSection/>
      <DiscountSection/>
      <RandomSaleProduct/>
    </div>
  )
}
