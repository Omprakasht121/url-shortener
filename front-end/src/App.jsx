import React from "react";
import { Register } from "./modules/user/pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./modules/landing-page/Home";
import { AppRoutes } from "./shared/routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;