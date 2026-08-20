import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "Faculty Appraisal Portal",
    category: "Full-Stack / Enterprise Security",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Puppeteer",
      "Multer",
    ],
    description:
      "Developed a full-stack MERN application automating faculty self-appraisal workflows across 4 roles (Admin, Faculty, HOD, Principal). Implemented RBAC, JWT authentication, bcrypt hashing, Multer file uploads, and Puppeteer-based automated PDF report generation.",
    href: "https://github.com/rakesh160982",
    kind: "GitHub",
  },
  {
    name: "Pediatric Vaccination Management System",
    category: "Full-Stack AI Platform",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Firebase Firestore",
      "Gemini 2.5 Flash",
      "Google Genkit",
      "Zod",
    ],
    description:
      "Built a pediatric vaccination platform supporting dual-schedule (UIP/IAP) tracking with atomic Firestore batch writes. Integrated Google Genkit and Gemini 2.5 Flash to power a Zod-validated AI Smart Availability assistant.",
    href: "https://github.com/rakesh160982",
    kind: "GitHub",
  },
  {
    name: "Target-X: CRISPR Target Analysis Platform",
    category: "Biotech AI / Full Stack",
    techStack: ["React", "Flask", "Machine Learning", "Python", "REST APIs"],
    description:
      "AI-powered platform automating CRISPR target analysis featuring a gRNA ranking engine that evaluates on-target efficiency and off-target risk metrics with a real-time visualization dashboard.",
    href: "https://github.com/rakesh160982",
    kind: "GitHub",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const Row = ({ item, index, onOpen }) => (
  <li className="pj-row">
    <button
      type="button"
      className="pj-link pj-link--card"
      onClick={() => onOpen(item)}
      aria-label={`View details for ${item.name}`}
    >
      <span className="pj-num">{String(index + 1).padStart(2, "0")}</span>
      <div className="pj-meta">
        <span className="pj-name">{item.name}</span>
        <span className="pj-role">{item.category}</span>
        <span className="pj-tags" aria-label="Technology stack">
          {item.techStack.map((technology) => (
            <span className="pj-tag" key={technology}>
              {technology}
            </span>
          ))}
        </span>
      </div>
      <span className="pj-kind">{item.kind}</span>
      <span className="pj-arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
    </button>
  </li>
);

const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = sectionRef.current.querySelectorAll(".pj-row");
      gsap.from(rows, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const titles = sectionRef.current.querySelectorAll(".pj-title");
      gsap.from(titles, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    if (!selectedProject) return undefined;

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
    <section id="projects-section" ref={sectionRef}>
      <div className="pj-head">
        <span className="pj-label">PROJECTS</span>
        <h2 className="pj-title">selected work</h2>
      </div>

      <ul className="pj-list">
        {PROJECTS.map((project, index) => (
          <Row
            key={project.name}
            item={project}
            index={index}
            onOpen={setSelectedProject}
          />
        ))}
      </ul>

      {selectedProject && (
        <div
          className="pj-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="pj-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button
              type="button"
              className="pj-modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <span aria-hidden="true">×</span>
            </button>
            <span className="pj-modal__eyebrow">{selectedProject.category}</span>
            <h3 id="project-modal-title">{selectedProject.name}</h3>
            <p className="pj-modal__description">{selectedProject.description}</p>
            <div className="pj-modal__stack" aria-label="Technology stack">
              {selectedProject.techStack.map((technology) => (
                <span className="pj-modal__tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
            <a
              className="pj-modal__link"
              href={selectedProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>View on GitHub</span>
              <span className="pj-modal__link-icon" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
