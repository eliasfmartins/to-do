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

    const handleConfirm = () => {
        if (deleteModal) {
            // Se for um modal de exclusão, chame a função de exclusão
            onClose();
        } else {
            // Se não, chame a função de adição
            onClose(); // Fecha o modal de adição
            // Adicione a lógica necessária para adicionar a nova tarefa
        }
    };

    return (
        <div className={modalClassName} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <div className='button-box'>
                    <button className="close-button" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className={deleteModal ? 'delete-modal' : 'add-modal'} onClick={handleConfirm}>
                        {deleteModal ? 'Deletar' : 'Adicionar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;