import React from "react";
import ReactDOM from "react-dom/client"; // Importing from 'react-dom/client'
import App from "./App";
import "./styles/style.css";

// Using createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
