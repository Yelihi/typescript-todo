import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Auth from "./Auth";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/todo" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
