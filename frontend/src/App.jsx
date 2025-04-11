import React from 'react'
import './App.css'
import TaskList from './components/Tasklist.jsx';
import TaskForm from './components/TaskForm.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const [statuses, setStatuses] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/statuses")
    .then((res) => res.json())
    .then((data) => setStatuses(data));
}, []);
  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  const handleStatusChange = async (taskId, newStatusId) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status_id: newStatusId }),
      });
  
      if (res.ok) {
        const updatedTask = await res.json();
        setTasks((prev) =>
          prev.map((t) => (t.id === taskId ? updatedTask : t))
        );
      }
    } catch (error) {
      console.error("Errore durante l'aggiornamento dello status:", error);
    }
  };
  

  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Task Manager 👋</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} statuses={statuses} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default App;
