import React from 'react';
import '../styles/ToggleMode.css'; // create this file

const ToggleMode = () => {
  const toggleMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <button className="toggle-mode" onClick={toggleMode}>
      🌓 Toggle Dark Mode
    </button>
  );
};

export default ToggleMode;
