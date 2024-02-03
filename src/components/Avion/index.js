import React, { useState } from 'react';
import 'animate.css'; // Asegúrate de importar animate.css
import './styles.css'; //

const Avion = () => {
  const [imagenActual, setImagenActual] = useState(1);

  const cambiarImagen = () => {
    setImagenActual((prevImagen) => (prevImagen === 1 ? 2 : 1));
  };

  return (
    <div className='py-0'>
      <p className='text-center text-white m-0 fw-bold fs-1'>Toque para ver respaldo</p>
      <div className={`card mx-auto img-fluid avion`} onClick={cambiarImagen}>
        <img
          className="card-img-top img-fluid rounded"
          src={`images/imagen${imagenActual}.png`}
          alt={`Imagen ${imagenActual}`}
        />
        {/* <div className="card-body">
            <p className="card-text">Descripción de la imagen o cualquier otro contenido aquí.</p>
        </div> */}
      </div>
    </div>
  );
};

export default Avion;

