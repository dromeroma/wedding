import React from 'react';

const VideoLoop = () => {
  return (
    <div className="w-100 h-100 overflow-hidden py-0">
      <video
        autoPlay
        loop
        muted
        className="w-100 h-100 object-fit-cover py-0"
      >
        <source src="animation/Home.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoLoop;
