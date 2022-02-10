import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input'
import Sub from './components/Sub'
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Sub/>
    <Input/>
  </React.StrictMode>,
  document.getElementById('root')
);

