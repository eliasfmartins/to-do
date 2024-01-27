'use client'
import { useState } from 'react'

import './styles.css'
import { Tarefa } from '../Tarefa/index';
import CustomModal from '@/app/Moda';
export const Container = () => {
    interface TarefasProps {
        descricao: string,
        status: boolean
    }
    const initialTarefas = [
        { descricao: 'Lavar as mãos', status: true },
        { descricao: 'Lavar a louça', status: true },
        { descricao: 'Lavar a louça', status: true },
        { descricao: 'Fazer um bolo', status: false },
        { descricao: 'Lavar a louça', status: false },
        { descricao: 'Lavar a louça', status: true },
        { descricao: 'Lavar a louça', status: false },
    ];
    const [tarefas, setTarefas] = useState<TarefasProps[]>(initialTarefas)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deletemodal, setDeleteModal] = useState(false)
    const [novaTarefa, setNovaTarefa] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };
    const openModalDelete = () => {
        setDeleteModal(true)
    }

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const closeModalDelete = () => {
        setDeleteModal(false)
    }
    const handleAddTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas((prevTarefas) => [
                ...prevTarefas,
                { descricao: novaTarefa, status: true },
            ]);
            setNovaTarefa('');
            closeModal();
        }
    };
    const handleDeleteTarefa = () => {
        // Implemente a lógica para excluir a tarefa
        // Pode ser necessário passar um identificador único para cada tarefa
        // para saber qual tarefa excluir do estado
        // Por exemplo, pode-se adicionar um campo 'id' a cada tarefa.
        // Então, ao deletar, você procuraria a tarefa pelo id e a removeria do estado.
        // Aqui, estou apenas fechando o modal de deletar.
        setDeleteModal(false);
    };
    return (
        <main >
            <div className='container'>
                <h2>Suas tarefas de hoje</h2>
                <div className='a-fazer'>

                    <div className="tarefas">
                        {tarefas.map((tarefa, indice) => {
                            if (tarefa.status == true)
                                return <Tarefa key={indice} tarefa={tarefa.descricao} status={tarefa.status} openModalDelete={openModalDelete} />
                        })}
                    </div>
                </div>

                <h2>Tarefas finalizadas</h2>

                <div className='feitas'>
                    <div className="tarefas">
                        {tarefas.map((tarefa, indice) => {
                            if (tarefa.status === false) {
                                return <Tarefa key={indice} tarefa={tarefa.descricao} status={tarefa.status} openModalDelete={openModalDelete} />;
                            }
                        })}
                    </div>
                </div>

            </div>
            <button className='add' onClick={openModal}>
                Adicionar nova tarefa
            </button>
            <CustomModal isOpen={modalIsOpen} onClose={closeModal} deleteModal={false}>
                <h2>Nova tarefa</h2>
                <label htmlFor="to-do" className='label'>
                    Título
                    <input type="text" id='to-do' className='input-to-do' value={novaTarefa}
                        onChange={(e) => setNovaTarefa(e.target.value)} />
                </label>
            </CustomModal>
            <CustomModal isOpen={deletemodal} onClose={closeModalDelete} deleteModal={true}>
                <h2>Deletar tarefa</h2>
                <p>Tem certeza que você deseja deletar essa tarefa?</p>
            </CustomModal>

        </main>
    )
}