// import React from 'react';
// import { updateWeatherData, deleteWeatherData } from '../services/api';

// const WeatherDisplay = ({ weatherEntries, isLoggedIn, user, onWeatherUpdated }) => {
//   const handleDelete = async (id) => {
//     if (isLoggedIn) {
//       try {
//         await deleteWeatherData(id);
//         onWeatherUpdated();
//       } catch (error) {
//         console.error('Error deleting weather data:', error);
//       }
//     }
//   };

//   const handleUpdate = async (id, updatedData) => {
//     if (isLoggedIn) {
//       try {
//         await updateWeatherData(id, updatedData);
//         onWeatherUpdated();
//       } catch (error) {
//         console.error('Error updating weather data:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Weather Data</h2>
//       {weatherEntries.length === 0 ? (
//         <p>No weather data available.</p>
//       ) : (
//         <ul>
//           {weatherEntries.map((entry) => (
//             <li key={entry._id}>
//               {entry.city}: {entry.temperature}°C, {entry.description}
//               {isLoggedIn && user && user.id === entry.userId && (
//                 <>
//                   <button onClick={() => handleUpdate(entry._id, { ...entry, temperature: entry.temperature + 1 })}>
//                     Update Temperature
//                   </button>
//                   <button onClick={() => handleDelete(entry._id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default WeatherDisplay;

import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div>
      <h2>{weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} m/s</p>
      <p>Description: {weatherData.description}</p>
    </div>
  );
};

export default WeatherDisplay;