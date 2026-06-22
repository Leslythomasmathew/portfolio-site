import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    portfolioData.profile.title,
    "Web Developer",
    "Data Analytics Enthusiast",
    "B.Tech Student"
  ];
  
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  // Typewriter effect loop
  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    
    if (!isDeleting && typewriterText === currentFullText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typewriterText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setTypewriterText(
          isDeleting 
            ? currentFullText.substring(0, typewriterText.length - 1)
            : currentFullText.substring(0, typewriterText.length + 1)
        );
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, roleIndex]);

  // Interactive Particle Constellation on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        
        // Mouse interaction
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          if (mouseRef.current.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 2;
          }
          if (mouseRef.current.x > this.x && this.x > this.size * 10) {
            this.x -= 2;
          }
          if (mouseRef.current.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 2;
          }
          if (mouseRef.current.y > this.y && this.y > this.size * 10) {
            this.y -= 2;
          }
        }
        
        this.x += this.directionX * 0.8;
        this.y += this.directionY * 0.8;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 30000;
      numberOfParticles = Math.min(numberOfParticles, 40); // Fewer particles for simplicity
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 1.5 + 0.5;
        let x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        let color = 'rgba(168, 85, 247, 0.2)'; // Subtly transparent violet
        
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                       + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          if (distance < (canvas.width / 9) * (canvas.height / 9)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacityValue * 0.08})`; // Soft violet lines
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (event) => {
    mouseRef.current.x = event.clientX;
    mouseRef.current.y = event.clientY;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = null;
    mouseRef.current.y = null;
  };

  return (
    <section 
      id="about" 
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/*Constellation Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Decorative Glows */}
      <div className="glow-bg glow-primary" />
      <div className="glow-bg glow-secondary" />

      <div className="container hero-content">
        <h1 className="hero-title animate-fade-in-up active">
          Hello, I'm <br />
          <span className="accent-text font-bold">{portfolioData.profile.name}</span>
        </h1>

        <div className="hero-typewriter">
          <span className="typewriter-text">{typewriterText}</span>
          <span className="typewriter-cursor">|</span>
        </div>

        <p className="hero-desc">
          {portfolioData.profile.subtitle} {portfolioData.profile.bio}
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a href={portfolioData.profile.resumeUrl} className="btn btn-secondary">
            <FileText size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      <div className="scroll-down-indicator">
        <a href="#skills" aria-label="Scroll Down">
          <ChevronDown className="arrow-down" size={32} />
        </a>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          padding-top: 5rem;
          overflow: hidden;
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          max-width: 850px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          color: #10b981;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10b981;
          display: inline-block;
          position: relative;
        }

        .pulse-dot::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #10b981;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .hero-title {
          font-family: var(--font-mono);
          font-size: clamp(3rem, 7vw, 4.5rem);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .hero-typewriter {
          font-family: var(--font-mono);
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: hsl(var(--text-muted));
          min-height: 2.2rem;
        }

        .typewriter-text {
          color: hsl(var(--text-light));
          border-bottom: 2px solid hsl(var(--secondary));
          padding-bottom: 2px;
        }

        .typewriter-cursor {
          animation: blink 0.75s step-end infinite;
          color: hsl(var(--secondary));
          font-weight: bold;
        }

        @keyframes blink {
          from, to { color: transparent }
          50% { color: hsl(var(--secondary)) }
        }

        .hero-desc {
          font-size: clamp(1.1rem, 1.8vw, 1.25rem);
          color: hsl(var(--text-muted));
          line-height: 1.6;
          max-width: 700px;
          font-weight: 300;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .scroll-down-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          cursor: pointer;
        }

        .arrow-down {
          color: hsl(var(--text-muted));
          transition: var(--transition-smooth);
          animation: bounce 2s infinite;
        }

        .arrow-down:hover {
          color: hsl(var(--secondary));
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 576px) {
          .hero-ctas {
            width: 100%;
          }
          .hero-ctas a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
