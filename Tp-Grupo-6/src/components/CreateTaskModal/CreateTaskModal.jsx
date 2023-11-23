import React, { useState } from 'react';

function CreateTaskModal({ addTask, closeCreateModal }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskCategory, setTaskCategory] = useState('Work');
 

  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      
    };

    addTask(newTask);
  };

  return (
    <div className='overlay'>
      <div className='modal-container create-modal'>
        <div className='modal-header'>
          <h2>Create Task</h2>
        </div>
          <div className='modal-content'>
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
           
            <div className='modal-actions'>
              <button className='modal-button' onClick={handleSave}>Save Task</button>
              <button className='modal-button' onClick={closeCreateModal}>Cancel</button>
            </div>
          </div>        
      </div>
    </div>
  );
}

export default CreateTaskModal;