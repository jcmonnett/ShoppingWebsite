import React from 'react';
import './Modal.css';

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
