import EducationCard from "./EducationCard";
import { aboutDetails, personalInfo, interests } from "../../data/about";
import education from "../../data/education";

export default function AboutInfo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Details table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {aboutDetails.map(({ label, value }) => (
            <tr key={label}>
              <td
                style={{
                  padding:     "10px 0",
                  borderBottom:"1px solid rgba(255,255,255,0.05)",
                  color:       "#94a3b8",
                  width:       "40%",
                  fontSize:    "0.88rem",
                  verticalAlign: "top",
                }}
              >
                {label}
              </td>
              <td
                style={{
                  padding:     "10px 0",
                  borderBottom:"1px solid rgba(255,255,255,0.05)",
                  color:       "#e2e8f0",
                  fontWeight:  500,
                  fontSize:    "0.88rem",
                }}
              >
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Education cards */}
      <div>
        <h3
          style={{
            fontSize:    "0.82rem",
            color:       "#38bdf8",
            marginBottom:"1rem",
            fontFamily:  "'JetBrains Mono', monospace",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Education
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {education.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </div>
      </div>

      {/* Score bubbles */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {[
          { val: personalInfo.cgpa, label: "B.Tech CGPA" },
          { val: "936",             label: "Intermediate" },
          { val: "9.7",             label: "SSC GPA"      },
        ].map((b) => (
          <div
            key={b.label}
            style={{
              background:   "#111827",
              border:       "1px solid rgba(56,189,248,0.18)",
              borderRadius: 12,
              padding:      "1rem 1.4rem",
              textAlign:    "center",
              minWidth:     90,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize:   "1.4rem",
                fontWeight: 700,
                color:      "#38bdf8",
              }}
            >
              {b.val}
            </div>
            <div style={{ fontSize: "0.7rem", color: "#94a3b8", marginTop: 3 }}>
              {b.label}
            </div>
          </div>
        ))}
      </div>

      {/* Interests */}
      <div>
        <h3
          style={{
            fontSize:     "0.82rem",
            color:        "#38bdf8",
            marginBottom: "0.75rem",
            fontFamily:   "'JetBrains Mono', monospace",
            letterSpacing:"1px",
            textTransform:"uppercase",
          }}
        >
          Interests
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {interests.map((i) => (
            <span
              key={i}
              style={{
                padding:      "5px 13px",
                borderRadius: 100,
                background:   "#0a0f1e",
                border:       "1px solid rgba(56,189,248,0.14)",
                fontSize:     "0.8rem",
                color:        "#e2e8f0",
              }}
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}