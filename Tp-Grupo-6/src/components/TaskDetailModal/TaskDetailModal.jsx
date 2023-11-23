import React, { useState } from 'react';

function TaskDetailModal({ task, deleteTask, editTask, closeTaskDetailModal }) {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);
  const [editedTaskPriority, setEditedTaskPriority] = useState(task.priority);
  const [editedTaskCategory, setEditedTaskCategory] = useState(task.category);


  const handleEdit = () => {
    const editedTask = {
      ...task,
      name: editedTaskName,
      description: editedTaskDescription,
      priority: editedTaskPriority,
      category: editedTaskCategory,
      
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
          
        
          <div className='modal-actions'>
            <button className='modal-button' onClick={handleEdit}>Edit Task</button>
            <button className='modal-button' onClick={() => deleteTask(task.id)}>Delete Task</button>
            <button className='modal-button' onClick={closeTaskDetailModal}>Close</button>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default TaskDetailModal;