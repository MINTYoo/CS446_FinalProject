import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0); // Keeping count for the provided data

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to send data to Lambda function URL
  const sendDataToLambda = async (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      count: count, // Example count variable, could be used for analytics
    };

    console.log(JSON.stringify(data)); // Log the data being sent

    try {
      const response = await fetch(
        "https://082zd7uws7.execute-api.us-east-1.amazonaws.com/portfolio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json(); // Parse the response as JSON
      console.log("Lambda Response:", result); // Log the full response
      setMessage(`Lambda Response: ${result.message}`); // Set the response message
    } catch (error) {
      console.error("Error sending data to Lambda:", error);
      setMessage("Failed to send data");
    }
  };

  return (
    <div className="App content-grid">
      <header>
        <h1>Welcome to My Personal Portfolio</h1>
      </header>

      {/* About Me Section */}
      <section id="about-me" className="section">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a software engineer with a passion for building
          dynamic web applications. I love learning new technologies and working
          on exciting projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1: Portfolio Website</h3>
            <p>
              A personal website built using React and AWS to showcase my
              projects and experience.
            </p>
          </li>
          <li>
            <h3>Project 2: E-commerce App</h3>
            <p>
              An e-commerce platform with dynamic product listings, shopping
              cart, and checkout functionalities.
            </p>
          </li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form onSubmit={sendDataToLambda}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </div>
  );
}

export default App;
