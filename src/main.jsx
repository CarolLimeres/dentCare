import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { App } from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <App></App>
  </React.StrictMode>
);
