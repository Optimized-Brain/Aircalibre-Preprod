'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ParticleBackground() {
  const { resolvedTheme } = useTheme();
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      size: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
    }>
  >([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  useEffect(() => {
    if (isDark) {
      const newParticles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10, // 10s to 20s
        delay: Math.random() * 20, // 0s to 20s
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isDark]);

  if (!isDark) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}vw`,
            top: `${p.top}vh`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
