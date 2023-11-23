import React, { useState } from 'react';

function CreateTaskModal({ addTask, closeCreateModal }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskCategory, setTaskCategory] = useState('Work');
  const [taskDate, setTaskDate] = useState('');
  const [taskNotes, setTaskNotes] = useState('');

  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      date: taskDate,
      notes: taskNotes,
    };

    addTask(newTask);
    
    setTaskName('');
    setTaskDescription('');
    setTaskPriority('Medium');
    setTaskCategory('Work');
    setTaskDate('');
    setTaskNotes('');
  };

  return (
    <div className='overlay'>
      <div className='modal-container create-modal'>
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
          <label className='bi bi-folder-plus'>
            Category:
            <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
            </select>
          </label>
          <label className='bi bi-calendar'>
            Due Date:
            <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
          </label>
          <label className='bi bi-list-task'>
            Notes:
            <textarea value={taskNotes} onChange={(e) => setTaskNotes(e.target.value)} />
          </label>
          <div className='modal-actions'>
            <button className='bi bi-check-circle-fill modal-button' onClick={handleSave}>Save Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
