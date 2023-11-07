import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <Home></Home>
  </React.StrictMode>
);
