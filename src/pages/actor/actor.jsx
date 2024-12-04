import React from "react";

const Actor = () => {
  return (
    <section className="career-section content-grid bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 flex flex-col min-h-screen py-12 px-6 lg:px-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Actor - John Cena
        </h2>
        <p className="text-lg mb-6 text-gray-300 text-center">
          John Cena is also a talented actor known for his roles in both comedy and action films. He has starred in several blockbuster hits, including "The Suicide Squad" and "Fast & Furious."
        </p>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 shadow-xl">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-indigo-500">🎬</span>
              <span className="text-lg">Hollywood Actor</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-500">🎥</span>
              <span className="text-lg">Featured in Major Films</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-indigo-500">😂</span>
              <span className="text-lg">Comedy & Action Roles</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Actor;
