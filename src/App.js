import './App.css';

import TicketImagen from './components/Ticket';
import VideoLoop from './components/Video';
import Compromiso from './components/Compromiso';
import DatosNovios from './components/Novios';
import Formulario from './components/Formulario';
import Ebook from './components/Ebook';

function App() {

  const images = [
    'images/ebook/1.jpg',
    'images/ebook/2.jpg',
    'images/ebook/3.png',
    'images/ebook/4.JPG',
     // Agrega más imágenes según sea necesario
  ];

  return (
    <div className="container-fluid p-0 background--animation--imagen">
      {/* <header className="container-fluid p-0">
        
      </header> */}

      <main>
        {/* Ebook */}
        {/* <Ebook images={images} /> */}
        {/* Portada */}
        <VideoLoop />
        {/* Datos novios */}
        <DatosNovios />
        {/* Ticket */}
        <TicketImagen />
        {/* Video declaración */}
        <Compromiso />
        {/* Formulario de asistencia */}
        <Formulario />
      </main>
    </div>
  );
}

export default App;
