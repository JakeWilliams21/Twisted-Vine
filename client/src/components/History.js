import React, {useState, useEffect} from 'react'
import '../style/History.css'
import building from '../images/building.webp'
import empty from '../images/empty.webp'
import chianti from '../images/chianti.webp'
import noch from '../images/noch.webp'

const History = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [empty, chianti, noch]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  })

  return (
    <div id = 'history' className = 'hide main'>
      <div className = 'header'>
        <span className = 'title'>VINTAGE ROOTS</span>
        <span className = 'subtitle'>The History Behind our Building</span>
      </div>
        
        <div className = 'history-content'>
            <div className = 'left'>
                <img src = {building} alt = 'Our Building'/>
                <hr/>
                <span>Once home to the early 1900s grocery store Herrick and Reed, our building embodies a charming past. The photo captures the owners' families, a vintage "gasolene" station, and a pre-Wyandotte Street era. Today, we're proud to continue that legacy in our wine store and bar.</span>
            </div>
            <div className = 'right'>
                  <div className = 'poster'>
                    <img key = {currentImageIndex} src = {images[currentImageIndex]} alt = '1939 Poster'/>
                  </div>                
            </div>
        </div>
        
    </div>
  )
}

export default History