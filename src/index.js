require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import './style.scss'


const appElement = document.getElementById('root');

ReactDOM.render(<App />, appElement);

