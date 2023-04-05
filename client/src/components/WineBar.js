import React, {useState, useEffect, useRef} from 'react'
import '../style/WineBar.css'
import winebar from '../images/winebar(2).jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const WineBar = () => {
    const [wines, setWines] = useState([
        {
            name: 'New: Michel & Tina Gassier Blanc De Blancs Brut (Southern Rhone)',
            description: '100% Grenache Blanc. Certified organic. Galets pebble soil atop ancient seabed chalk. Indigenous yeast. 6 months lees aging in French oak. White floral aromas, peaches and green apple with hint of almond. Dry, with a minerally finish!',
            price: 24.99
        },
        {
            name: 'New: Domaine du Petit Metris Clos de la Marche Savennièes (Loire Valley)',
            description: '100% Chenin Blanc. Situated in le Grand Beauvais hameau, in the heart of the Chaume appellation and run by 5th generation winemaker Joseph Renou and his two sons, Pascal and Herve. 30+ Year-old -vines grown in shale, aeolian sands, and spilite soils. Hand-harvested with oak barrel aging. Stone fruit and citrus, richness on palate and dry, wet rock finish! Stunning!',
            price: 29.99
        },
        {
            name: 'New: Maison Lispaul Sancerre (Loire Valley)',
            description: '100% Sauvignon Blanc. Family estate located in the town of Tracy sur Loire. Sustainable farming. 30-year-old-vines in clay and flint soils. Lees aging. Citrus flavors with a fresh, flinty finish. Classic!',
            price: 36.99
        },
        {
            name: 'Domaine Gueneau Chavignolet Sancerre Rosé (Loire Valley,)',
            description: '100% Pinot Noir.  From woman winemaker Elisa Gueneau. Sustainable farming. 35-year-old-vines grown in caillottes and limestone soils. Strawberry and citrus with a chalky finish. Delicious!',
            price: 29.99
        },
        {
            name: 'New: Jean-Marc Lafont Domaine de Bel-Air Briante Brouilly (Beaujolais)',
            description: '100% Gamay. The domaine sits on top of Bel-Air Hill overlooking Beajeu and has been run by winemaker Jean-Marc Lafont and his wife Annick since 1985. 55+ year-old-vines in clay and loamy soils with schist and granite. Sees older barrel aging. Hand-harvested and semi-carbonic. Elegant, brambly fruit, mineral-driven finish! Heavenly!',
            price: 19.99
        },
        {
            name: `J.L. Chave Mon Coeur Cotes-du-Rhone (Southern Rhone, France)`,
            description: 'Grenache, Syrah, Mourvèdre/Cinsault. The Chave family have been growing vines since 1481. 20–60-year-old-vines sourced from Visan, Vinsobres, Cairanne, and Rasteau. Organic farming. A wine of elegance, power, and finesse. Luscious!',
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
            <span style = {{'fontStyle': 'italic'}}>April 6 - 9, 2023</span>
        </div>
        <div className = 'wines-container'>
            <div className = 'wines'>
                <div className = {`left-button ${selectedWineIndex ? '' : 'hide-button'}`}>
                    <ChevronLeftIcon className = 'button' onClick = {handleLeftButtonClick}/>
                </div>

                
                <div className = 'wine-content-container'>
                    <div className={`wine-content ${fadeIn ? "fade-in" : ""}`}>
                        <span className = 'name'>{wines[selectedWineIndex].name}</span>
                        <span className = 'description'>{wines[selectedWineIndex].description}</span>
                        <span>${wines[selectedWineIndex].price}/bottle</span>
                        <span style = {{'fontStyle': 'italic', 'color': 'darkgray', 'fontSize': 'small'}}>{selectedWineIndex + 1}/6</span>
                    </div>
                </div>
            
                <div className = {`right-button ${selectedWineIndex < 5 ? '' : 'hide-button'}`}>
                    <ChevronRightIcon className = 'button' onClick = {handleRightButtonClick}/>
                </div>
                
            </div>
            <img className = 'winebar-img' src = {winebar} alt = 'Wine Lineup'/>
        </div>
        
        
    </div>
  )
}

export default WineBar