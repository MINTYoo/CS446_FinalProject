import React from "react";
import Hero from "./hero/hero";
import Projects from "./projects /projects";

function Home() {
  return (
    <section className="content-grid">
      <Hero />
      <Projects />
    </section>
  );
}

export default Home;
