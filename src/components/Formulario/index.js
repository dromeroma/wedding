import React from 'react';

const FormularioGoogle = () => {
  const formularioSrc = "https://docs.google.com/forms/d/e/1FAIpQLSe_c85VIsNY6ND1Y1OhtZsHbxnUvuR5716etrvYAvH7NW9GwA/viewform?embedded=true";

  return (
    <div className="container-fluid pt-3 pt-md-5">
      <p className='text-center text-white fw-bold fs-1'>Formulario de asistencia</p>
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

