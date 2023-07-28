import React from 'react'
import "./style.css"
import UserStats from '../../components/UserStats/UserStats'
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget'
import HistoricalWeatherPanel from '../../components/HistoricalPanel/HistoricalWeatherPanel'

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the Landing Page</h1>
          <div className="widgets-container">
              <div className="comp-wrapper"><UserStats /></div>
              <div className="comp-wrapper"> <WeatherWidget /></div>
              <div className="comp-wrapper"> <HistoricalWeatherPanel /></div>
        
       
       
      </div>
    </div>
  )
}

export default LandingPage