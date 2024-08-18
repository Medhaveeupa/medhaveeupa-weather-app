import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherCRUD from './components/WeatherCRUD';
import { getWeatherData } from './services/api';
import { login, register } from './services/api';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authForm, setAuthForm] = useState({ username: '', email: '', password: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleWeatherSubmit = async (city) => {
    try {
      let response = await getWeatherData(city);
      if (!response.data) {
        getExternalWeather(city)
      } else {
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getExternalWeather = async (city) => {
    try {
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=m4YdUx9AB2dIGEvr45GWsuEJbJIq9dN0`)
      const res = await response.json()
      console.log(res)
      setWeatherData(res.timelines.minutely[0].values);
      const desc = res.timelines.minutely[0].values.temperature
      setWeatherData({...weatherData, city: res.location.name, description: desc > 20 ? "HOOOOT" : "Feels good"})
    } catch (er) {
      console.log(er)
    }
  }

  const handleAuthInputChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(authForm.email, authForm.password);
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(authForm.username, authForm.email, authForm.password);
      alert('Registration successful. Please log in.');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>California Weather App</h1>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input name="email" value={authForm.email} onChange={handleAuthInputChange} placeholder="Email" required />
            <input name="password" value={authForm.password} onChange={handleAuthInputChange} type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input name="username" value={authForm.username} onChange={handleAuthInputChange} placeholder="Username" required />
            <input name="email" value={authForm.email} onChange={handleAuthInputChange} placeholder="Email" required />
            <input name="password" value={authForm.password} onChange={handleAuthInputChange} type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
        </div>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <WeatherForm onSubmit={handleWeatherSubmit} />
          <WeatherDisplay weatherData={weatherData} />
          <WeatherCRUD />
        </div>
      )}
    </div>
  );
}

export default App;