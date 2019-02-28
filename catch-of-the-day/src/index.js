import React from 'react';
import { render } from 'react-dom'; // just pick one method from react-dom instead of whole package
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

render(<App />, document.querySelector('#main'));
