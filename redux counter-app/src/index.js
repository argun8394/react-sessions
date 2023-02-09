import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {store} from './redux/store';
//componentlerimizi store daki verilerden haberdar etmemiz için store ile sarmallamamız lazım

import { Provider } from 'react-redux';
//provider sayesinde sarmallanan componentlerde geçen store daki dataları paslamak

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* burada store u da poperti olarak veriyoruz*/}
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
