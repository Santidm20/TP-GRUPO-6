import React, { useState } from 'react';

function CreateTaskModal({ addTask, closeCreateModal }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskCategory, setTaskCategory] = useState('Work');
  // You can add more state variables for date, notes, etc.

  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      // Add more properties as needed
    };

    addTask(newTask);
  };

  return (
    <div>
      <h2>Create Task</h2>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <label>
        Task Description:
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </label>
      <label>
        Priority:
        <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <label>
        Category:
        <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Home">Home</option>
        </select>
      </label>
      {/* Add more input fields for date, notes, etc. */}
      <button onClick={handleSave}>Save Task</button>
      <button onClick={closeCreateModal}>Cancel</button>
    </div>
  );
}

export default CreateTaskModal;