import { useState, useEffect } from "react";
import useTyping from "../../hooks/useTyping";

const ROLES = [
  "Full-Stack Developer",
  "Python Developer",
  "AI Enthusiast",
  "Gen AI Explorer",
  "Problem Solver",
];

export default function TypingText() {
  const text = useTyping(ROLES);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
   <p
  style={{
    fontFamily: "'JetBrains Mono', monospace",
    color: "#38bdf8",
    fontSize: "1rem",
    margin: "1rem 0 1.4rem",
    minHeight: "1.5em",
  }}
>
  <span>// </span>
  <span>{text}</span>
  <span
    style={{
      display: "inline-block",
      width: 2,
      height: "1em",
      background: "#38bdf8",
      marginLeft: 3,
      verticalAlign: "middle",
      opacity: blink ? 1 : 0,
      transition: "opacity 0.1s",
    }}
  />
</p>
  );
}