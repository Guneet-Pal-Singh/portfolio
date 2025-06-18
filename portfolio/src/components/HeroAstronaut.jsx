import React, { useRef, useEffect } from "react";
import astronautImg from "../assets/astronaut.png";
import "./HeroAstronaut.css";

const getInitPosition = () => ({
  x: window.innerWidth * 0.53,
  y: window.innerHeight * 0.45,
});

const HeroAstronaut = () => {
  const astronautRef = useRef();
  const velocity = useRef({ x: 0, y: 0 });
  const position = useRef(getInitPosition());
  const initPos = useRef(getInitPosition());

  useEffect(() => {
    function handleResize() {
      const newInit = getInitPosition();
      initPos.current = newInit;
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationId;
    function animate() {
      // Always use latest initPos for spring target
      const dx = initPos.current.x - position.current.x;
      const dy = initPos.current.y - position.current.y;
      velocity.current.x += dx * 0.08;
      velocity.current.y += dy * 0.08;
      velocity.current.x *= 0.85;
      velocity.current.y *= 0.85;
      position.current.x += velocity.current.x;
      position.current.y += velocity.current.y;
      // Add floating/rotation effect
      if (astronautRef.current) {
        astronautRef.current.style.transform = `translate(-50%, -50%) rotate(${Math.sin(Date.now()/600)*8}deg)`;
        astronautRef.current.style.left = `${position.current.x}px`;
        astronautRef.current.style.top = `${position.current.y}px`;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="hero-astronaut-container">
      <img
        ref={astronautRef}
        src={astronautImg}
        alt="Astronaut"
        className="hero-astronaut-img"
        draggable={false}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default HeroAstronaut;
