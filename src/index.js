import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// This is "Hooking" React ITSELF to the html element with the ID of "root", located in index.html

root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

//  <h1>Hello world</h1> ---- Here we are rendering the App ccomponent, but in fact you can also render 
//  other things as well 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
