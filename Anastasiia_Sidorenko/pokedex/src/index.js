import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configStore';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, root);


