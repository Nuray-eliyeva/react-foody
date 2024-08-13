import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="logo"> <h1>Foody <span id='dot'>.</span></h1></div>
      <ul>
        <li><Link to={'/'} className='links-nav first-link'>Home</Link></li>
        <li><Link to={'/restaurant'} className='links-nav'>Restaurants</Link></li>
        <li><Link to={'/about'} className='links-nav'>About Us</Link></li>
        <li><Link to={'/works'} className='links-nav'>How It Works</Link></li>
        <li><Link to={'/faqs'} className='links-nav'>Faqs</Link></li>
  
      </ul>
      <div className="nav-right"><img src="https://foody-app-copy.vercel.app/languages/en.svg" alt="eng" /><button className='btn1 btn-red'>Sign Up</button></div>
    </nav>
  )
}

export default Navbar