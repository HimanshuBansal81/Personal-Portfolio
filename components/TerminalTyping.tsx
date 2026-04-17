"use client";

import { useEffect, useState } from "react";

const TERMINAL_LINES = [
  "Initializing system...",
  "Optimizing queries...",
  "Deploying services...",
];

const TYPING_SPEED = 58;
const PAUSE_AFTER_TYPED = 1400;
const PAUSE_AFTER_DELETE = 320;

export default function TerminalTyping() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = TERMINAL_LINES[lineIndex];

    if (!isDeleting && displayedText === currentLine) {
      const timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPED);

      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setLineIndex((previous) => (previous + 1) % TERMINAL_LINES.length);
      }, PAUSE_AFTER_DELETE);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setDisplayedText((previous) =>
        isDeleting
          ? currentLine.slice(0, previous.length - 1)
          : currentLine.slice(0, previous.length + 1),
      );
    }, isDeleting ? TYPING_SPEED / 2 : TYPING_SPEED);

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, lineIndex]);

  return (
    <div className="theme-card-muted mt-6 flex min-h-14 max-w-md items-center rounded-2xl px-4 py-3 font-mono text-sm text-slate-300/80">
      <span className="mr-3 text-sky-200/45">$</span>
      <span className="truncate">{displayedText}</span>
      <span className="ml-1 inline-block h-4 w-px animate-pulse bg-sky-100/55" />
    </div>
  );
}
