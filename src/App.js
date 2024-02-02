import logo from './logo.svg';
import './App.css';

import TicketImagen from './components/Ticket';
import VideoLoop from './components/Video';
import Compromiso from './components/Compromiso';

function App() {
  return (
    <div className="container-fluid p-0">
      {/* <header className="container-fluid p-0">
        
      </header> */}

      <main>
        {/* Portada */}
        <VideoLoop />
        {/* Ticket */}
        <TicketImagen />


        {/* Video declaración */}
        <Compromiso />


      </main>
    </div>
  );
}

export default App;
