import { useState } from "react";

export default function TaskList({ tasks, statuses, onStatusChange }) {
    const [editingTaskId, setEditingTaskId] = useState(null);

    const statusColors = {
        gray: "bg-gray-200 text-gray-800",
        yellow: "bg-yellow-200 text-yellow-800",
        blue: "bg-blue-200 text-blue-800",
        green: "bg-green-200 text-green-800",
    };

    return (
        <div className="p-4 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">I miei Task</h2>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.id} className="bg-white shadow p-3 rounded flex justify-between items-center">
                        <span className={task.status?.name === "completed" ? "line-through text-gray-400" : ""}>
                            {task.title}
                        </span>
                        <span className={task.created_at ? "text-sm text-gray-500 p-2" : ""}>
                            {new Date(task.created_at).toLocaleDateString("it-IT", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            })}
                        </span>

                        {editingTaskId === task.id ? (
                            <select
                                value={task.status?.id}
                                onChange={(e) => {
                                    onStatusChange(task.id, Number(e.target.value));
                                    setEditingTaskId(null);
                                }}
                                onBlur={() => setEditingTaskId(null)}
                                className="text-sm p-1 rounded border border-gray-300 bg-white"
                                autoFocus
                            >
                                {statuses.map((status) => (
                                    <option key={status.id} value={status.id}>
                                        {status.name}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <button
                                onClick={() => setEditingTaskId(task.id)}
                                className={`text-sm font-medium px-2 py-1 rounded-full transition ${statusColors[task.status?.color] || "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {task.status?.name ?? "N/A"}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
