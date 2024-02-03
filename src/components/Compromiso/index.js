import React from 'react';
import './styles.css';

const ReproductorYouTube = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=b3FO4DgIcW0'; // Reemplaza con tu URL real
  const videoId = videoUrl.split('v=')[1]; // Extraer el ID del video de la URL

  return (
    <div className="pt-3">
    <p className='text-center text-white m-0 fw-bold fs-1'>Declaración</p>
      <div className="video-container text-center">
        <iframe
          className="embed-responsive-item rounded-4"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ReproductorYouTube;
