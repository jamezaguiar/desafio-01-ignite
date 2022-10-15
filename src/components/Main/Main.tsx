import { CreateButton } from '../CreateButton';
import { Input } from '../Input';
import { PlusCircle } from 'phosphor-react';
import styles from './Main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <Input placeholder="Adicione uma nova tarefa" />
      <CreateButton>
        Criar <PlusCircle size={32} />
      </CreateButton>
    </main>
  );
}
