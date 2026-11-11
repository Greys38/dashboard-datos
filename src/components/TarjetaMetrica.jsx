import React from 'react';

const TarjetaMetrica = ({ titulo, valor, subtitulo }) => {
  return (
    <div className="tarjeta-metrica">
      <h3 className="tarjeta-titulo">{titulo}</h3>
      <p className="tarjeta-valor">{valor}</p>
      {subtitulo && <span className="tarjeta-subtitulo">{subtitulo}</span>}
    </div>
  );
};

export default TarjetaMetrica;