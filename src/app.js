import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Application from './application/ApplicationComponent';

ReactDOM.hydrate(
  <BrowserRouter>
    <Application/>
  </BrowserRouter>,
  document.getElementById('root'),
);
