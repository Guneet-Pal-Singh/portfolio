import React, { useRef, useEffect } from "react";
import astronautImg from "../assets/astronaut.png";
import "./HeroAstronaut.css";

const CENTER_OFFSET_X = 150; // Center of 300px wide image
const CENTER_OFFSET_Y = 200; // Approximate center vertically
// Set initial position to near the hero text (left-center)
const INIT_X = window.innerWidth * 0.53;
const INIT_Y = window.innerHeight * 0.45; // Adjusted for better visibility

const HeroAstronaut = () => {
  const astronautRef = useRef();
  const velocity = useRef({ x: 0, y: 0 });
  const position = useRef({ x: INIT_X, y: INIT_Y });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationId;
    function animate() {
      if (!dragging.current) {
        // Move back to initial position with spring effect
        const dx = INIT_X - position.current.x;
        const dy = INIT_Y - position.current.y;
        velocity.current.x += dx * 0.08;
        velocity.current.y += dy * 0.08;
        velocity.current.x *= 0.85;
        velocity.current.y *= 0.85;
        position.current.x += velocity.current.x;
        position.current.y += velocity.current.y;
        // Add floating/rotation effect
        if (astronautRef.current) {
          astronautRef.current.style.transform = `translate(-50%, -50%) rotate(${Math.sin(Date.now()/600)*8}deg)`;
        }
      }
      // Move astronaut
      if (astronautRef.current) {
        astronautRef.current.style.left = `${position.current.x}px`;
        astronautRef.current.style.top = `${position.current.y}px`;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Drag handlers
  function onMouseDown(e) {
    dragging.current = true;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    dragOffset.current = {
      x: mouseX - position.current.x,
      y: mouseY - position.current.y,
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
  function onMouseMove(e) {
    // Move astronaut anywhere in the viewport
    position.current.x = e.clientX - dragOffset.current.x;
    position.current.y = e.clientY - dragOffset.current.y;
    velocity.current.x = 0;
    velocity.current.y = 0;
    if (astronautRef.current) {
      astronautRef.current.style.transform = `translate(-50%, -50%) scale(1.08)`;
    }
  }
  function onMouseUp() {
    dragging.current = false;
    if (astronautRef.current) {
      astronautRef.current.style.transform = `translate(-50%, -50%)`;
    }
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  return (
    <div className="hero-astronaut-container" style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}>
      <img
        ref={astronautRef}
        src={astronautImg}
        alt="Astronaut"
        className="hero-astronaut-img"
        draggable={false}
        style={{ cursor: 'grab', pointerEvents: 'auto' }}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

export default HeroAstronaut;
