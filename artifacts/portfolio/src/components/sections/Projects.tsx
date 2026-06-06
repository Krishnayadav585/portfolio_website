import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Python Web Scraper & API",
    category: "Python",
    description: "Built a REST API + web scraper using Python & FastAPI to fetch and serve structured data efficiently.",
    tags: ["Python", "FastAPI", "BeautifulSoup", "JSON"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Streamlit Data Dashboard",
    category: "Python",
    description: "Interactive data visualization tool using Streamlit for real-time analytics and data processing.",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Responsive Portfolio UI",
    category: "Frontend",
    description: "Personal portfolio site built from scratch with semantic HTML, CSS, and Bootstrap framework.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Student Grade Calculator",
    category: "C++",
    description: "CLI utility using C++ DSA concepts — linked lists for student records, grade computation and file I/O.",
    tags: ["C++", "DSA", "File I/O"],
    github: "#",
    demo: "#"
  }
];

const tabs = ["All", "Python", "Frontend", "C++"];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section className="py-24 relative bg-background" id="projects">
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
              Project <span className="text-primary text-glow">Showcase</span>
            </h2>
            <div className="h-[2px] flex-grow bg-border relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                data-testid={`tab-${tab.toLowerCase()}`}
                className={`px-6 py-2 font-mono text-sm uppercase tracking-wider transition-all border ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground border-primary glow-red font-bold"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                [{tab}]
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border-l-4 border-l-primary border-t border-r border-b border-border p-6 relative group hover:border-primary transition-colors hover:glow-red"
                >
                  <div className="absolute top-0 right-0 p-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.github} className="text-muted-foreground hover:text-primary" data-testid={`project-github-${project.id}`}>
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary" data-testid={`project-demo-${project.id}`}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="font-mono text-xs text-primary mb-3">//{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 min-h-[60px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}