import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from '@/components/logo';

const footerLinks = [
  { href: '/measure', label: 'Measure' },
  { href: '/mitigate', label: 'Mitigate' },
  { href: '/solve', label: 'Solve' },
  { href: '/support', label: 'Support' },
];

export default function Footer() {
  return (
    <footer className="premium-surface text-zinc-400 py-8 border-t border-zinc-900 selection:bg-white selection:text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-6">
            <Link href="/" className="inline-block text-white">
              <Logo />
            </Link>
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
            <a href="https://github.com/Optimized-Brain/Aircalibre-Preprod" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              Website source <ArrowUpRight className="w-3 h-3" />
            </a>
            <p className="hidden lg:block">© {new Date().getFullYear()} AirCalibre.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
