import React from 'react';
import './styles.css';

const ReproductorYouTube = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=b3FO4DgIcW0'; // Reemplaza con tu URL real
  const videoId = videoUrl.split('v=')[1]; // Extraer el ID del video de la URL

  const anchoEstilo = window.innerWidth > 1024 ? '40%' : window.innerWidth < 768 ? '70%' : '60%';

  return (
    <div className="pt-3 pt-md-5">
    {/* <p className='text-center text-white m-0 fw-bold fs-1'>Declaración</p> */}
    <div className='container' style={{ width: anchoEstilo }}>
        <img
          src="images/Declaracion.png" // Reemplaza con la ruta de tu imagen
          alt="Imagen de Boda"
          className="img-fluid rounded-2"
        />
      </div>

      <div className="video-container text-center">
        <iframe
          className="embed-responsive-item rounded-2"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ReproductorYouTube;
