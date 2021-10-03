import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextInfoProvider } from './components/contextInfo';

ReactDOM.render(
  <ContextInfoProvider>
    <App />
  </ContextInfoProvider>,
  document.getElementById('root')
);

