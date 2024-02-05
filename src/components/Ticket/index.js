import React, { useState, useEffect } from 'react';
import 'animate.css'; // Asegúrate de importar animate.css

const TicketImagen = () => {


    const obtenerClaseAnimacionAleatoria = () => {

        const animacionesDisponibles = [
            'animate__flipInY',
            'animate__flipInX',

            //'animate__fadeIn',
            // 'animate__fadeInUp',
            // 'animate__fadeInDown',
            // 'animate__fadeInLeft',
            // 'animate__fadeInRight',
            // 'animate__rotateIn',
            // 'animate__bounceIn',
            // 'animate__zoomIn',
            // 'animate__flipInX',
            // 'animate__flipInY',
            // 'animate__slideInUp',
            // 'animate__slideInDown',
            // 'animate__slideInLeft',
            // 'animate__slideInRight',
            // Agrega más clases de animación según sea necesario
        ];
        const indiceAleatorio = Math.floor(Math.random() * animacionesDisponibles.length);
        return animacionesDisponibles[indiceAleatorio];
    };
    const [imagenActual, setImagenActual] = useState(1);
    const [contadorSegundos, setContadorSegundos] = useState(0);
    const [animacionActual, setAnimacionActual] = useState(obtenerClaseAnimacionAleatoria());

    const cambiarImagen = () => {
        setImagenActual((prevImagen) => (prevImagen === 1 ? 2 : 1));
        setContadorSegundos(0);
        setAnimacionActual(obtenerClaseAnimacionAleatoria());
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContadorSegundos((prevSegundos) => prevSegundos + 1);

            if (contadorSegundos >= 30) {
                cambiarImagen();
            }
        }, 1000);

        return () => clearInterval(intervalo);
    }, [contadorSegundos]);

    const anchoEstilo = window.innerWidth > 1024 ? '30%' : window.innerWidth < 768 ? '60%' : '50%';
    const anchoEstilo2 = window.innerWidth > 1024 ? '10%' : window.innerWidth < 768 ? '30%' : '10%';

    return (
        <div className='pt-3 pt-md-5'>
            <div className='container' style={{ width: anchoEstilo }}>
                <img
                    src="images/tiket.png" // Reemplaza con la ruta de tu imagen
                    alt="Imagen de Boda"
                    className="img-fluid rounded-2"
                />
            </div>

            <div className='container' style={{ width: anchoEstilo2 }}>
                <img
                    src="images/toca-para-interactuar.png" // Reemplaza con la ruta de tu imagen
                    alt="Toca aquí"
                    className="img-fluid text-end"
                />
            </div>

            <div
                className={`card mx-auto img-fluid animate__animated ${animacionActual}`}
                style={{ width: '90%' }}
                onClick={cambiarImagen}
            >
                <img
                    className="card-img-top img-fluid rounded-5"
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

export default TicketImagen;