import React from 'react';
import './Modal.css';

interface ModalProps {
  imagePath: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imagePath, onClose }) => {
  // Cierra el modal si se hace click en cualquier parte (overlay o imagen)
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imagePath} alt="Imagen ampliada" className="modal-img" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
