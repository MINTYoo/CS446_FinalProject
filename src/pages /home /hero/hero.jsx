import React from "react";
import "./hero.css";
import profileImage from "./assets/profile.jpg"; // Make sure to have an image in this path

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm [Your Name]</h1>
        <p>
          A passionate software engineer dedicated to building innovative and
          user-friendly applications.
        </p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
