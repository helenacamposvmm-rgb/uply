import { Dribbble, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Dribbble, href: "#", name: "Behance" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="#inicio" className="text-2xl font-black text-foreground hover:text-primary transition-colors">
            BEATRIZ.
          </Link>
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Beatriz Web Designer. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-2">
            {socialLinks.map((social, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <Link href={social.href} aria-label={social.name || social.icon.displayName}>
                  <social.icon className="w-5 h-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
