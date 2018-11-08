import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/app.css";
import { AuthProvider } from "./context/auth-context";
import App from "./App";

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
