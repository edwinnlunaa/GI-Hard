import React, { useState, useEffect } from 'react'; 
import TaskList from '../components/TaskList'; 
import './TasksPage.css';

function TasksPage() {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks

  // useEffect hook to load tasks from localStorage when the component mounts
  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || []; // Retrieve tasks from localStorage or initialize an empty array
    setTasks(tasksFromStorage); // Set the state with the retrieved tasks
  }, []); // Empty dependency array to run effect only once on mount

  return (
    // Container for the tasks page
    <div className="tasks-page">
      <h1>Tasks</h1> {/* Title of the tasks page */}
      <TaskList tasks={tasks} setTasks={setTasks} /> {/* Render the TaskList component with tasks and setTasks props */}
    </div>
  );
}

export default TasksPage;
