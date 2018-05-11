import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/app">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
