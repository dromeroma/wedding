import React, { useState } from 'react';
import './EbookViewer.css';

function EbookViewer({ images }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [transition, setTransition] = useState('');

    const handleNextPage = () => {
        if (currentPage < images.length - 1) {
            setTransition('forward');
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setTransition('');
            }, 500); // Duración de la transición en milisegundos
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setTransition('backward');
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setTransition('');
            }, 500); // Duración de la transición en milisegundos
        }
    };

    return (
        <div className="container py-3 py-md-4">
            <div className="row">
                <div className="col text-center">

                    <div className='d-flex row text-center'>

                        <div className='col-md-2 d-flex align-items-center justify-content-center'>
                            {currentPage > 0 && (
                                <button onClick={handlePrevPage} className="btn text-white mr-2">
                                    <i className="fas fa-angles-left fa-3x"></i>
                                </button>
                            )}
                        </div>


                        <div className="ebook-page col-md-8">
                            <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} className={`img-fluid w-75 rounded ${transition}`} />
                        </div>

                        <div className='col-md-2 d-flex align-items-center justify-content-center'>
                        {currentPage < images.length -1 && (
                            <button onClick={handleNextPage} className="btn text-white">
                                <i className="fas fa-angles-right fa-3x"></i>
                            </button>
                            )}
                        </div>

                    </div>



                    <div className="mt-3 d-flex justify-content-center align-items-center">


                        {[...Array(images.length).keys()].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`btn btn-secondary mx-1 font--family--number ${currentPage === index ? 'text-primary' : ''}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EbookViewer;


// import React, { useState } from 'react';
// import './EbookViewer.css';

// function EbookViewer({ images }) {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [transition, setTransition] = useState('');

//   const handleNextPage = () => {
//     if (currentPage < images.length - 1) {
//       setTransition('forward');
//       setTimeout(() => {
//         setCurrentPage(currentPage + 1);
//         setTransition('');
//       }, 500); // Duración de la transición en milisegundos
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setTransition('backward');
//       setTimeout(() => {
//         setCurrentPage(currentPage - 1);
//         setTransition('');
//       }, 500); // Duración de la transición en milisegundos
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col text-center">
//           <div className="ebook-page">
//             <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} className={`img-fluid ${transition}`} />
//           </div>
//           <div>
//             {currentPage > 0 && (
//               <button onClick={handlePrevPage} className="btn btn-primary mr-2">
//                 <i className="fas fa-arrow-left"></i> Página Anterior
//               </button>
//             )}
//             {currentPage < images.length - 1 && (
//               <button onClick={handleNextPage} className="btn btn-primary">
//                 Página Siguiente <i className="fas fa-arrow-right"></i>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EbookViewer;



// import React, { useState } from 'react';
// //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// //import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import './EbookViewer.css';

// function EbookViewer({ images }) {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [transition, setTransition] = useState('');

//   const handleNextPage = () => {
//     if (currentPage < images.length - 1) {
//       setTransition('forward');
//       setTimeout(() => {
//         setCurrentPage(currentPage + 1);
//         setTransition('');
//       }, 500); // Duración de la transición en milisegundos
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setTransition('backward');
//       setTimeout(() => {
//         setCurrentPage(currentPage - 1);
//         setTransition('');
//       }, 500); // Duración de la transición en milisegundos
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col text-center">
//           <div className="ebook-page">
//             <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} className={`img-fluid ${transition}`} />
//           </div>
//           <div>
//             {currentPage > 0 && (
//               <button onClick={handlePrevPage} className="btn btn-primary mr-2">
//                 <FontAwesomeIcon icon={faArrowLeft} /> Página Anterior
//               </button>
//             )}
//             {currentPage < images.length - 1 && (
//               <button onClick={handleNextPage} className="btn btn-primary">
//                 Página Siguiente <FontAwesomeIcon icon={faArrowRight} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EbookViewer;



// import React, { useState } from 'react';

// function EbookViewer({ images }) {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [transition, setTransition] = useState(false);

//   const handleNextPage = () => {
//     if (currentPage < images.length - 1) {
//       setTransition(true);
//       setTimeout(() => {
//         setCurrentPage(currentPage + 1);
//         setTransition(false);
//       }, 500); // Duración de la transición en milisegundos
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setTransition(true);
//       setTimeout(() => {
//         setCurrentPage(currentPage - 1);
//         setTransition(false);
//       }, 500); // Duración de la transición en milisegundos
//     }
//   };

//   return (
//     <div className="container-fluid h-100">
//       <div className="row h-100 justify-content-center align-items-center">
//         <div className="col-xs-12 text-center">
//           <div className={`ebook-page${transition ? ' transition' : ''}`}>
//             <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} className="img-fluid" />
//           </div>
//         </div>
//         <div className="col-xs-12 text-center mt-3">
//           {currentPage > 0 && (
//             <button onClick={handlePrevPage} className="btn btn-primary mr-2">
//               {'<'} Página Anterior
//             </button>
//           )}
//           {currentPage < images.length - 1 && (
//             <button onClick={handleNextPage} className="btn btn-primary">
//               Página Siguiente {'>'}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EbookViewer;


// import React, { useState } from 'react';

// // Componente para visualizar el ebook
// function EbookViewer({ images }) {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleNextPage = () => {
//     if (currentPage < images.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       {currentPage > 0 && (
//         <button onClick={handlePrevPage} style={{ position: 'absolute', top: '50%', left: '10px' }}>
//           {'<'}
//         </button>
//       )}
//       {currentPage < images.length - 1 && (
//         <button onClick={handleNextPage} style={{ position: 'absolute', top: '50%', right: '10px' }}>
//           {'>'}
//         </button>
//       )}
//       <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} style={{ maxWidth: '100%' }} />
//     </div>
//   );
// }

// // Componente principal que utiliza el componente EbookViewer
// function EbookComponent() {
//   // Lista de imágenes predefinida
//   const images = [
//     'images/ebook/1.jpg',
//     'images/ebook/1.jpg',
//     // Agrega más imágenes según sea necesario
//   ];

//   return (
//     <div>
//       <EbookViewer images={images} />
//     </div>
//   );
// }

// export default EbookComponent;
