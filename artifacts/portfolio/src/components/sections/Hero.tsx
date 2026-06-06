import { motion } from "framer-motion";
import { ChevronDown, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const name = "Krishna Yadav".split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background ambient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen opacity-50 dark:opacity-20" style={{ animation: "pulse 4s infinite alternate-reverse" }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-mono text-primary font-medium">Available for Internships</span>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter"
          >
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={child}
                className={letter === " " ? "mr-4" : "inline-block text-foreground"}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 max-w-2xl"
          >
            <span className="text-gradient font-medium">Frontend & Python Developer</span> | CS Undergraduate
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="h-12 px-8 glow-effect font-mono" asChild>
              <a href="#contact">
                <Terminal className="mr-2 h-4 w-4" />
                Get_in_touch()
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-border hover:bg-muted font-mono" asChild>
              <a href="#experience">
                <Code2 className="mr-2 h-4 w-4" />
                View_Work()
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Decorative code block */}
          <div className="w-full max-w-md bg-card/80 backdrop-blur-xl border border-border rounded-xl p-6 shadow-2xl relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-[#1e1e1e] rounded-lg overflow-hidden border border-white/10">
              <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs text-muted-foreground font-mono">krishna.py</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-[#d4d4d4]">
                <p><span className="text-[#569cd6]">class</span> <span className="text-[#4ec9b0]">Developer</span>:</p>
                <p className="pl-4"><span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">__init__</span>(<span className="text-[#9cdcfe]">self</span>):</p>
                <p className="pl-8"><span className="text-[#9cdcfe]">self</span>.name = <span className="text-[#ce9178]">"Krishna Yadav"</span></p>
                <p className="pl-8"><span className="text-[#9cdcfe]">self</span>.role = <span className="text-[#ce9178]">"Frontend & Python"</span></p>
                <p className="pl-8"><span className="text-[#9cdcfe]">self</span>.location = <span className="text-[#ce9178]">"Lucknow, India"</span></p>
                <br />
                <p className="pl-4"><span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">build</span>(<span className="text-[#9cdcfe]">self</span>, <span className="text-[#9cdcfe]">idea</span>):</p>
                <p className="pl-8"><span className="text-[#c586c0]">return</span> <span className="text-[#4ec9b0]">Masterpiece</span>(idea)</p>
                <br />
                <p><span className="text-[#4fc1ff]">if</span> <span className="text-[#9cdcfe]">__name__</span> == <span className="text-[#ce9178]">"__main__"</span>:</p>
                <p className="pl-4">krishna = <span className="text-[#4ec9b0]">Developer</span>()</p>
                <p className="pl-4">krishna.<span className="text-[#dcdcaa]">code</span>()</p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-2 h-4 bg-primary align-middle ml-1" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
