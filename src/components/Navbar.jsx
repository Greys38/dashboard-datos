import React from 'react';

function Navbar() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Dashboard de Ciencia de Datos</h1>
      <p style={styles.student}>Alumno: NolascoGalicia Carmen Graciela</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#1f2937',
    color: '#ffffff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  title: {
    margin: 0,
    fontSize: '1.5rem'
  },
  student: {
    margin: 0,
    fontSize: '1rem',
    color: '#9ca3af'
  }
};

export default Navbar;