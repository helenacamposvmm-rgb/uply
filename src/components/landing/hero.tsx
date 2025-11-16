"use client";

import { Dribbble, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { ShimmerButton } from '../ui/shimmer-button';

export function Hero() {

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Dribbble, href: "#", name: "Behance" },
  ];

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden bg-black">
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-6 px-6 text-center sm:gap-8 md:px-10 lg:px-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">Design & Desenvolvimento</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">uply</span>
        </div>
        <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Criação de Sites e Landing Pages
        </h1>
        <p className="max-w-xl text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg">
          Destaque-se no mundo digital com um site profissional para a sua empresa.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="https://wa.me/message/XPYSZOMOVT3RM1" target="_blank">
                <ShimmerButton>ENTRE EM CONTATO</ShimmerButton>
            </Link>
            <Link href="#portfolio">
                <ShimmerButton background="transparent">MEU PORTFÓLIO</ShimmerButton>
            </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        {socialLinks.map((link, index) => (
           <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-white/60 hover:text-primary transition-colors">
              <link.icon className="h-6 w-6" />
           </Link>
        ))}
      </div>
    </section>
  );
}
