import React from "react";
import "./Education.css";

const education = [
  {
    school: "Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)",
    degree: "B.Tech (CSD)",
    period: "Present",
    details: "CGPA: 7.84 (till 6th Semester)"
  },
  {
    school: "St. Cecilia’s Public School, New Delhi, Delhi",
    degree: "CBSE (X)",
    period: "2019 – 2020",
    details: "Percentage: 95.4%"
  },
  {
    school: "St. Cecilia’s Public School, New Delhi, Delhi",
    degree: "CBSE (XII)",
    period: "2021 – 2022",
    details: "Percentage: 93.6%"
  }
];

const Education = () => (
  <section className="education-section" id="education">
    <h2>Education</h2>
    <div className="education-list">
      {education.map((edu, idx) => (
        <div className="education-item" key={idx}>
          <h3>{edu.school}</h3>
          <span>{edu.degree} | {edu.period}</span>
          <p>{edu.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
