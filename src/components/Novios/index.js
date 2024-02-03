import React from 'react';
import 'animate.css';

const Novios = () => {
  return (
    <div className="mt-2">
    <p className='text-center text-white m-0 fw-bold fs-1'>Datos de los novios</p>
      <div className="container animate__animated animate__fadeInRight">
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
