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

  function onCompleteTask(taskId: number, value: boolean) {
    setTasks(prevTasks => {
      const findTask = prevTasks.find(task => task.id === taskId);

      if (findTask) {
        findTask.isCompleted = value;
        return prevTasks.map(task => (task.id === taskId ? findTask : task));
      }

      return prevTasks;
    });
  }

  function onDeleteTask(taskId: number) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  return (
    <main className={styles.tasks}>
      <AddTask onCreateTask={onCreateTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={onCompleteTask}
        onDeleteTask={onDeleteTask}
      />
    </main>
  );
}
