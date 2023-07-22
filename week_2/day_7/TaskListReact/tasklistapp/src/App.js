import './App.css';

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Task } from './models/Task';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';

function App() {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    if (!tasks.length) {
      loadTasksFromLocalStorage();
    }
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  function onTaskCreate(name) {
   
    const id = new Date().getTime();

    const task = new Task(id, name, false);

    
    setTasks([...tasks, task]);
  }

  function onTaskRemove(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function onTaskCompleteToggle(taskId) {
    
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    setTasks(
      tasks.map((task) => {
        return task.id == taskId ? taskToToggle : task;
      })
    );
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJson(x)));
      }
    }
  }

  return (
    <div className="container mt-5">
      <div className="text-center">
          <h1 class="text-6xl text-center mt-10 mb-10"> Task Manager</h1> 


          <h3 class="text-2xl text-center mt-10 mb-10"> Our simple task list</h3>

        <TaskInput onTaskCreate={onTaskCreate} />
        <TaskTable
          tasks={tasks}
          onTaskRemove={onTaskRemove}
          onTaskCompleteToggle={onTaskCompleteToggle}
        />
      </div>
    </div>
  );
}

export default App;