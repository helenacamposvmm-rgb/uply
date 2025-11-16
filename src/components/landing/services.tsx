"use client";

import { SectionTitle } from './section-title';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { Globe, ShoppingCart, ShieldCheck } from 'lucide-react';
import DisplayCards from '../ui/display-cards';

const benefits = [
  {
    icon: <Globe className="size-4 text-purple-300" />,
    title: "Seja encontrado",
    description: "Mostre seus produtos e serviços para o mundo, 24/7.",
    date: "",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <ShoppingCart className="size-4 text-green-300" />,
    title: "Venda mais",
    description: "Facilite a compra para seus clientes.",
    date: "",
    iconClassName: "text-green-500",
    titleClassName: "text-green-500",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <ShieldCheck className="size-4 text-sky-300" />,
    title: "Credibilidade instantânea",
    description: "Ganhe a confiança dos clientes com um site profissional.",
    date: "",
    iconClassName: "text-sky-500",
    titleClassName: "text-sky-500",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export function Services() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.4, triggerOnce: true });

  return (
    <section id="servicos" ref={ref} className="py-20 sm:py-32 overflow-hidden">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
                <SectionTitle
                    title="COMO UM SITE PROFISSIONAL AJUDA SEU NEGÓCIO?"
                    subtitle=""
                />
            </div>
            <div className="flex items-center justify-center min-h-[300px] md:order-1">
                <DisplayCards cards={benefits} />
            </div>
        </div>
      </div>
    </section>
  );
}
