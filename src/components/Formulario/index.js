import React from 'react';

const FormularioGoogle = () => {
  const formularioSrc = "https://docs.google.com/forms/d/e/1FAIpQLSe_c85VIsNY6ND1Y1OhtZsHbxnUvuR5716etrvYAvH7NW9GwA/viewform?embedded=true";

  return (
    <div className="mt-2 background--animation--tiket">
      <p className='text-center text-white m-0 fw-bold fs-1'>Formulario de asistencia</p>
      <div className="container embed-responsive">
        <iframe
          title="Formulario de Google"
          className="embed-responsive-item"
          src={formularioSrc}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
        >
          Cargando...
        </iframe>
      </div>
    </div>
  );
};

export default FormularioGoogle;

