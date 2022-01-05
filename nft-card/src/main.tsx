import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalTheme from './theme';

ReactDOM.render(
  <>
    <GlobalTheme />
    <App />
  </>,
  document.getElementById('root')
);
