import Image from 'next/image';
import './style.css';

export const Tarefa = ({ id, tarefa, status, openModalDelete, onToggleStatus }: { id: number, tarefa: string, status: boolean, openModalDelete: () => void, onToggleStatus: () => void }) => {
  const handleTrashClick = () => {
    openModalDelete();
  };
  const handleCheckboxChange = () => {
    onToggleStatus();
  };


  return (
    <div className='product'>
      <div>
        <input type="checkbox" name="to-do" checked={!status} onChange={handleCheckboxChange} />
        {status && <span>{tarefa}</span>}
        {!status && <span className='tarefa-concluida'>{tarefa}</span>}
      </div>
      <Image alt='trash' src={'trash.svg'} height={24} width={24} className='trash' onClick={handleTrashClick} />
    </div>
  );
};
