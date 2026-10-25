'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Layers, Cpu, RadioReceiver } from 'lucide-react';

export function ExtrudedSensorComponent() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: rawProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scrollYProgress = useSpring(rawProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Rotation: pops into isometric on scroll, flattens back at end
    const rotateX = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 65, 65, 0]);
    const rotateZ = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, -45, -45, 0]);

    // Z Displacements (explosion)
    const topLayerZ = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 300, 300, 0]);
    const opticLayerZ = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 100, 100, 0]);
    const pcbLayerZ = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, -100, -100, 0]);
    const baseLayerZ = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, -300, -300, 0]);

    // Opacities for Focus Highlighting
    const layer1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.35, 0.95, 1], [1, 1, 1, 0.1, 0.1, 1]);
    const layer2Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3, 0.5, 0.55, 0.95, 1], [1, 0.1, 0.1, 1, 1, 0.1, 0.1, 1]);
    const layer3Opacity = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.5, 0.7, 0.75, 0.95, 1], [1, 0.1, 0.1, 1, 1, 0.1, 0.1, 1]);
    const layer4Opacity = useTransform(scrollYProgress, [0, 0.1, 0.65, 0.7, 0.9, 0.95, 1], [1, 0.1, 0.1, 1, 1, 0.1, 1]);

    // Text animations (Fade in & Slide up)
    const text1Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
    const text4Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);

    const text1Y = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [30, 0, 0, -30]);
    const text2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [30, 0, 0, -30]);
    const text3Y = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [30, 0, 0, -30]);
    const text4Y = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [30, 0, 0, -30]);

    return (
        <div ref={containerRef} className="premium-surface relative h-[400vh] w-full border-y border-zinc-800">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1400px]">

                {/* Background Decor */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

                {/* Left Side: Dynamic Text Section */}
                <div className="absolute left-6 md:left-24 lg:left-32 xl:left-48 top-0 h-full w-full max-w-sm z-50 pointer-events-none flex items-center">
                    {/* Casing Text */}
                    <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute inset-x-0">
                        <h3 className="font-headline text-4xl sm:text-5xl uppercase text-white mb-4 tracking-tighter">Portable by design</h3>
                        <p className="font-light text-zinc-400 text-base md:text-lg leading-relaxed">GoodOne is being developed as a compact monitor to carry between everyday environments. Enclosure design and airflow still need validation.</p>
                    </motion.div>

                    {/* Optic Text */}
                    <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute inset-x-0">
                        <h3 className="font-headline text-4xl sm:text-5xl uppercase text-white mb-4 tracking-tighter">Multi-sensor design</h3>
                        <p className="font-light text-zinc-400 text-base md:text-lg leading-relaxed">The current sensor direction combines PM2.5 and PM10 with CO2, VOC, temperature, and humidity. Final integration and performance are still being validated.</p>
                    </motion.div>

                    {/* PCB Text */}
                    <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute inset-x-0">
                        <h3 className="font-headline text-4xl sm:text-5xl uppercase text-white mb-4 tracking-tighter">Control board</h3>
                        <p className="font-light text-zinc-400 text-base md:text-lg leading-relaxed">GoodOne is being built around an ESP32-S3-based controller. Prototype boards have been manufactured; bring-up and sensor integration are in progress.</p>
                    </motion.div>

                    {/* Base Text */}
                    <motion.div style={{ opacity: text4Opacity, y: text4Y }} className="absolute inset-x-0">
                        <h3 className="font-headline text-4xl sm:text-5xl uppercase text-white mb-4 tracking-tighter">Power and interface</h3>
                        <p className="font-light text-zinc-400 text-base md:text-lg leading-relaxed">The design includes a small display, physical buttons, phone connectivity, and a rechargeable battery. Runtime and the finished user experience have not yet been validated.</p>
                    </motion.div>
                </div>

                {/* Center/Right: 3D Scene Container */}
                <motion.div
                    style={{ rotateX, rotateZ }}
                    className="relative w-64 h-64 md:w-80 md:h-80 md:translate-x-32 lg:translate-x-48 [transform-style:preserve-3d]"
                >
                    {/* Top Casing */}
                    <motion.div
                        style={{ z: topLayerZ, opacity: layer1Opacity }}
                        className="absolute inset-0 bg-zinc-900 border border-zinc-700 shadow-2xl flex flex-col items-center justify-center transition-opacity duration-300"
                    >
                        <div className="w-32 h-32 rounded-full border border-zinc-700 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border border-zinc-800 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full border border-zinc-800" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Optical Chamber */}
                    <motion.div
                        style={{ z: opticLayerZ, opacity: layer2Opacity }}
                        className="absolute inset-4 bg-[#0a0a0a]/90 border border-zinc-800 backdrop-blur-md flex flex-col items-center justify-center transition-opacity duration-300"
                    >
                        <div className="absolute top-2 right-2 font-code text-[10px] text-zinc-500">SENSOR MODULE</div>
                        <Layers className="w-16 h-16 text-zinc-500 relative z-10" strokeWidth={1} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[2px] bg-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.8)] rotate-45" />
                    </motion.div>

                    {/* Main PCB */}
                    <motion.div
                        style={{ z: pcbLayerZ, opacity: layer3Opacity }}
                        className="absolute inset-2 bg-[#050505] border border-[#222] flex flex-col items-center justify-center gap-4 transition-opacity duration-300"
                    >
                        <div className="absolute bottom-2 left-2 font-code text-[10px] text-zinc-500">CONTROL PCB</div>
                        <Cpu className="w-20 h-20 text-white" strokeWidth={1} />
                        <div className="w-full px-8 flex justify-between">
                            <div className="w-4 h-4 bg-zinc-800" />
                            <div className="w-4 h-4 bg-zinc-800" />
                            <div className="w-4 h-4 bg-zinc-800" />
                        </div>
                    </motion.div>

                    {/* Base Plate */}
                    <motion.div
                        style={{ z: baseLayerZ, opacity: layer4Opacity }}
                        className="absolute -inset-2 bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center transition-opacity duration-300"
                    >
                        <div className="absolute bottom-4 right-4 font-code text-[10px] text-zinc-500">POWER / DISPLAY</div>
                        <RadioReceiver className="w-16 h-16 text-zinc-700 mb-4" strokeWidth={1} />
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-zinc-800" />
                            <div className="w-2 h-2 rounded-full bg-zinc-800" />
                            <div className="w-2 h-2 rounded-full bg-zinc-800" />
                            <div className="w-2 h-2 rounded-full bg-zinc-800" />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
