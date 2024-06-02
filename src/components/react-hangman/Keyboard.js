import React from 'react';
import './Keyboard.css';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Keyboard = ({ onGuess, disabled }) => {
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={disabled}
          className="key"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
