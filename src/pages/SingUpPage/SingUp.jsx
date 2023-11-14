import React from 'react'
import FormItem from '../../components/FormItem/FormItem'

export default function SignUpPage() {
  return (
    <div>
     <FormItem
        title="Log in"
     
        btn={{ submit: "Log in", redirect: "Don't have a account? Register" }}
        formType="signUp"
           info="By signing up on the site, you agree to our Rules and Privacy Policy
        and consent to the newsletter."
      />
     
    </div>
  )
}
