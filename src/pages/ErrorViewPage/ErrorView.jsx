import React from 'react'
import s from'./ErrorView.module.css'
import {Link} from 'react-router-dom'
export default function ErrorView() {
  return (
    <div className={s.notFound}>
      <div className={s.notFoundWrapper}>
      <p>OOPS... SOMETHING WENT WRONG,PAGE WAS NOT FOUND</p>
      <Link to={'/'}>
      <div className={s.homeBtn}><i class="fa-solid fa-arrow-left-long"></i>
      Back to the home page
      </div>
      </Link>
      </div>
    </div>
  )
}
