import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import CounterContextProvider from "./contexts/CounterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <CounterContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CounterContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
