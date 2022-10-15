import styles from './Tasks.module.css';
import { AddTask } from '../AddTask';
import { useState } from 'react';
import { Task } from '../../types';
import { TaskList } from '../TaskList';

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onCreateTask(taskDescription: string) {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        description: taskDescription,
        isCompleted: false,
      },
    ]);
  }

  return (
    <main className={styles.tasks}>
      <AddTask onCreateTask={onCreateTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}
