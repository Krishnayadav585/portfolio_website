import { motion } from "framer-motion";
import { User, ShieldAlert } from "lucide-react";

export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-border to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Computer Science undergraduate in my third year with a strong interest in Frontend Development and Python Full Stack Development. I'm passionate about building clean, responsive user interfaces and continuously learning new technologies.
              </p>
              <p>
                My technical journey is grounded in solid core concepts—Data Structures, Algorithms, Operating Systems, and DBMS—paired with practical skills in HTML, CSS, JavaScript, and Python. I love bridging the gap between elegant design and robust backend logic.
              </p>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-primary/20 bg-primary/5">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">NCC Cadet</h4>
                  <p className="text-sm">
                    Disciplined NCC cadet with proven leadership, teamwork, and organizational skills. Trained in drill, discipline, and responsibility. Strong commitment to integrity, service, and personal excellence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Quick Facts</h3>
                </div>
                
                <ul className="space-y-4 text-sm font-mono text-muted-foreground">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Location:</span>
                    <span className="text-foreground text-right">Lucknow, India</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Email:</span>
                    <a href="mailto:krish582005@gmail.com" className="text-primary hover:underline text-right truncate max-w-[150px]">krish582005@gmail.com</a>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Phone:</span>
                    <span className="text-foreground text-right">+91 6388976420</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Degree:</span>
                    <span className="text-foreground text-right">B.Tech CSE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
