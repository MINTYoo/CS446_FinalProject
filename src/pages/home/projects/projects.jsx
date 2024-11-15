import React from "react";
import "./projects.css";
import wrestlingImg from "./image.png";
import actorImg from "./actor.png";
import authorImg from "./book.png";

function Projects() {
  const projectData = [
    {
      title: "Fred: The Movie",
      description: "A movie I regret doing.",
      features: [
        "Dealt with teen boys",
        "Adding another point because why not",
        "No one knew I was in this movie",
      ],
      image: actorImg,
      link: "#",
    },
    {
      title: "WWE Champion",
      description: "Beat The Pebble down.",
      features: ["4 Time Champion", "Acrobatics", "Can't see me"],
      image: wrestlingImg,
      link: "#",
    },
    {
      title: "Author",
      description: "Cars, yay.",
      features: [
        "Kids Books",
        "Bet you didn't know I wrote books",
        "Was in Fast and the Furious once...family.",
      ],
      image: authorImg,
      link: "#",
    },
  ];

  return (
    <section className="projects py-16 px-8  text-white">
      <h2
        className="text-4xl font-extrabold mb-12 text-center"
        style={{ fontFamily: "var(--font-primary)" }}
      >
        Projects
      </h2>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--primary)", fontFamily: "var(--font-secondary)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-gray-300 mb-4"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                {project.description}
              </p>
              <ul className="mb-6 space-y-2 text-gray-400 list-disc pl-4">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                href={project.link}
                className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-900 font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition"
                style={{ fontFamily: "var(--font-primary)", color: "var(--background)" }}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
