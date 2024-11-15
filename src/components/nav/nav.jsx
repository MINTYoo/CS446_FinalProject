import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="footer bg-gray-800 text-white py-8 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="footer-text text-center md:text-left">
          <p
            className="text-gray-400"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            John Cena
          </p>
        </div>
        <div className="footer-links flex space-x-6">
          <Link
            to="/"
            className="text-gray-400 hover:text-indigo-500 transition"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Home
          </Link>
          <Link
            to="/actor"
            className="text-gray-400 hover:text-indigo-500 transition"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Actor
          </Link>
          <Link
            to="/author"
            className="text-gray-400 hover:text-indigo-500 transition"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Author
          </Link>
          <Link
            href="/wrestler"
            className="text-gray-400 hover:text-indigo-500 transition"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Wrestler
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
