import React from 'react'
import '../style/History.css'
import building from '../images/building.webp'
import posters from '../images/posters.webp'

const History = () => {
  return (
    <div id = 'history'>
        <span className = 'title'>VINTAGE ROOTS</span>
        <span className = 'subtitle'>The History Behind our Building</span>
        <div className = 'history-content'>
            <div className = 'left'>
                <img src = {building} alt = 'Our Building'/>
                <hr/>
                <span>Once home to the early 1900s grocery store Herrick and Reed, our building embodies a charming past. The photo captures the owners' families, a vintage "gasolene" station, and a pre-Wyandotte Street era. Today, we're proud to continue that legacy in our wine store and bar.</span>
            </div>
            <div className = 'right'>
                <img src = {posters} alt = 'Vintage Posters'/>
            </div>
        </div>
        
    </div>
  )
}

export default History