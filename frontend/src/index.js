import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./context/globalContext";

import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </GlobalProvider>
  </React.StrictMode>
);
