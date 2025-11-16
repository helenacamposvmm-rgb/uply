"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre mim', href: '#sobre-mim' },
    { name: 'Planos', href: '#planos' },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="#inicio" className="text-2xl font-black text-foreground hover:text-primary transition-colors">
          BEATRIZ.
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button asChild>
            <Link href="#contato">Contato</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-[250px] sm:w-[300px]">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <Link href="#inicio" className="text-2xl font-black text-foreground">
                    BEATRIZ.
                  </Link>
                   <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X />
                      </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col space-y-6 text-lg">
                  {navItems.map((item) => (
                    <SheetClose key={item.name} asChild>
                      <Link
                        href={item.href}
                        className="font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <Button asChild className="mt-auto">
                    <SheetClose asChild>
                        <Link href="#contato">Contato</Link>
                    </SheetClose>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
