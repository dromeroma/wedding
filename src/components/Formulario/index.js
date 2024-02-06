import React from 'react';

const FormularioGoogle = () => {
  const formularioSrc = "https://docs.google.com/forms/d/e/1FAIpQLSe_c85VIsNY6ND1Y1OhtZsHbxnUvuR5716etrvYAvH7NW9GwA/viewform?embedded=true";
  const anchoEstilo = window.innerWidth > 1024 ? '40%' : window.innerWidth < 768 ? '70%' : '60%';
  return (
    <div className="container-fluid pt-3 pt-md-5">
      <div className='container' style={{ width: anchoEstilo }}>
        <img
          src="images/Formulario-de-asistencia.png" // Reemplaza con la ruta de tu imagen
          alt="Imagen de Boda"
          className="img-fluid rounded-2"
        />
      </div>
      <div className="d-flex justify-content-center vh-100">
        <iframe
          title="Formulario de Google"
          className="w-100 mw-70"
          src={formularioSrc}
          style={{ overflow: 'hidden'}}
          //frameBorder="0"
          // marginHeight="600"
          // marginWidth="400"
          //scrolling="no"
        >
          Cargando...
        </iframe>
      </div>
    </div>
  );
};

export default FormularioGoogle;

