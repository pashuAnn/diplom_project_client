import React from 'react'
import { useSelector} from 'react-redux'
import CatalogContainer from '../../components/Catalog/Container/CatalogContainer'
export default function Catalog() {
const category_state = useSelector(state=>state.categories)
const categories_sliced_2 = category_state.slice(0,2)
const categories_sliced_3 = category_state.slice(2,5)
  
  return (
    <div>
     
    <CatalogContainer categories={categories_sliced_2} categories_sliced_3={categories_sliced_3} />
    </div>
  )
}
