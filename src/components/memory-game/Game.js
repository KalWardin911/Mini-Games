// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Board from './Board';

const generateCards = () => {
  const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  return [...cards, ...cards].sort(() => Math.random() - 0.5);
};

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped, cards, matched]);

  const handleClick = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div className="game">
        <center><h1 style={{float:"top"}}>Memory Game</h1></center>
      <Board cards={cards} flipped={flipped.concat(matched)} handleClick={handleClick} />
      <h1>Rules :</h1>
      <h3>Try your best to remember the Letters!</h3>
      <h3>Hit Refresh to restart. Or you can Go to Other games</h3>
    </div>
  );
};

export default Game;