import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Visa Acceptance Prediction",
    description: "Trained an ML model to predict visa application outcomes. Deployed as a backend for a website that predicts results based on user input.",
    period: "Aug 24 - Nov 24",
    team: "Team Size-4",
    link: "#" // Add actual GitHub link if available
  },
  {
    name: "Driver Drowsiness Detection",
    description: "Real-time driver drowsiness detection using OpenCV, Dlib, Google Gemini API, and sensors. Integrated with a Kotlin app and Firebase for notifications.",
    period: "Mar 25 - Apr 25",
    team: "Team Size-3",
    link: "#"
  },
  {
    name: "AI Driving Assistant",
    description: "Car safety chatbot using Google Gemini AI, FAISS, Flask REST API, and curated safety knowledge base. Focused on drowsiness prevention and safe driving.",
    period: "Mar 25 - Apr 25",
    team: "Team Size-1",
    link: "#"
  },
  {
    name: "Cooking Assistant",
    description: "Web-based Cooking Assistant using Python and JavaScript. Features recipe suggestions, step-by-step guidance, and a dynamic frontend deployed via Vercel.",
    period: "Mar 25 - Mar 25",
    team: "Team Size-1",
    link: "#"
  },
  {
    name: "Shortlify",
    description: "Full-stack URL shortener with Node.js, Express, MongoDB, React, and Tailwind CSS. Modern UI for managing short links.",
    period: "May 25 - Jun 25",
    team: "Team Size-1",
    link: "#"
  },
  {
    name: "Stick Hero",
    description: "Custom version of a popular game using JavaFX, with new features and character personalization.",
    period: "Oct 23 - Nov 23",
    team: "Team Size-2",
    link: "#"
  },
  {
    name: "HIGH News",
    description: "Inshorts-style news app using Kotlin, Jetpack Compose, NewsAPI, and Firebase. Features real-time news, translation, and fast image loading.",
    period: "Feb 25 - Apr 25",
    team: "Team Size-4",
    link: "#"
  },
  {
    name: "Bike_Storm",
    description: "Python game using Pygame. Navigate obstacles to achieve high scores, with save/load profile features.",
    period: "Jan 22 - Mar 22",
    team: "Team Size-1",
    link: "#"
  },
  {
    name: "Trash Trades",
    description: "Hackathon project for optimizing trash collection using MERN stack, Tailwind CSS, JWT, and geolocation API.",
    period: "Apr 23 - Apr 23",
    team: "Team Size-4",
    link: "#"
  },
  {
    name: "RISC-V Assembler & Simulator",
    description: "Python-based RISC-V assembly code simulator for a specialized ISA, with memory visualization.",
    period: "Apr 23 - Jun 23",
    team: "Team Size-4",
    link: "#"
  },
  {
    name: "Urbanique",
    description: "Database system for an online clothing store. Backend with MySQL, frontend with React.",
    period: "Apr 24 - Jun 24",
    team: "Team Size-4",
    link: "#"
  },
  {
    name: "LEAVEIT",
    description: "Website to help people overcome addiction, with anonymous inbuilt form and email notifications.",
    period: "Apr 24 - Jun 24",
    team: "Team Size-4",
    link: "#"
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-item" key={idx}>
          <h3>{project.name}</h3>
          <span style={{fontSize: '0.95em', color: '#bdbdbd'}}>{project.period} | {project.team}</span>
          <p>{project.description}</p>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub / Details</a>}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
