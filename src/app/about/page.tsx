import { ArrowDown } from 'lucide-react';

import { SpotlightText } from '@/components/spotlight-text';
import { DevelopmentJourney } from '@/components/development-journey';
import { ProductShowcase } from '@/components/product-showcase';

const teamMembers = [
  'Abinav Deotale',
  'Ayan Sayed',
  'Bhuvan Bagwe',
  'Kathan Shah',
  'Shoaib Attar',
  'Tanush Debnath',
];

const values = [
  {
    title: 'FREE & OPEN SOURCE.',
    description: 'We build and share open-source tools, with clear documentation and licenses for each project.',
  },
  {
    title: 'TRANSPARENT BY DESIGN.',
    description: 'We value clear methods, reproducible work, and honest communication about how projects are built.',
  },
  {
    title: 'POWERED BY COMMUNITY.',
    description: 'We welcome makers, researchers, and curious people to learn, contribute, and shape our projects together.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">

      {/* HEADER SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-end pb-24 pt-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <SpotlightText spotlightSize={400}>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] font-normal tracking-tighter uppercase leading-[0.85] text-foreground mb-8 text-wrap">
              Open tools <span className="text-muted-foreground italic font-serif lowercase tracking-normal text-wrap">for a clearer</span> world.
            </h1>
          </SpotlightText>
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-border pt-8 mt-16">
            <p className="max-w-xl text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              AirCalibre is an open-source initiative creating tools and sharing knowledge for a better understanding of the air around us.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
              Scroll to discover <ArrowDown className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE MISSION */}
      <section id="mission" className="py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 font-headline text-4xl tracking-tighter uppercase sm:text-6xl md:mb-10 md:text-8xl">
            Measure <span className="text-muted-foreground">Your Day.</span>
          </h2>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 md:space-y-8">
              <p className="text-2xl font-light leading-snug md:text-4xl">
                We believe useful environmental tools should be open, understandable, and shaped by the people who use them.
              </p>
              <p className="text-xl font-light leading-relaxed text-zinc-400 md:text-2xl">
                GoodOne is one AirCalibre project: a portable monitor exploring personal air-quality measurement. Our wider work brings together open hardware, software, research, and community ideas.
              </p>
            </div>
            <ProductShowcase
              src="/images/good1-front.png"
              alt="Product design render of the GoodOne portable air-quality monitor"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full"
            />
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
            {values.map((value) => (
              <div key={value.title} className="group border-t border-border pt-8">
                <h3 className="font-headline text-2xl font-medium tracking-tight mb-6 group-hover:pl-4 transition-all duration-300">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentJourney />

      <section id="team" className="premium-surface relative z-10 border-t border-zinc-800 py-24 text-white md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-code text-xs uppercase tracking-[0.25em] text-zinc-500">
                The people behind the work
              </p>
              <h2 className="font-headline text-4xl uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl">
                Meet the <span className="text-zinc-500">team.</span>
              </h2>
            </div>
            <p className="max-w-sm font-light leading-relaxed text-zinc-400">
              A team building open tools and sharing ideas for a clearer understanding of our environment.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <li
                key={member}
                className="group border-b border-white/10 py-7 transition-colors duration-300 hover:border-white/50"
              >
                <span className="font-headline text-2xl uppercase tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white sm:text-3xl">
                  {member}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
