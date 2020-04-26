import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    overflow: hidden;
  }

  @media (max-width: 1101px) {
     body {
       width: fit-content;
       height: fit-content;
       overflow: visible;
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
