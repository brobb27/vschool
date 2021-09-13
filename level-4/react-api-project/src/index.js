import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ContextInfoProvider } from './components/contextInfo'


ReactDOM.render(
  <Router>
    <ContextInfoProvider>
      <App />
    </ContextInfoProvider>
  </Router>,
  document.getElementById('root')
);

