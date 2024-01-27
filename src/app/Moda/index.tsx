import React, { useState } from 'react';
import './styled.css';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    deleteModal: boolean
}


const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, children, deleteModal }) => {
    const modalClassName = isOpen ? 'modal-overlay open' : 'modal-overlay';

    return (
        <div className={modalClassName} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <div className='button-box'>
                    <button className="close-button" onClick={onClose}>
                        Cancelar
                    </button>
                    {deleteModal ? <button className='delete-modal'>Deletar
                    </button> : <button className='add-modal' onClick={onClose}>Adicionar</button>}
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
