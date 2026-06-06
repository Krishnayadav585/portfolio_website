import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 relative bg-muted/30" id="education">
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
              <div className="h-[1px] flex-grow bg-gradient-to-l from-border to-transparent"></div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Education & <span className="text-primary">Learning</span>
              </h2>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 text-primary/5 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-48 h-48" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Jul 2023 – Jul 2027
                </div>
                
                <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science and Engineering</h3>
                <h4 className="text-lg text-muted-foreground mb-6">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</h4>
                
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-background border border-border rounded-lg shadow-inner">
                    <span className="text-sm text-muted-foreground block mb-1">Current CGPA</span>
                    <span className="text-3xl font-black text-primary font-mono tracking-tighter">7.5</span>
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
