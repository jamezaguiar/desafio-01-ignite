import { Task } from '../../types';
import { DeleteButton } from '../DeleteButton';
import styles from './TaskItem.module.css';
import classNames from 'classnames';
import { Checkbox } from '../Checkbox';

interface TaskItemProps {
  task: Task;
  onCheck: (taskId: number, checked: boolean) => void;
  onDelete: (taskId: number) => void;
}

export function TaskItem({ task, onCheck, onDelete }: TaskItemProps) {
  return (
    <div
      className={classNames(styles['task-item'], {
        [styles['task-item--completed']]: task.isCompleted,
      })}
    >
      <Checkbox
        checked={task.isCompleted}
        onChange={e => onCheck(task.id, e.target.checked)}
      />
      <span className={styles['task-description']}>{task.description}</span>
      <DeleteButton onClick={() => onDelete(task.id)} />
    </div>
  );
}
