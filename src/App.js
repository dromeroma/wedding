import './App.css';

import TicketImagen from './components/Ticket';
import VideoLoop from './components/Video';
import Compromiso from './components/Compromiso';
import DatosNovios from './components/Novios';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="container-fluid p-0 background--animation--tiket">
      {/* <header className="container-fluid p-0">
        
      </header> */}

      <main>
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
