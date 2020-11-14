import React from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

import { GlobalStyle } from "./GlobalStyle";

import Routes from "./routes";

function App() {
  return (
    <ScopedCssBaseline>
      <GlobalStyle />
      <Routes />
    </ScopedCssBaseline>
  );
}

export default App;
