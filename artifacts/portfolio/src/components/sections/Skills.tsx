import { motion } from "framer-motion";
import { SiCplusplus, SiPython, SiJavascript, SiHtml5, SiBootstrap, SiReact, SiStreamlit, SiGit, SiLinux } from "react-icons/si";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, level: 85 },
        { name: "Python", icon: SiPython, level: 90 },
        { name: "JavaScript", icon: SiJavascript, level: 80 },
        { name: "HTML", icon: SiHtml5, level: 95 },
        { name: "CSS", icon: null, level: 90 },
        { name: "SQL", icon: null, level: 75 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React (Basic)", icon: SiReact, level: 60 },
        { name: "Bootstrap", icon: SiBootstrap, level: 85 },
        { name: "Streamlit", icon: SiStreamlit, level: 75 },
      ]
    },
    {
      title: "Tools & OS",
      skills: [
        { name: "Git", icon: SiGit, level: 80 },
        { name: "VS Code", icon: null, level: 90 },
        { name: "Linux", icon: SiLinux, level: 70 },
      ]
    }
  ];

  const coreConcepts = ["Data Structures and Algorithms", "Operating Systems", "DBMS"];

  return (
    <section className="py-24 relative bg-background" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              System <span className="text-primary text-glow">Specs</span>
            </h2>
            <div className="h-[2px] flex-grow bg-border relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              {skillCategories.map((category, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-mono uppercase tracking-widest text-primary">
                    <span className="text-muted-foreground">//</span> {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, j) => (
                      <div key={j} className="group">
                        <div className="flex justify-between items-center mb-2 font-mono">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors group-hover:glow-red">
                               {skill.icon ? <skill.icon className="w-4 h-4" /> : <span className="text-[10px] font-bold">RAW</span>}
                            </div>
                            <span className="font-bold text-sm text-foreground uppercase tracking-wider">{skill.name}</span>
                          </div>
                          <span className="text-xs text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-1 w-full bg-card overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (j * 0.1), ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-secondary to-primary relative"
                          >
                            <div className="absolute right-0 top-0 h-full w-2 bg-white blur-[2px]"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-card border-l-4 border-l-primary border-y border-r border-border p-8 relative h-full flex flex-col justify-between">
                
                <div>
                    <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-foreground">Core Protocols</h3>
                    <div className="space-y-4 relative z-10">
                    {coreConcepts.map((concept, i) => (
                        <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary transition-colors group"
                        >
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-mono group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <span className="font-bold">0{i + 1}</span>
                        </div>
                        <span className="font-bold uppercase tracking-wider text-sm">{concept}</span>
                        </motion.div>
                    ))}
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-primary font-mono text-sm before:content-['>_'] before:mr-2">
                    Solid foundations ensure reliable systems.
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