import HeroCard from "./HeroCard";
import TypingText from "./TypingText";
import SocialIcon from "./SocialIcon";
import { personalInfo } from "../../data/about";
import socialLinks from "../../data/socialLink";

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display:   "flex",
        alignItems:"center",
        padding:   "120px 5% 80px",
        position:  "relative",
      }}
    >
      <div
        style={{
          maxWidth:            1100,
          width:               "100%",
          margin:              "0 auto",
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "3.5rem",
          alignItems:          "center",
        }}
      >
        {/* ── LEFT CONTENT ── */}
        <div style={{ animation: "fadeUp 0.7s 0.1s both" }}>
          {/* Availability badge */}
          <div
            style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          8,
              fontFamily:   "'JetBrains Mono', monospace",
              fontSize:     "0.72rem",
              color:        "#34d399",
              background:   "rgba(52,211,153,0.08)",
              border:       "1px solid rgba(52,211,153,0.22)",
              padding:      "5px 14px",
              borderRadius: 100,
              marginBottom: "1.4rem",
            }}
          >
            <span
              style={{
                width:        6,
                height:       6,
                borderRadius: "50%",
                background:   "#34d399",
                animation:    "pulse 2s infinite",
                display:      "inline-block",
              }}
            />
            {personalInfo.availability}
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize:      "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight:    700,
              letterSpacing: "-1.5px",
              lineHeight:    1.1,
              marginBottom:  "0.2rem",
            }}
          >
            <span style={{ display: "block", color: "#e2e8f0" }}>
              Kalluru Pujith
            </span>
            <span
              style={{
                display:              "block",
                background:           "linear-gradient(135deg,#38bdf8,#818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
              }}
            >
              Kumar Reddy
            </span>
          </h1>

          {/* Typing animation */}
          <TypingText />

          {/* Description */}
          <p
            style={{
              color:     "#94a3b8",
              fontSize:  "0.97rem",
              lineHeight: 1.8,
              maxWidth:   500,
            }}
          >
            B.Tech CSE student at RGMCET passionate about building impactful
            software — from dynamic web apps to AI-powered systems. Currently
            diving deep into ML, Gen AI & LLM engineering.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display:   "flex",
              gap:       "1rem",
              marginTop: "1.8rem",
              flexWrap:  "wrap",
            }}
          >
            <a
              href={personalInfo.resumeUrl}
              download
              style={{
                background:     "linear-gradient(135deg,#38bdf8,#818cf8)",
                color:          "#0a0f1e",
                fontWeight:     700,
                padding:        "12px 26px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       "0.9rem",
                boxShadow:      "0 0 28px rgba(56,189,248,0.22)",
                transition:     "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 36px rgba(56,189,248,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 0 28px rgba(56,189,248,0.22)";
              }}
            >
              ⬇ Download Resume
            </a>
            <button
              onClick={scrollToProjects}
              style={{
                background:   "transparent",
                border:       "1px solid rgba(56,189,248,0.22)",
                color:        "#e2e8f0",
                padding:      "12px 26px",
                borderRadius: 8,
                cursor:       "pointer",
                fontSize:     "0.9rem",
                fontFamily:   "inherit",
                fontWeight:   600,
                transition:   "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#38bdf8";
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.22)";
                e.currentTarget.style.color = "#e2e8f0";
                e.currentTarget.style.transform = "none";
              }}
            >
              View My Work →
            </button>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
            {socialLinks.map((s) => (
              <SocialIcon key={s.id} icon={s.icon} href={s.href} label={s.label} />
            ))}
          </div>
        </div>

        {/* ── RIGHT CARD ── */}
        <div
          style={{
            display:        "flex",
            justifyContent: "center",
            animation:      "fadeUp 0.7s 0.3s both",
          }}
        >
          <HeroCard />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position:   "absolute",
          bottom:     "2rem",
          left:       "50%",
          transform:  "translateX(-50%)",
          display:    "flex",
          flexDirection: "column",
          alignItems: "center",
          gap:        4,
          color:      "#94a3b8",
          fontSize:   "0.72rem",
          animation:  "bounce 2s infinite",
          cursor:     "pointer",
        }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
        scroll
      </div>
    </section>
  );
}