import React, { useState, useEffect } from 'react';
import '../index.css'; // Importaremos los estilos en un archivo CSS separado

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



   // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);


  // Array de imágenes con sus datos
  const images = [
    {
      id: 1,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "cortina 1",
      description: "Cortina en Gasa."
    },
    {
      id: 2,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "cortina 2",
      description: "Cortina en gasa. Modelo de cabezal: tabla encontrada."
    },
    {
      id: 3,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "cortinado 1",
      description: "Doble cortinado en Black de lino Juliette y Gasa Portobello."
    },
    {
      id: 4,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "cortinado 2",
      description: "Doble cortinado en Black out Melody y voile clásico."
    },
    {
      id: 5,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "cortinado 3",
      description: "Doble cortinado Riel en Black de lino Juliette y Gasa Portobello. Modelo de cabezal: Pellizco de 2 y 3."
    },
    {
      id: 6,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "cortinado 4",
      description: "Doble cortinado con presillas ocultas en Black out Melody y Gasa Portobello. Modelo de cabezal: Pellizco de 2."
    },
    {
      id: 7,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "jareta para barral",
      description: "Jareta para pasar barral."
    },
    {
      id: 8,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "mensulas para riel",
      description: "Ménsulas para riel."
    },
    {
      id: 9,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "pellizco de 2",
      description: "Pellizco de 2."
    },
    {
      id: 10,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "pellizco de 3",
      description: "Pellizco de 3."
    },
    {
      id: 11,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "presillas ocultas",
      description: "Presillas ocultas para barral."
    },
    {
      id: 12,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "presillas ocultas",
      description: "Presillas ocultas para barral."
    },
    {
      id: 13,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "pellizco de 1",
      description: "Pellizco de 1."
    },
    {
      id: 14,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "roller blackout",
      description: "Cortina Roller Black out."
    },
    {
      id: 15,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "roller sunscreen",
      description: "Cortina Roller Sunscreen."
    },
    {
      id: 16,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "tabla-chata",
      description: "Tabla chata."
    },
    {
      id: 17,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "tabla-encontrada",
      description: "Tabla encontrada."
    },
    {
      id: 18,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "arrastre",
      description: "Arrastre de cortina."
    },
    {
      id: 19,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "colores roller blackout",
      description: "Colores Roller Black out."
    },
    {
      id: 20,
      src: "src/assets/cortina-en-gasa.jpg",
      alt: "colores roller sunscreen",
      description: "Colores Roller Sunscreen."
    }
  ];

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
      <section className="grid-cortinas">
        <h2 className="top-title text-center mb-4">Nuestros trabajos</h2>
        <div className="container py-4 section-works">
          <div className="row g-3 justify-content-center">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              >
                <div className="gallery-item">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="img-fluid img-gallery"
                    onClick={() => openModal(image)}
                    loading="lazy"
                  />
                  <p className="home__description mt-2 text-center small">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {isModalOpen && selectedImage && (
        <div 
          className="modal-imagen"
          onClick={(e) => {
            if (e.target.className === 'modal-imagen' || e.target.className === 'modal-backdrop') {
              closeModal();
            }
          }}
        >
          <div className="modal-backdrop"></div>
          <div className="modal-content-wrapper">
            <span 
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              &times;
            </span>
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="modal-image"
              />
            </div>
            <div className="modal-description">
              <p>{selectedImage.description}</p>
            </div>
            {isMobile && (
              <div className="modal-tap-hint">
                <small>Toca fuera de la imagen para cerrar</small>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;