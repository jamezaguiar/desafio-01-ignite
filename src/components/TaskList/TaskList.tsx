import { Task } from '../../types';
import { DeleteButton } from '../DeleteButton';
import { TasksInfo } from '../TasksInfo';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles['task-list']}>
      <TasksInfo tasks={tasks} />
    </div>
  );
}
