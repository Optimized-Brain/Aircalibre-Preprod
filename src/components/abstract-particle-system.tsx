"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  opacity: number;
}

export function AbstractParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1000, y: -1000 };
    let particles: Particle[] = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(100, Math.max(36, Math.round((width * height) / 14000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        velocityX: (Math.random() - 0.5) * 0.18,
        velocityY: (Math.random() - 0.5) * 0.18 - 0.04,
        opacity: Math.random() * 0.38 + 0.12,
      }));
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        260,
      );
      glow.addColorStop(0, "rgba(255,255,255,0.07)");
      glow.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index++) {
        const particle = particles[index];
        if (!motionPreference.matches) {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        context.fill();

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex++) {
          const other = particles[otherIndex];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 105) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(255,255,255,${(1 - distance / 105) * 0.08})`;
            context.stroke();
          }
        }
      }

      if (!motionPreference.matches) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const trackPointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      if (pointer.x < 0 || pointer.x > width || pointer.y < 0 || pointer.y > height) {
        pointer.x = -1000;
        pointer.y = -1000;
      }
    };

    const handleMotionPreference = () => {
      window.cancelAnimationFrame(animationFrame);
      draw();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", trackPointer);
    motionPreference.addEventListener("change", handleMotionPreference);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", trackPointer);
      motionPreference.removeEventListener("change", handleMotionPreference);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="premium-surface pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
}
