import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 glow-red"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-[0_4px_30px_rgba(255,0,48,0.1)] py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" data-testid="nav-logo">
            <span className="font-mono font-bold text-lg tracking-tight text-foreground">
              [<span className="text-primary group-hover:text-glow transition-all">KY</span>]
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium font-mono text-muted-foreground hover:text-primary transition-colors relative group"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full group-hover:shadow-[0_0_10px_rgba(255,0,48,0.8)]"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              className="hidden sm:flex font-mono text-xs border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:glow-red transition-all rounded-sm" 
              asChild
              data-testid="nav-hire-me"
            >
              <a href="#contact">{"<HireMe />"}</a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}