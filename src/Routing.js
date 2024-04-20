import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./App";
import LandingPage from "./page-components/components/landing-page/LandingPage";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
