//import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import "./index.css";

// import Projects from "./pages/projects";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Navbar from "./components/Navbar";

import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actor" element={<Home />} />
        <Route path="/author" element={<Home />} />
        <Route path="/wrestler" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
