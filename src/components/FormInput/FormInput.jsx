import React, {forwardRef} from 'react'
import s from './FormInput.module.css'
const FormInput =forwardRef((props,ref)=> {
  return (
  <input className={s.input} {...props} ref={ref}/>
  )
})
export default FormInput;
