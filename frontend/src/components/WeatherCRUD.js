import React, { useState, useEffect } from 'react';
import { getAllWeatherData, createWeatherData, updateWeatherData, deleteWeatherData } from '../services/api';

const WeatherCRUD = () => {
  const [weatherEntries, setWeatherEntries] = useState([]);
  const [formData, setFormData] = useState({ city: '', temperature: '', humidity: '', windSpeed: '', description: '' });

  useEffect(() => {
    fetchWeatherEntries();
  }, []);

  const fetchWeatherEntries = async () => {
    try {
      const response = await getAllWeatherData();
      setWeatherEntries(response.data);
    } catch (error) {
      console.error('Error fetching weather entries:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createWeatherData(formData);
      fetchWeatherEntries();
      setFormData({ city: '', temperature: '', humidity: '', windSpeed: '', description: '' });
    } catch (error) {
      console.error('Error creating weather entry:', error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await updateWeatherData(id, data);
      fetchWeatherEntries();
    } catch (error) {
      console.error('Error updating weather entry:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteWeatherData(id);
      fetchWeatherEntries();
    } catch (error) {
      console.error('Error deleting weather entry:', error);
    }
  };

  return (
    <div>
      <h2>Weather Data CRUD</h2>
      <form onSubmit={handleSubmit}>
        <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" required />
        <input name="temperature" value={formData.temperature} onChange={handleInputChange} placeholder="Temperature" required />
        <input name="humidity" value={formData.humidity} onChange={handleInputChange} placeholder="Humidity" required />
        <input name="windSpeed" value={formData.windSpeed} onChange={handleInputChange} placeholder="Wind Speed" required />
        <input name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required />
        <button type="submit">Add Weather Data</button>
      </form>
      <ul>
        {!!weatherEntries && weatherEntries.map((entry) => (
          <li key={entry._id}>
            {entry.city}: {entry.temperature}°C, {entry.description}
            <button onClick={() => handleUpdate(entry._id, { ...entry, temperature: parseFloat(entry.temperature) + 1 })}>Update</button>
            <button onClick={() => handleDelete(entry._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherCRUD;

// import React, { useState, useEffect } from 'react';
// import { getAllWeatherData, createWeatherData, updateWeatherData, deleteWeatherData } from '../services/api';

// const WeatherCRUD = () => {
//   const [weatherEntries, setWeatherEntries] = useState([]);
//   const [formData, setFormData] = useState({ city: '', temperature: '', humidity: '', windSpeed: '', description: '' });

//   useEffect(() => {
//     fetchWeatherEntries();
//   }, []);

//   const fetchWeatherEntries = async () => {
//     try {
//       const data = await getAllWeatherData();
//       setWeatherEntries(data);
//     } catch (error) {
//       console.error('Error fetching weather entries:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createWeatherData(formData);
//       fetchWeatherEntries();
//       setFormData({ city: '', temperature: '', humidity: '', windSpeed: '', description: '' });
//     } catch (error) {
//       console.error('Error creating weather entry:', error);
//     }
//   };

//   const handleUpdate = async (id, data) => {
//     try {
//       await updateWeatherData(id, data);
//       fetchWeatherEntries();
//     } catch (error) {
//       console.error('Error updating weather entry:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteWeatherData(id);
//       fetchWeatherEntries();
//     } catch (error) {
//       console.error('Error deleting weather entry:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Weather Data CRUD</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" required />
//         <input name="temperature" value={formData.temperature} onChange={handleInputChange} placeholder="Temperature" required />
//         <input name="humidity" value={formData.humidity} onChange={handleInputChange} placeholder="Humidity" required />
//         <input name="windSpeed" value={formData.windSpeed} onChange={handleInputChange} placeholder="Wind Speed" required />
//         <input name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required />
//         <button type="submit">Add Weather Data</button>
//       </form>
//       <ul>
//         {weatherEntries.map((entry) => (
//           <li key={entry._id}>
//             {entry.city}: {entry.temperature}°C, {entry.description}
//             <button onClick={() => handleUpdate(entry._id, { ...entry, temperature: entry.temperature + 1 })}>Update</button>
//             <button onClick={() => handleDelete(entry._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WeatherCRUD;