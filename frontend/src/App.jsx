import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/Tasklist.jsx';
import TaskForm from './components/TaskForm.jsx';

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

  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

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
      } else {
        console.error("Errore PATCH:", res.status);
      }
    } catch (error) {
      console.error("Errore durante PATCH:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setTasks((prev) => prev.filter((t) => t.id !== taskId));
      } else {
        console.error("Errore durante l'eliminazione");
      }
    } catch (error) {
      console.error("Errore di rete:", error);
    }
  };

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 max-w-xl w-full">
        {/* Toggle dark mode */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 dark:text-white rounded hover:scale-105 transition"
        >
          🌙
        </button>

        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Task Manager 👋
        </h1>

        <TaskForm onTaskAdded={handleTaskAdded} />
        <TaskList
          tasks={tasks}
          statuses={statuses}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;

