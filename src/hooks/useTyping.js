import { useState, useEffect } from "react";

export default function useTyping(
  phrases,
  typingSpeed = 90,
  deleteSpeed  = 55,
  pauseMs      = 1800
) {
  const [display, setDisplay] = useState("");
  const [phase,   setPhase]   = useState("typing"); // "typing" | "deleting"
  const [idx,     setIdx]     = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = phrases[idx];
    let timer;

    if (phase === "typing") {
      if (charIdx < current.length) {
        timer = setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setPhase("deleting"), pauseMs);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, deleteSpeed);
      } else {
        setIdx((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [display, phase, charIdx, idx, phrases, typingSpeed, deleteSpeed, pauseMs]);

  return display;
}