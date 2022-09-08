import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import MovieList from './movielist';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Here I call the component MovieList which will in turn call all the other components and display them
  React.createElement(MovieList, {}, null)
);

reportWebVitals();
