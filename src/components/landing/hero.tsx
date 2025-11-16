"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dribbble, Instagram, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export function Hero() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0, triggerOnce: true });

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Dribbble, href: "#", name: "Behance" },
  ];

  return (
    <section id="inicio" ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          data-ai-hint={heroImage.imageHint}
          className="object-cover -z-20"
        />
      )}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      
      <div className={cn("container mx-auto px-4 pt-20 sm:pt-0 opacity-0", isInView && "animate-fade-in-up")}>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-fuchsia-400 to-primary">Criação de Sites</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl text-foreground">e Landing Pages</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          Destaque-se no mundo digital com um site profissional para a sua empresa.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#contato">ENTRE EM CONTATO</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#portfolio">MEU PORTFÓLIO</Link>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
          {socialLinks.map((link, index) => (
             <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-foreground/60 hover:text-primary transition-colors">
                <link.icon className="h-6 w-6" />
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
