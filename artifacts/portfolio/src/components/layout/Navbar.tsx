import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
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

  return (
    <>
      {/* Scroll Progress Bar - visible everywhere */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 glow-red"
        style={{ scaleX }}
      />
      
      {/* Top Header - Mobile only */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 lg:hidden ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-[0_4px_30px_rgba(255,0,48,0.1)] py-3" 
            : "bg-background/40 backdrop-blur-sm border-b border-border py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" data-testid="nav-logo">
            <span className="font-mono font-bold text-lg tracking-tight text-foreground">
              [<span className="text-primary group-hover:text-glow transition-all">KY</span>]
            </span>
          </a>

          <button
            onClick={onToggleSidebar}
            className="flex items-center justify-center text-foreground hover:text-primary p-2 border border-border bg-card rounded-sm transition-colors cursor-none"
            aria-label="Toggle Navigation"
            data-testid="nav-mobile-toggle"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
    </>
  );
}