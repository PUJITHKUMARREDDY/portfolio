import { useState } from "react";

export default function EducationCard({ institution, period, degree, score, scoreLabel }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background:     "#111827",
        border:         `1px solid ${hover ? "#38bdf8" : "rgba(56,189,248,0.13)"}`,
        borderRadius:   12,
        padding:        "1.1rem 1.4rem",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        transition:     "border-color 0.22s",
        cursor:         "default",
      }}
    >
      <div>
        <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
          {institution} · {period}
        </div>
        <div style={{ fontWeight: 600, fontSize: "0.9rem", marginTop: 3, color: "#e2e8f0" }}>
          {degree}
        </div>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize:   "1.25rem",
            fontWeight: 700,
            color:      "#38bdf8",
          }}
        >
          {score}
        </div>
        <div style={{ fontSize: "0.65rem", color: "#94a3b8" }}>{scoreLabel}</div>
      </div>
    </div>
  );
}