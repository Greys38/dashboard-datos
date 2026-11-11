import React, { useState } from 'react';
import { obtenerSerieDeTiempo } from '../services/dataService';

export const PanelAnalitico = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const [lat, setLat] = useState('19.4326');
  const [lon, setLon] = useState('-99.1332');

  const handleConsultar = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);

    try {
      const resultado = await obtenerSerieDeTiempo(parseFloat(lat), parseFloat(lon));
      setDatos(resultado);
    } catch (err) {
      setError(err.message || 'Ocurrió un error al obtener las mediciones.');
      setDatos([]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>📊 Panel Analítico: Datos de Ciencia y Clima</h2>

      <form onSubmit={handleConsultar} style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'flex-end' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px' }}>Latitud:</label>
          <input
            type="number"
            step="any"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            style={{ padding: '8px', width: '120px' }}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px' }}>Longitud:</label>
          <input
            type="number"
            step="any"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            style={{ padding: '8px', width: '120px' }}
            required
          />
        </div>
        <button
          type="submit"
          disabled={cargando}
          style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {cargando ? 'Procesando...' : 'Consultar API'}
        </button>
      </form>

      {cargando && (
        <div style={{ padding: '15px', backgroundColor: '#e3f2fd', color: '#0d47a1', borderRadius: '4px', textAlign: 'center' }}>
          ⏳ <strong>Analizando datos...</strong> Obteniendo serie de tiempo desde la API externa.
        </div>
      )}

      {error && (
        <div style={{ padding: '15px', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '4px', border: '1px solid #ef9a9a' }}>
          ⚠️ <strong>Error en la interfaz:</strong> {error}
        </div>
      )}

      {!cargando && !error && datos.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Resultados Analíticos ({datos.length} Muestras)</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Hora</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Temperatura (°C)</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Humedad (%)</th>
              </tr>
            </thead>
            <tbody>
              {datos.slice(0, 8).map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.hora}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.temperatura} °C</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.humedad} %</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PanelAnalitico;