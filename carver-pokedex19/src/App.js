import React from 'react';
import Header from './components/Header/Header';
import { theme } from './constants/theme';
import { ThemeProvider } from '@material-ui/core';
import Router from './routes/Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
