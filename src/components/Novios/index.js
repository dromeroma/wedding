import React from 'react';
import 'animate.css';

const Novios = () => {
  const anchoEstilo = window.innerWidth > 1024 ? '50%' : window.innerWidth < 768 ? '80%' : '70%';
  return (
    <div className="mt-0 mt-md-2">
      {/* <p className='text-center text-white m-0 fw-bold fs-1'>Datos de los novios</p> */}
      <div className='container' style={{ width: anchoEstilo }}>
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
          className="img-fluid rounded-4"
        />
      </div>
    </div>
  );
};

export default Novios;
