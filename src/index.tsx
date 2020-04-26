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
     .ovqzq {
       flex-direction: column;
     }
     .htnrsp {
        width: 100%;
     }
   }

  @media (max-width: 1101px) {
    body {
        width: fit-content;
        height: fit-content;
        overflow: visible;
    }
    .gLTdYw {
      margin: 40px;
    }
    .htohlh {
      height: 100vh;
    }
    .htnrsp {
       height: fit-content;
    }
    .hjJRWO {
       margin-top: 30px;
    }
    .htohlh {
       height: fit-content;
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
