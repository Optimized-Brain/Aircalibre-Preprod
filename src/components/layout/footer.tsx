import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from '@/components/logo';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/technology', label: 'Tech' },
  { href: '/map', label: 'Map' },
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-8 border-t border-zinc-900 selection:bg-white selection:text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-6">
            <Link href="/" className="inline-block text-white">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-2 border-l border-zinc-800 pl-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              <span className="font-code text-[10px] uppercase tracking-widest text-white">System Online</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-headline text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6 font-code text-[10px] uppercase tracking-widest text-zinc-600">
            <a href="https://github.com/Optimized-Brain/AirCal-Demo-Website" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <p className="hidden lg:block">© {new Date().getFullYear()} AirCalibre.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
