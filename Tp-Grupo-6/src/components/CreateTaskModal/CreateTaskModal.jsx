import React, { useState } from 'react';

function CreateTaskModal({ addTask, closeCreateModal }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskCategory, setTaskCategory] = useState('Work');
  const [taskDate, setTaskDate] = useState('');
  const [taskNotes, setTaskNotes] = useState('');
  const handleGoBack = () => {
    
    closeCreateModal();
  };


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
        <div className='modal-con'>
        <button className="atras bi bi-arrow-left" onClick={handleGoBack}>
            Home
          </button>
          <br />
        <label>
          <input className='nombre'
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Nombre de la tarea"
          />
         </label>
          <label>
            
            <input className='d'
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Task Description"
            />
          </label>
          <br />
          <label className='prior' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className='bi bi-exclamation-octagon'>
              Priority:
            </span>
            <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          
          <label  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
              <span className='date bi bi-calendar'>Due Date:</span>
            
            <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
          </label>
          <label className='bi bi-list-task'>
            Notes:
            <br />
            <textarea
            style={{
              width: '190%',
              height: '70px',
              
              boxSizing: 'border-box',
              display: 'block',
            }}
            value={taskNotes}
            onChange={(e) => setTaskNotes(e.target.value)}
            placeholder="Aditional Notes"
            />
          </label>
          <br />
          <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <span className='bi bi-folder-plus'>Category:</span> 
            <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
            </select>
          </label>
          <div className='modal-actions'>
            <button className='bi bi-check-circle-fill modal-button' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
