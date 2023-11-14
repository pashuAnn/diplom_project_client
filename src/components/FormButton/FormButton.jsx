import React from 'react'
import s from './FormButton.module.css'
export default function FormButton({children,color}) {
  return (
    <button className={[s.button,s[color]].join(' ')}>
      {children}
    </button>
  )
}
