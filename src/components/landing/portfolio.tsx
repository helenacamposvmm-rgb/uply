"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from './section-title';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith('portfolio-'));

const projects = [
    {
        title: "Site Institucional Moderno",
        description: "Desenvolvimento de um site institucional com foco em performance e design responsivo.",
        tags: ["UI/UX", "Website", "SEO"],
        image: portfolioImages[0]
    },
    {
        title: "Plataforma E-commerce",
        description: "Criação de uma loja virtual completa, com integração de pagamentos e painel de controle.",
        tags: ["E-commerce", "React", "Node.js"],
        image: portfolioImages[1]
    },
    {
        title: "Blog de Lifestyle",
        description: "Design e implementação de um blog com layout dinâmico e focado em engajamento.",
        tags: ["Blog", "Social Media", "Wordpress"],
        image: portfolioImages[2]
    },
    {
        title: "Portfólio Profissional",
        description: "Um portfólio minimalista e elegante para um fotógrafo profissional.",
        tags: ["Portfolio", "UI Design", "Fotografia"],
        image: portfolioImages[3]
    }
];

export function Portfolio() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="portfolio" ref={ref} className="py-20 sm:py-32 bg-black">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="Meu Portfólio"
          subtitle="Confira alguns dos projetos que tive o prazer de criar."
        />
        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group transform transition-transform hover:-translate-y-2 bg-card">
                      <CardContent className="p-0">
                        {project.image && (
                          <Image
                            src={project.image.imageUrl}
                            alt={project.image.description}
                            width={600}
                            height={400}
                            data-ai-hint={project.image.imageHint}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
