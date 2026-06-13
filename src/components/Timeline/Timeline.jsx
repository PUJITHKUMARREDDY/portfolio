import "./Timeline.css";
import timeline from "../../data/timeline";
import useScrollReveal from "../../hooks/useScrollReveal";

/* ── Type → visual config ── */
const TYPE_CONFIG = {
  education: { color: "#38bdf8", bg: "rgba(56,189,248,0.09)",   label: "Education" },
  project:   { color: "#34d399", bg: "rgba(52,211,153,0.09)",   label: "Project"   },
  learning:  { color: "#818cf8", bg: "rgba(129,140,248,0.09)",  label: "Learning"  },
  work:      { color: "#fb923c", bg: "rgba(251,146,60,0.09)",   label: "Work"      },
};

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

/* ── Single timeline item ── */
function TimelineItem({ item, delay }) {
  const [ref, visible] = useScrollReveal();
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.education;

  return (
    <div
      ref={ref}
      className="timeline-item timeline-item-animate"
      style={{
        opacity:        visible ? 1 : 0,
        transform:      visible ? "none" : "translateX(-20px)",
        transition:     `opacity 0.6s ${delay}s, transform 0.6s ${delay}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Glow dot */}
      <div className="timeline-dot" data-type={item.type} />

      {/* Content card */}
      <div className="timeline-content">
        {/* Type chip */}
        <span
          className="timeline-type-chip"
          style={{
            background: cfg.bg,
            border:     `1px solid ${cfg.color}44`,
            color:      cfg.color,
          }}
        >
          {cfg.label}
        </span>

        <div className="timeline-date">{item.date}</div>
        <div className="timeline-title">{item.title}</div>
        <div className="timeline-org">{item.org}</div>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-inner">

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
            <span>//</span> journey
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
            Education &amp;{" "}
            <span style={{ color: "var(--accent)" }}>Milestones</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              color:        "var(--text-muted)",
              fontSize:     "0.95rem",
              lineHeight:   1.8,
              maxWidth:     540,
              marginBottom: "0.5rem",
            }}
          >
            My academic journey, projects, and continuous learning milestones.
          </p>
        </Reveal>

        {/* Track */}
        <div className="timeline-track">
          {timeline.map((item, i) => (
            <TimelineItem key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}