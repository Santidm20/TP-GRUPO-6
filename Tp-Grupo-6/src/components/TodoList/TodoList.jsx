import React, { useState } from 'react';

function TodoList({ tasks, openTaskDetailModal, underlineTask, deleteTask }) {
  return (
    <div>
      <h2>Today's Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <p
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => openTaskDetailModal(task)}
          >
            {task.name}
          </p>
          <button onClick={() => underlineTask(task.id)}>
            {task.completed ? <i className="bi bi-check-circle-fill"></i> : <i className="bi bi-check-circle"></i>}
          </button>
          <button onClick={() => deleteTask(task.id)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;