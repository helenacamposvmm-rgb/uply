"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Palette, MonitorSmartphone, Share2 } from 'lucide-react';
import { SectionTitle } from './section-title';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'Identidade Visual',
    description: 'Criação de logotipos, paletas de cores e tipografia que representam a essência da sua marca.',
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-primary" />,
    title: 'Websites & Landing Pages',
    description: 'Desenvolvimento de sites institucionais, blogs e landing pages responsivas e otimizadas para conversão.',
  },
  {
    icon: <Share2 className="w-10 h-10 text-primary" />,
    title: 'Social Media',
    description: 'Design de templates e posts para redes sociais, criando uma presença online coesa e atraente.',
  },
];

export function Services() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="servicos" ref={ref} className="py-20 sm:py-32">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="Meus Serviços"
          subtitle="Soluções criativas e personalizadas para impulsionar a sua presença digital."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card/50 border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
