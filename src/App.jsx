import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';
import './App.css';

export default function App() {
  // Intersection Observer for scroll-triggered fade animations
  useEffect(() => {
    const animateElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      
      <main>
        <div className="scroll-animate fade-in-up">
          <Hero />
        </div>
        
        <div className="scroll-animate fade-in-up">
          <Skills />
        </div>
        
        <div className="scroll-animate fade-in-up">
          <Projects />
        </div>
        
        <div className="scroll-animate fade-in-up">
          <Timeline />
        </div>
        
        <div className="scroll-animate fade-in-up">
          <Contact />
        </div>
      </main>

      <footer className="footer-wrapper">
        <div className="container footer-content">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .portfolio-app {
          position: relative;
          min-height: 100vh;
        }

        /* Scroll Animation styles */
        .scroll-animate {
          opacity: 0;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
          position: relative;
        }

        .scroll-animate.fade-in-up {
          transform: translateY(30px);
        }

        .scroll-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Footer styling */
        .footer-wrapper {
          border-top: 1px solid var(--border-light);
          background: rgba(10, 12, 22, 0.6);
          padding: 2.5rem 0;
          z-index: 2;
          position: relative;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: hsl(var(--text-muted));
        }

        .footer-made-with {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: hsl(var(--text-muted));
        }

        .heart-icon {
          color: #ef4444;
          fill: #ef4444;
        }

        @media (max-width: 576px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
