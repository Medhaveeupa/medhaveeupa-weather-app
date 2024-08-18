import React, { useState } from 'react';
import { updateWeatherData } from '../services/api';

const EditWeatherForm = ({ weatherEntry, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    city: weatherEntry.city,
    temperature: weatherEntry.temperature,
    humidity: weatherEntry.humidity,
    windSpeed: weatherEntry.windSpeed,
    description: weatherEntry.description
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateWeatherData(weatherEntry._id, formData);
      onUpdate({ ...weatherEntry, ...formData });
    } catch (error) {
      console.error('Error updating weather data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input name="temperature" type="number" value={formData.temperature} onChange={handleChange} placeholder="Temperature" required />
      <input name="humidity" type="number" value={formData.humidity} onChange={handleChange} placeholder="Humidity" required />
      <input name="windSpeed" type="number" value={formData.windSpeed} onChange={handleChange} placeholder="Wind Speed" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditWeatherForm;