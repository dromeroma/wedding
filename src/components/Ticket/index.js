import React, { useState, useEffect } from 'react';
import 'animate.css'; // Asegúrate de importar animate.css

const TicketImagen = () => {

    const [animacionActiva, setAnimacionActiva] = useState(false);
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

    useEffect(() => {
        // Función para activar y desactivar la animación
        const toggleAnimation = () => {
            setAnimacionActiva(true);
            setTimeout(() => {
                setAnimacionActiva(false);
            }, 1000);
        };

        // Activar la animación cada 3 segundos
        const interval = setInterval(toggleAnimation, 3000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, []); // Ejecutar solo una vez al montar el componente

    const anchoEstilo = window.innerWidth > 1024 ? '30%' : window.innerWidth < 768 ? '60%' : '50%';
    const anchoEstilo2 = window.innerWidth > 1024 ? '15%' : window.innerWidth < 768 ? '30%' : '10%';

    return (
        <div className='pt-3 pt-md-5'>
            <div className='container' style={{ width: anchoEstilo }}>
                <img
                    src="images/tiket.png" // Reemplaza con la ruta de tu imagen
                    alt="Imagen de Boda"
                    className="img-fluid rounded-2"
                />
            </div>

            <div
                className={`card mx-auto img-fluid`}
                style={{ width: '90%', position: 'relative', backgroundColor: 'transparent' }}
                onClick={cambiarImagen}
            >
                <img
                    className={`card-img-top img-fluid rounded-5 animate__animated ${animacionActual}`}
                    src={`images/imagen${imagenActual}.png`}
                    alt={`Imagen ${imagenActual}`}
                />

                <img
                    src="images/toca-para-interactuar.png" // Reemplaza con la ruta de tu imagen
                    alt="Toca aquí"
                    className={`img-fluid text-end animate__animated ${animacionActiva ? 'animate__heartBeat' : ''}`}
                    style={{ width: anchoEstilo2, position: 'absolute', top: 30, right: 15 }}
                />
                {/* <div className="card-body">
            <p className="card-text">Descripción de la imagen o cualquier otro contenido aquí.</p>
        </div> */}
            </div>
        </div>
    );
};

export default TicketImagen;