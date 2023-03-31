import React from 'react'
import wine from '../images/wine3.webp'
import '../style/Landing.css'
import $ from 'jquery'


const Landing = () => {

  const scrollTo = (selector) => {
    const navbarHeight = document.getElementById('navbar').clientHeight;
  
    $('html, body').animate(
      {
        scrollTop: $(selector).offset().top - navbarHeight,
      },
      500
    );
  };

  return (
    <div id = 'landing' className = 'animate'>
        <div className = 'landing-content'>
            <div className = 'left'>
                <span className = 'landing-title'>UNWIND, SIP, AND SAVOR - YOUR WINE HAVEN.</span>
                <button onClick = {() => scrollTo('#location')} className = 'landing-button'>Learn More</button>
            </div>
            <div className = 'right'>
                <img src = {wine} alt = 'Wine'/>
            </div>
        </div>
    </div>
  )
}

export default Landing