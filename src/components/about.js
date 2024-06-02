import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function About() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to MINI-GAMES website, where we are committed to providing exceptional quality Games to our valued gamers. We have been dedicated to excellence in everything we do.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our mission is to let everyone play games for free in our website. We strive to provide good, fun games while ensuring that our customers receive the best possible experience.
      </p>
      
      <h2>Our Values</h2>
      <ul>
        <li><strong>Quality:</strong> We never compromise on quality. Our games are carefully crafted and rigorously tested to meet the highest standards; "without Errors"</li>
        <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We are committed to meeting their needs and exceeding their expectations.</li>
        <li><strong>Innovation:</strong> We embrace change and continuously seek new ways to improve and innovate.</li>
        <li><strong>Integrity:</strong> We give games for free with honesty and integrity, ensuring transparency and trust with our gamers.</li>
      </ul>
      
      <h2>Our Team</h2>
      <p>
        Our team is composed of passionate and skilled 2 Students who are dedicated to delivering outstanding service. 
      </p>
      
    </div>
    </ThemeProvider>
  );
}

export default About;