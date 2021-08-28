import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UglyContextProvider} from './components/uglyContext'


ReactDOM.render(
  <UglyContextProvider>
    <App />
  </UglyContextProvider>, 
  document.getElementById('root')
);


