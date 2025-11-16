"use client";

import Link from 'next/link';
import { SectionTitle } from './section-title';
import { ShimmerButton } from '../ui/shimmer-button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

export function Cta() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-black">
      <div className={cn("container mx-auto px-4 text-center opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="Pronto para Começar?"
          subtitle="Vamos transformar sua ideia em um projeto digital de sucesso."
        />
        <div className="mt-8 flex justify-center">
          <Link href="#contato">
            <ShimmerButton>Solicite um Orçamento</ShimmerButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
