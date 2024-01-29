import React, { useState } from 'react';
import './styled.css';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  deleteModal: boolean;
  onConfirm: () => void; // Adicionamos uma propriedade onConfirm
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, children, deleteModal, onConfirm }) => {
  const modalClassName = isOpen ? 'modal-overlay open' : 'modal-overlay';

  const buttonText = deleteModal ? 'Deletar' : 'Adicionar';

  return (
    <div className={modalClassName} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className='button-box'>
          <button className="close-button" onClick={onClose}>
            Cancelar
          </button>
          <button className={deleteModal ? 'delete-modal' : 'add-modal'} onClick={onConfirm}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
