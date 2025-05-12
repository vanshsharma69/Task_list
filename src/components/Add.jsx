import React, { useState } from 'react';
import "./Add.css";

const Add = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className='Container'>
      <input
        type='text'
        className='input'
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className='button' onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Add;
