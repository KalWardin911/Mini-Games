// src/components/Board.js
import React from 'react';
import Card from './Card';
import "./Board.css";

const Board = ({ cards, flipped, handleClick }) => (
  <div className="Mboard">
    {cards.map((card, index) => (
      <Card
        key={index}
        id={index}
        card={card}
        isFlipped={flipped.includes(index)}
        onClick={handleClick}
      />
    ))}
  </div>
);

export default Board;
