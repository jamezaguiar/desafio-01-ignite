import { Task } from '../../types';
import styles from './TasksInfo.module.css';

interface TaskInfoProps {
  tasks: Task[];
}

export function TasksInfo({ tasks }: TaskInfoProps) {
  const completedTasks = tasks.filter(task => task.isCompleted);

  return (
    <div className={styles['tasks-info']}>
      <span className={styles['created-label']}>
        Tarefas criadas<span className={styles.pill}>{tasks.length}</span>
      </span>
      <span className={styles['concluded-label']}>
        Concluídas
        <span className={styles.pill}>
          {completedTasks.length} de {tasks.length}
        </span>
      </span>
    </div>
  );
}
