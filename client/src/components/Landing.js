import React from 'react'
import wine from '../images/wine3.webp'
import '../style/Landing.css'

const Landing = () => {
  return (
    <div id = 'landing'>
        <div className = 'landing-content'>
            <div className = 'left'>
                <span className = 'landing-title'>UNWIND, SIP, AND SAVOR - YOUR WINE HAVEN.</span>
                <button className = 'landing-button'>Learn More</button>
            </div>
            <div className = 'right'>
                <img src = {wine} alt = 'Wine'/>
            </div>
        </div>
    </div>
  )
}

export default Landing