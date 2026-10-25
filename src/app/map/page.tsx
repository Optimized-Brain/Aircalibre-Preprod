import { Map } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SpotlightText } from '@/components/spotlight-text';
import { WorldMapBackground } from '@/components/world-map-background';

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
    </div>
  );
}
