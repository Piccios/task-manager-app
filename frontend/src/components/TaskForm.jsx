import { useState, useEffect } from "react";

export default function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [statuses, setStatuses] = useState([]);
    const [statusId, setStatusId] = useState(1); // default to "to do"

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/statuses")
            .then((res) => res.json())
            .then((data) => {
                setStatuses(data);
            if (data.length > 0) setStatusId(data[0].id);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newTask = {
            title: title,
            status_id: statusId,
        };
        console.log("Invio task:", newTask)
        
        try {
            const res = await fetch("http://127.0.0.1:8000/api/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask),
            });

            if (res.ok) {
                const data = await res.json();
                onTaskAdded(data);
                setTitle("");
                setStatusId(1); // reset to default
            } else {
                console.error("Errore nella creazione del task");
            }
        } catch (error) {
            console.error("Errore di rete:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
            <div className="flex gap-2 sm:flex-row sm:items-center">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nuovo task..."
                    className="flex-grow p-2 rounded border border-gray-300"
                    required
                />
                <select
                    value={statusId}
                    onChange={(e) => setStatusId(Number(e.target.value))}
                    className="p-2 border rounded bg-white text-gray-700"
                >
                    {statuses.map((status) => (
                        <option key={status.id} value={status.id}>
                            {status.name}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Aggiungi
                </button>
            </div>
        </form>
    );
}
