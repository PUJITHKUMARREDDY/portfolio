import { useState } from "react";
import "./Projects.css";
import projects from "../../data/projects";
import useScrollReveal from "../../hooks/useScrollReveal";

const TABS = [
  { key: "all",      label: "All" },
  { key: "live",     label: "✅  Completed" },
  { key: "building", label: "🔨  In Progress" },
];

/* ── Local reveal ── */
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : "translateY(28px)",
        transition: `opacity 0.65s ${delay}s, transform 0.65s ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Single project card ── */
function ProjectCard({ project, animDelay }) {
  const [ref, visible] = useScrollReveal();
  const isBuilding = project.status === "building" || project.status === "learning";

  const statusStyle = isBuilding
    ? {
        background: "rgba(251,146,60,0.1)",
        border:     "1px solid rgba(251,146,60,0.25)",
        color:      "#fb923c",
        dotBg:      "#fb923c",
      }
    : {
        background: "rgba(52,211,153,0.1)",
        border:     "1px solid rgba(52,211,153,0.25)",
        color:      "#34d399",
        dotBg:      "#34d399",
      };

  return (
    <div
      ref={ref}
      className="project-card project-card-animate"
      style={{
        opacity:         visible ? 1 : 0,
        transform:       visible ? "none" : "translateY(28px)",
        transition:      `opacity 0.6s ${animDelay}s, transform 0.6s ${animDelay}s, border-color 0.25s, box-shadow 0.25s`,
        animationDelay:  `${animDelay}s`,
      }}
    >
      {/* Top colour stripe */}
      <div
        className="project-card-stripe"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
        }}
      />

      {/* Featured */}
      {project.featured && (
        <span className="featured-badge">★ Featured</span>
      )}

      {/* Status */}
      <span
        className="project-status-badge"
        style={{
          background: statusStyle.background,
          border:     statusStyle.border,
          color:      statusStyle.color,
        }}
      >
        <span
          className="badge-dot"
          style={{ background: statusStyle.dotBg }}
        />
        {project.statusLabel}
      </span>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>

      {/* Tech */}
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="project-links">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="proj-link"
          >
            ↗ Live Demo
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="proj-link proj-link-muted"
          >
            ⌥ Code
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = projects.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">

        <Reveal>
          <p
            style={{
              fontFamily:    "'JetBrains Mono', monospace",
              fontSize:      "0.72rem",
              color:         "var(--accent)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom:  "0.4rem",
            }}
          >
            <span>//</span> projects
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            style={{
              fontSize:      "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight:    700,
              letterSpacing: "-1px",
              lineHeight:    1.15,
              marginBottom:  "0.75rem",
            }}
          >
            Things I've <span style={{ color: "var(--accent)" }}>Built</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              color:        "var(--text-muted)",
              fontSize:     "0.95rem",
              lineHeight:   1.8,
              maxWidth:     540,
              marginBottom: "2rem",
            }}
          >
            A collection of projects showcasing skills across frontend, backend,
            and emerging AI technologies.
          </p>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={0.15}>
          <div className="projects-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn ${active === tab.key ? "active" : ""}`}
                onClick={() => setActive(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              animDelay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}