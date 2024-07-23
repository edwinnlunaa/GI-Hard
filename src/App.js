import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/task/:id/edit" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
