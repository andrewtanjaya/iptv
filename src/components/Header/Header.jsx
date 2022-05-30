import React from 'react'
import logo from '../../assets/logo.png'
import weatherIcon from '../../assets/weather-1.png'
import arrowIcon from '../../assets/buttom arrow.png'
import './Header.css'

function Header() {
  return (
    <div className='header-wrapper'>
        <div className="header-left">
            <img className='logo-img' src={logo} alt="" />
            <p>Welcome, <b className='greetings-name'>Mr. Taufiq</b></p>
            <p>Have a nice day &nbsp; | &nbsp; <span className='room-number'>Room 093</span> </p>
        </div>
        <div className="header-right">
            <div className="weather-detail">
                <img className='weather-icon' src={weatherIcon} alt="" />
                <p>27˚C</p>
                <p className='weather-description'>Sunny Weather</p>
            </div>
            <div className="date-detail">
                <p className='clock'>07:30</p>
                <p>Saturday</p>
                <p className='date-description'>31 July 2021</p>
            </div>
            <div className="lang-detail">
                <p>EN</p>
                <img className='arrow-icon' src={arrowIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header