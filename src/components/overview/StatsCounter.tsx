"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  format?: 'number' | 'currency';
}

const stats: Stat[] = [
  { label: "Clients", value: 6 },
  { label: "Channels", value: 5 },
  { label: "Monthly Visits", value: 147, suffix: "K" },
  { label: "Campaign Revenue", value: 87, prefix: "$", suffix: "K" },
];

function AnimatedNumber({ value, prefix = "", suffix = "", duration = 2000 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <div className="py-8 border-y border-border/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center animate-count-up">
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
