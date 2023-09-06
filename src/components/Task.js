import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} data-testid="task">
      <h3>{task.text} <span style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} data-testid="delete-button">X</span></h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;