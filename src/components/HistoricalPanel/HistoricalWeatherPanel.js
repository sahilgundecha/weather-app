import React, { useState } from 'react';
import './style.css';

const HistoricalWeatherPanel = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleFetchHistoricalWeather = (e) => {
    e.preventDefault();
    // Here you can implement the logic to fetch historical weather data using the entered latitude, longitude, and date-time.
    // For now, we will just log the values to the console.
    console.log('Fetching historical weather data...');
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
    console.log('Date-Time:', dateTime);
  };

  return (
    <div className="historical-weather-panel">
      <h2>Historical Weather Panel</h2>
      <form className="historical-weather-form" onSubmit={handleFetchHistoricalWeather}>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="text"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateTime">Date-Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Fetch Historical Weather
        </button>
      </form>
    </div>
  );
};

export default HistoricalWeatherPanel;