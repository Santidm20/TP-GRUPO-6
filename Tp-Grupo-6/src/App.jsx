import React, { useState } from 'react';
import CreateTaskModal from './components/CreateTaskModal/CreateTaskModal';
import TaskDetailModal from './components/TaskDetailModal/TaskDetailModal';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  const openTaskDetailModal = (task) => {
    setSelectedTask(task);
  };

  const closeTaskDetailModal = () => {
    setSelectedTask(null);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    closeCreateModal();
  };

  const underlineTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    closeTaskDetailModal();
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    closeTaskDetailModal();
  };

  const editTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
    closeTaskDetailModal();
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div className='whole'>
        <h2>TaskWit</h2>
        <table>
          <thead>
            <tr>
              <th>
                Today               
              </th>
              <th></th>
              <th><button onClick={openCreateModal} style={{ marginLeft: '10px' }}>+ </button></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <button className='sub' onClick={() => underlineTask(task.id)}>
                    {task.completed ? <i className="bi bi-check-circle-fill"></i> : <i className="bi bi-check-circle"></i>}
                  </button>
                </td>
                <td
                  style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '10px' }}
                  onClick={() => openTaskDetailModal(task)}
                >
                  {task.name}
                </td>
                <td>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'background-color 0.3s', 
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = 'darkred')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = 'red')}
                >
                  <i className="jose bi bi-x-lg"></i>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isCreateModalOpen && (
        <CreateTaskModal addTask={addTask} closeCreateModal={closeCreateModal} />
      )}
      {selectedTask && (
        <TaskDetailModal
          task={selectedTask}
          underlineTask={underlineTask}
          deleteTask={deleteTask}
          editTask={editTask}
          closeTaskDetailModal={closeTaskDetailModal}
        />
      )}
    </div>
  );
}

export default App;