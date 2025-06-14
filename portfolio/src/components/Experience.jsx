import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Intern",
    company: "B2B2C Technologies",
    period: "Jan 25 - Mar 25",
    details: "Designed and developed a responsive website for a US-based financial services company, focused on presenting personalized bank offers in a clear and user-friendly manner. Emphasized intuitive UI/UX for smooth navigation and easy comparison of offers, enabling users to make informed financial decisions with confidence."
  },
  {
    role: "Software Engineer Intern",
    company: "ABC Technologies Pvt. Ltd.",
    period: "May 2024 - July 2024",
    details: "Developed and maintained web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Improved application performance and user experience."
  },
  {
    role: "Web Developer Intern",
    company: "XYZ Solutions",
    period: "Jan 2024 - Apr 2024",
    details: "Built responsive web interfaces and RESTful APIs. Worked with MongoDB and Express.js for backend development. Enhanced UI/UX with modern JavaScript frameworks."
  },
];

const Experience = () => (
  <section className="experience-section" id="experience">
    <h2>Experience & Internships</h2>
    <div className="experience-list">
      {experiences.map((exp, idx) => (
        <div className="experience-item" key={idx}>
          <h3>{exp.role} @ {exp.company}</h3>
          <span>{exp.period}</span>
          <p>{exp.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
