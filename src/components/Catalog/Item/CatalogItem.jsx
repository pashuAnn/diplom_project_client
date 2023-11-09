import React from 'react'
import s from './CatalogItem.module.css'
import {Link} from 'react-router-dom'

export default function Item({id,title,image}) {
  return (
  
  <>
    <li className={s.catalogItem}>
        <Link className={s.catalogItemLink}  to={`/categories/${id}`}>
        <figure className={s.catalogItemPicWrap} >
      <img  className={s.catalogItemImg} src={`http://localhost:3333${image}`} alt={title}/>
      </figure>
      <div className={s.catalogItemInfo}>
      <h5 className={s.catalogItemText}>{title}</h5>
      </div>
      
      </Link>
      </li>
      </>
   
  )
}