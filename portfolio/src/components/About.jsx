import React from "react";
import "./About.css";
import meImg from "../assets/me.jpg";

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <div className="about-details">
        <h2>About Me</h2>
        <p>
          I am a highly motivated and detail-oriented Software Engineer with a strong foundation in computer science and hands-on experience in full-stack web development and machine learning. I thrive on solving complex problems and am passionate about building efficient, scalable, and user-friendly applications. My technical expertise includes modern web technologies such as React, Node.js, Express, and MongoDB, as well as proficiency in Machine Learning and Artificial Intelligence frameworks, enabling me to develop intelligent, data-driven solutions.
        </p>
      </div>
      <div className="about-image">
        <img src={meImg} alt="Me" />
      </div>
    </div>
  </section>
);

export default About;
