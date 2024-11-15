import React from "react";
import Hero from "./hero/hero";
import Projects from "./projects/projects";
import Footer from "./footer/footer";

function Home() {
  return (
    <section className="content-grid bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <Hero />
      <Projects />
      <Footer/>
    </section>
  );
}

export default Home;
