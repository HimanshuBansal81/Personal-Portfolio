"use client";

const TECH_MARKERS = [
  "Node.js",
  "Docker",
  ".NET",
  "SQL",
  "Redis",
  "TypeScript",
  "OpenAI API",
  "CI/CD",
  "PostgreSQL",
  "REST",
  "Git",
  "Workers",
  "Queues",
  "Caching",
  "APIs",
  "Telemetry",
  "Pipelines",
  "Services",
];

const ITEM_COUNT = 18;
const GRID_COLUMNS = 6;
const GRID_ROWS = 4;

function createSeededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function createBackgroundItems() {
  const random = createSeededRandom(81);
  const cells = Array.from(
    { length: GRID_COLUMNS * GRID_ROWS },
    (_, index) => index,
  ).sort(() => random() - 0.5);

  return Array.from({ length: ITEM_COUNT }, (_, index) => {
    const cell = cells[index % cells.length];
    const column = cell % GRID_COLUMNS;
    const row = Math.floor(cell / GRID_COLUMNS);
    const cellWidth = 100 / GRID_COLUMNS;
    const cellHeight = 100 / GRID_ROWS;
    const top = row * cellHeight + 6 + random() * (cellHeight - 12);
    const left = column * cellWidth + 4 + random() * (cellWidth - 8);
    const duration = 24 + random() * 16;
    const delay = -(random() * 18);
    const size = 11 + Math.floor(random() * 4);
    const rotate = -8 + random() * 16;

    return {
      id: `tech-bg-${index}`,
      label: TECH_MARKERS[Math.floor(random() * TECH_MARKERS.length)],
      top: `${top}%`,
      left: `${left}%`,
      delay: `${delay}s`,
      duration: `${duration}s`,
      size: `${size}px`,
      rotate: `${rotate}deg`,
    };
  });
}

const backgroundItems = createBackgroundItems();

export default function FloatingTechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,148,255,0.07),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(130,146,179,0.04),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,8,18,0.94),rgba(4,8,18,0.72),rgba(4,8,18,0.94))]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#040814] via-[#040814]/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#040814] via-[#040814]/90 to-transparent" />

      <div className="absolute inset-0">
        {backgroundItems.map((item) => (
          <div
            key={item.id}
            className="motion-safe:animate-terminal-float absolute rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-slate-200/[0.07] grayscale [filter:blur(1px)]"
            style={{
              top: item.top,
              left: item.left,
              fontSize: item.size,
              transform: `rotate(${item.rotate})`,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
