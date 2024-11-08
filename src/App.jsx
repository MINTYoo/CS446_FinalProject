import React, { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages /home /home";
import "./index.css";

// import Projects from "./pages/projects";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App content-grid">
      <header>
        <h1>Welcome to My Personal Portfolio</h1>
      </header>

      {/* About Me Section */}
      <section id="about-me" className="section">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a software engineer with a passion for building
          dynamic web applications. I love learning new technologies and working
          on exciting projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1: Portfolio Website</h3>
            <p>
              A personal website built using React and AWS to showcase my
              projects and experience.
            </p>
          </li>
          <li>
            <h3>Project 2: E-commerce App</h3>
            <p>
              An e-commerce platform with dynamic product listings, shopping
              cart, and checkout functionalities.
            </p>
          </li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form onSubmit={sendDataToLambda}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </div>
  );
}

export default App;
