const axios = require('axios');

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

exports.getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city},CA,US&appid=${API_KEY}&units=metric`);
    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
    };
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};