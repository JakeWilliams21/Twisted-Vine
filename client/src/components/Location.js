import React from 'react'
import inside from '../images/inside.webp'
import '../style/Location.css'

const Location = () => {
  return (
    <div id = 'location' className = 'main hide'>
        <div className = 'location-content'>
            <div className = 'left'>
                <span className = 'title'>THE TWISTED VINE</span>
                <hr/>
                <ul className = 'hours'>
                    <li>1816 West Fifth Ave</li>
                    <li>Columbus, OH, 43212, US</li>
                </ul>
            </div>
            <div className = 'center'>
                <img src = {inside} alt = 'Wine Bar'/> 
            </div>
            <div className = 'right'>
                <ul className = 'hours'>
                    <li>Sunday: 1pm to 6pm</li>
                    <li>Monday: 12pm to 7pm</li>
                    <li>Tuesday: 10:30am to 7pm</li>
                    <li>Wednesday: 10:30am to 8pm</li>
                    <li>Thursday: 10:30am to 9pm</li>
                    <li>Friday: 10:30am to 9pm</li>
                    <li>Saturday: 10:30am to 9pm</li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Location