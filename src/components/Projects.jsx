import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

// Custom component to render abstract high-fidelity SVG graphics for each project
const ProjectGraphics = ({ type }) => {
  switch (type) {
    case 'nova-dashboard':
      return (
        <svg className="project-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-nova" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#grad-nova)" />
          {/* Dashboard grid lines */}
          <line x1="50" y1="20" x2="50" y2="180" stroke="rgba(255,255,255,0.05)" />
          <line x1="150" y1="20" x2="150" y2="180" stroke="rgba(255,255,255,0.05)" />
          <line x1="250" y1="20" x2="250" y2="180" stroke="rgba(255,255,255,0.05)" />
          <line x1="350" y1="20" x2="350" y2="180" stroke="rgba(255,255,255,0.05)" />
          {/* Dashboard graphs */}
          <path d="M 30,150 Q 80,60 130,110 T 230,50 T 330,130 T 370,80" fill="none" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
          <path d="M 30,160 Q 90,110 150,140 T 270,70 T 370,120" fill="none" stroke="#9333ea" strokeWidth="2" strokeDasharray="4 4" />
          {/* Glowing node points */}
          <circle cx="130" cy="110" r="5" fill="#06b6d4" filter="drop-shadow(0 0 8px #06b6d4)" />
          <circle cx="230" cy="50" r="5" fill="#06b6d4" filter="drop-shadow(0 0 8px #06b6d4)" />
          <circle cx="330" cy="130" r="5" fill="#06b6d4" filter="drop-shadow(0 0 8px #06b6d4)" />
        </svg>
      );
    case 'apex-ecommerce':
      return (
        <svg className="project-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-apex" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#grad-apex)" />
          {/* Isometric cubes representing products */}
          <g transform="translate(200, 100) scale(0.9)">
            {/* Cube 1 */}
            <path d="M 0,-40 L 50,-10 L 0,20 L -50,-10 Z" fill="#06b6d4" fillOpacity="0.5" stroke="#06b6d4" strokeWidth="1" />
            <path d="M -50,-10 L 0,20 L 0,80 L -50,50 Z" fill="#0891b2" fillOpacity="0.6" stroke="#06b6d4" strokeWidth="1" />
            <path d="M 0,20 L 50,-10 L 50,50 L 0,80 Z" fill="#0e7490" fillOpacity="0.7" stroke="#06b6d4" strokeWidth="1" />
            
            {/* Cube 2 (Right Floating) */}
            <path d="M 80,-80 L 110,-60 L 80,-40 L 50,-60 Z" fill="#9333ea" fillOpacity="0.4" stroke="#9333ea" strokeWidth="1" />
            <path d="M 50,-60 L 80,-40 L 80,0 L 50,-20 Z" fill="#7e22ce" fillOpacity="0.5" stroke="#9333ea" strokeWidth="1" />
            <path d="M 80,-40 L 110,-60 L 110,-20 L 80,0 Z" fill="#6b21a8" fillOpacity="0.6" stroke="#9333ea" strokeWidth="1" />
          </g>
          {/* Abstract shopping-cart grid */}
          <circle cx="80" cy="60" r="25" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <path d="M 70,60 L 90,60 M 80,50 L 80,70" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        </svg>
      );
    case 'clarity-notes':
      return (
        <svg className="project-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-clarity" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#grad-clarity)" />
          {/* Document wireframe */}
          <rect x="80" y="30" width="240" height="140" rx="8" fill="rgba(10, 12, 22, 0.6)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          {/* Editor lines */}
          <rect x="110" y="60" width="100" height="10" rx="3" fill="#3b82f6" fillOpacity="0.7" />
          <rect x="110" y="85" width="180" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="110" y="100" width="150" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="110" y="115" width="170" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="110" y="130" width="120" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
          {/* Folder structure icons on the left */}
          <rect x="92" y="60" width="10" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
          <rect x="92" y="75" width="10" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
          <rect x="92" y="90" width="10" height="8" rx="1" fill="#3b82f6" />
        </svg>
      );
    case 'prism-studio':
      return (
        <svg className="project-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-prism" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#grad-prism)" />
          {/* Visual prism refracting light */}
          <path d="M 200,40 L 260,140 L 140,140 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="rgba(255,255,255,0.05)" />
          {/* Incoming white ray */}
          <line x1="30" y1="100" x2="170" y2="90" stroke="white" strokeWidth="3" />
          {/* Refracted colored rays */}
          <path d="M 230,95 L 370,50" stroke="#ef4444" strokeWidth="2.5" />
          <path d="M 230,100 L 370,75" stroke="#f59e0b" strokeWidth="2.5" />
          <path d="M 230,105 L 370,100" stroke="#10b981" strokeWidth="2.5" />
          <path d="M 230,110 L 370,125" stroke="#3b82f6" strokeWidth="2.5" />
          <path d="M 230,115 L 370,150" stroke="#8b5cf6" strokeWidth="2.5" />
        </svg>
      );
    default:
      return (
        <svg className="project-svg" viewBox="0 0 400 200" fill="none">
          <rect width="400" height="200" fill="rgba(255, 255, 255, 0.05)" />
          <Code x="180" y="80" size={40} stroke="rgba(255, 255, 255, 0.2)" />
        </svg>
      );
  }
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  // Extract all unique tags for filter button options
  const allTags = ['All', ...new Set(portfolioData.projects.flatMap(p => p.tags))];

  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="section projects-section">
      <div className="glow-bg glow-primary" style={{ top: '30%', left: '-10%' }} />
      
      <div className="container">
        <div className="projects-header">
          <div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="projects-subtitle">
              A selection of digital applications I've engineered. Use the filters below to refine the technologies displayed.
            </p>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="filters-container">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-badge ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-card">
              <div className="project-image-wrapper">
                <ProjectGraphics type={project.image} />
                <div className="project-overlay">
                  <div className="overlay-ctas">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="overlay-icon-btn" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="overlay-icon-btn" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-footer-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-text">
                    <Github size={16} />
                    <span>Repository</span>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-text">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: hsl(var(--bg-dark));
          border-top: 1px solid var(--border-light);
        }

        .projects-subtitle {
          color: hsl(var(--text-muted));
          max-width: 600px;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .filters-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
        }

        .filter-badge {
          background: hsl(var(--bg-card));
          border: 1px solid hsl(var(--border-light));
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          color: hsl(var(--text-muted));
          font-family: var(--font-mono);
          font-size: 0.85rem;
          cursor: pointer;
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        .filter-badge:hover {
          color: hsl(var(--text-light));
          border-color: hsl(var(--text-light) / 0.4);
          background: rgba(0, 0, 0, 0.04);
        }

        .filter-badge.active {
          background: hsl(var(--primary) / 0.15);
          color: hsl(var(--text-light));
          border-color: hsl(var(--primary));
          box-shadow: 0 0 15px hsl(var(--primary) / 0.2);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          background: hsl(var(--bg-card));
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 50%; /* 2:1 Aspect Ratio */
          overflow: hidden;
          background: #f8fafc;
          border-bottom: 1px solid hsl(var(--border-light));
        }

        .project-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-svg {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .project-image-wrapper:hover .project-overlay {
          opacity: 1;
        }

        .overlay-ctas {
          display: flex;
          gap: 1rem;
        }

        .overlay-icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: hsl(var(--text-light));
          color: hsl(var(--bg-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .overlay-icon-btn:hover {
          transform: scale(1.1);
          background: hsl(var(--secondary));
        }

        .project-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 1rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: hsl(var(--secondary));
          background: hsl(var(--secondary) / 0.08);
          border: 1px solid hsl(var(--secondary) / 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .project-title {
          font-family: var(--font-mono);
          font-size: 1.35rem;
          color: hsl(var(--text-light));
          font-weight: 700;
        }

        .project-desc {
          font-size: 0.95rem;
          color: hsl(var(--text-muted));
          line-height: 1.6;
          flex-grow: 1;
        }

        .project-footer-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
        }

        .project-link-text {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: hsl(var(--text-muted));
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-link-text:hover {
          color: hsl(var(--text-light));
        }

        @media (max-width: 576px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
