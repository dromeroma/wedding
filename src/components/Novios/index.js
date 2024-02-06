import React from 'react';
import 'animate.css';

const Novios = () => {
  const anchoEstilo = window.innerWidth > 1024 ? '50%' : window.innerWidth < 768 ? '80%' : '70%';
  return (
    <div className="p-0">
      <img
        src="images/nubes.png" // Reemplaza con la ruta de tu imagen
        alt="Toca aquí"
        className={`img-fluid text-end`}
        style={{ marginTop: '-0.5%'}}
      />

      <div className='container' style={{ width: anchoEstilo, marginTop: '-13%' }}>
        <img
          src="images/Datos-de-los-Novios.png" // Reemplaza con la ruta de tu imagen
          alt="Imagen de Boda"
          className="img-fluid rounded-2"
        />
      </div>

      <div className="container animate__animated animate__fadeInRight" style={{ width: '90%' }}>
        <img
          src="images/datos-novios.jpg" // Reemplaza con la ruta de tu imagen
          alt="Imagen de Boda"
          className="img-fluid rounded-2"
        />
      </div>
    </div>
  );
};

export default Novios;
