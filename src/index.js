import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./assets/css/reset.css";
import "./assets/js/scale.js";
import 'antd-mobile/dist/antd-mobile.css';
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import App from './App';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
