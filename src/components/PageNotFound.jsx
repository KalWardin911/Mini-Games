import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function PageNotFound() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div><h4>Welcome To Gaming Website! Click Home to Go to HomePage.</h4>
    <br />
    <center><div style={{backgroundImage:"url(https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg)",height:"700px",width:"900px",backgroundSize:"cover"}}></div></center>   
    </div>
    </ThemeProvider>
  )
}
