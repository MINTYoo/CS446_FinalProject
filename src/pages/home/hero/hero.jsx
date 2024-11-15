import React from "react";
import profileImage from "./image.png";

function Hero() {
  return (
    <section className="hero flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-16 md:px-20  text-white min-h-screen">
      <div className="hero-content max-w-lg md:max-w-xl mb-8 md:mb-0 text-center md:text-left space-y-6">
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          style={{
            color: "var(--primary)",
            fontFamily: "var(--font-primary)",
          }}
        >
          Hello, I'm John
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed text-gray-300"
          style={{
            fontFamily: "var(--font-secondary)",
          }}
        >
          A passionate actor dedicated to wrestling. Discover my journey and work.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-900 font-semibold rounded-full shadow-md transform transition hover:scale-105 hover:shadow-lg"
          style={{
            fontFamily: "var(--font-primary)",
            color: "var(--background)",
          }}
        >
          View My Work
        </a>
      </div>
      <div className="hero-image">
        <img
          src={profileImage}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-gray-700 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          style={{
            borderColor: "var(--primary)",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
