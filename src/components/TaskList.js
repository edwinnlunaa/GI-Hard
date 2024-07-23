import React from 'react'; 
import TaskItem from './TaskItem'; 

// Define a functional component named TaskList
// The component takes two props: tasks (an array of task objects) and setTasks (a function to update the tasks)
function TaskList({ tasks, setTasks }) {
  // Function to handle the deletion of a task
  const handleDelete = (id) => {
    // Filter out the task with the specified id
    const updatedTasks = tasks.filter(task => task.id !== id);
    // Update the state with the new list of tasks
    setTasks(updatedTasks);
    // Save the updated list of tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <ul>
      {/* Map over the tasks array to create a TaskItem component for each task */}
      {tasks.map(task => (
        // Pass the task object and handleDelete function as props to TaskItem
        <TaskItem key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
