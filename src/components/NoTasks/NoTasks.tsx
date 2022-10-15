import { ListBullets } from 'phosphor-react';
import styles from './NoTasks.module.css';

export function NoTasks() {
  return (
    <div className={styles['no-tasks']}>
      <div className={styles['no-tasks-message']}>
        <ListBullets size={120} color="#333333" />
        <span className={styles['no-tasks-text']}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <br />
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  );
}
