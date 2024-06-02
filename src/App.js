import "./App.css";
import Navbar from "./Navbar";
import Home from "./components/Home";
import MemoryGame from "./components/memory-game/Game";
import HangmanGame from "./components/react-hangman/Hangman";
import SnakeGame from "./components/snake-game/Game";
import TicTacToe from "./components/tic-tac-toe/Apps";
import Games from "./components/Dashboard";
import About from "./components/about";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mini-Games" element={<Home />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/hang-man-game" element={<HangmanGame />} />
          <Route path="/snake-game" element={<SnakeGame />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
