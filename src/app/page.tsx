import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Services } from '@/components/landing/services';
import { Portfolio } from '@/components/landing/portfolio';
import { Plans } from '@/components/landing/plans';
import { Testimonials } from '@/components/landing/testimonials';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { FloatingWhatsApp } from '@/components/landing/floating-whatsapp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
