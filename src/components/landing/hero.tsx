"use client";

import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import { Dribbble, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Hero() {

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Dribbble, href: "#", name: "Behance" },
  ];

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <NeuralNetworkHero
            title="Criação de Sites e Landing Pages"
            description="Destaque-se no mundo digital com um site profissional para a sua empresa."
            badgeText="Design & Desenvolvimento"
            badgeLabel="Beatriz"
            ctaButtons={[
              { text: "ENTRE EM CONTATO", href: "#contato", primary: true },
              { text: "MEU PORTFÓLIO", href: "#portfolio" }
            ]}
            microDetails={[]}
        />
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
