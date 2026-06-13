import { useState } from "react";

export default function NavLink({ label, sectionId, onClick }) {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background:    "none",
        border:        "none",
        borderBottom:  hover ? "1px solid #38bdf8" : "1px solid transparent",
        cursor:        "pointer",
        color:         hover ? "#38bdf8" : "#94a3b8",
        fontSize:      "0.88rem",
        fontWeight:    500,
        fontFamily:    "inherit",
        padding:       "4px 0",
        transition:    "color 0.2s, border-color 0.2s",
      }}
    >
      {label}
    </button>
  );
}