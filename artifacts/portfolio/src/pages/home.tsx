import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { MatrixRain } from "@/components/interactive/MatrixRain";
import { useState } from "react";

export default function Home() {
  const [matrixActive, setMatrixActive] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary relative z-0">
      <MatrixRain isActive={matrixActive} />
      <Navbar />
      
      <main>
        <Hero onMatrixToggle={() => setMatrixActive(!matrixActive)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}