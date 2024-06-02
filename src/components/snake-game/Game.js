import React, { useState, useEffect, useRef } from 'react';
import './Game.css';

const CELL_SIZE = 20;
const WIDTH = 400;
const HEIGHT = 400;
const DIRECTIONS = {
  37: { x: -1, y: 0 }, // left arrow
  38: { x: 0, y: -1 }, // up arrow
  39: { x: 1, y: 0 }, // right arrow
  40: { x: 0, y: 1 }, // down arrow
};

const Game = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [direction, setDirection] = useState(DIRECTIONS[39]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [speed, setSpeed] = useState(200);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem('highScore') || 0
  );
  const boardRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (DIRECTIONS[e.keyCode]) {
        setDirection(DIRECTIONS[e.keyCode]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;
        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
          setScore(score + 1);
          setFood({
            x: Math.floor(Math.random() * (WIDTH / CELL_SIZE)),
            y: Math.floor(Math.random() * (HEIGHT / CELL_SIZE)),
          });
          setSpeed(speed - 10);
        } else {
          newSnake.pop();
        }
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= WIDTH / CELL_SIZE ||
          head.y >= HEIGHT / CELL_SIZE ||
          newSnake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
        ) {
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('highScore', score);
          }
          setSnake([{ x: 2, y: 2 }]);
          setDirection(DIRECTIONS[39]);
          setFood({ x: 5, y: 5 });
          setScore(0);
          setSpeed(200);
        }
        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [direction, food, score, highScore, speed]);

  return (
    <div>
    <center><h1>Snake Game</h1></center>
    <div className="game-container">
      <div
        className="board"
        style={{ width: WIDTH, height: HEIGHT }}
        ref={boardRef}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className="snake-segment"
            style={{
              left: `${segment.x * CELL_SIZE}px`,
              top: `${segment.y * CELL_SIZE}px`,
            }}
          />
        ))}
        <div
          className="food"
          style={{
            left: `${food.x * CELL_SIZE}px`,
            top: `${food.y * CELL_SIZE}px`,
          }}
        />
      </div>
      <div className="score-container">
        <div><h2>Score: {score}</h2></div>
        <div><h2>High Score: {highScore}</h2></div>
      </div>
    </div>
    </div>
  );
};

export default Game;
