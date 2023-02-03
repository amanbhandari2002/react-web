import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Header from './Header'
import Left from './Left'
import Right from './Right'

function Home() {
  return (
    <div className="secA">
      <Header/>
      <div className="content">
        <div className="left">
          <Left/>
        </div>
        <div className="right">
          <Right/>
        </div>
      </div>


    </div>
  )
}

export default Home