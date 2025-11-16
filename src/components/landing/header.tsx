"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Briefcase, User, Blocks, FileText, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavBar } from '../ui/tubelight-navbar';

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
    { name: 'Início', url: '#inicio', icon: Home, sheetClose: true },
    { name: 'Serviços', url: '#servicos', icon: Blocks, sheetClose: true },
    { name: 'Portfólio', url: '#portfolio', icon: Briefcase, sheetClose: true },
    { name: 'Sobre mim', url: '#sobre-mim', icon: User, sheetClose: true },
    { name: 'Contato', url: '#contato', icon: Phone, sheetClose: true },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'md:bg-background/80 md:backdrop-blur-sm' : 'md:bg-transparent'
      )}
    >
      <NavBar items={navItems} />
      <div className={cn("fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center md:hidden", scrolled ? "bg-card/10 backdrop-blur-lg" : "bg-transparent")}>
          <Link href="#inicio">
              <Image 
                src="https://i.postimg.cc/0yKCCpyx/Logo-com-formas-quadradas-sobre-fundo-roxo-(1).png"
                alt="Uply Logo"
                width={120}
                height={28}
                className='w-auto h-7'
              />
          </Link>
      </div>
    </header>
  );
}
