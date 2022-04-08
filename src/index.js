require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import App from './components/App/app';
import './style.scss'


const appElement = document.getElementById('root');



ReactDOM.render(
<Provider store={store}>
    <App />,

</Provider>,
 appElement);

