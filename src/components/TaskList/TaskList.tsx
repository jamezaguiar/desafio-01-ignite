import { Task } from '../../types';
import { NoTasks } from '../NoTasks';
import { TaskItem } from '../TaskItem';
import { TasksInfo } from '../TasksInfo';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onCompleteTask: (taskId: number, value: boolean) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TaskList({
  tasks,
  onCompleteTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <div className={styles['task-list']}>
      <TasksInfo tasks={tasks} />
      {tasks.length > 0 ? (
        <div className={styles['task-list-content']}>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onCheck={onCompleteTask}
              onDelete={onDeleteTask}
            />
          ))}
        </div>
      ) : (
        <NoTasks />
      )}
    </div>
  );
}
