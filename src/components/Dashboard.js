import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Optional for styling
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function Dashboard() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="dashboard">
      <h1><u>Games</u></h1>
      <div className="card-container">
        <div className="card-wrapper" onClick={() => handleCardClick('/snake-game')}>
          <div className="card" style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/008/222/640/original/black-snake-logo-free-vector.jpg)",backgroundSize:"cover"}}></div>
          <h2 className="card-text">Snake Game</h2>
        </div>
        <div className="card-wrapper" onClick={() => handleCardClick('/memory-game')}>
          <div className="card" style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/thumbnails/000/210/745/small_2x/Playing_Cards_Back_Cover.jpg)",backgroundSize:"cover"}}></div>
          <h2 className="card-text">Memory Game</h2>
        </div>
        <div className="card-wrapper" onClick={() => handleCardClick('/hang-man-game')}>
          <div className="card" style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/017/433/482/original/hanging-rope-gallows-and-stairway-silhouette-dramatic-creepy-horror-scary-mystery-or-spooky-illustration-illustration-for-horror-movie-or-halloween-poster-element-illustration-vector.jpg)",backgroundSize:"cover"}} ></div>
          <h2 className="card-text">Hangman</h2>
        </div>
        <div className="card-wrapper"  onClick={() => handleCardClick('/tic-tac-toe')}>
          <div className="card" style={{backgroundImage:"url(https://smallimg.pngkey.com/png/small/205-2056473_tic-tac-toe-toe-tic-tac-play-comments.png)",backgroundSize:"cover"}}></div>
          <h2 className="card-text">tic-tac-toe</h2>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Dashboard;
