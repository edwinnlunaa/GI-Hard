import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      {/* unordered list to hold navigation links */}
      <ul>
        {/* List item with a link to the "To Do List" page */}
        <li><Link to="/tasks">To Do List</Link></li>
        {/* List item with a link to the "Add Task" page */}
        <li><Link to="/add-task">Add Task</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
