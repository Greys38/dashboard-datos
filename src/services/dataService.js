import apiClient from './apiClient';

export const obtenerSerieDeTiempo = async (lat = 19.4326, lon = -99.1332) => {
  try {
    const response = await apiClient.get('/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        hourly: 'temperature_2m,relative_humidity_2m',
        forecast_days: 1,
      },
    });

    // Validar que la respuesta contenga el objeto hourly
    if (!response.data || !response.data.hourly) {
      throw new Error('La respuesta de la API no contiene el formato esperado.');
    }

    const { hourly } = response.data;
    
    return hourly.time.map((hora, index) => ({
      hora: new Date(hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temperatura: hourly.temperature_2m[index],
      humedad: hourly.relative_humidity_2m[index],
    }));
  } catch (error) {
    if (error.response) {
      throw new Error(`Error en el servidor API (${error.response.status})`);
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor. Verifica tu conexión a internet.');
    } else {
      throw new Error(`Error al procesar la solicitud: ${error.message}`);
    }
  }
};