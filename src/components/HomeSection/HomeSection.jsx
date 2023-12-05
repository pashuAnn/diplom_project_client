import React from 'react'
import { Button } from '../Button/Button'
import './HomeSection.css'
export default function HomeSection() {
  return (
    
        <div className='hero-container'>
     
      <h1>WELCOME</h1>
      <p>Check out our best offers this week</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/sale'
        >
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          link='/sale'
        >
          Get Sale <i class="fa-solid fa-arrow-right"></i>
        </Button> */}
      <Button buttonStyle="btn--outline" link='/discounts' iconClass="fa-solid fa-arrow-right">GET DISCOUNTS</Button>
      </div>
    </div>
  
  )
}

