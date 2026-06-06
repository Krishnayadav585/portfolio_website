import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 relative bg-card/30" id="education">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-end gap-4 mb-8">
              <div className="h-[2px] flex-grow bg-border relative">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-foreground">
                Academic <span className="text-primary text-glow">Record</span>
              </h2>
            </div>

            <div className="bg-card border border-border p-8 shadow-sm relative overflow-hidden group hover:border-primary transition-colors hover:glow-red">
              <div className="absolute -right-10 -top-10 text-primary/10 transform rotate-12 group-hover:text-primary/20 transition-colors duration-500">
                <GraduationCap className="w-48 h-48" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-mono mb-4 border border-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 bg-primary"></span>
                  </span>
                  Jul 2023 – Jul 2027
                </div>
                
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">B.Tech in Computer Science and Engineering</h3>
                <h4 className="text-lg text-muted-foreground mb-6 font-mono border-l-2 border-primary pl-3">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</h4>
                
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 border border-primary/50 bg-background inline-block">
                    <span className="text-xs text-muted-foreground block mb-1 font-mono uppercase tracking-widest">Current CGPA</span>
                    <span className="text-3xl font-black text-primary font-mono tracking-tighter text-glow">7.5</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}