import React from "react";
import Hero from "./hero/hero";
import Projects from "./projects/projects";

function Home() {
  return (
    <section className="content-grid bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <Hero />
      <Projects />
    </section>
  );
}

export default Home;
