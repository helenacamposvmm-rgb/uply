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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionTitle } from './section-title';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const testimonialImages = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-'));

const testimonials = [
  {
    name: "Ana Silva",
    company: "CEO, Coffee Co.",
    quote: "A Beatriz transformou completamente nossa presença online. O novo site é lindo e funcional, e já vimos um aumento significativo nas vendas!",
    image: testimonialImages[0],
  },
  {
    name: "Carlos Souza",
    company: "Fotógrafo Profissional",
    quote: "O trabalho de identidade visual foi impecável. Ela capturou perfeitamente o estilo que eu queria para minha marca. Recomendo fortemente!",
    image: testimonialImages[1],
  },
  {
    name: "Mariana Costa",
    company: "Influencer Digital",
    quote: "Os templates para social media são incríveis! Meu feed nunca esteve tão bonito e organizado. A Beatriz é uma profissional excepcional.",
    image: testimonialImages[2],
  },
];

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="depoimentos" ref={ref} className="py-20 sm:py-32 bg-card/50">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="O que dizem sobre mim"
          subtitle="A satisfação dos meus clientes é minha maior recompensa."
        />
        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-transparent border-0 shadow-none">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="flex gap-1 text-yellow-400 mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                        </div>
                        <p className="text-lg md:text-xl text-foreground mb-6 max-w-2xl">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        {testimonial.image && (
                          <Avatar className="w-16 h-16 mb-2">
                             <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />
                             <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <span className="text-sm text-muted-foreground">{testimonial.company}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px] hidden sm:flex" />
            <CarouselNext className="right-[-50px] hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
