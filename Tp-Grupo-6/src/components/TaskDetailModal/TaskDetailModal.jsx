import React, { useState } from 'react';

function TaskDetailModal({ task, deleteTask, editTask, closeTaskDetailModal }) {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);
  const [editedTaskPriority, setEditedTaskPriority] = useState(task.priority);
  const [editedTaskCategory, setEditedTaskCategory] = useState(task.category);
  // Add more state variables for date, notes, etc.

  const handleEdit = () => {
    const editedTask = {
      ...task,
      name: editedTaskName,
      description: editedTaskDescription,
      priority: editedTaskPriority,
      category: editedTaskCategory,
      // Update more properties as needed
    };

    editTask(editedTask);
  };

  return (
    <div>
      <h2>Task Details</h2>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Category: {task.category}</p>
      {/* Display more details as needed */}
      <button onClick={handleEdit}>Edit Task</button>
      <button onClick={() => deleteTask(task.id)}>Delete Task</button>
      <button onClick={closeTaskDetailModal}>Close</button>
    </div>
  );
}

export default TaskDetailModal;