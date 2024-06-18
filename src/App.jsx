import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalculateSingle from "./components/CalculateSingle";
import CalculateAll from "./components/CalculateAll";
import Navbar from "./components/NavBar";
import Guide from "./components/Guide";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CalculateSingle />} />
          <Route path="/combine" element={<CalculateAll />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
