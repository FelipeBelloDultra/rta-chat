import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #010315;
    color: #FFF;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
  }

  button {
    cursor: pointer;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    overflow-y: scroll;
  }

  a {
    color: inherit;
  }
`;
