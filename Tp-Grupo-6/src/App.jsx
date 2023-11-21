
import { useState, useEffect } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm/TaskForm";
import Swal from "sweetalert2";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.nombre === taskName)) {
      setTasksItems([...tasksItems, { nombre: taskName, realizada: false }]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La tarea ya existe",
      });
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []); // <-- Agrega la lista de dependencias vacía

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <>
      <TaskForm createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.nombre}>
              <td>{task.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;