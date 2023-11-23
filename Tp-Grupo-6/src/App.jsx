import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
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
      <button onClick={openCreateModal}>+ </button>
      <TodoList tasks={tasks} openTaskDetailModal={openTaskDetailModal} />
      {isCreateModalOpen && (
        <CreateTaskModal addTask={addTask} closeCreateModal={closeCreateModal} />
      )}
      {selectedTask && (
        <TaskDetailModal
          task={selectedTask}
          deleteTask={deleteTask}
          editTask={editTask}
          closeTaskDetailModal={closeTaskDetailModal}
        />
      )}
    </div>
  );
}

export default App;