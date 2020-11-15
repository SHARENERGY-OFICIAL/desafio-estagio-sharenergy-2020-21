import React from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { StylesProvider } from "@material-ui/core/styles";

import { GlobalStyle } from "./GlobalStyle";

import Routes from "./routes";

function App() {
  return (
    <ScopedCssBaseline>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Routes />
      </StylesProvider>
    </ScopedCssBaseline>
  );
}

export default App;
