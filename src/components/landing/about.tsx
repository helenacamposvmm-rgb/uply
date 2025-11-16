"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionTitle } from './section-title';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me-picture');

export function About() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="sobre-mim" ref={ref} className="py-20 sm:py-32">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="Sobre mim"
          subtitle="Uma desenvolvedora apaixonada por criar experiências digitais incríveis."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={400}
                height={400}
                data-ai-hint={aboutImage.imageHint}
                className="rounded-lg object-cover shadow-2xl"
              />
            )}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-lg -z-10"></div>
          </div>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              Olá! Eu sou Beatriz, uma web designer e desenvolvedora com foco em criar interfaces bonitas, funcionais e que geram resultados.
            </p>
            <p>
              Com anos de experiência no campo do design digital, especializei-me na criação de websites personalizados, identidades visuais marcantes e estratégias de social media que conectam marcas aos seus públicos.
            </p>
            <p>
              Meu objetivo é transformar suas ideias em realidade digital, combinando criatividade com as melhores práticas de usabilidade e tecnologia.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="#contato">Vamos conversar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
