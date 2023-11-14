import React from "react";
import FormButton from "../FormButton/FormButton";
import s from "./FormItem.module.css";
import FormInput from "../FormInput/FormInput";
import { useForm } from "react-hook-form";
export default function FormItem({title,info,btn,formType,login}) {
  const {register,handleSubmit,reset,formState:{errors}}=useForm({
    mode:'onChange'
  });
  const emailRegister =register('email',{
    required:"* This field must be filled",
    pattern:{
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message:'* Please,enter valid email address'
    }
  }) 
  const passwordRegister=register('password',{
    required:"* This field must be filled",
    pattern:{
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message: '*Your password should contain minimum eight characters, at least one letter, one number and one special character'
    }
  }) 
  const submit = data =>{
    console.log(data);
    reset()
}
return (
  <div className={s.formWrapper}>
  <form className={s.form} onSubmit={handleSubmit(submit)}>
   
    <h3>{title}</h3>
    <div>
  
      <FormInput
      type='text'
      placeholder='Email'
      name='email'
      {...emailRegister}
      />
      {errors.email && <p className={s.error}>{errors.email.message}</p>}
      {
        formType=== 'passwordReset'
        ?''
        : 
        
        <FormInput
        type='password'
        placeholder='Password'
        name='password'
        {...passwordRegister}
        />
      }
      {errors.password && <p className={s.error}>{errors.password.message}</p>}

      </div>
      <p>
 {info}
      </p>
      <div>
        <FormButton color='yellow_btn'>{btn.submit}</FormButton>

        {
           formType=== 'passwordReset'
           ?''
           : <FormButton color='white_btn'>{btn.redirect}</FormButton>
        }
      </div>
    </form>
    </div>
  );
}
