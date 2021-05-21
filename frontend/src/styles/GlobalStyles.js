// Packages
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000;
    --white: #FFF;

    --bg: #010315;

    --primary: #3B9DC0;
    --secondary: #3F3D56;
  }

  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg);
    color: var(--white);
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
