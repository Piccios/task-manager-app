import React from 'react';

const statusColors = {
    gray: "bg-gray-200 text-gray-800",
    green: "bg-green-200 text-green-800",
    yellow: "bg-yellow-200 text-yellow-800",
    blue: "bg-blue-200 text-blue-800",
    red: "bg-red-200 text-red-800",
};

export default function TaskList({ tasks }) {
    return (
        <div className="p-4 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">I miei Task</h2>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.id} className="bg-white shadow p-3 rounded flex justify-between items-center">
                        <span className={task.status?.name === "completed" ? "line-through text-gray-400" : ""}>{task.title}
                        </span>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${statusColors[task.status?.color] || "bg-gray-200 text-gray-800"}`}>
                            {task.status?.name ?? "N/A"}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
