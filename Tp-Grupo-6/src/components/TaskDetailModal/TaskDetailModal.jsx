import React, { useState } from 'react';

function TaskDetailModal({ task, deleteTask, editTask, closeTaskDetailModal }) {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);
  const [editedTaskPriority, setEditedTaskPriority] = useState(task.priority);
  const [editedTaskCategory, setEditedTaskCategory] = useState(task.category);
  const [editedTaskDate, setEditedTaskDate] = useState(task.date);
  const [editedTaskNotes, setEditedTaskNotes] = useState(task.notes);

  const handleEdit = () => {
    const editedTask = {
      ...task,
      name: editedTaskName,
      description: editedTaskDescription,
      priority: editedTaskPriority,
      category: editedTaskCategory,
      date: editedTaskDate,
      notes: editedTaskNotes,
    };

    editTask(editedTask);
  };

  return (
    <div className="overlay">
      <div className="modal-container detail-modal">
        <div className='modal-content'>
          <div className="modal-header">
            <h2>Task Details</h2>
          </div>
          <p>Name: {task.name}</p>
          <p>Description: {task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Category: {task.category}</p>
          <p>Task Date: {task.date}</p>
          <p>Additional Notes: {task.notes}</p>

          <div className='modal-actions'>
            <button className='modal-button bi bi-pencil-square' onClick={handleEdit}>Edit Task</button>
            <button className='modal-button bi bi-file-x' onClick={() => deleteTask(task.id)}>Delete Task</button>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default TaskDetailModal;