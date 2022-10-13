import { Input } from '../Input';
import styles from './Main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <Input placeholder="Adicione uma nova tarefa" />
    </main>
  );
}
