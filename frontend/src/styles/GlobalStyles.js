import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    overflow-y: scroll;
  }
`;
