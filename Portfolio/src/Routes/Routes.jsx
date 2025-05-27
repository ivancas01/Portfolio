import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
