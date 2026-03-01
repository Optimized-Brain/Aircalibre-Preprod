'use client';

import { useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from 'framer-motion';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Generate random coordinates for abstract data pings
const generateRandomMarkers = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        coordinates: [
            Math.random() * 360 - 180, // longitude range -180 to 180
            Math.random() * 160 - 80,  // latitude range -80 to 80 (avoid poles)
        ] as [number, number],
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
    }));
};

export function WorldMapBackground() {
    const markers = useMemo(() => generateRandomMarkers(30), []);

    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none mix-blend-screen bg-black">

            {/* Slowly rotating map container */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 200, ease: "linear", repeat: Infinity }}
                className="w-full h-full flex items-center justify-center opacity-30 scale-[1.8] md:scale-125 lg:scale-100"
            >
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 150,
                    }}
                    width={980}
                    height={551}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }: { geographies: any[] }) =>
                            geographies.map((geo: any) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="transparent"
                                    stroke="#555555"
                                    strokeWidth={0.5}
                                    strokeDasharray="2 4"
                                    style={{
                                        default: { outline: "none" },
                                        hover: { outline: "none" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {/* Animated Data Pings */}
                    {markers.map(({ id, coordinates, delay, duration }) => (
                        <Marker key={id} coordinates={coordinates}>
                            <motion.circle
                                r={2}
                                fill="#ffffff"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                                transition={{
                                    duration,
                                    delay,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            {/* Outer ping ripple */}
                            <motion.circle
                                r={8}
                                fill="transparent"
                                stroke="#ffffff"
                                strokeWidth={0.5}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 0.5, 0], scale: [0, 2, 3] }}
                                transition={{
                                    duration: duration * 1.5,
                                    delay,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                            />
                        </Marker>
                    ))}
                </ComposableMap>
            </motion.div>

            {/* Vertical Scanning Line Effect */}
            <motion.div
                className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                animate={{ y: ["-100vh", "100vh"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Global Vignette/Mask */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_70%)]" />
        </div>
    );
}
