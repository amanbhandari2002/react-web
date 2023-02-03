import React from 'react'
import './Header.css'
import webLogo from '../Assets/webLogo.png'


function Header() {
  return (
    <div className='header'>
    <img src={webLogo} alt="" />
    <ul className='header-menu'>
      <li>Home</li>
      <li>Programs</li>
      <li>Why Use</li>
      <li>Plans</li>
      <li>Plans</li>
    </ul>
    <div className="join-button">
      <button type='submit'>JOIN NOW</button>
    </div>
    </div>


  )
}

export default Header