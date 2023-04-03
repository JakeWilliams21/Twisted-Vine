import React, {useState, useEffect, useRef} from 'react'
import '../style/WineBar.css'
import winebar from '../images/winebar.jpeg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const WineBar = () => {
    const [wines, setWines] = useState([
        {
            name: 'Famille Vincent Cremant de Bourgogne (Burgundy, France)',
            description: '100% Chardonnay. The Vincent Family have been the owners of Chateau Fuisse since 1862. Limestone/clayt and pebble soil. Hand-harvested. Green apple, citrus, hint of almond. Creamy palate, dry, crisp finish',
            price: 29.99
        },
        {
            name: 'Deux Roches "Tradition" Macon-Villages (Burgundy, France)',
            description: '100% Chardonnay. Limestone and clay-silty soils. Sees some oak and lees aging. Peaches, golden apple, limes zest, white pepper, flinty finish.',
            price: 22.99
        },
        {
            name: 'Teleda Dilao Dry Amber Wine (Kisskhevi, Republic of Georgia)',
            description: 'Rkatsiteli, Mtsvane. Georgia has been making wine for over 8000 years and considered the birthplace of wine. This blend is made of two indigenous grapes and is aged in large clay jars buried under the ground, called Qvevri. One month skin contact makes this more of an orange wine. Peaches, mint, pine. Chewy on the palate with a zesty finish.',
            price: 14.99
        },
        {
            name: 'Le Grand Bouqueteau Chinon Rose (Loire Valley, France)',
            description: '100% Cabernet Franc. Named for a lieudit next to the cellar. Bing cherry, raspberry and citrus flavors, with white pepper and savory herbs. Lovely minerality on the finish. Delicious!',
            price: 18.99
        },
        {
            name: 'Erich Sattler St. Laurent (Burgenland, Austria)',
            description: '100% St. Laurent. Erich, 4th generation to run the estate, has been at the head since 1999. Sustainable and organic farming practices. Gravel soil. 40+ year-old-vines. Hand-harvested. Stainless steel and large neutral casks aging. An offspring of Pinot Noir. Dark berry and cherry flavors, with silky tannins and hint of spiciness. Fresh and elegant!',
            price: 19.99
        },
        {
            name: `Anne Amie Vineyards Winemaker's Selection Pinot Noir. (Willamette Valley, Oregon)`,
            description: 'Salmon Safe and LIVE certified. Vineyards are located in Yamhill-Carlton district and Chehalem Mountains. Hand-harvested. Aged on lees in French new and used oak barrels for 10 months. Cherry, pomegranate, blueberry, baking spice. Earthy tannins and refreshing acidity!',
            price: 27.99
        },
    ])
    const [selectedWineIndex, setSelectedWineIndex] = useState(0)
    const [fadeIn, setFadeIn] = useState(false);
    const autoChangeInterval = useRef(null);

    const startInterval = () => {
        return setInterval(() => {
          setSelectedWineIndex((prevIndex) => (prevIndex + 1) % wines.length);
          triggerFadeIn();
        }, 10000);
      };

    useEffect(() => {
        autoChangeInterval.current = startInterval()

        return () => clearInterval(autoChangeInterval.current)
    }, [wines])

    const triggerFadeIn = () => {
        setFadeIn(true);
        setTimeout(() => {
          setFadeIn(false);
        }, 1000);
      };
      

    const handleRightButtonClick = () => {
        triggerFadeIn();
        setSelectedWineIndex((prevIndex) => (prevIndex + 1) % wines.length);
        clearInterval(autoChangeInterval.current);
        autoChangeInterval.current = startInterval();
      };
    
      const handleLeftButtonClick = () => {
        triggerFadeIn()
        setSelectedWineIndex((prevIndex) =>
          prevIndex - 1 < 0 ? wines.length - 1 : prevIndex - 1
        );
        clearInterval(autoChangeInterval.current);
        autoChangeInterval.current = startInterval();
      };


  return (
    <div id = 'wine-bar' className = 'hide main'>   
        <div className = 'title'>
            <span style = {{'fontSize': 'xx-large'}}>WINE BAR</span>
            <span>Come Discover Our Weekly Curated Collection: New Arrivals & Cherished Classics</span>
            <span style = {{'fontStyle': 'italic'}}>March 23rd - 25th</span>
        </div>
        <div className = 'wines-container'>
            <div className = 'wines'>
                {selectedWineIndex ? 
                <div className = 'left-button'>
                    <ChevronLeftIcon className = 'button' onClick = {handleLeftButtonClick}/>
                </div>
                :
                <div></div>
                }
                
                <div className = 'wine-content-container'>
                    <div className={`wine-content ${fadeIn ? "fade-in" : ""}`}>
                        <span className = 'name'>{wines[selectedWineIndex].name}</span>
                        <span className = 'description'>{wines[selectedWineIndex].description}</span>
                        <span style = {{'fontStyle': 'italic', 'color': 'darkgray'}}>{selectedWineIndex + 1}/6</span>
                    </div>
                </div>
            
                {selectedWineIndex < 5 ? 
                <div className = 'right-button'>
                    <ChevronRightIcon className = 'button' onClick = {handleRightButtonClick}/>
                </div>
                :
                <div></div>
                }
                
            </div>
            <img src = {winebar} alt = 'Wine Lineup'/>
        </div>
        
        
    </div>
  )
}

export default WineBar