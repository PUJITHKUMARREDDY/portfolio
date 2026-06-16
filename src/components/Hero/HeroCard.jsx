import { personalInfo } from "../../data/about";

const TAGS = [
  { label: "React",   color: "#38bdf8", bg: "rgba(56,189,248,0.08)"  },
  { label: "Python",  color: "#38bdf8", bg: "rgba(56,189,248,0.08)"  },
  { label: "ML",      color: "#818cf8", bg: "rgba(129,140,248,0.08)" },
  { label: "Gen AI",  color: "#818cf8", bg: "rgba(129,140,248,0.08)" },
  { label: "Node.js", color: "#34d399", bg: "rgba(52,211,153,0.08)"  },
  { label: "LLM",     color: "#fb923c", bg: "rgba(251,146,60,0.08)"  },
];

const STATS = [
  { val: personalInfo.cgpa,  label: "B.Tech CGPA" },
  { val: "3+",               label: "Projects"     },
  { val: "9.7",              label: "SSC GPA"      },
  { val: "2025",             label: "Graduated"   },
];

export default function HeroCard() {
  return (
    <div
      style={{
        background:  "#111827",
        border:      "1px solid rgba(56,189,248,0.14)",
        borderRadius: 20,
        padding:     "2.2rem",
        maxWidth:    340,
        width:       "100%",
        boxShadow:   "0 0 40px rgba(56,189,248,0.1)",
        position:    "relative",
        overflow:    "hidden",
      }}
    >
      {/* gradient overlay */}
      <div
        style={{
          position:   "absolute",
          inset:      0,
          background: "linear-gradient(135deg,rgba(31, 31, 36, 0.04) 0%,transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Avatar */}
      <div
        style={{
          width:          80,
          height:         80,
          borderRadius:   14,
          background:     "linear-gradient(135deg,#38bdf8,#818cf8)",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          fontSize:       "2rem",
          fontWeight:     700,
          color:          "#0a0f1e",
          marginBottom:   "1.2rem",
          fontFamily:     "'JetBrains Mono', monospace",
        }}
      >
        {personalInfo.initials}
      </div>

      <div style={{ fontWeight: 700, fontSize: "1.05rem",  }}>
        {personalInfo.shortName}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: 3 }}>
        CSE @ {personalInfo.college}
      </div>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "0.9rem" }}>
        {TAGS.map((t) => (
          <span
            key={t.label}
            style={{
              fontFamily:  "'JetBrains Mono', monospace",
              fontSize:    "0.68rem",
              padding:     "3px 10px",
              borderRadius: 100,
              background:  t.bg,
              border:      `1px solid ${t.color}33`,
              color:       t.color,
            }}
          >
            {t.label}
          </span>
        ))}
      </div>

      {/* Stats grid */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "0.75rem",
          marginTop:           "1.2rem",
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              background:   "#0a0f1e",
              border:       "1px solid rgba(56,189,248,0.12)",
              borderRadius: 10,
              padding:      "0.9rem",
              textAlign:    "center",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize:   "1.3rem",
                fontWeight: 700,
                color:      "#38bdf8",
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: "0.68rem", color: "#94a3b8", marginTop: 2 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}