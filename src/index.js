import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import the Tailwind CSS
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
