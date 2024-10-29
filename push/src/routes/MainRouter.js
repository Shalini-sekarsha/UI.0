import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExampleView from "../views/ExampleView";
import Requirement from "../components/client/requirements/Requirement";
import Navbar from "../components/client/requirements/Navbar";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Requirement />} />
       
      </Routes>
    </Router>
  );
};

export default MainRouter;
