import React from 'react'
import { Button } from '../Button/Button'
import './HomeSection.css'
import { Link } from 'react-router-dom'
export default function HomeSection() {
  return (
    
        <div className='hero-container'>
     
      <h1>WELCOME</h1>
      <p>Check out our best offers this week</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/sale'
        >
         <i class="fa-solid fa-arrow-right"></i>
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          link='/sale'
        >
         Sale
        </Button>
      
      </div>
    </div>
  
  )
}

