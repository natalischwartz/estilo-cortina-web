import React, { useState, useEffect } from 'react';
import '../index.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filter, setFilter] = useState('todas'); // Estado para el filtro activo

  // Array de imágenes con sus datos
  const images = [
    {
      id: 1,
      src: "/cortina-1.jpg",
      alt: "cortina 1",
      description: "Cortina en Gasa.",
      category:"Cortina tradicional"
    },
    {
      id: 2,
      src: "/cortinado-doble.png",
      alt: "cortina 2",
      description: "Doble cortinado en Black Out Melody y Gasa",
      category:"Doble cortinado"
    },
    {
      id: 3,
      src: "/1.png",
      alt: "cortinado 1",
      description: "Doble cortinado en Black de lino Juliette y Gasa Portobello.",
      category:"Doble cortinado"
    },
    {
      id: 4,
      src: "/cortinas-voileLino1032-1.jpg",
      alt: "cortinado 2",
      description: "Cortinado en Voile de lino",
      category:"Cortina tradicional"
    },
    {
      id: 5,
      src: "/cortinas-voileLino1032.jpg",
      alt: "cortinado 3",
      description: "Cortinado en Voile de lino",
      category:"Cortina tradicional"
    },
    {
      id: 6,
      src: "/cortinado-4.jpg",
      alt: "cortinado 4",
      description: "Doble cortinado con presillas ocultas en Black out Melody y Gasa Portobello. Modelo de cabezal: Pellizco de 2.",
      category:"Doble cortinado"
    },
    {
      id: 7,
      src: "/jareta-barral.jpg",
      alt: "jareta para barral",
      description: "Jareta para pasar barral.",
      category:"Cabezales"
    },
    {
      id: 8,
      src: "/mensulas-riel-2.jpg",
      alt: "mensulas para riel",
      description: "Ménsulas para riel.",
      category:"Accesorios"
    },
    {
      id: 9,
      src: "/pellizco-1-2.jpg",
      alt: "pellizco de 1 y 2",
      description: "Pellizco de 1 y 2.",
      category:"Cabezales"
    },
    {
      id: 10,
      src: "/pellizco-3.jpg",
      alt: "pellizco de 3",
      description: "Pellizco de 3.",
      category:"Cabezales"
    },
    {
      id: 11,
      src: "/presilla-oculta.jpg",
      alt: "presillas ocultas",
      description: "Presillas ocultas para barral.",
      category:"Cabezales"
    },
    {
      id: 12,
      src: "/cortinado-en-L.jpg",
      alt: "Cortinado en L",
      description: "Cortinado en L",
      category:"Cortina tradicional"
    },
    {
      id: 13,
      src: "/Roller-screen-doble-altura.jpg",
      alt: "roller doble altura",
      description: "Roller screen doble altura",
      category:"Rollers"
    },
    {
      id: 14,
      src: "/roller-blackout.jpg",
      alt: "roller blackout",
      description: "Cortina Roller Black out.",
      category:"Rollers"
    },
    {
      id: 15,
      src: "/roller-screen.jpg",
      alt: "roller sunscreen",
      description: "Cortina Roller Sunscreen.",
      category:"Rollers"
    },
    {
      id: 16,
      src: "/tabla-chata.jpg",
      alt: "tabla-chata",
      description: "Tabla chata.",
      category:"Cabezales"
    },
    {
      id: 17,
      src: "/cortinado-en-doble-barral.jpg",
      alt: "Cortinado en doble barral con argollas",
      description: "Cortinado en doble barral con argollas",
      category:"Doble cortinado"
    },
    {
      id: 18,
      src: "/arrastre-cortinas.jpg",
      alt: "arrastre",
      description: "Arrastre de cortina.",
      category:"Detalles"
    },
    {
      id: 19,
      src: "/colores-blackout-roller.jpg",
      alt: "colores roller blackout",
      description: "Colores Roller Black out.",
      category:"Rollers"
    },
    {
      id: 20,
      src: "/colores-roller-sunscreen.jpg",
      alt: "colores roller sunscreen",
      description: "Colores Roller Sunscreen.",
      category:"Rollers"
    }
  ];

  // Filtrar imágenes según categoría seleccionada
  const filteredImages = filter === 'todas' 
    ? images 
    : images.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Manejar cierre con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <section id='inicio' className="grid-cortinas">
         <header className='works-header'>
            {/* <img 
            src="https://res.cloudinary.com/dzkzrdbfu/image/upload/v1769555015/logo-estilo-sfdo_roxgqe.png" 
            alt="Logo Estilo Cortina" 
            className="brand-logo"
            /> */}
          
          <div className='services-description'>
            <span>📏Toma de medidas • 🛠️Colocación</span>
          </div>

          {/* <h2  className="top-title">Nuestros trabajos</h2> */}

          <p className="works-subtitle">
            Cortinas confeccionadas a medida, cuidando cada detalle del diseño y la instalación.
         </p>
        </header>
        
        
        


          {/* Filtros */}
        <div className="filters-container">
          <div className="filters">
            <button 
              className={`filter-btn ${filter === 'todas' ? 'active' : ''}`}
              onClick={() => setFilter('todas')}
            >
              Todas
            </button>
            <button 
              className={`filter-btn ${filter === 'Cortina tradicionale' ? 'active' : ''}`}
              onClick={() => setFilter('Cortina tradicional')}
            >
              Cortinas Tradicionales
            </button>
            <button 
              className={`filter-btn ${filter === 'Doble-cortinado' ? 'active' : ''}`}
              onClick={() => setFilter('Doble cortinado')}
            >
              Doble Cortinado
            </button>
            <button 
              className={`filter-btn ${filter === 'Rollers' ? 'active' : ''}`}
              onClick={() => setFilter('Rollers')}
            >
              Rollers
            </button>
            <button 
              className={`filter-btn ${filter === 'Cabezales' ? 'active' : ''}`}
              onClick={() => setFilter('Cabezales')}
            >
              Cabezales
            </button>
             <button 
              className={`filter-btn ${filter === 'Accesorios' ? 'active' : ''}`}
              onClick={() => setFilter('Accesorios')}
            >
              Accesorios
            </button>
            <button 
              className={`filter-btn ${filter === 'Detalles' ? 'active' : ''}`}
              onClick={() => setFilter('Detalles')}
            >
              Detalles
            </button>
          </div>
          
          {/* Contador de resultados */}
          <div className="filter-counter">
            Mostrando {filteredImages.length} de {images.length} trabajos
          </div>
        </div>


        <div id='trabajos' className="container py-4 section-works">
          <div className="row g-5 gutterY-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="col-6 col-sm-4 col-md-3">
                <div className="gallery-card">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="img-gallery"
                    onClick={() => openModal(image)}
                  />
                  <div className="image-category">{image.category}</div>
                  <p className="home__description mt-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
         <a href="https://wa.me/5491161622602" target="_blank" className="wapp-logo fixed z-50 bottom-16 right-4 xl:w-16 xl:right-6">
      <img className="w-12 xl:w-14 shadow-2xl drop-shadow-xl rounded-full transition-transform duration-200 hover:scale-110" src="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_dd_283_865)'%3e%3crect%20x='4'%20y='3'%20width='64'%20height='64'%20rx='32'%20fill='white'/%3e%3cpath%20d='M12%2059L15.3908%2046.675C13.296%2043.0594%2012.1957%2038.9579%2012.2007%2034.784C12.2063%2021.6693%2022.9267%2011%2036.1005%2011C42.4934%2011.0032%2048.4938%2013.4799%2053.0066%2017.9758C57.5193%2022.4716%2060.0023%2028.4475%2060%2034.8031C59.9941%2047.9168%2049.2721%2058.588%2036.1002%2058.588H36.0898C32.0903%2058.5864%2028.1602%2057.5875%2024.6694%2055.6926L12%2059Z'%20fill='white'/%3e%3cpath%20d='M36.1103%2015.0176C25.1531%2015.0176%2016.2422%2023.8855%2016.2383%2034.7853C16.2329%2038.5073%2017.2857%2042.1549%2019.2751%2045.3062L19.7477%2046.0542L17.7406%2053.3488L25.2589%2051.3863L25.9849%2051.8144C29.034%2053.6159%2032.5301%2054.5686%2036.0954%2054.5705H36.1028C47.0516%2054.5705%2055.9625%2045.7017%2055.9667%2034.8012C55.975%2032.2031%2055.4655%2029.6292%2054.4677%2027.2284C53.47%2024.8277%2052.0038%2022.6478%2050.154%2020.815C48.3145%2018.9722%2046.1261%2017.511%2043.7155%2016.5158C41.3049%2015.5207%2038.7199%2015.0115%2036.1103%2015.0176Z'%20fill='url(%23paint0_linear_283_865)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.1319%2024.8403C29.6843%2023.8504%2029.2133%2023.8304%2028.7881%2023.8132L27.6435%2023.7993C27.2452%2023.7993%2026.5982%2023.9481%2026.0512%2024.5431C25.5042%2025.1381%2023.9609%2026.5761%2023.9609%2029.501C23.9609%2032.4259%2026.1009%2035.2522%2026.3991%2035.6493C26.6972%2036.0464%2030.5301%2042.2399%2036.6001%2044.6228C41.6443%2046.6032%2042.6707%2046.2093%2043.766%2046.1103C44.8613%2046.0114%2047.2991%2044.6723%2047.7964%2043.2841C48.2937%2041.8958%2048.294%2040.7065%2048.1449%2040.4578C47.9959%2040.2091%2047.5976%2040.0614%2047%2039.7639C46.4023%2039.4664%2043.4669%2038.0283%2042.9195%2037.8298C42.3722%2037.6312%2041.9743%2037.5326%2041.5757%2038.1276C41.1772%2038.7226%2040.0341%2040.061%2039.6856%2040.4578C39.3371%2040.8546%2038.9892%2040.9044%2038.3915%2040.6072C37.7938%2040.31%2035.8709%2039.682%2033.5893%2037.6568C31.8142%2036.081%2030.6159%2034.1349%2030.267%2033.5402C29.9182%2032.9456%2030.23%2032.6235%2030.5295%2032.3273C30.7975%2032.0608%2031.1265%2031.633%2031.4257%2031.286C31.7248%2030.939%2031.8233%2030.691%2032.0221%2030.2949C32.2208%2029.8988%2032.1218%2029.5508%2031.9724%2029.2536C31.8229%2028.9564%2030.6627%2026.016%2030.1319%2024.8403Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_dd_283_865'%20x='0'%20y='0'%20width='72'%20height='72'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.0470588%200%200%200%200%200.0470588%200%200%200%200%200.0509804%200%200%200%200.05%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_283_865'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.0470588%200%200%200%200%200.0470588%200%200%200%200%200.0509804%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect1_dropShadow_283_865'%20result='effect2_dropShadow_283_865'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect2_dropShadow_283_865'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_283_865'%20x1='35.6981'%20y1='17.3912'%20x2='35.8977'%20y2='51.1916'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2357D163'/%3e%3cstop%20offset='1'%20stop-color='%2323B33A'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Logo Whatsapp" title="Abrir chat de WhatsApp"/>
      </a>
      </section>

      {/* Modal para imagen ampliada - TAMAÑO CONTROLADO */}
      {isModalOpen && selectedImage && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
        >
          <div 
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
             <button 
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Cerrar"
              >
                &times;
              </button>
            <div className="modal-header">
            </div>
            
            <div className="modal-body">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="modal-image"
              />
            </div>
            
            <div className="modal-footer">
              <p className="modal-description">{selectedImage.description}</p>
            </div>
          </div>

           <footer id="contacto">
          desarrollado por
        </footer>
        </div>
       
      )}
    </>
  );
};

export default Gallery;