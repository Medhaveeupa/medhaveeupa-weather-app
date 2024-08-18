// import React, { useState } from 'react';
// import { createWeatherData } from '../services/api';

// const WeatherForm = ({ onWeatherAdded, user }) => {
//   const [formData, setFormData] = useState({
//     city: '',
//     temperature: '',
//     humidity: '',
//     windSpeed: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createWeatherData({ ...formData, userId: user.id });
//       onWeatherAdded();
//       setFormData({
//         city: '',
//         temperature: '',
//         humidity: '',
//         windSpeed: '',
//         description: ''
//       });
//     } catch (error) {
//       console.error('Error adding weather data:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
//       <input name="temperature" type="number" value={formData.temperature} onChange={handleChange} placeholder="Temperature" required />
//       <input name="humidity" type="number" value={formData.humidity} onChange={handleChange} placeholder="Humidity" required />
//       <input name="windSpeed" type="number" value={formData.windSpeed} onChange={handleChange} placeholder="Wind Speed" required />
//       <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
//       <button type="submit">Add Weather Data</button>
//     </form>
//   );
// };

// export default WeatherForm;

import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter California city"
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;