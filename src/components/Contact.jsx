import React, { useState } from 'react';
import { Mail, Send, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="glow-bg glow-primary" style={{ bottom: '-10%', right: '10%' }} />
      
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have an exciting project idea, a job opportunity, or just want to chat? Drop me a message!
        </p>

        <div className="contact-grid">
          {/* Left: Contact Info cards */}
          <div className="contact-info-column">
            {/* Email Card (Interactive Copy) */}
            <div className="contact-info-card glass-card clickable-card" onClick={handleCopyEmail}>
              <div className="info-icon-wrapper primary-glow-box">
                <Mail size={22} className="info-icon" />
              </div>
              <div className="info-text-details">
                <span className="info-label">Email Address</span>
                <span className="info-value">{portfolioData.profile.email}</span>
              </div>
              <button className="copy-btn" aria-label="Copy email">
                {copied ? <Check size={16} className="success-color" /> : <Copy size={16} />}
              </button>
              {copied && <span className="copied-tooltip">Copied!</span>}
            </div>



            {/* Social Connect links */}
            <div className="social-connect-card glass-card">
              <h4 className="social-connect-title">Connect on Socials</h4>
              <div className="social-links-row">
                <a href={portfolioData.profile.socials.github} target="_blank" rel="noreferrer" className="social-bubble-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noreferrer" className="social-bubble-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. John Doe"
                  className="form-input" 
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. john@example.com"
                  className="form-input" 
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Describe your project, question, or message..."
                  className="form-input form-textarea"
                  disabled={status === 'sending'}
                />
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary form-submit-btn ${status === 'sending' ? 'loading' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : status === 'success' ? (
                  <span className="success-text">Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: hsl(var(--bg-dark));
          border-top: 1px solid var(--border-light);
        }

        .contact-subtitle {
          color: hsl(var(--text-muted));
          max-width: 600px;
          margin-bottom: 4rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3.5rem;
          align-items: start;
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          position: relative;
        }

        .clickable-card {
          cursor: pointer;
        }

        .info-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .primary-glow-box {
          background: hsl(var(--primary) / 0.1);
          border: 1px solid hsl(var(--primary) / 0.2);
          color: hsl(var(--primary));
        }

        .secondary-glow-box {
          background: hsl(var(--secondary) / 0.1);
          border: 1px solid hsl(var(--secondary) / 0.2);
          color: hsl(var(--secondary));
        }

        .info-text-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-label {
          font-size: 0.8rem;
          color: hsl(var(--text-muted));
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 1.05rem;
          font-weight: 600;
          color: hsl(var(--text-light));
        }

        .copy-btn {
          margin-left: auto;
          background: none;
          border: none;
          color: hsl(var(--text-muted));
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 6px;
          transition: var(--transition-smooth);
        }

        .contact-info-card:hover .copy-btn {
          color: hsl(var(--text-light));
          background: rgba(0, 0, 0, 0.05);
        }

        .success-color {
          color: #10b981;
        }

        .copied-tooltip {
          position: absolute;
          top: -10px;
          right: 20px;
          background: #10b981;
          color: white;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          animation: tooltipFade 1.5s forwards;
        }

        @keyframes tooltipFade {
          0% { opacity: 0; transform: translateY(5px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-5px); }
        }

        .social-connect-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .social-connect-title {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 600;
          color: hsl(var(--text-light));
        }

        .social-links-row {
          display: flex;
          gap: 1rem;
        }

        .social-bubble-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid hsl(var(--border-light));
          background: rgba(0, 0, 0, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(var(--text-muted));
          transition: var(--transition-smooth);
        }

        .social-bubble-link:hover {
          color: hsl(var(--text-light));
          background: hsl(var(--primary) / 0.1);
          border-color: hsl(var(--primary));
          transform: translateY(-2px);
          box-shadow: 0 0 15px hsl(var(--primary) / 0.2);
        }

        .contact-form {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
          color: hsl(var(--text-muted));
        }

        .form-input {
          background: hsl(var(--bg-dark));
          border: 1px solid hsl(var(--border-light));
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: hsl(var(--text-light));
          font-size: 1rem;
          transition: var(--transition-smooth);
        }

        .form-input:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 10px hsl(var(--primary) / 0.15);
          background: hsl(var(--bg-dark));
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.85rem;
          margin-top: 0.5rem;
        }

        .success-text {
          color: #10b981;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .contact-form {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
