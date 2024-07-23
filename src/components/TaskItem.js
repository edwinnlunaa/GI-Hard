import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './TaskItem.css'; 

// Define a functional component named TaskItem
// The component takes two props: task (an object representing a task) and onDelete (a function to handle task deletion)
function TaskItem({ task, onDelete }) {
  return (
    // Return a list item with a class name for styling
    <li className="task-item">
      {/* Display the task text */}
      <span className="task-text">{task.text}</span>
      {/* Container for action buttons */}
      <div className="task-actions">
        {/* Link to the edit page for the task */}
        <Link to={`/task/${task.id}`} className="edit-button">Edit</Link>
        {/* Button to delete the task, calls onDelete with the task's id when clicked */}
        <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
