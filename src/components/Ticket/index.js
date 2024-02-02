import React, { useState, useEffect } from 'react';
import './styles.css';

const TicketImagen = () => {
    const [imagenActual, setImagenActual] = useState(1);
    const [contadorSegundos, setContadorSegundos] = useState(0);

    const cambiarImagen = () => {
        setImagenActual((prevImagen) => (prevImagen === 1 ? 2 : 1));
        reiniciarContador();
    };

    const reiniciarContador = () => {
        setContadorSegundos(0);
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContadorSegundos((prevSegundos) => prevSegundos + 1);

            if (contadorSegundos >= 3) {
                cambiarImagen();
            }
        }, 1000);

        return () => clearInterval(intervalo);
    }, [contadorSegundos]);

    return (
        <div className='background--animation--tiket py-0'>
            <p className='text-center text-white m-0 fw-bold fs-1'>Toque para ver respaldo</p>
            <div className="card mx-auto img-fluid" style={{width:'90%'}}>
                <img
                    className="card-img-top img-fluid rounded"
                    src={`images/imagen${imagenActual}.jpg`}
                    alt={`Imagen ${imagenActual}`}
                    onClick={cambiarImagen}
                    style={{ transition: 'opacity 1s ease-in-out' }}
                />
                {/* <div className="card-body">
        <p className="card-text">Descripción de la imagen o cualquier otro contenido aquí.</p>
      </div> */}
            </div>
        </div>
    );
};

export default TicketImagen;