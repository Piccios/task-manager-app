import { useState } from "react";

export default function TaskList({
    tasks,
    statuses,
    onStatusChange,
    onDelete,
}) {
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
                    <li
                        key={task.id}
                        className="bg-white shadow p-3 rounded flex justify-between items-center text-black"
                    >
                        <div>
                            <span
                                className={
                                    task.status?.name === "completed"
                                        ? "line-through text-gray-400"
                                        : ""
                                }
                            >
                                {task.title}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => {
                                    if (
                                        window.confirm("Sei sicuro di voler eliminare questo task?")
                                    ) {
                                        onDelete(task.id);
                                    }
                                }}
                                className="text-red-500 hover:text-red-700 transition"
                                title="Elimina"
                            >
                                🗑️
                            </button>

                            {editingTaskId === task.id ? (
                                <select
                                    value={task.status?.id}
                                    onChange={(e) => {
                                        onStatusChange(task.id, Number(e.target.value));
                                        setEditingTaskId(null);
                                    }}
                                    onBlur={() => setEditingTaskId(null)}
                                    className="text-sm p-1 rounded border border-gray-300 bg-white" autoFocus
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
                                    className={`text-sm font-medium px-2 py-1 rounded-full ${statusColors[task.status?.color] ||
                                        "bg-gray-200 text-gray-800"
                                        }`}
                                        title="Cambia stato"
                                >
                                    {task.status?.name ?? "N/A"}
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
