import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/preguntas.css';
import AppRoutes from './containers/AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);