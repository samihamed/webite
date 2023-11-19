import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "@fontsource/cormorant-garamond"
import "@fontsource/lato"
import "@fontsource/quicksand"
import "@fontsource/bebas-neue"
import "@fontsource/rowdies"
import "@fontsource/anton"

import './styles/App.scss'
import './styles/Colors.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
