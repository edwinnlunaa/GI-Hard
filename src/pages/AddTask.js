import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './AddTask.css'; 

// Define a functional component named AddTask
function AddTask() {
  const [task, setTask] = useState(''); // State to hold the new task input
  const navigate = useNavigate(); // Hook to navigate to another route

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get existing tasks from localStorage or initialize an empty array
    const newTask = { id: Date.now(), text: task }; // Create a new task object with a unique id and the input text
    tasks.push(newTask); // Add the new task to the tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated tasks array to localStorage
    navigate('/tasks'); // Navigate to the tasks page
  };

  return (
    // Container for the add task form
    <div className="add-task-container">
      {/* Title of the add task page */}
      <h1>Add New Task</h1>
      {/* Form for adding a new task, calls handleSubmit on form submission */}
      <form onSubmit={handleSubmit} className="add-task-form">
        <div className="form-group">
          {/* Label for the task input */}
          <label htmlFor="task">Task:</label>
          {/* Input field for the task, updates the task state on change */}
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        {/* Submit button to add the task */}
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
