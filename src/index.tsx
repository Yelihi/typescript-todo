import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import { GlobalStyle } from "./global-style";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
