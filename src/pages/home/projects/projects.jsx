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
        "Delt with teen boys",
        "Adding another point because why not",
        "No one knew I was in this movie",
      ],
      image: actorImg,
      link: "#",
    },
    {
      title: "WWE Champion",
      description: "Beat The Pebble down. ",
      features: ["4 Time Champion", "Acrobatics", "Cant see me"],
      image: wrestlingImg,
      link: "#",
    },
    {
      title: "Author",
      description: "Cars, yay.",
      features: [
        "Kids Books",
        "Bet you didnt know I wrote books",
        "Was in Fast and the Furious once...family.",
      ],
      image: authorImg,
      link: "#",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href={project.link} className="project-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
