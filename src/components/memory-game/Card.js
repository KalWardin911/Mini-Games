// src/components/Card.js
import React from 'react';
import "./Card.css";
const Card = ({ id, card, isFlipped, onClick }) => (
  <div className="Mcard" onClick={() => onClick(id)}>
    {isFlipped ? card : 'X'}
  </div>
);

export default Card;
