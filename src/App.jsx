//import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import './index.css'; 

// import Projects from "./pages/projects";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    
    <Router>
      {/* <Navbar /> {} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>
  );
};

export default App;