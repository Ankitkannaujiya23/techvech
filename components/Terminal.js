"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// The lines this terminal "types" out. Editing this array is the easiest
// way to change what the hero animation showcases.
const LINES = [
  {
    cmd: "techvech build --type=website",
    out: "✓ deployed in 3 weeks · Core Web Vitals 98/100",
    tone: "ok",
  },
  {
    cmd: "techvech build --type=mobile-app",
    out: "✓ shipped to App Store & Play Store",
    tone: "ok",
  },
  {
    cmd: "techvech build --type=ai-pipeline",
    out: "✓ RAG pipeline live · latency 340ms",
    tone: "ok",
  },
  {
    cmd: "techvech hire --role=developer --stack=react",
    out: "→ 3 vetted profiles ready for review",
    tone: "amber",
  },
];

export default function Terminal() {
  const [typedLines, setTypedLines] = useState([]);
  const [currentTyped, setCurrentTyped] = useState("");
  const [showCurrentOut, setShowCurrentOut] = useState(false);
  const [done, setDone] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion.current) {
      setTypedLines(LINES);
      setDone(true);
      return undefined;
    }

    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;

    function typeNextChar() {
      if (cancelled) return;
      const line = LINES[lineIndex];

      if (charIndex <= line.cmd.length) {
        setCurrentTyped(line.cmd.slice(0, charIndex));
        charIndex += 1;
        setTimeout(typeNextChar, 26);
        return;
      }

      setShowCurrentOut(true);
      setTimeout(() => {
        if (cancelled) return;
        setTypedLines((prev) => [...prev, line]);
        setCurrentTyped("");
        setShowCurrentOut(false);
        lineIndex += 1;
        charIndex = 0;

        if (lineIndex < LINES.length) {
          setTimeout(typeNextChar, 300);
        } else {
          setDone(true);
        }
      }, 550);
    }

    const startTimer = setTimeout(typeNextChar, 400);
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, []);

  const activeLine = LINES[typedLines.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-panel to-panel2 shadow-2xl"
      role="img"
      aria-label="Terminal animation showing TechVech deploying a website, a mobile app, an AI pipeline, and finding developers to hire"
    >
      <div className="flex items-center gap-2 border-b border-border bg-black/5 px-4 py-3 dark:bg-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6259]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-mono text-xs text-muted">techvech — zsh</span>
      </div>

      <div className="min-h-[260px] p-6 font-mono text-[13.5px] leading-relaxed">
        {typedLines.map((line, i) => (
          <div key={i} className="mb-3.5">
            <span className="text-teal">$ </span>
            <span className="text-ink">{line.cmd}</span>
            <span
              className={`mt-1 block pl-5 ${
                line.tone === "amber" ? "text-amber" : "text-teal-dim"
              }`}
            >
              {line.out}
            </span>
          </div>
        ))}

        {!done && activeLine && (
          <div className="mb-3.5">
            <span className="text-teal">$ </span>
            <span className="text-ink">{currentTyped}</span>
            {showCurrentOut && (
              <span
                className={`mt-1 block pl-5 ${
                  activeLine.tone === "amber" ? "text-amber" : "text-teal-dim"
                }`}
              >
                {activeLine.out}
              </span>
            )}
          </div>
        )}

        {done && (
          <div>
            <span className="text-teal">$ </span>
            <span className="inline-block h-3.5 w-2 animate-blink bg-teal align-middle" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
