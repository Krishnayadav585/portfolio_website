import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "SRDT Pvt. Ltd",
      date: "Sept 2025",
      location: "India",
      description: [
        "Formulate and implement Python skills.",
        "Full stack development with Python in creating projects."
      ]
    },
    {
      title: "Mobile Application Developer Course",
      company: "L&T EDUTECH CERTIFIED",
      date: "2024",
      location: "India",
      description: [
        "Built mobile applications using web skills under guidance of L&T Edutech mobile application developers program."
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-muted/30" id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-end gap-4 mb-16">
            <div className="h-[1px] flex-grow bg-gradient-to-l from-border to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              My <span className="text-primary">Experience</span>
            </h2>
          </div>

          <div className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute w-6 h-6 bg-background border-2 border-primary rounded-full -left-[13px] top-1 flex items-center justify-center shadow-[0_0_10px_hsl(var(--primary)_/_0.5)]">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <BriefcaseBusiness className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.date}
                      </div>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
