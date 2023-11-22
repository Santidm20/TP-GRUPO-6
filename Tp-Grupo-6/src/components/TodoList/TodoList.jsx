import React from 'react';

function TodoList({ tasks, openTaskDetailModal }) {
  return (
    <div>
      <h2>Today's Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.name}</p>
          <button onClick={() => openTaskDetailModal(task)}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;