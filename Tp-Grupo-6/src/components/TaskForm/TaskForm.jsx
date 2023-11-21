import { useState } from "react";

export function TaskForm({ createNewTask }) {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          placeholder="Ingrese una tarea"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>Agregar</button>
      </form>
    </div>
  );
}
