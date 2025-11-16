"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionTitle } from "./section-title"
import { Mail, Phone, MapPin, Instagram, Linkedin, Dribbble } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { ShimmerButton } from "../ui/shimmer-button";

export function Contact() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Dribbble, href: "#", name: "Behance" },
  ];

  return (
    <section id="contato" ref={ref} className="py-20 sm:py-32 bg-card/50">
      <div className={cn("container mx-auto px-4 opacity-0", isInView && "animate-fade-in-up")}>
        <SectionTitle
          title="Entre em Contato"
          subtitle="Vamos transformar sua ideia em um projeto incrível. Me mande uma mensagem!"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Informações de Contato</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <span>beatriz.designer@email.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <span>+55 (11) 98765-4321</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <Link href={social.href} aria-label={social.name || social.icon.displayName}>
                    <social.icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          <form className="space-y-6">
            <Input type="text" placeholder="Seu nome" className="h-12 text-base"/>
            <Input type="email" placeholder="Seu email" className="h-12 text-base"/>
            <Textarea placeholder="Sua mensagem" rows={6} className="text-base" />
            <ShimmerButton type="submit" className="w-full">
              Enviar Mensagem
            </ShimmerButton>
          </form>
        </div>
      </div>
    </section>
  )
}
