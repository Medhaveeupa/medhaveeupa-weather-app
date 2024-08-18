import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (username, email, password) => api.post('/auth/register', { username, email, password });

export const getWeatherData = (city) => api.get(`/weather/city/${city}`);
export const getAllWeatherData = () => api.get('/weather');
// export const createWeatherData = (data) => api.post('/weather', data);
export const updateWeatherData = (id, data) => api.put(`/weather/${id}`, data);
export const deleteWeatherData = (id) => api.delete(`/weather/${id}`);

export const createWeatherData = async (data) => {
  try {
    const response = await api.post('/weather', data);
    return response.data;
  } catch (error) {
    console.error('API error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;

// const api = axios.create({
//   baseURL: API_URL,
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const login = (email, password) => api.post('/auth/login', { email, password });
// export const register = (username, email, password) => api.post('/auth/register', { username, email, password });

// export const getWeatherData = (city) => api.get(`/weather/city/${city}`);
// export const getAllWeatherData = () => api.get('/weather');
// export const createWeatherData = (data) => api.post('/weather', data);
// export const updateWeatherData = (id, data) => api.put(`/weather/${id}`, data);
// export const deleteWeatherData = (id) => api.delete(`/weather/${id}`);