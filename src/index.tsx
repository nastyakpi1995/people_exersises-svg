import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    overflow: visible;
    width: fit-content;
    height: fit-content;
  }

  @media (min-width: 1101px) {
     body {
       overflow: hidden;
     }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
