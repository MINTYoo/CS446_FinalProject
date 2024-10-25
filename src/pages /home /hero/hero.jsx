import React from "react";
import "./hero.css";
// import profileImage from "./image.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm John</h1>
        <p>A passionate actor dedicated to wrestling.</p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
      <div className="hero-image">
        {/* <img src={profileImage} alt="Profile" /> */}
      </div>
    </section>
  );
}

export default Hero;
