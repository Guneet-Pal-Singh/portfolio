import React from "react";
import "./Skills.css";

const skills = {
  expertise: [
    "Data Structures and Algorithms",
    "Operating System",
    "Data Science"
  ],
  languages: [
    "Python", "C", "C++", "Java", "Bash"
  ],
  tools: [
    "Pytorch", "ReactJS", "JAVA FX", "NodeJS", "JavaScript", "SQL", "MERN Stack", "Tailwind CSS"
  ],
  electives: [
    "Machine Learning", "Neural Networks", "Introduction to Programming", "Data Structures and Algorithms", "Advanced Programming", "Operating System", "Database and Management System", "Computer Organization", "Introduction to Human-Computer Interaction", "Linear Algebra", "Probability and Statistics", "Multivariate Calculus", "Digital Circuits", "Visual Design and Communication", "Design Drawing and Visualization", "Design Processes and Perspectives"
  ]
};

const Skills = () => (
  <section className="skills-section" id="skills">
    <h2>Skills</h2>
    <div>
      <strong>Expertise Area:</strong>
      <ul className="skills-list">{skills.expertise.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <strong>Programming Languages:</strong>
      <ul className="skills-list">{skills.languages.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <strong>Tools & Technologies:</strong>
      <ul className="skills-list">{skills.tools.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <strong>Technical Electives:</strong>
      <ul className="skills-list">{skills.electives.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </div>
  </section>
);

export default Skills;
