import "./About.css";
import AboutInfo from "./AboutInfo";
import { personalInfo } from "../../data/about";
import useScrollReveal from "../../hooks/useScrollReveal";

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

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* Section header */}
        <Reveal>
          <p className="about-sub-label">// about me</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            style={{
              fontSize:      "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight:    700,
              letterSpacing: "-1px",
              lineHeight:    1.15,
              marginBottom:  "2.5rem",
            }}
          >
            Let Me Introduce{" "}
            <span style={{ color: "var(--accent)" }}>Myself</span>
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="about-grid">

          {/* LEFT — table + education + scores */}
          <Reveal delay={0.1}>
            <AboutInfo />
          </Reveal>

          {/* RIGHT — image + text boxes */}
          <Reveal delay={0.2}>
            <div className="about-right">
              <img
                src={personalInfo.aboutImage}
                alt="Pujith reading"
                className="about-image"
              />

              <div className="info-box">
                <h3>Who I Am</h3>
                {personalInfo.aboutDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="info-box">
                <h3>Currently Learning 🚀</h3>
                <div className="interest-chips">
                  {[
                    "Machine Learning",
                    "Generative AI",
                    "LLM Engineering",
                    "Prompt Engineering",
                    "RAG Systems",
                    "Python Advanced",
                  ].map((tag) => (
                    <span key={tag} className="interest-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}