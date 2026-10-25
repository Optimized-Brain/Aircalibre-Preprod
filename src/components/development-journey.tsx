'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Cpu, FlaskConical, Share2 } from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'Prototype',
    status: 'In progress',
    icon: Cpu,
    description:
      'GoodOne is in prototype and pre-production development. The current design combines particle, CO2, VOC, temperature, and humidity sensing in a portable monitor.',
    detail: 'Current work: develop the portable monitor.',
  },
  {
    number: '02',
    title: 'Validate',
    status: 'Planned',
    icon: FlaskConical,
    description:
      'Sensor performance, repeatability, airflow, battery life, and phone connectivity still need validation. Finished-product accuracy and runtime have not been established.',
    detail: 'Next: test performance and share the results.',
  },
  {
    number: '03',
    title: 'Open up',
    status: 'Future goal',
    icon: Share2,
    description:
      'GoodOne’s roadmap includes open hardware and software resources, along with opportunities for community-led environmental mapping.',
    detail: 'Explore open resources and community collaboration.',
  },
];

export function DevelopmentJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];
  const StageIcon = stage.icon;

  return (
    <section
      id="journey"
      className="premium-surface relative overflow-hidden border-y border-zinc-800 py-24 text-white md:py-40"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-white/[0.04]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[24rem] w-[24rem] rounded-full border border-white/[0.04]" />

      <div className="container relative px-4 md:px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-code text-xs uppercase tracking-[0.25em] text-zinc-500">
              Featured project · GoodOne
            </p>
            <h2 className="max-w-4xl font-headline text-4xl font-normal uppercase leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl">
              From idea <span className="font-serif lowercase italic text-zinc-500">to</span>
              <br /> evidence.
            </h2>
          </div>
          <p className="max-w-xs font-light leading-relaxed text-zinc-400">
            Explore how one AirCalibre project is taking shape.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="relative">
            <div className="absolute bottom-12 left-[1.35rem] top-12 w-px bg-white/10" />
            <motion.div
              className="absolute bottom-12 left-[1.35rem] top-12 w-px origin-top bg-white"
              animate={{ scaleY: activeStage / (stages.length - 1) }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />

            <div className="relative space-y-3">
              {stages.map((item, index) => {
                const isActive = index === activeStage;

                return (
                  <button
                    key={item.number}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveStage(index)}
                    className="group flex h-24 w-full items-center gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-code text-xs transition-colors duration-300 ${
                        isActive
                          ? 'border-white bg-zinc-900 text-white shadow-[0_0_0_4px_rgba(255,255,255,0.08)]'
                          : 'border-zinc-700 bg-zinc-950 text-zinc-500 group-hover:border-zinc-400 group-hover:text-white'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="flex flex-1 items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <span
                        className={`font-headline text-2xl uppercase tracking-tight transition-colors sm:text-3xl ${
                          isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-200'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="font-code text-[10px] uppercase tracking-widest text-zinc-500">
                        {item.status}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[20rem] flex-col justify-between border border-white/10 bg-white/[0.03] p-8 sm:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.06] to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <div className="mb-12 flex items-start justify-between">
                  <StageIcon className="h-8 w-8 text-zinc-400" strokeWidth={1.25} />
                  <span className="font-code text-xs tracking-widest text-zinc-600">
                    STAGE {stage.number}
                  </span>
                </div>
                <h3 className="mb-5 font-headline text-3xl uppercase tracking-tight sm:text-4xl">
                  {stage.title}
                </h3>
                <p className="max-w-xl text-lg font-light leading-relaxed text-zinc-300">
                  {stage.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="relative mt-12 flex items-center gap-3 border-t border-white/10 pt-6 font-code text-[10px] uppercase tracking-widest text-zinc-500">
              <ArrowRight className="h-3 w-3" />
              {stage.detail}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
