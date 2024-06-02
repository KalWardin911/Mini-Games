import React, { useState } from 'react';
import Word from './Word';
import Keyboard from './Keyboard';
import './Hangman.css';
import './Hangstyle.css';
var wordList = require('english-word-list')
const words =wordList.range(4,9)



const Hangman = () => {
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const maxIncorrectGuesses = 6;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const isGameOver = incorrectGuesses >= maxIncorrectGuesses;
  const isGameWon = word.split('').every((letter) => guessedLetters.includes(letter));

  return (
    <div className="hangman">
      <h1>Hangman</h1>
      <p>{isGameOver ? 'Game Over' : isGameWon ? 'You Won!' : 'Keep Guessing!'}</p>
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard onGuess={handleGuess} disabled={isGameOver || isGameWon} />
      <p>Incorrect Guesses: {incorrectGuesses}</p>
      <p>{isGameOver ? `The word was: ${word}` : ''}</p>
    </div>
  );
};

export default Hangman;
