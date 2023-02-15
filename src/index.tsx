import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import ThemeProvider from "./Context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:3001";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
