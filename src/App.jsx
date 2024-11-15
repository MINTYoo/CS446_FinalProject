//import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import "./index.css";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Actor from "./pages/actor/actor";
import Author from "./pages/author/author";
import Wrestler from "./pages/wrestler/wrestler";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actor" element={<Actor />} />
        <Route path="/author" element={<Author />} />
        <Route path="/wrestler" element={<Wrestler />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
