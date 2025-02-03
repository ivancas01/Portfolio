import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import App from "../App";

export const Routes = () => {
  return (
    <BrowserRouter basename="/porfolio">
      <Router>
        <Route path="/hola" element={<App />} />
      </Router>
    </BrowserRouter>
  );
};
