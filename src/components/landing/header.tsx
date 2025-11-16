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
    { name: 'Planos', url: '#planos', icon: FileText, sheetClose: true },
    { name: 'Contato', url: '#contato', icon: Phone, sheetClose: true },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
           scrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <Link href="#inicio">
            <Image 
              src="https://i.postimg.cc/ZYvgQhgS/Logo-com-formas-quadradas-sobre-fundo-roxo.png"
              alt="Uply Logo"
              width={140}
              height={32}
              priority
              className='w-auto h-8'
            />
          </Link>
          {/* A navegação agora é controlada pelo componente NavBar que será renderizado abaixo */}
        </div>
      </header>
       <NavBar items={navItems} />
    </>
  );
}
