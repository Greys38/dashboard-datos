import axios from 'axios';

const apiClient = axios.create({
  // Si no encuentra la variable de entorno, usará directamente la API de Open-Meteo
  baseURL: import.meta.env.VITE_API_URL || 'https://api.open-meteo.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default apiClient;