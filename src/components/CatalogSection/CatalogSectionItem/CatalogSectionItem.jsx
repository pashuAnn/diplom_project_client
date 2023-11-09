import React from 'react'
import { Link } from 'react-router-dom'
import s from '../CatalogSection.module.css'
export default function CatalogSectionItem({id,title,image}) {
 
  return (
    <div className={s.catalogItem}>
        <Link className={s.catalogItemLink} to={`/categories/${id}`}>
        <figure className={s.catalogItemPicWrap} >
      <img className={s.catalogItemImg} src={`http://localhost:3333${image}`} alt={title}/>
      </figure>
      <div className={s.catalogItemInfo}>
      <h5 className={s.catalogItemText}>{title}</h5>
      </div>
      
      </Link>
      </div>
    
  )
}