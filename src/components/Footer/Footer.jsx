import React from 'react'
import './Footer.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer-container'>
   <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Join the Name newsletter,so you don't miss anything
      </p>
      <p className='footer-subscription-text'>
        You can unsubscribe at any time.
      </p>
      <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div> 
    </section>*/
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>About Us</h2>
          <Link to='/'>How it works</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
        </div>
      </div>
        <div class='footer-link-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
        </div>
    </div>
    <section class='social-media'>
      <div class='social-media-wrap'>
        <div class='footer-logo'>
          <Link to='/' className='social-logo'>
          PARADISE
          <i class="fa-brands fa-pagelines"></i>
          </Link>
        </div>
        <small class='website-rights'>PARADISE © 2023</small>
        
      </div>
    </section>
  </div>
  )
}
