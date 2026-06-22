import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <p className="skills-subtitle">
          My skills are categorized by domain. Select a category below to view specific competencies and proficiency levels.
        </p>

        <div className="skills-grid">
          {/* Left: Category Selectors */}
          <div className="skills-categories">
            {portfolioData.skills.map((cat, idx) => (
              <button
                key={cat.category}
                className={`category-btn glass-card ${activeCategory === idx ? 'active' : ''}`}
                onClick={() => setActiveCategory(idx)}
              >
                <span className="category-indicator"></span>
                <span className="category-name">{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Right: Skills Details with Animated Bars */}
          <div className="skills-list-container glass-card">
            <h3 className="active-category-title">
              {portfolioData.skills[activeCategory].category}
            </h3>
            
            <div className="skills-list">
              {portfolioData.skills[activeCategory].items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div 
                      className="skill-progress-bar" 
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%' 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: hsl(var(--bg-dark));
          position: relative;
        }

        .skills-subtitle {
          color: hsl(var(--text-muted));
          max-width: 600px;
          margin-bottom: 4rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2.5rem;
          align-items: start;
        }

        .skills-categories {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .category-btn {
          width: 100%;
          text-align: left;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(15, 17, 28, 0.4);
          cursor: pointer;
          border-radius: 12px;
        }

        .category-btn:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .category-btn.active {
          background: rgba(147, 51, 234, 0.08);
          border-color: hsl(var(--primary) / 0.4);
        }

        .category-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: hsl(var(--text-muted));
          transition: var(--transition-smooth);
        }

        .category-btn.active .category-indicator {
          background: hsl(var(--secondary));
          box-shadow: 0 0 10px hsl(var(--secondary));
        }

        .category-name {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 600;
          color: hsl(var(--text-muted));
          transition: var(--transition-smooth);
        }

        .category-btn.active .category-name {
          color: hsl(var(--text-light));
        }

        .skills-list-container {
          padding: 2.5rem;
          background: rgba(10, 12, 22, 0.45);
          border-radius: 16px;
          min-height: 380px;
        }

        .active-category-title {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: hsl(var(--text-light));
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1rem;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          font-weight: 500;
        }

        .skill-name {
          color: hsl(var(--text-light));
          font-size: 1.05rem;
        }

        .skill-percentage {
          color: hsl(var(--secondary));
          font-family: var(--font-mono);
        }

        .skill-progress-bg {
          height: 6px;
          background: hsl(var(--border-light));
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)));
          border-radius: 3px;
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .skills-list-container {
            padding: 1.75rem;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
