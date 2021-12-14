import React from 'react'; // import from the react library.
import ReactDOM from 'react-dom'; // the dom for the project
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/** This Renders the CSS into the graphical form displayed on webpages. */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // analytics of the site won't be used that much.
