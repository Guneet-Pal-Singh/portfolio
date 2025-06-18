import React, { useRef, useEffect } from 'react';
import './StarsBackground.css';

// Dynamically set star count based on screen width
const getStarCount = () => (window.innerWidth < 768 ? 50 : 150);
let STAR_COUNT = getStarCount();
const STAR_COLOR = '#ffffff';
const STAR_SPEED = 1.5; // Increased speed for movement towards mouse

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStar(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    z: randomBetween(0.05, 1),
    size: randomBetween(1.2, 4.2), // Random size for each star
    dx: 0,
    dy: 0,
  };
}

const StarsBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;
    let scrollY = window.scrollY;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      STAR_COUNT = getStarCount(); // Update star count on resize
      starsRef.current = Array.from({ length: STAR_COUNT }, () => createStar(width, height));
    }

    function handleScroll() {
      scrollY = window.scrollY;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (const star of starsRef.current) {
        ctx.save();
        ctx.globalAlpha = star.z;
        ctx.beginPath();
        // Parallax effect: offset y by scrollY * (1 - z)
        const parallaxOffset = Math.round(scrollY * (1 - star.z) * 0.008); // rounded to reduce vibration
        const parallaxY = star.y + parallaxOffset;
        ctx.arc(star.x, parallaxY, star.size * star.z, 0, 2 * Math.PI);
        ctx.fillStyle = STAR_COLOR;
        ctx.shadowColor = STAR_COLOR;
        ctx.shadowBlur = 8 * star.z;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      for (const star of starsRef.current) {
        // Repel effect: if mouse is near, push star away
        const dx = star.x - mouseRef.current.x;
        const dy = star.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;
        if (dist < repelRadius) {
          // Calculate repel strength (stronger when closer)
          const force = (repelRadius - dist) / repelRadius;
          const angle = Math.atan2(dy, dx);
          star.x += Math.cos(angle) * force * 6 * star.z;
          star.y += Math.sin(angle) * force * 6 * star.z;
        } else {
          // Subtle movement based on mouse position
          star.x += (star.z * STAR_SPEED * (mouseRef.current.x - width / 2)) / width;
          star.y += (star.z * STAR_SPEED * (mouseRef.current.y - height / 2)) / height;
        }
        // Twinkle effect (reduced vibration)
        star.z += (Math.random() - 0.5) * 0.1; // was 0.01, now much smaller
        if (star.z < 0.2) star.z = 0.2;
        if (star.z > 1) star.z = 1;
        // Wrap around
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      }
      draw();
      animationId = requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function onClick(e) {
      const rect = canvas.getBoundingClientRect();
      // Scale mouse coordinates to canvas resolution
      const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
      const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
      starsRef.current.push({
        x,
        y,
        z: randomBetween(0.5, 1),
        size: randomBetween(2, 5),
        dx: 0,
        dy: 0,
      });
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', handleScroll);
    canvas.addEventListener('click', onClick);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', handleScroll);
      canvas.removeEventListener('click', onClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarsBackground;
