import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export function Achievements() {
  const items = [
    {
      title: "Mobile Application Developer",
      issuer: "L&T Edutech Certified",
      icon: Award
    },
    {
      title: "Full Stack Python",
      issuer: "Summer Training Program",
      icon: Trophy
    }
  ];

  return (
    <section className="py-24 relative" id="achievements">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Achievements & <span className="text-primary">Certifications</span>
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-border to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-mono text-sm">{item.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
