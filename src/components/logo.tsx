interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex flex-col font-sans font-bold leading-[0.85] tracking-tight">
        <span className="text-[1.3em]">Air</span>
        <span className="text-[1.3em]">Calibre</span>
      </div>
      <div className="flex -translate-x-1 translate-y-[-0.2em] relative">
        <div className="w-[1.0em] h-[1.0em] rounded-full bg-zinc-200/90 z-30" />
        <div className="w-[1.2em] h-[1.2em] rounded-full bg-zinc-300/80 -ml-[0.5em] translate-y-[0.3em] z-20" />
        <div className="w-[1.6em] h-[1.6em] rounded-full bg-zinc-400/80 -ml-[0.6em] -translate-y-[0.1em] z-10" />
      </div>
    </div>
  );
}
