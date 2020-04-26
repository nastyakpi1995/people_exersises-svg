import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    overflow: hidden;
  }
   @media (max-width: 601px) {
     .container-main {
       flex-direction: column;
     }
     .wrapper-img {
        width: 100%;
     }
   }

  @media (max-width: 1101px) {
    body {
        width: fit-content;
        height: fit-content;
        overflow: visible;
    }
    .wrapper-body {
      margin: 40px;
    }
    .wrapper-img {
       height: fit-content;
    }
    .box-wrapper {
       height: fit-content;
    }
    .hjJRWO {
       margin-top: 30px;
    }
    .iZZGCF {
        align-items: center;
        height: fit-content;
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
