import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 relative bg-muted/30" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Currently looking for internships and entry-level opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <a href="mailto:krish582005@gmail.com" className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors flex flex-col items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-muted-foreground">krish582005@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+916388976420" className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors flex flex-col items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-muted-foreground">+91 6388976420</p>
              </div>
            </a>
            
            <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground">Lucknow, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/krishna-yadav-56763a3aa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:text-primary hover:border-primary transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:text-primary hover:border-primary transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
