"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export function AbstractParticleSystem() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        // Create initial dense cloud representing PM2.5
        const initialParticles: Particle[] = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 3 + 1, // small particulate matter
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5 - 0.2, // slow upward drift
            opacity: Math.random() * 0.5 + 0.1,
        }));

        setParticles(initialParticles);

        let animationFrameId: number;

        const animate = () => {
            setParticles((prevParticles) =>
                prevParticles.map((p) => {
                    let newX = p.x + p.speedX;
                    let newY = p.y + p.speedY;

                    // Wrap around edges to create continuous flow
                    if (newY < -10) newY = height + 10;
                    if (newX < -10) newX = width + 10;
                    if (newX > width + 10) newX = -10;

                    return { ...p, x: newX, y: newY };
                })
            );
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden bg-black pointer-events-none"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] mix-blend-screen" />
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        filter: `blur(${p.size > 2 ? '1px' : '0px'})`,
                    }}
                    animate={{
                        opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
    );
}
