import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
      <center><h1><u>Home Page</u></h1></center>
      <div style={{display: "flex"}}>
        <div id="lefts" style={{
          height: "400px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}>
          <h1>Welcome to MINI-GAMES website.</h1>
          <p>
            At this website, we are dedicated to providing games with our coding skills. Our team of experts is here to help you with the games you need to enjoy your free time. We pride ourselves on our commitment to excellence and our ability to meet the unique needs of each gamers.
          </p>
          <p>
            Explore our site to play more games with big inspiration to Coding 'N Gaming.
          </p>
          <p>
            Thank you for visiting this website. We look forward to have you playing games again.
          </p>
        </div>
        <div style={{
          backgroundImage: "url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600)",
          height: "400px",  // Adjusted height to match the left div
          width: "50%",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
      </div>
     
    </div>
    </ThemeProvider>
  );
}

export default Home;