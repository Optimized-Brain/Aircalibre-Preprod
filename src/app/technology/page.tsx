'use client';

import Link from 'next/link';
import {
  GitBranch,
  Cpu,
  Layers,
  Thermometer,
  Wifi,
  Power,
  Gauge,
  Clock,
  ArrowRight
} from 'lucide-react';

import { SpotlightText } from '@/components/spotlight-text';
import { ExtrudedSensorComponent } from '@/components/extruded-sensor';
import { DecodeText } from '@/components/decode-text';
import { ProductShowcase } from '@/components/product-showcase';

const specs = [
  { icon: <Layers className="h-4 w-4" />, name: 'Signals in current design', value: 'PM2.5 · PM10 · CO2 · VOC' },
  { icon: <Thermometer className="h-4 w-4" />, name: 'Environmental context', value: 'Temperature · Humidity' },
  { icon: <Cpu className="h-4 w-4" />, name: 'Controller architecture', value: 'ESP32-S3-based' },
  { icon: <Layers className="h-4 w-4" />, name: 'Sensor direction', value: 'SEN63C-class + SGP41; not finalized' },
  { icon: <Layers className="h-4 w-4" />, name: 'Interface', value: 'Small display · two buttons · buzzer' },
  { icon: <Wifi className="h-4 w-4" />, name: 'Phone connection', value: 'Bluetooth LE in current design' },
  { icon: <Power className="h-4 w-4" />, name: 'Power', value: 'USB-C / magnetic charging; 2,000 mAh LiPo target' },
  { icon: <Clock className="h-4 w-4" />, name: 'Portable runtime', value: '12-hour target; not yet validated' },
  { icon: <Gauge className="h-4 w-4" />, name: 'Measurement validation', value: 'Benchmarking is still required' },
  { icon: <GitBranch className="h-4 w-4" />, name: 'Open-source status', value: 'AirCalibre open-source project' },
];

export default function TechnologyPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">

      {/* HEADER */}
      <section className="relative min-h-[80vh] w-full flex flex-col justify-end pb-24 pt-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <SpotlightText spotlightSize={400} className="-ml-2 md:-ml-8 lg:-ml-12">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[9rem] font-normal tracking-tighter uppercase leading-[0.85] mb-16 text-balance break-words">
              Featured project: <span className="text-muted-foreground italic font-serif lowercase tracking-normal">GoodOne.</span>
            </h1>
          </SpotlightText>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-border pt-8">
            <p className="max-w-2xl text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              GoodOne is an AirCalibre open-source project exploring portable personal air-quality measurement. Its current design brings together particle, CO2, VOC, temperature, and humidity sensing.
            </p>
            <div className="font-code text-sm uppercase tracking-widest bg-foreground text-background px-4 py-2">
              AirCalibre project
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE OVERVIEW */}
      <section id="hardware" className="py-24 md:py-40 bg-background text-foreground border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            <div className="lg:col-span-5 space-y-12">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-5xl xl:text-6xl tracking-tighter uppercase leading-none break-words text-balance">
                One <br /> Monitor, <br /> <span className="text-zinc-500">Many <br /> <span className="whitespace-nowrap">Environments.</span></span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Designed to travel between commutes, workspaces, and home. Keep GoodOne powered at a desk or carry it to explore how local conditions change from place to place.
              </p>
            </div>
            <div className="lg:col-span-7">
              <figure className="relative aspect-[4/3] overflow-hidden bg-background">
                <div className="pointer-events-none absolute inset-x-12 bottom-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <ProductShowcase
                  src="/images/good1-angle.png"
                  alt="Angled product design render of the GoodOne portable air-quality monitor"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-full w-full"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* MEASUREMENT APPROACH */}
      <section id="ai-engine" className="premium-surface py-24 md:py-40 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <div className="space-y-8">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase leading-none">
                Measure. <br /> Understand. <br /> Act.
              </h2>
            </div>
            <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed">
              Affordable sensors have real-world limitations: humidity, airflow, placement, and particle type can affect readings. GoodOne is being built with a focus on inspectable measurements and careful benchmarking.
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
              Made to be open, with evidence to earn.
            </h3>
            <p className="font-light text-muted-foreground mb-12 max-w-xl">
              GoodOne is part of AirCalibre’s wider open-source work across hardware, software, and environmental knowledge.
            </p>
            <Link
              href="/support"
              className="group relative inline-flex items-center justify-center font-code text-sm uppercase tracking-widest font-bold overflow-hidden px-8 py-4 bg-foreground text-background"
            >
              <span className="relative z-10 flex items-center gap-4">
                Ask about this project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
