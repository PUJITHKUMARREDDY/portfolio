import SocialIcon from "../Hero/SocialIcon";
import socialLinks from "../../data/socialLink";

export default function Footer() {
  return (
    <footer
      style={{
        background:     "var(--bg)",
        borderTop:      "1px solid var(--border)",
        padding:        "2.2rem 5%",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        flexWrap:       "wrap",
        gap:            "1rem",
        position:       "relative",
        zIndex:         1,
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize:   "0.78rem",
          color:      "var(--text-muted)",
        }}
      >
        Designed &amp; built by{" "}
        <span style={{ color: "var(--accent)" }}>Pujith Kumar Reddy</span>{" "}
        · CopyRight 2025 ©
      </span>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        {socialLinks.map((s) => (
          <SocialIcon key={s.id} icon={s.icon} href={s.href} label={s.label} />
        ))}
      </div>
    </footer>
  );
}