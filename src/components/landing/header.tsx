"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Home, Briefcase, User, Blocks, FileText, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavBar } from '../ui/tubelight-navbar';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', url: '#inicio', icon: Home },
    { name: 'Serviços', url: '#servicos', icon: Blocks },
    { name: 'Portfólio', url: '#portfolio', icon: Briefcase },
    { name: 'Sobre mim', url: '#sobre-mim', icon: User },
    { name: 'Planos', url: '#planos', icon: FileText },
    { name: 'Contato', url: '#contato', icon: Phone },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-transparent' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="#inicio">
          <Image 
            src="https://i.postimg.cc/ZYvgQhgS/Logo-com-formas-quadradas-sobre-fundo-roxo.png"
            alt="Beatriz Logo"
            width={140}
            height={32}
            priority
            className='w-auto h-8'
          />
        </Link>
        <div className="hidden md:flex">
             <NavBar items={navItems} />
        </div>
        <div className="md:hidden">
            <NavBar items={navItems} />
        </div>
      </div>
    </header>
  );
}