import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import './TaskDetail.css';

function TaskDetail() {
  const { id } = useParams(); // Extract the task id from the URL parameters
  const [task, setTask] = useState(''); // State to hold the current task text
  const navigate = useNavigate(); // Hook to navigate to another route

  // useEffect hook to load the task details when the component mounts or the id changes
  useEffect(() => {
    // Retrieve tasks from localStorage or initialize an empty array
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Find the task with the matching id
    const currentTask = tasks.find(task => task.id === parseInt(id));
    // If the task is found, set the task state with the task text
    if (currentTask) setTask(currentTask.text);
  }, [id]); // Dependency array with id to rerun the effect when id changes

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Retrieve tasks from localStorage or initialize an empty array
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Map through the tasks and update the task with the matching id
    const updatedTasks = tasks.map(taskItem => 
      taskItem.id === parseInt(id) ? { ...taskItem, text: task } : taskItem
    );
    // Save the updated tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    // Navigate to the tasks page
    navigate('/tasks');
  };

  return (
    // Container for the task detail form
    <div className="task-detail-container">
      {/* Title of the edit task page */}
      <h1>Edit Task</h1>
      {/* Form for editing the task, calls handleSubmit on form submission */}
      <form onSubmit={handleSubmit} className="task-detail-form">
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
        {/* Submit button to save the changes */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default TaskDetail;
