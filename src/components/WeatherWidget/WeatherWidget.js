import React from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
  // Sample weather data
  const weatherData = {
    temperature: '25°C',
    precipitation: '10%',
    windSpeed: '8 km/h',
  };

  return (
    <div className="weather-widget-container">
      <h2>Weather Widget</h2>
      <div className="weather-data">
        <p>
          <span>Temperature:</span> {weatherData.temperature}
        </p>
        <p>
          <span>Precipitation:</span> {weatherData.precipitation}
        </p>
        <p>
          <span>Wind Speed:</span> {weatherData.windSpeed}
        </p>
      </div>
    </div>
  );
};

export default WeatherWidget;