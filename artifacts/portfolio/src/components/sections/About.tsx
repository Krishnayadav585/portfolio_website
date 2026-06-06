import { motion } from "framer-motion";
import { User, ShieldAlert } from "lucide-react";

export function About() {
  return (
    <section className="py-24 relative bg-background" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              System <span className="text-primary text-glow">Identity</span>
            </h2>
            <div className="h-[2px] flex-grow bg-border relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6 text-base text-muted-foreground leading-relaxed font-mono">
              <p>
                <span className="text-primary">{">"}</span> I am a Computer Science undergraduate in my third year with a strong interest in Frontend Development and Python Full Stack Development. I'm passionate about building clean, responsive user interfaces and continuously learning new technologies.
              </p>
              <p>
                <span className="text-primary">{">"}</span> My technical journey is grounded in solid core concepts—Data Structures, Algorithms, Operating Systems, and DBMS—paired with practical skills in HTML, CSS, JavaScript, and Python. I love bridging the gap between elegant design and robust backend logic.
              </p>
            </div>
            
            <div className="md:col-span-5 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                 <div className="border border-primary bg-card p-4 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(255,0,48,0.05)]">
                    <span className="text-3xl font-black text-primary mb-1">7.5</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">CGPA</span>
                 </div>
                 <div className="border border-primary bg-card p-4 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(255,0,48,0.05)]">
                    <span className="text-3xl font-black text-primary mb-1">2</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Certifications</span>
                 </div>
                 <div className="col-span-2 border border-primary bg-card p-4 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(255,0,48,0.05)]">
                    <span className="text-3xl font-black text-primary mb-1">3rd Year</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">B.Tech CSE Student</span>
                 </div>
              </div>

              <div className="flex items-start gap-4 p-5 border-l-4 border-l-primary bg-card/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[30px]" />
                <div className="p-2 border border-primary/50 text-primary mt-1 bg-background z-10">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="z-10">
                  <h4 className="font-bold text-foreground mb-1 uppercase tracking-wider text-sm font-mono text-glow">NCC Cadet Status</h4>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    Disciplined cadet with proven leadership, teamwork, and organizational skills. Trained in drill, discipline, and responsibility. Strong commitment to integrity and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}