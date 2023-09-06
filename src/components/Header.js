import React from 'react';

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <button className='btn' onClick={onAdd}>{showAdd ? 'Close' : 'Add'}</button>
    </header>
  )
}

export default Header;