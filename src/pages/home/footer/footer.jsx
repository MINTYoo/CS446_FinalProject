import React from "react";

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-8 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="footer-text text-center md:text-left">
          <p
            className="text-gray-400"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            © 2024 John Doe. All Rights Reserved.
          </p>
        </div>
        <div className="footer-links flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 transition"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 transition"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 transition"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
