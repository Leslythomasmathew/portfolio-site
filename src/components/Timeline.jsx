import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="experience" className="section timeline-section">
      <div className="glow-bg glow-secondary" style={{ top: '20%', right: '-15%' }} />
      
      <div className="container">
        <h2 className="section-title">Career Timeline</h2>
        
        <p className="timeline-subtitle">
          My professional milestones, engineering experience, and academic background.
        </p>

        <div className="timeline-split-grid">
          {/* Professional Experience */}
          <div className="timeline-column">
            <h3 className="column-title">
              <Briefcase size={20} className="column-icon primary-color" />
              <span>Professional Experience</span>
            </h3>

            <div className="timeline-track">
              {portfolioData.experience.map((exp, idx) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-node">
                    <span className="node-glow"></span>
                  </div>
                  
                  <div className="timeline-card glass-card">
                    <div className="card-header">
                      <div>
                        <h4 className="item-role">{exp.role}</h4>
                        <span className="item-company">{exp.company}</span>
                      </div>
                      <div className="item-date">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="item-details">
                      {exp.description.map((detail, dIdx) => (
                        <li key={dIdx} className="detail-bullet">
                          <CheckCircle size={14} className="bullet-icon" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="timeline-column">
            <h3 className="column-title">
              <GraduationCap size={22} className="column-icon secondary-color" />
              <span>Education</span>
            </h3>

            <div className="timeline-track">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-node secondary-node">
                    <span className="node-glow secondary-node-glow"></span>
                  </div>
                  
                  <div className="timeline-card glass-card">
                    <div className="card-header">
                      <div>
                        <h4 className="item-role">{edu.degree}</h4>
                        <span className="item-company">{edu.school}</span>
                      </div>
                      <div className="item-date">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-section {
          background-color: hsl(var(--bg-dark));
          border-top: 1px solid var(--border-light);
        }

        .timeline-subtitle {
          color: hsl(var(--text-muted));
          max-width: 600px;
          margin-bottom: 4rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .timeline-split-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .timeline-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .column-title {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: hsl(var(--text-light));
          border-bottom: 1px solid hsl(var(--border-light));
          padding-bottom: 0.75rem;
        }

        .column-icon {
          flex-shrink: 0;
        }

        .primary-color {
          color: hsl(var(--primary));
        }

        .secondary-color {
          color: hsl(var(--secondary));
        }

        .timeline-track {
          border-left: 2px solid hsl(var(--border-light));
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-node {
          position: absolute;
          left: calc(-1.5rem - 6px);
          top: 24px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: hsl(var(--primary));
          z-index: 2;
        }

        .timeline-node.secondary-node {
          background: hsl(var(--secondary));
        }

        .node-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: hsl(var(--primary) / 0.3);
          animation: nodePulse 2s infinite;
        }

        .secondary-node-glow {
          background: hsl(var(--secondary) / 0.3);
        }

        @keyframes nodePulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .timeline-card {
          padding: 1.75rem;
          background: hsl(var(--bg-card));
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .item-role {
          font-size: 1.2rem;
          font-weight: 700;
          color: hsl(var(--text-light));
        }

        .item-company {
          font-family: var(--font-mono);
          color: hsl(var(--secondary));
          font-size: 0.95rem;
          font-weight: 500;
          margin-top: 0.25rem;
          display: block;
        }

        .item-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: hsl(var(--text-muted));
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid hsl(var(--border-light));
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
        }

        .item-details {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .detail-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: hsl(var(--text-muted));
          line-height: 1.5;
        }

        .bullet-icon {
          flex-shrink: 0;
          color: hsl(var(--primary));
          margin-top: 0.15rem;
        }

        @media (max-width: 992px) {
          .timeline-split-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
