"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { SectionTitle } from "./section-title"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

const plans = [
  {
    name: "Essencial",
    price: "R$ 1.200",
    description: "Ideal para começar com uma presença online profissional.",
    features: [
      "Website de até 3 páginas",
      "Design Responsivo",
      "Formulário de Contato",
      "Otimização SEO Básica",
    ],
    highlight: false,
  },
  {
    name: "Profissional",
    price: "R$ 2.500",
    description: "Para negócios que buscam crescer e se destacar.",
    features: [
      "Tudo do plano Essencial",
      "Website de até 7 páginas",
      "Integração com Blog",
      "Design Personalizado",
      "Otimização SEO Avançada",
    ],
    highlight: true,
  },
  {
    name: "E-commerce",
    price: "R$ 4.800",
    description: "A solução completa para vender seus produtos online.",
    features: [
      "Tudo do plano Profissional",
      "Loja Virtual Completa",
      "Cadastro de Produtos",
      "Integração com Pagamentos",
      "Treinamento de Gerenciamento",
    ],
    highlight: false,
  },
]

export function Plans() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="planos" ref={ref} className="py-20 sm:py-32">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="Planos e Preços"
          subtitle="Escolha o plano que melhor se adapta às suas necessidades e vamos começar."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col transform transition-transform hover:scale-105",
                plan.highlight && "border-primary ring-2 ring-primary shadow-lg shadow-primary/20"
              )}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.highlight ? "default" : "outline"}>
                   <Link href="#contato">Contratar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
