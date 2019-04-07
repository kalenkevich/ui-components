import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Application from './application/ApplicationComponent';
import theme from './theme';

ReactDOM.hydrate(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Application>
      </Application>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
