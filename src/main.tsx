import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './globalStyles';
import theme from './theme';
import '/image-equilibrium.jpg';
import '/icon-clock.svg';
import '/icon-ethereum.svg';
import '/icon-view.svg';
import '/image-avatar.png';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root')
);
