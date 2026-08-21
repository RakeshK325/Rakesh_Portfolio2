"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "motion/react";

const PROJECTS = [
  {
    name: "Faculty Appraisal Portal",
    shortLabel: "Enterprise security",
    category: "Full-Stack / Enterprise Security",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Puppeteer", "Multer"],
    highlights: [
      "Role-Based Access Control (RBAC) securing multi-tier REST APIs.",
      "Automated single-click PDF report export powered by Puppeteer.",
      "Multer integration handling multipart/form-data document attachments.",
    ],
    description:
      "Developed a full-stack MERN application automating faculty self-appraisal workflows across 4 roles (Admin, Faculty, HOD, Principal). Implemented RBAC, JWT authentication, bcrypt hashing, Multer file uploads, and Puppeteer-based automated PDF report generation.",
    href: "https://github.com/rakesh160982",
    accent: "#6C7BFF",
  },
  {
    name: "Pediatric Vaccination Management System",
    shortLabel: "AI platform",
    category: "Full-Stack AI Platform",
    techStack: ["Next.js 15", "TypeScript", "Firebase Firestore", "Gemini 2.5 Flash", "Google Genkit", "Zod"],
    highlights: [
      "Atomic Firestore batch writes preventing race conditions during record updates.",
      "Dual UIP/IAP schedule evaluation configured per child profile.",
      "AI Smart Availability assistant using Gemini 2.5 Flash and Zod outputs.",
    ],
    description:
      "Built a pediatric vaccination platform supporting dual-schedule (UIP/IAP) tracking with atomic Firestore batch writes. Integrated Google Genkit and Gemini 2.5 Flash to power a Zod-validated AI Smart Availability assistant.",
    href: "https://github.com/rakesh160982",
    accent: "#A58BFF",
  },
  {
    name: "Target-X: CRISPR Target Analysis Platform",
    shortLabel: "Biotech AI",
    category: "Biotech AI / Full Stack",
    techStack: ["React", "Flask", "Machine Learning", "Python", "REST APIs"],
    highlights: [
      "gRNA scoring algorithm calculating on-target versus off-target risk profiles.",
      "Asynchronous Flask REST backend integrated with custom ML models.",
      "Interactive genome-target visualization rendered dynamically in React.",
    ],
    description:
      "AI-powered platform automating CRISPR target analysis featuring a gRNA ranking engine that evaluates on-target efficiency and off-target risk metrics with a real-time visualization dashboard.",
    href: "https://github.com/rakesh160982",
    accent: "#55CBA0",
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const StackCard = ({ project, index, progress, onOpen }) => {
  const cardRef = useRef(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(cardProgress, [0, 1], [1.12, 1]);
  const targetScale = 1 - (PROJECTS.length - index) * 0.055;
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="project-stack-card-wrap">
      <motion.article
        className="project-stack-card"
        style={{
          scale,
          backgroundColor: project.accent,
          top: `calc(-5vh + ${index * 25}px)`,
          zIndex: index + 1,
          willChange: "transform",
        }}
      >
        <div className="project-stack-card__header">
          <span className="project-stack-card__index">0{index + 1}</span>
          <span className="project-stack-card__category">{project.category}</span>
        </div>

        <div className="project-stack-card__body">
          <div className="project-stack-card__copy">
            <p className="project-stack-card__eyebrow">{project.shortLabel}</p>
            <h3>{project.name}</h3>
            <p className="project-stack-card__description">{project.description}</p>
            <div className="project-stack-card__highlights">
              <span>Key features</span>
              <ul>
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
            <div className="project-stack-card__actions">
              <button type="button" className="project-stack-card__details" onClick={() => onOpen(project)}>
                Details <span aria-hidden="true">↗</span>
              </button>
              <a href={project.href} target="_blank" rel="noreferrer" className="project-stack-card__github">
                View GitHub <span aria-hidden="true"><ArrowIcon /></span>
              </a>
            </div>
          </div>

          <div className="project-stack-card__visual" aria-hidden="true">
            <motion.div className="project-stack-card__visual-inner" style={{ scale: imageScale }}>
              <span className="project-stack-card__visual-number">0{index + 1}</span>
              <span className="project-stack-card__visual-mark">R / K</span>
              <div className="project-stack-card__visual-lines">
                {project.techStack.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="project-stack-card__tags" aria-label="Technology stack">
          {project.techStack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </motion.article>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (typeof document === "undefined" || !selectedProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <ReactLenis root="asChild" options={{ autoRaf: false }}>
      <section id="projects-section" ref={sectionRef} className="project-stack-section">
      <div className="project-stack-intro">
        <div>
          <span className="pj-label">PROJECTS</span>
          <h2 className="pj-title">selected work</h2>
        </div>
        <p>Three flagship engineering builds spanning enterprise security, applied AI, and biotechnology.</p>
      </div>

      <div className="project-stack-list">
        {PROJECTS.map((project, index) => (
          <React.Fragment key={project.name}>
            <StackCard project={project} index={index} progress={scrollYProgress} onOpen={setSelectedProject} />
            <div className="project-stack-mobile-details">
              <button type="button" onClick={() => setSelectedProject(project)}>
                Open project details <span aria-hidden="true">↗</span>
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>

      {selectedProject && (
        <div className="pj-modal" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null);
        }}>
          <div className="pj-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button type="button" className="pj-modal__close" onClick={() => setSelectedProject(null)} aria-label="Close project details">
              <span aria-hidden="true">×</span>
            </button>
            <span className="pj-modal__eyebrow">{selectedProject.category}</span>
            <h3 id="project-modal-title">{selectedProject.name}</h3>
            <p className="pj-modal__description">{selectedProject.description}</p>
            <div className="project-modal__highlights">
              <span>Key features</span>
              <ul>
                {selectedProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
            <div className="pj-modal__stack" aria-label="Technology stack">
              {selectedProject.techStack.map((technology) => <span className="pj-modal__tag" key={technology}>{technology}</span>)}
            </div>
            <a className="pj-modal__link" href={selectedProject.href} target="_blank" rel="noreferrer">
              <span>View on GitHub</span>
              <span className="pj-modal__link-icon" aria-hidden="true"><ArrowIcon /></span>
            </a>
          </div>
        </div>
      )}
      </section>
    </ReactLenis>
  );
};

export default Projects;
