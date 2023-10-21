import { useState } from "react";

export function useTask() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleNewTask(event) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: 2,
        title: newTask,
        isComplete: false,
      },
    ]);

    setNewTask("");
  }

  function handleNewTaskChange({ target }) {
    setNewTask(target.value);
  }

  function deleteTask(id) {
    const taskList = tasks.filter((task) => task.id !== id);

    setTasks(taskList);
  }

  function handleToggleTaskCompletion(id) {
    const taskList = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(taskList);
  }

  const completes = tasks.filter((task) => {
    return task.isComplete !== false;
  });

  return {
    tasks,
    newTask,
    handleNewTask,
    handleNewTaskChange,
    deleteTask,
    handleToggleTaskCompletion,
    completes,
  };
}
