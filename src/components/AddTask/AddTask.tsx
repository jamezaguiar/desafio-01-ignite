import { CreateButton } from '../CreateButton';
import { Input } from '../Input';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './AddTask.module.css';

interface AddTaskProps {
  onCreateTask: (taskDescription: string) => void;
}

export function AddTask({ onCreateTask }: AddTaskProps) {
  const [inputValue, setInputValue] = useState('');

  function handleCreateTask() {
    onCreateTask(inputValue);
  }

  return (
    <div className={styles['add-task']}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <CreateButton onClick={handleCreateTask}>
        Criar <PlusCircle size={32} />
      </CreateButton>
    </div>
  );
}
