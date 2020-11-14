import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .MuiScopedCssBaseline-root {
    background-color: transparent;
    color: #ddd;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  }

  body {
    background-color: rgb(42, 42, 42);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100%;
  }

`;
