import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export {default as About} from "./components/pages/About";
export {default as Contact} from "./components/pages/Contact";
export {default as Hobbies} from "./components/pages/Hobbies";
export {default as Home} from "./components/pages/Home";
export {default as Projects} from "./components/pages/Projects";
export {default as Skills} from "./components/pages/Skills";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
