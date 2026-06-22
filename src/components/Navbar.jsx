import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for glass effect and progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* Scroll indicator bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      
      <div className="container nav-container">
        {/* Logo text deleted */}

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={portfolioData.profile.socials.github} target="_blank" rel="noreferrer" className="social-icon-link">
            <Github size={18} />
          </a>
          <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noreferrer" className="social-icon-link">
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary nav-contact-btn">
            <MessageSquare size={16} />
            <span>Chat</span>
          </a>

          {/* Hamburger Icon */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mobile-socials">
            <a href={portfolioData.profile.socials.github} target="_blank" rel="noreferrer" className="social-icon-link">
              <Github size={22} />
            </a>
            <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noreferrer" className="social-icon-link">
              <Linkedin size={22} />
            </a>
          </div>
        </nav>
      </div>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition-smooth);
          border-bottom: 1px solid transparent;
        }

        .navbar-wrapper.scrolled {
          background: rgba(15, 12, 30, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: hsl(var(--border-light));
          padding: 0.5rem 0;
        }

        .scroll-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)));
          z-index: 1001;
          transition: width 0.1s ease;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4.5rem;
        }

        .logo-text {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .accent-dot {
          color: hsl(var(--secondary));
        }

        .desktop-nav {
          display: block;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 500;
          color: hsl(var(--text-muted));
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: hsl(var(--text-light));
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(var(--primary));
          transition: var(--transition-smooth);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .social-icon-link {
          color: hsl(var(--text-muted));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          border: 1px solid transparent;
        }

        .social-icon-link:hover {
          color: hsl(var(--text-light));
          border-color: hsl(var(--border-light));
          background: rgba(255, 255, 255, 0.03);
        }

        .nav-contact-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: hsl(var(--text-light));
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Mobile Menu */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(15, 12, 30, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
        }

        .mobile-nav-overlay.open {
          right: 0;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-nav-link {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          font-weight: 600;
        }

        .mobile-nav-link:hover {
          color: hsl(var(--primary));
        }

        .mobile-socials {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .desktop-nav, .nav-contact-btn, .nav-actions > .social-icon-link {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
