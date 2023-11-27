import React, { useState } from "react";

function CreateTaskModal({ addTask, closeCreateModal }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medio");
  const [taskCategory, setTaskCategory] = useState("Trabajo");
  const [taskDate, setTaskDate] = useState("");
  const [taskNotes, setTaskNotes] = useState("");
  const handleGoBack = () => {
    closeCreateModal();
  };

  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      date: taskDate,
      notes: taskNotes,
    };

    addTask(newTask);

    setTaskName("");
    setTaskDescription("");
    setTaskPriority("Medio");
    setTaskCategory("Trabajo");
    setTaskDate("");
    setTaskNotes("");
  };

  return (
    <div className="overlay">
      <div className="modal-container create-modal">
        <div className="modal-con">
          <button className="atras bi bi-arrow-left" onClick={handleGoBack}>
            Inicio
          </button>
          <br />
          <label>
            <input
              className="nombre"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Nombre de la tarea"
            />
          </label>
          <label>
            <input
              className="d"
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Descrición de la tarea"
            />
          </label>
          <br />
          <label
            className="prior"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="bi bi-exclamation-octagon"> Prioridad:</span>
            <select
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            >
              <option value="Dificil">Dificil</option>
              <option value="Medio">Medio</option>
              <option value="Bajo">Facil</option>
            </select>
          </label>

          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="date bi bi-calendar"> Fecha:</span>

            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </label>
          <label className="bi bi-list-task">
            Notas:
            <br />
            <textarea
              style={{
                width: "190%",
                height: "70px",

                boxSizing: "border-box",
                display: "block",
              }}
              value={taskNotes}
              onChange={(e) => setTaskNotes(e.target.value)}
              placeholder="Notas adicionales..."
            />
          </label>
          <br />
          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="bi bi-folder-plus"> Categoria:</span>
            <select
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
            >
              <option value="Work">Trabajo</option>
              <option value="Home">Hogar</option>
            </select>
          </label>
          <div className="modal-actions">
            <button
              className="bi bi-check-circle-fill modal-button"
              onClick={handleSave}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
