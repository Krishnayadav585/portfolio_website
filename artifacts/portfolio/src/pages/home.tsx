import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
