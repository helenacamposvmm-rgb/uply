"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from './section-title';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

const projects = [
    {
        title: "Site Institucional Moderno",
        description: "Desenvolvimento de um site institucional com foco em performance e design responsivo.",
        tags: ["UI/UX", "Website", "SEO"],
        image: "https://i.imgur.com/q1PT7aR.png"
    },
    {
        title: "Plataforma E-commerce",
        description: "Criação de uma loja virtual completa, com integração de pagamentos e painel de controle.",
        tags: ["E-commerce", "React", "Node.js"],
        image: "https://i.imgur.com/9Z8z3Kz.png"
    },
    {
        title: "Blog de Lifestyle",
        description: "Design e implementação de um blog com layout dinâmico e focado em engajamento.",
        tags: ["Blog", "Social Media", "Wordpress"],
        image: "https://i.imgur.com/2dUCYHg.png"
    },
    {
        title: "Portfólio Profissional",
        description: "Um portfólio minimalista e elegante para um fotógrafo profissional.",
        tags: ["Portfolio", "UI Design", "Fotografia"],
        image: "https://i.imgur.com/6tylKYR.png"
    },
    {
        title: "Aplicativo Mobile",
        description: "Interface para um aplicativo de gerenciamento de tarefas.",
        tags: ["App", "Mobile", "UI/UX"],
        image: "https://i.imgur.com/8QFXhx4.png"
    },
    {
        title: "Dashboard Analítico",
        description: "Painel de visualização de dados para uma startup de tecnologia.",
        tags: ["Dashboard", "DataViz", "SaaS"],
        image: "https://i.imgur.com/FD1fQXe.png"
    },
    {
        title: "Site de Casamento",
        description: "Site elegante e personalizado para um evento especial.",
        tags: ["Website", "Evento", "Design"],
        image: "https://i.imgur.com/kv7fj83.png"
    },
    {
        title: "Redesign de Marca",
        description: "Modernização da identidade visual para uma empresa de consultoria.",
        tags: ["Branding", "Identidade Visual"],
        image: "https://i.imgur.com/dmzKRFn.png"
    },
    {
        title: "Landing Page de Produto",
        description: "Página de captura focada em alta conversão para um novo produto digital.",
        tags: ["Landing Page", "Marketing", "Conversão"],
        image: "https://i.imgur.com/RNEKdbD.png"
    },
    {
        title: "Sistema de Reservas",
        description: "Interface para um sistema de agendamento online para hotéis.",
        tags: ["UI/UX", "Sistema Web", "Turismo"],
        image: "https://i.imgur.com/ltbYVKT.png"
    }
];

export function Portfolio() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="portfolio" ref={ref} className="py-20 sm:py-32 bg-black">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="Meu Portfólio"
          subtitle="Confira alguns dos projetos que tive o prazer de criar."
        />
      </div>
      <div className="relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:80s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {duplicatedProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden group transform transition-transform hover:-translate-y-2 bg-card w-[350px] flex-shrink-0">
                    <CardContent className="p-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        data-ai-hint="portfolio image"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4 text-sm h-10">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                              {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                          </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
    </section>
  );
}
