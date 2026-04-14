'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  GitBranch,
  Cpu,
  Users,
  BarChart,
  Layers,
  Thermometer,
  Cloudy,
  Wifi,
  Copyright,
  Power,
  Gauge,
  Clock,
  Ruler,
  ArrowRight
} from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SpotlightText } from '@/components/spotlight-text';
import { ExtrudedSensorComponent } from '@/components/extruded-sensor';
import { DecodeText } from '@/components/decode-text';


const specs = [
  { icon: <Ruler className="h-4 w-4" />, name: 'Sensing Principle', value: 'Laser Scattering' },
  { icon: <Layers className="h-4 w-4" />, name: 'Particulate Range', value: 'PM1.0, PM2.5, PM10' },
  { icon: <Gauge className="h-4 w-4" />, name: 'Measurement Range', value: '0-1000 µg/m³' },
  { icon: <BarChart className="h-4 w-4" />, name: 'Accuracy', value: '±10%' },
  { icon: <Cpu className="h-4 w-4" />, name: 'Drift Compensation', value: 'Onboard Neural Net' },
  { icon: <Wifi className="h-4 w-4" />, name: 'Connectivity', value: 'Wi-Fi (2.4GHz) / Open API' },
  { icon: <Clock className="h-4 w-4" />, name: 'Data Interval', value: '1 min (configurable)' },
  { icon: <Power className="h-4 w-4" />, name: 'Power', value: '5V USB-C' },
  { icon: <Copyright className="h-4 w-4" />, name: 'License', value: 'Open Source Hardware (CERN-OHL)' },
];
/* Ye specs ka content ka discuss karke update kar denge*/

export default function TechnologyPage() {
  const hardwareImage = PlaceHolderImages.find(
    (img) => img.id === 'tech-hardware-diagram'
  );

  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">

      {/* HEADER */}
      <section className="relative min-h-[80vh] w-full flex flex-col justify-end pb-24 pt-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="font-code text-xs font-bold tracking-widest text-muted-foreground mb-8 uppercase">
                // Documentation / Architectural Overview
          </div>
          <SpotlightText spotlightSize={400} className="-ml-2 md:-ml-8 lg:-ml-12">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[9rem] font-normal tracking-tighter uppercase leading-[0.85] mb-16 xl:whitespace-nowrap">
              Engineered <span className="text-muted-foreground italic font-serif lowercase tracking-normal">for</span> Truth.
            </h1>
          </SpotlightText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-border pt-8">
            <p className="max-w-2xl text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              Discover the high-precision laser scattering hardware, the onboard neural environmental compensation models, and the aggressive open-source philosophy that defines our sensing units.
            </p>
            <div className="font-code text-sm uppercase tracking-widest bg-foreground text-background px-4 py-2">
              Rev. 1.0.4
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE OVERVIEW */}
      <section id="hardware" className="py-24 md:py-40 bg-foreground text-background border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            <div className="lg:col-span-5 space-y-12 sticky top-32">
              <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase leading-none">
                Single <br /> Sensor, <br /> <span className="text-zinc-500">Global <br /> Scope.</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed">
                Made for multi-environment Pollution Monitoring from quiet interiors to severe urban congestion, our sensors accurately measure Particulate Matter and calculates Air Quality around you.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[3/4] md:aspect-square w-full bg-zinc-950 p-4 border border-zinc-800 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />

                {hardwareImage && (
                  <Image
                    src={hardwareImage.imageUrl}
                    alt={hardwareImage.description}
                    data-ai-hint={hardwareImage.imageHint}
                    fill
                    className="object-cover grayscale opacity-60 mix-blend-screen transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                  />
                )}

                {/* Overlay Grid lines for structural feel */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-zinc-800/50" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800/50" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-zinc-800/50" />
                <div className="absolute left-1/4 top-0 h-full w-px bg-zinc-800/50" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-800/50" />
                <div className="absolute left-3/4 top-0 h-full w-px bg-zinc-800/50" />

                <div className="absolute bottom-4 left-4 font-code text-[10px] text-zinc-500 uppercase tracking-widest">
                  Fig 1. // Optical Scattering Chamber
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORRECTION ENGINE */}
      <section id="ai-engine" className="py-24 md:py-40 bg-zinc-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <div className="space-y-8">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase leading-none">
                Neural <br /> Compensation.
              </h2>
              <div className="font-code text-sm text-zinc-500 uppercase tracking-widest flex gap-4">
              -</div>
            </div>
            <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed">
              Atmospheric conditions are very volatile. Sensor readings can drift from due to these conditions
              so we have deployed an onboard hardware accelerated system, It compensates for the drift 
              helping us to consistently give accurate readings at all times across all climatic conditions.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Scroll Visualization */}
      <ExtrudedSensorComponent />

      {/* SPECS AND ARCHITECTURE */}
      <section id="specs" className="py-24 md:py-40 bg-background border-t border-border">
        <div className="container px-4 md:px-6 flex flex-col items-center">

          <h2 className="font-headline text-5xl sm:text-7xl md:text-9xl font-normal tracking-tighter uppercase mb-24 text-center">
            <DecodeText text="SYSTEM" /> <br /> <DecodeText text="SPECS." delay={400} />
          </h2>

          <div className="w-full max-w-5xl border-t border-border pt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {specs.map((spec) => (
                <div key={spec.name} className="flex flex-col group">
                  <div className="flex items-center gap-3 mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                    {spec.icon}
                    <span className="font-headline text-lg uppercase tracking-tighter">{spec.name}</span>
                  </div>
                  <div className="font-code text-sm uppercase tracking-widest text-foreground">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 w-full flex flex-col items-center border border-border p-12 md:p-24 bg-secondary text-center">
            <h3 className="font-headline text-3xl md:text-5xl uppercase tracking-tighter mb-8 max-w-2xl">
              Inspect the source code and hardware schematics.
            </h3>
            <p className="font-light text-muted-foreground mb-12 max-w-xl">
              Every layer is transparent. Firmware, PCB layouts, and API documentation are publicly available.
            </p>
            <Link
              href="https://github.com/Optimized-Brain/AirCal-Demo-Website"
              className="group relative inline-flex items-center justify-center font-code text-sm uppercase tracking-widest font-bold overflow-hidden px-8 py-4 bg-foreground text-background"
            >
              <span className="relative z-10 flex items-center gap-4">
                GitHub Repository <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
