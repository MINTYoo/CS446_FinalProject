import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import wrestlingImg from "./image.png";
import actorImg from "./actor.png";
import authorImg from "./book.png";

function Projects() {
  const [loading, setLoading] = useState(false);

  const handleTrackClick = async (projectName) => {
    setLoading(true);
    try {
      console.log(`sending project name: ${projectName}`); // Make sure projectName is being logged here
      const response = await axios.post(
        "https://082zd7uws7.execute-api.us-east-1.amazonaws.com/portfolio",
        { projectName } // Pass the projectName as part of the request body
      );
      console.log(`Tracked click for: ${projectName}`);
      console.log(response.data); // Log the Lambda response (for testing)
    } catch (error) {
      console.error("Error tracking click:", error);
      if (error.response) {
        alert(`Failed to track click. Server error: ${error.response.status}`);
      } else if (error.request) {
        alert("Failed to track click. No response from the server.");
      } else {
        alert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

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
      link: "/Actor",
    },
    {
      title: "WWE Champion",
      description: "Beat The Pebble down.",
      features: ["4 Time Champion", "Acrobatics", "Can't see me"],
      image: wrestlingImg,
      link: "/wrestler",
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
      link: "/Author",
    },
  ];

  return (
    <section className="projects py-16 px-8 text-white">
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
              style={{ width: "100%", height: "256px", objectFit: "cover" }}
            />
            <div className="p-6">
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-secondary)",
                }}
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
              <Link
                to={project.link}
                className={`inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-900 font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition ${
                  loading ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => handleTrackClick(project.title)}
                style={{
                  fontFamily: "var(--font-primary)",
                  color: "var(--background)",
                }}
              >
                {loading ? (
                  <span className="animate-spin">Loading...</span>
                ) : (
                  "Learn More"
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
