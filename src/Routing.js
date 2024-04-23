import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./App";
import LandingPage from "./page-components/components/landing-page/LandingPage";
import Welcome from "./page-components/components/welcome/Welcome";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
