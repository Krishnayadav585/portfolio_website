import { motion } from "framer-motion";
import { SiCplusplus, SiPython, SiJavascript, SiHtml5, SiBootstrap, SiReact, SiStreamlit, SiGit, SiLinux } from "react-icons/si";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C", level: 85 },
        { name: "Python", icon: SiPython, color: "#3776AB", level: 90 },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 80 },
        { name: "HTML", icon: SiHtml5, color: "#E34F26", level: 95 },
        { name: "CSS", icon: null, level: 90 },
        { name: "SQL", icon: null, level: 75 }, // No icon for SQL directly from si, fallback
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React (Basic)", icon: SiReact, color: "#61DAFB", level: 60 },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: 85 },
        { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B", level: 75 },
      ]
    },
    {
      title: "Tools & OS",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032", level: 80 },
        { name: "VS Code", icon: null, level: 90 },
        { name: "Linux", icon: SiLinux, color: "#FCC624", level: 70 },
      ]
    }
  ];

  const coreConcepts = ["Data Structures and Algorithms", "Operating Systems", "DBMS"];

  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-border to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              {skillCategories.map((category, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-primary">#</span> {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, j) => (
                      <div key={j} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            {skill.icon && <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (j * 0.1), ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary to-secondary relative"
                          >
                            <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[2px]"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden h-full">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 blur-[50px] rounded-full"></div>
                
                <h3 className="text-2xl font-bold mb-8">Core Concepts</h3>
                <div className="space-y-4 relative z-10">
                  {coreConcepts.map((concept, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="flex items-center gap-4 p-4 bg-background border border-border rounded-xl group hover:border-primary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <span className="font-mono text-primary font-bold">{i + 1}</span>
                      </div>
                      <span className="font-semibold text-lg">{concept}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-muted-foreground italic text-sm">
                    "I build strong foundations to ensure everything that runs on top is reliable, fast, and scalable."
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
