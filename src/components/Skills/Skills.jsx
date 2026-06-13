import "./Skills.css";
import { skillImages, skillGroups, learningTags } from "../../data/skills";
import useScrollReveal from "../../hooks/useScrollReveal";

/* ── Local reveal wrapper ── */
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
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

/* ── Animated progress bar tied to scroll visibility ── */
function SkillBar({ level, gradient }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{
          width:      visible ? `${level}%` : "0%",
          background: gradient,
        }}
      />
    </div>
  );
}

/* ── One skill group card ── */
function SkillGroupCard({ group, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className="skill-group-card"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : "translateY(28px)",
        transition: `opacity 0.6s ${delay}s, transform 0.6s ${delay}s`,
      }}
    >
      <div className="skill-group-header">
        <div
          className="skill-group-icon"
          style={{
            background: group.bgColor,
            color:      group.accentColor,
          }}
        >
          {group.icon}
        </div>
        <span className="skill-group-title">{group.title}</span>
      </div>

      <div className="skill-items">
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <div className="skill-item-top">
              <span className="skill-item-name">{skill.name}</span>
              <span className="skill-item-pct">{skill.level}%</span>
            </div>
            <SkillBar level={skill.level} gradient={group.gradient} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">

        {/* Header */}
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
            // technical skills
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
            What I <span style={{ color: "var(--accent)" }}>Work With</span>
          </h2>
        </Reveal>

        {/* Skill image icons */}
        <Reveal delay={0.1}>
          <div className="skill-images-row">
            {skillImages.map((img, i) => (
              <div
                key={img.alt}
                className="skill-img-icon"
                style={{ animationDelay: `${i * 0.08}s` }}
                title={img.alt}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Progress bar cards */}
        <div className="skill-groups-grid">
          {skillGroups.map((group, i) => (
            <SkillGroupCard
              key={group.id}
              group={group}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Learning banner */}
        <Reveal delay={0.2}>
          <div className="learning-banner">
            <span className="learning-banner-icon">🚀</span>
            <div>
              <h3>Currently Upskilling — Advanced Python & AI Engineering</h3>
              <p>
                Actively learning cutting-edge AI technologies to build
                intelligent, real-world applications. Goal: proficient Gen AI
                Engineer &amp; LLM specialist.
              </p>
              <div className="learning-tags">
                {learningTags.map((tag) => (
                  <span
                    key={tag.label}
                    className="learning-tag"
                    style={{
                      background: tag.bg,
                      border:     `1px solid ${tag.color}44`,
                      color:      tag.color,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}