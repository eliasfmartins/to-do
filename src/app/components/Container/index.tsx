'use client'
import React, { useState } from 'react';
import './styles.css';
import { Tarefa } from '../Tarefa/index';
import CustomModal from '@/app/Moda';

export const Container = () => {
  interface TarefasProps {
    id: number;
    descricao: string;
    status: boolean;
  }

  const initialTarefas: TarefasProps[] = [
    { id: 1, descricao: 'Lavar as mãos', status: false },
    { id: 2, descricao: 'Lavar a louça', status: true },
    { id: 3, descricao: 'Lavar a louça', status: true },
    { id: 4, descricao: 'Fazer um bolo', status: false },
    { id: 5, descricao: 'Lavar a louça', status: false },
    { id: 6, descricao: 'Lavar a louça', status: true },
    { id: 7, descricao: 'Lavar a louça', status: false },
  ];

  const [tarefas, setTarefas] = useState<TarefasProps[]>(initialTarefas);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deletemodal, setDeleteModal] = useState<number | null>(null);
  const [novaTarefa, setNovaTarefa] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const openModalDelete = (id: number) => {
    setDeleteModal(id);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeModalDelete = () => {
    setDeleteModal(null);
  };

  const handleAddTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;

      setTarefas((prevTarefas) => [
        ...prevTarefas,
        { id: novoId, descricao: novaTarefa, status: true },
      ]);

      setNovaTarefa('');
      closeModal();
    }
  };

  const handleDeleteTarefa = () => {
    if (deletemodal !== null) {
      setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== deletemodal));
      setDeleteModal(null);
      closeModalDelete();
    }
  };
  const handleToggleStatus = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
      )
    );
  };
  
 

  return (
    <main>
      <div className='container'>
        <h2>Suas tarefas de hoje</h2>
        <div className='a-fazer'>
          <div className="tarefas">
            {tarefas.map((tarefa) => {
              if (tarefa.status) {
                return (
                  <Tarefa
                    id={tarefa.id}
                    key={tarefa.id}
                    tarefa={tarefa.descricao}
                    status={tarefa.status}
                    openModalDelete={() => openModalDelete(tarefa.id)}
                    onToggleStatus={() => handleToggleStatus(tarefa.id)}
                  />
                );
              }
            })}
          </div>
        </div>

        <h2>Tarefas finalizadas</h2>

        <div className='feitas'>
          <div className="tarefas">
            {tarefas.map((tarefa) => {
              if (!tarefa.status) {
                return (
                  <Tarefa
                    id={tarefa.id}
                    key={tarefa.id}
                    tarefa={tarefa.descricao}
                    status={tarefa.status}
                    openModalDelete={() => openModalDelete(tarefa.id)}
                    onToggleStatus={() => handleToggleStatus(tarefa.id)}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <button className='add' onClick={openModal}>
        Adicionar nova tarefa
      </button>
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} deleteModal={false} onConfirm={handleAddTarefa}>
        <h2>Nova tarefa</h2>
        <label htmlFor="to-do" className='label'>
          Título
          <input
            type="text"
            id='to-do'
            className='input-to-do'
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
        </label>
      </CustomModal>
      <CustomModal isOpen={deletemodal !== null} onClose={closeModalDelete} deleteModal={true} onConfirm={handleDeleteTarefa}>
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
      </CustomModal>
    </main>
  );
};
