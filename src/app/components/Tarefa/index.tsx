import Image from 'next/image';
import './style.css';

export const Tarefa = ({ tarefa, status, openModalDelete }: { tarefa: string, status: boolean, openModalDelete: () => void }) => {
    const handleTrashClick = () => {
      openModalDelete();
    };

    return (
        <div className='product'>
          <div>
            <input type="checkbox" name="to-do" />
            {status && <span>{tarefa}</span>}
            {!status && <span className='tarefa-concluida'>{tarefa}</span>}
          </div>
          <Image alt='trash' src={'trash.svg'} height={24} width={24} className='trash' onClick={handleTrashClick} />
        </div>
      );
};
