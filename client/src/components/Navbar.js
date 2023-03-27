import React from 'react'
import logo from '../images/TV.png'
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <div id = 'navbar'>
        <div className = 'navbar-top'>
            <img src = {logo} alt = 'Twisted Vine'/>
        </div>
        <div className = 'navbar-bottom'>
            <span>Location</span>
            <span>Our History</span>
            <span>Wine Bar</span>
            <span>Events</span>
        </div>
        <hr/>
    </div>
  )
}

export default Navbar