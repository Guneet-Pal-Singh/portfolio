import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/singh.on.fire/",
    iconWhite: "/icons8-insta-24.png",
    iconCyan: "/icons8-insta-50_cyan.png",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/guneet-pal-singh-a9180a258/",
    iconWhite: "/icons8-linkedin-50.png",
    iconCyan: "/icons8-linkedin-50_cyan.png",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Guneet-Pal-Singh",
    iconWhite: "/icons8-github-50.png",
    iconCyan: "/icons8-github-50-cyan.png",
    label: "GitHub",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // Increased distance before blur
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize if desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header className={`navbar-header${scrolled ? " navbar-blur" : ""}`}>
      <nav className="navbar-new">
        <div className="navbar-brand">
          <span className="navbar-logo-glow">Portfolio</span>
        </div>
        {/* Hamburger menu button for mobile */}
        <button
          className={`navbar-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {/* Desktop nav links */}
        <ul className="navbar-menu desktop-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        {/* Desktop social icons */}
        <div className="navbar-social navbar-social-right desktop-menu">
          {socialLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="navbar-social-icon"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={hovered === idx ? link.iconCyan : link.iconWhite}
                alt={link.label}
                className="navbar-social-img"
                width={28}
                height={28}
                style={{ display: "block" }}
              />
            </a>
          ))}
        </div>
        {/* Mobile menu: nav links + social icons */}
        {menuOpen && (
          <div className="mobile-menu" id="mobile-menu">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
                </li>
              ))}
            </ul>
            <div className="mobile-social-links">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="navbar-social-icon"
                >
                  <img
                    src={link.iconWhite}
                    alt={link.label}
                    className="navbar-social-img"
                    width={28}
                    height={28}
                    style={{ display: "block" }}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
