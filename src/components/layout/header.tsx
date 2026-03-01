'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/technology', label: 'Tech' },
  { href: '/map', label: 'Data Map' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navState, setNavState] = useState<'idle' | 'entering' | 'exiting'>('idle');

  const handleSidebarNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (pathname === href) {
      setIsMobileMenuOpen(false);
      return;
    }

    setIsMobileMenuOpen(false);
    setNavState('entering');

    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        setNavState('exiting');
        setTimeout(() => {
          setNavState('idle');
        }, 500);
      }, 50);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => {
    const isActive = pathname === href;
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : "_self"}
        className={cn(
          'relative text-sm font-medium tracking-wide uppercase transition-colors hover:text-foreground group',
          isActive ? 'text-foreground' : 'text-muted-foreground'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
      </Link>
    );
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border py-4"
          : "bg-transparent py-6"
      )}>
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-50">
            <Logo className="text-foreground" />
          </Link>
          <nav className="hidden items-center space-x-12 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden md:inline-flex rounded-none bg-foreground text-background hover:bg-zinc-800 px-6 uppercase tracking-widest text-xs font-bold">
              <Link href="/support">Connect</Link>
            </Button>
            <div className="flex items-center md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-white transition-colors duration-300">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-l border-border sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle className="sr-only">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex h-full flex-col py-12">
                    <nav className="flex flex-col gap-8">
                      {/* Explicit Home Link for Sidebar */}
                      <Link
                        href="/"
                        className={cn(
                          "font-headline text-4xl font-normal tracking-tighter uppercase transition-all duration-300",
                          pathname === "/" ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-muted-foreground hover:text-white"
                        )}
                        onClick={(e) => handleSidebarNavClick(e, '/')}
                      >
                        Base
                      </Link>
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "font-headline text-4xl font-normal tracking-tighter uppercase transition-all duration-300",
                            pathname === link.href ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-muted-foreground hover:text-white"
                          )}
                          onClick={(e) => handleSidebarNavClick(e, link.href)}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <Link
                        href="/support"
                        className={cn(
                          "font-headline text-4xl font-normal tracking-tighter uppercase mt-auto transition-all duration-300",
                          pathname === "/support" ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-muted-foreground hover:text-white"
                        )}
                        onClick={(e) => handleSidebarNavClick(e, '/support')}
                      >
                        Contact
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Page Transition Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-zinc-950 pointer-events-none flex flex-col items-center justify-center",
          navState === 'idle' ? "transition-none translate-y-full opacity-0" : "transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] opacity-100",
          navState === 'entering' && "translate-y-0",
          navState === 'exiting' && "-translate-y-full"
        )}
      >
        <Logo className="text-white scale-[2]" />
      </div>
    </>
  );
}
