import React from 'react';

const TablaDatos = ({ datos = [] }) => {
  return (
    <div className="tabla-contenedor">
      <table className="tabla-datos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Ventas (Uds)</th>
            <th>Ingresos</th>
            <th>Región</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila) => (
            <tr key={fila.id}>
              <td>{fila.id}</td>
              <td className="col-resaltada">{fila.producto}</td>
              <td><span className="tag-categoria">{fila.categoria}</span></td>
              <td>{fila.ventas}</td>
              <td>{fila.ingresosFormateados || `$${fila.ingresos}`}</td>
              <td>{fila.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatos;