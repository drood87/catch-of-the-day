import React from 'react';
import { render } from 'react-dom'; // just pick one method from react-dom instead of whole package
import Router from './components/Router';
import './css/style.css';

render(<Router />, document.querySelector('#main'));
