import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './Apps.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const initialBoard = Array(9).fill(null);

function Apps() {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (board[index] || winner || isDraw) return;

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const calculatedWinner = calculateWinner(newBoard);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
      setShowConfetti(true);
    } else if (!newBoard.includes(null)) {
      setIsDraw(true);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setWinner(null);
    setShowConfetti(false);
    setIsDraw(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="Apps">
      <h1>Tic Tac Toe Game</h1>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <h1>Player 1:X  ~~  Player 2:O</h1>
      {winner && (
        <div className="winner-message">
          <h2>Congratulations {winner}!</h2>
          {showConfetti && <Confetti />}
          <button onClick={handleReset}>Play Again</button>
        </div>
      )}
      {isDraw && (
        <div className="winner-message">
          <h2>It's a Draw!</h2>
          <button onClick={handleReset}>Play Again</button>
        </div>
      )}
    </div>
    </ThemeProvider>
  );
}

export default Apps;
