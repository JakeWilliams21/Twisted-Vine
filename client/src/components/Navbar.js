import React, {useEffect, useState, useRef} from 'react'
import logo from '../images/TV.png'
import '../style/Navbar.css'
import $ from 'jquery'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [visible, setVisible] = useState(false)
  const [animation, setAnimation] = useState('')
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY > 0;

      if (shouldBeSticky && !isSticky) {
        setAnimation('enterSticky');
      } else if (!shouldBeSticky && isSticky) {
        setAnimation('leaveSticky');
      }
 
      setIsSticky(shouldBeSticky);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    function handleResize() {
      if ($(window).width() >= 900) {
        setVisible(false);
      }
    }

    $(window).on("resize", handleResize);

    return () => {
      $(window).off("resize", handleResize);
    };
  }, [])

  const scrollTo = (selector) => {
    const navbarHeight = document.getElementById('navbar').clientHeight;
  
    $('html, body').animate(
      {
        scrollTop: $(selector).offset().top - navbarHeight,
      },
      500
    );

    setVisible(false)
  };

  const toggleMenu = () => {
    setVisible(!visible)
    console.log('clicked');
    console.log(visible);
  }


  return (
    <div id = 'navbar' className = {`${isSticky ? 'sticky' : ''} ${animation}`}>
      <div className = {`navbar-content ${isSticky ? 'sticky-content' : ''}`}>
        <div className = 'navbar-top'>
              <img src = {logo} alt = 'Twisted Vine' onClick = {() => scrollTo('#landing')}/>
          </div>
          <div className = 'navbar-bottom'>
              <span onClick = {() => scrollTo('#location')}>Location</span>
              <span onClick = {() => scrollTo('#history')}>Our History</span>
              <span onClick = {() => scrollTo('#wine-bar')}>Wine Bar</span>
              <span onClick = {() => scrollTo('#footer')}>Contact</span>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
          {visible && (
            <div ref = {mobileMenuRef} className="mobile-menu" style={{ display: visible ? 'flex' : 'none' }}>
              <span onClick={() => scrollTo("#location")}>Location</span>
              <span onClick={() => scrollTo("#history")}>Our History</span>
              <span onClick={() => scrollTo("#wine-bar")}>Wine Bar</span>
              <span onClick={() => scrollTo("#footer")}>Contact</span>
            </div>
          )}

      </div>
        
        <hr/>
    </div>
  )
}

export default Navbar