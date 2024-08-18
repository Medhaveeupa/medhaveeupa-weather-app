const WeatherData = require('../models/WeatherData');
const weatherService = require('../services/weatherService');

exports.getWeatherDataByCity = async (req, res) => {
  try {
    const city = req.params.city;
    let weatherData = await WeatherData.findOne({ city: city })
      .sort({ timestamp: -1 })
      .limit(1);
    // if (!weatherData || (new Date() - weatherData.timestamp) > 30 * 60 * 1000) {
    //   // If no data or data is older than 30 minutes, fetch new data
    //   const newData = await weatherService.getWeatherData(city);
    //   weatherData = await WeatherData.create(newData);
    // }
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllWeatherData = async (req, res) => {
  try {
    const weatherData = await WeatherData.find().sort({ timestamp: -1 });
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createWeatherData = async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const newWeatherData = await WeatherData.create(req.body);
    console.log('Created weather data:', newWeatherData);
    res.status(201).json(newWeatherData);
  } catch (error) {
    console.error('Error creating weather data:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateWeatherData = async (req, res) => {
  try {
    const updatedWeatherData = await WeatherData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedWeatherData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.json(updatedWeatherData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteWeatherData = async (req, res) => {
  try {
    const deletedWeatherData = await WeatherData.findByIdAndDelete(req.params.id);
    if (!deletedWeatherData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.json({ message: 'Weather data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};