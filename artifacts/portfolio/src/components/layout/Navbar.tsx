import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import { Moon, Sun, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
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
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
            <span className="font-mono font-bold text-lg tracking-tight hidden sm:block">
              krishna<span className="text-primary">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </Button>
            <Button className="hidden sm:flex font-mono text-xs shadow-[0_0_15px_-3px_hsl(var(--primary)_/_0.4)] hover:shadow-[0_0_20px_-3px_hsl(var(--primary)_/_0.6)] transition-all" asChild>
              <a href="#contact">{"<HireMe />"}</a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
