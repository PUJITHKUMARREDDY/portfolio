import navLinks from "../../data/navLinks";

export default function MobileNav({ open, onClose }) {
  if (!open) return null;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <div
      style={{
        position:       "fixed",
        inset:          0,
        background:     "#0a0f1e",
        zIndex:         99,
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        gap:            "2rem",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position:   "absolute",
          top:        "1.5rem",
          right:      "5%",
          background: "none",
          border:     "none",
          color:      "#94a3b8",
          fontSize:   "1.8rem",
          cursor:     "pointer",
          lineHeight: 1,
        }}
        aria-label="Close menu"
      >
        ×
      </button>

      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollTo(link.id)}
          style={{
            background:  "none",
            border:      "none",
            color:       "#e2e8f0",
            fontSize:    "1.6rem",
            fontWeight:  700,
            cursor:      "pointer",
            fontFamily:  "inherit",
            transition:  "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
          onMouseLeave={(e) => (e.target.style.color = "#e2e8f0")}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}