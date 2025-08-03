import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
  currentIndex: number;
  images: string[];
  titles?: (string | undefined)[];
  descriptions?: (string | undefined)[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ currentIndex, images, titles, descriptions, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Cierra el modal si se hace click en el overlay (no en la imagen ni botones)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleOverlayClick}>
        

        <img src={images[index]} alt={`Imagen ${index + 1}`} className="modal-img" onClick={handleOverlayClick}/>

        {titles && descriptions && titles[index] && descriptions[index] && (
          <a
            href={descriptions[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-title-link"
          >
            {titles[index]}
          </a>
        )}

        <button className="modal-nav-btn left" onClick={handlePrev}>
          <span className="modal-nav-icon">&#60;</span>
        </button>
        <button className="modal-nav-btn right" onClick={handleNext}>
          <span className="modal-nav-icon">&#62;</span>
        </button>
        <button className="modal-close-btn" onClick={onClose}>×</button>

      </div>
    </div>
  );
};

export default Modal;
