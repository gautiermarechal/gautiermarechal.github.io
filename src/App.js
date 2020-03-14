import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TopPart from './components/TopPart';
import './App.css';
import TopBar from './components/TopBar';
import Projects from './components/Projects';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    appRoot: {
      backgroundColor: '#F0F8FF',
      height: '100%',
    },
    header: {
      minHeight: '100vh',
      paddingTop: '300px',
      color: 'white',
      },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.appRoot}>
      <TopBar />
      <TopPart/>
      <Projects/>
    </div>
    </ThemeProvider>
  );
}

export default App;
