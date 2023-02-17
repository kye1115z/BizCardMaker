import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./Component/Info";
import Name from "./Component/Name";
import HomePage from "./Component/HomePage";
import SelectTamplate from "./Component/SelectTamplate";
import BasicCardOne from "./Component/business-card/BasicCardOne";
import BasicCardTwo from "./Component/business-card/BasicCardTwo";
import BasicCardThree from "./Component/business-card/BasicCardThree";
import Share from "./Component/Share";
import ResultPage from "./Component/ResultPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/name" element={<Name />} />
        <Route path="/info" element={<Info />} />
        <Route path="/select-template" element={<SelectTamplate />} />
        <Route path="/basic-card1" element={<BasicCardOne />} />
        <Route path="/basic-card2" element={<BasicCardTwo />} />
        <Route path="/basic-card3" element={<BasicCardThree />} />
        <Route path="/share" element={<Share />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
