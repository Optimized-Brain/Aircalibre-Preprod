import Image from 'next/image';
import { Crosshair, Github, Users, Trophy, Award, ArrowDown } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SpotlightText } from '@/components/spotlight-text';

const values = [
  {
    title: 'RADICAL OPENNESS.',
    description: ' Built for the world our Hardware, Software and Data are fully transparent. No compromises. No walled gardens.',
  },
  {
    title: 'EXTREME PRECISION.',
    description: 'Built for Extreme Precision, our stack measures, mitigates and solves with high precision while being most efficient   ',
  },
  {
    title: 'COMMUNITY POWER.',
    description: 'We are building a distributed network. Our data is a public utility, empowering real action at the local level.',
  },
];

const team = [
  {  role: 'Valar Dohaeris' , imageId: 'team-faceless'},
];

export default function AboutPage() {
  const missionImage = PlaceHolderImages.find((img) => img.id === 'about-mission');
  const awardImage = PlaceHolderImages.find((img) => img.id === 'award-certificate');

  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">

      {/* HEADER SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-end pb-24 pt-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <SpotlightText spotlightSize={400}>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] font-normal tracking-tighter uppercase leading-[0.85] text-foreground mb-8 text-wrap">
              Clean air <span className="text-muted-foreground italic font-serif lowercase tracking-normal text-wrap">is a</span> Human Right.
            </h1>
          </SpotlightText>
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-border pt-8 mt-16">
            <p className="max-w-xl text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              AirCalibre works 
            </p>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
              Scroll to discover <ArrowDown className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE MISSION */}
      <section id="mission" className="py-24 md:py-40 bg-foreground text-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="sticky top-32">
              <h2 className="font-headline text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase mb-8">
                The <br /> <span className="text-muted-foreground">Mission.</span>
              </h2>
            </div>
            <div className="space-y-12">
              <p className="text-2xl md:text-4xl font-light leading-snug">
                To construct the most transparent, globally verifiable air quality monitoring infrastructure available.
              </p>
              <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed">
                By Open sourcing our Hardware and Data streams, we empower individuals, communities and researchers to battle atmospheric pollution with absolute certainty.
              </p>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
                {missionImage && (
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    data-ai-hint={missionImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="values" className="py-24 md:py-40 bg-background border-b border-border">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl font-normal tracking-tighter mb-24">
            CORE PRINCIPLES
          </h2>
          <div className="grid gap-x-12 gap-y-24 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="group border-t border-border pt-8">
                <div className="font-code text-xs font-bold tracking-widest text-muted-foreground mb-8">
                    // 0{index + 1}
                </div>
                <h3 className="font-headline text-2xl font-medium tracking-tight mb-6 group-hover:pl-4 transition-all duration-300">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY & AWARDS */}
      <section id="journey" className="py-24 md:py-40 bg-background border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="relative aspect-square w-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-x-0 top-0 h-px bg-border"></div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-border"></div>
              {awardImage && (
                <Image
                  src={awardImage.imageUrl}
                  alt={awardImage.description}
                  data-ai-hint={awardImage.imageHint}
                  fill
                  className="object-cover p-12 mix-blend-multiply dark:mix-blend-screen opacity-50 transition-opacity hover:opacity-100"
                />
              )}
            </div>

            <div className="space-y-12">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl tracking-tighter uppercase leading-none">
                Validated <br /> <span className="text-muted-foreground italic font-serif lowercase">by</span> Experts
              </h2>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Our approach to radical openness and precision sensing has earned recognition from industry leaders.
              </p>
              <div className="space-y-8 pt-8 border-t border-border">
                <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-tight">thingQbator Cohort 7</h4>
                    <p className="text-muted-foreground font-light">Powered by Cisco & Nasscom (2024-2025)</p>
                  </div>
                  <div className="font-code text-sm uppercase tracking-widest">Winner</div>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-tight">IEEE YESIST'12</h4>
                    <p className="text-muted-foreground font-light">Technical Excellence Award (2024)</p>
                  </div>
                  <div className="font-code text-sm uppercase tracking-widest">Runner Up</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 md:py-40 bg-foreground text-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 border-b border-border/20 pb-12">
            <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-normal tracking-tighter uppercase leading-none">
              The <br /> Architects
            </h2>
            <p className="text-zinc-400 font-light max-w-sm text-right">
              This is the team driving AirCalibre.
            </p>
          </div>
          <div className="flex flex-col border-t border-border/20">
            {team.map((member) => (
              <div key={member.name} className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-border/20 hover:bg-zinc-900 transition-colors px-4 -mx-4">
                <h3 className="font-headline text-3xl md:text-5xl uppercase tracking-tighter group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-code text-sm md:text-base text-zinc-400 uppercase tracking-widest mt-4 md:mt-0 md:text-right w-full md:w-1/2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
