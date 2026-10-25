import { Map } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SpotlightText } from '@/components/spotlight-text';
import { WorldMapBackground } from '@/components/world-map-background';

const teamMembers = [
  'Abinav Deotale',
  'Ayan Sayed',
  'Bhuvan Bagwe',
  'Kathan Shah',
  'Shoaib Attar',
  'Tanush Debnath',
];

export default function MapPage() {
  return (
    <div className="premium-surface flex flex-col text-white selection:bg-white selection:text-black">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">
          <Map className="mb-12 h-24 w-24 text-zinc-800" strokeWidth={1} />

          <div className="font-code text-zinc-500 uppercase tracking-widest text-sm mb-8">
            Open knowledge · Shared environment
          </div>

          <SpotlightText spotlightSize={300}>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] 2xl:text-[8rem] font-normal tracking-tighter uppercase mb-7 mt-8">
              Air, in context.
            </h1>
          </SpotlightText>

          <p className="mx-auto mt-6 max-w-2xl text-xl md:text-2xl font-light text-zinc-400 leading-relaxed border-t border-zinc-800 pt-8">
            We are interested in open ways to make environmental information more useful and understandable. Community-led mapping is one idea we are exploring together with makers, researchers, and local groups.
          </p>

          <Link
            href="/support"
            className="group mt-16 flex items-center gap-4 font-code text-sm uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Share your thoughts with AirCalibre
          </Link>
        </div>

        <WorldMapBackground />
      </section>

      <section id="team" className="premium-surface relative z-10 border-t border-zinc-800 py-24 md:py-32">
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
