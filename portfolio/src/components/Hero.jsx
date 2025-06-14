import React, { useEffect, useState } from "react";
import "./Hero.css";
import StarsBackground from "./StarsBackground";

const typewriterWords = ["DEVELOPER", "STUDENT", "GAMER"];

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pause = 1000;

  useEffect(() => {
    let timeout;
    const currentWord = typewriterWords[wordIndex];
    if (!deleting && charIndex <= currentWord.length) {
      setText(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (deleting && charIndex >= 0) {
      setText(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else if (!deleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % typewriterWords.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section className="hero-section" style={{
      width: '100vw',
      height: '9vh',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    }}>
      <StarsBackground />
      <div className="hero-content animated-fadein" style={{
        position: 'relative',
        zIndex: 1,
        margin: 0,
        top: 0,
        left: 0,
        transform: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '85%',
        maxWidth: '1200px',
        background: 'none',
        boxShadow: 'none',
        padding: '0 0vw',
        textAlign: 'left',
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="animated-slidein" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: 1, marginBottom: '1.2rem' }}>
            Hello, It's me
          </div>
          <div className="animated-slidein-delay1 hero-name" style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.2rem', letterSpacing: 1 }}>
            GUNEET PAL SINGH
          </div>
          <div className="animated-slidein-delay2" style={{ fontSize: '2.1rem', fontWeight: 700, letterSpacing: 1, marginBottom: '1.2rem' }}>
            And I'm a <span className="profession">{text}</span>
          </div>
          <div className="animated-fadein-delay3" style={{ fontSize: '1.1rem', marginBottom: '2.2rem', maxWidth: 480 }}>
            Innovative and detail-oriented developer with a passion for building scalable web applications and interactive user experiences. Skilled in React, Node.js, and modern web technologies.
          </div>
          <a href="#contact" className="hero-btn animated-popin" style={{ fontWeight: 700, fontSize: '1.1rem', padding: '1rem 2.5rem', border: '2px solid #a262f0', background: 'transparent', color: '#a262f0', borderRadius: '2rem', boxShadow: 'none', transition: 'background 0.2s, color 0.2s' }}>
            VIEW MY PROJECTS
          </a>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
          {/* Place for profile image or illustration */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
