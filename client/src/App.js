import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Location from './components/Location';
import History from './components/History';
import WineBar from './components/WineBar';
import Footer from './components/Footer';
import $ from 'jquery'
import React, {useState, useEffect} from 'react'

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    $(window).on('scroll', () => {
      const windowTop = $(window).scrollTop();
      $('.main').each(function(){
        const position = $(this).offset().top;
        // const windowTop = $(window).scrollTop();
        if (position < windowTop + $(window).height()) {
          $(this).addClass('animate');
          $(this).removeClass('hide');
        }
      });
    });
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <div id = 'content'>
        <Location/>
        <History/>
        <WineBar/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
