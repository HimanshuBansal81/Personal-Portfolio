"use client";

import { useEffect, useState } from "react";

const CONTENT_STRINGS = [
  "SELECT * FROM rates WHERE active=1",
  "POST /api/calculate",
  "Cache miss -> recalculating",
  "Worker thread initialized",
  "Resolving dependencies...",
  "npm install packages...",
  "Building modules...",
  "Optimizing bundle...",
  "GET /api/pricing 200",
  "Index scan started",
  "Retrying failed job...",
  "Compiling service layer",
  "Connection pool ready",
  "Refreshing cache entries",
  "Validating release build",
  "Starting background worker",
  "Merging query results",
  "Applying migration plan",
  "Syncing environment vars",
  "Monitoring queue depth",
  "Rate rules loaded",
  "Tracing slow endpoint",
];

type BackgroundItem = {
  id: string;
  text: string;
  top: string;
  left: string;
  delay: string;
  duration: string;
  fontSize: string;
  maxWidth: string;
};

const ITEM_COUNT = 22;
const GRID_COLUMNS = 5;
const GRID_ROWS = 5;

function createBackgroundItems() {
  const availableCells = Array.from(
    { length: GRID_COLUMNS * GRID_ROWS },
    (_, index) => index,
  ).sort(() => Math.random() - 0.5);

  return Array.from({ length: ITEM_COUNT }, (_, index) => {
    const cellIndex = availableCells[index % availableCells.length];
    const column = cellIndex % GRID_COLUMNS;
    const row = Math.floor(cellIndex / GRID_COLUMNS);
    const cellWidth = 100 / GRID_COLUMNS;
    const cellHeight = 100 / GRID_ROWS;
    const top = row * cellHeight + 6 + Math.random() * (cellHeight - 12);
    const left = column * cellWidth + 4 + Math.random() * (cellWidth - 8);
    const delay = -(Math.random() * 24);
    const duration = 22 + Math.random() * 16;
    const size = 11 + Math.floor(Math.random() * 3);
    const width = 150 + Math.floor(Math.random() * 120);

    return {
      id: `terminal-item-${index}`,
      text: CONTENT_STRINGS[Math.floor(Math.random() * CONTENT_STRINGS.length)],
      top: `${top}%`,
      left: `${left}%`,
      delay: `${delay}s`,
      duration: `${duration}s`,
      fontSize: `${size}px`,
      maxWidth: `${width}px`,
    };
  });
}

export default function TerminalBackground() {
  const [items, setItems] = useState<BackgroundItem[]>([]);

  useEffect(() => {
    setItems(createBackgroundItems());
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,148,255,0.08),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(102,126,255,0.06),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,8,18,0.94),rgba(4,8,18,0.74),rgba(4,8,18,0.94))]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#040814] via-[#040814]/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#040814] via-[#040814]/90 to-transparent" />

      <div className="absolute inset-0">
        {items.map((item) => (
          <div
            key={item.id}
            className="motion-safe:animate-terminal-float absolute font-mono leading-relaxed tracking-[0.08em] text-sky-100/[0.08] [filter:blur(1px)]"
            style={{
              top: item.top,
              left: item.left,
              maxWidth: item.maxWidth,
              fontSize: item.fontSize,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            <span className="block truncate whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
