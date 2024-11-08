import React from "react";
import "./hero.css";
import profileImage from "./assets/profile.jpg"; // Make sure to have an image in this path

function Hero() {
  return (
    <section className="hero flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-16 md:px-20 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-500 text-white min-h-screen">
      <div className="hero-content max-w-lg md:max-w-xl mb-8 md:mb-0 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Hello, I'm John
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-red-800">
          A passionate actor dedicated to wrestling. Discover my journey and work.
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
