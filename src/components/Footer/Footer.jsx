import React from 'react'
import './Footer.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import logo from '../../utils/BackYardLogo.png'
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-contact-info'>
      <div className='footer-address'>
        <h2>Address</h2>
        <p>Linkstraße 2, 8 OG, 10785 Berlin, Deutschland</p>
      </div>
      <div className='footer-phone'>
        <h3>Phone Number</h3>
        <p>+49 999 999 99 99</p>
      </div>
      </div>
      <div className='footer-map'>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.209782802906!2d13.366347915807097!3d52.50720977981037!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x47a851c0f724fb1d%3A0x4f346386c2d8c9f!2sLinkstra%C3%9Fe+2%2C+10785+Berlin%2C+Germany!5e0!3m2!1sen!2sde!4v1532342342341"
          width="100%"
          height="200"
          style={{ border:0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
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
    </section>
    <div className='footer-links'>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>About Us</h2>
          <Link to='/'>How it works</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        <div className='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
        </div>
      </div>
        <div className='footer-link-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
        </div>
    </div>
    <section className='social-media'>
      <div className='social-media-wrap'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
          BackYard
          <img src={logo} alt="logo" className='footer-logo' />
          <i className="fa-solid fa-house-tree"></i>
          </Link>
        </div>
        <small className='website-rights'> BackYard © 2023</small>
        
      </div>
    </section>
  </div>
  )
}
