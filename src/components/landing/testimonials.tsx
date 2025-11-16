"use client";

import { SectionTitle } from "./section-title";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "A Uply entregou minha landing page em tempo recorde e com uma qualidade absurda. Já estou recebendo novos leads todos os dias!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Thiago Martins",
    role: "Empreendedor",
  },
  {
    text: "Fiquei impressionada com o profissionalismo. A página ficou linda, rápida e pronta pra anunciar.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Camila Oliveira",
    role: "Consultora",
  },
  {
    text: "Depois que a Uply refez meu site, as conversões dobraram. Foi o melhor investimento que fiz no meu negócio.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Rafael Costa",
    role: "Dono de E-commerce",
  },
  {
    text: "Eles entenderam exatamente o que eu queria e criaram uma página que vende sozinha. Atendimento top!",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    name: "Bruna Silva",
    role: "Infoprodutora",
  },
  {
    text: "O resultado ficou acima das minhas expectativas. Design moderno, copy estratégica e tudo otimizado.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Lucas Fernandes",
    role: "Advogado",
  },
  {
    text: "A equipe da Uply é simplesmente excelente. A página ficou profissional e já me trouxe retorno no primeiro mês.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Juliana Melo",
    role: "Nutricionista",
  },
  {
    text: "Minha campanha só começou a performar de verdade depois da landing page da Uply. Agora tenho resultado de verdade.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Matheus Araújo",
    role: "Gestor de Tráfego",
  },
  {
    text: "Atendimento rápido, design de alto nível e total suporte. Recomendo de olhos fechados!",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Carla Ribeiro",
    role: "Arquiteta",
  },
  {
    text: "A Uply me entregou uma página completa, com estrutura de copy, design e integração. Tudo pronto pra vender.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Felipe Almeida",
    role: "Corretor de Imóveis",
  },
  {
    text: "O resultado ficou incrível! Minha marca parece outra depois da página da Uply.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Larissa Santos",
    role: "Designer",
  },
  {
    text: "Eles me ajudaram a transformar meu negócio. A página gera leads automaticamente todos os dias.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Bruno Lima",
    role: "Personal Trainer",
  },
  {
    text: "Trabalho impecável do início ao fim. Já fechei outra landing page com a Uply, sem pensar duas vezes.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Mariana Duarte",
    role: "Psicóloga",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-border shadow-lg shadow-primary/5 bg-card max-w-sm w-full"
                key={i}
              >
                <div className="text-muted-foreground text-base italic">&ldquo;{text}&rdquo;</div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold tracking-tight leading-5 text-foreground">
                      {name}
                    </div>
                    <div className="leading-5 text-muted-foreground tracking-tight text-sm">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="depoimentos" ref={ref} className="py-20 sm:py-32 bg-black">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="O que dizem sobre mim"
          subtitle="A satisfação dos meus clientes é minha maior recompensa."
        />
        <div className="relative flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={30}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={28}
          />
        </div>
      </div>
    </section>
  );
}
