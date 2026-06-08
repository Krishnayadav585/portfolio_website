import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section className="py-24 relative bg-background/50 border-t border-border" id="resume">
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
              System <span className="text-primary text-glow">CV</span>
            </h2>
            <div className="h-[2px] flex-grow bg-border relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Left: Terminal CV Dashboard */}
            <div className="md:col-span-6 flex flex-col justify-between border border-border bg-card/60 p-6 rounded-sm relative overflow-hidden group shadow-[inset_0_0_20px_rgba(255,0,48,0.01)] hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full blur-[30px]" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <Terminal className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm font-bold text-foreground uppercase tracking-wider">
                    cv_downloader.sh
                  </span>
                </div>
                
                <div className="space-y-3 font-mono text-xs text-muted-foreground">
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-foreground">FILE_NAME:</span>
                    <span className="text-primary">Krishna_Yadav_Resume.pdf</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-foreground">FILE_SIZE:</span>
                    <span>3.5 KB</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-foreground">STATUS:</span>
                    <span className="text-green-500 font-bold">READY_TO_STREAM</span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <span className="text-foreground">INTEGRITY:</span>
                    <span className="text-primary">SECURE_SSL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">NCC_STATUS:</span>
                    <span className="text-primary font-bold">NCC_CADET_CERTIFIED</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t border-border/40">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/80 glow-red font-mono font-bold rounded-sm text-xs py-2 px-5 flex items-center gap-2"
                  asChild
                >
                  <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Krishna_Yadav_Resume.pdf">
                    <Download className="w-4 h-4" /> [Download_CV]
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:border-primary hover:text-primary font-mono rounded-sm text-xs py-2 px-5 flex items-center gap-2"
                  asChild
                >
                  <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4" /> [Open_PDF]
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Resume Preview/Cover Details */}
            <div className="md:col-span-6 border border-border bg-card/40 p-6 rounded-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
              <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
                <div className="p-3 border border-primary/20 bg-primary/5 rounded-sm flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">
                      Resume Overview
                    </h4>
                    <p className="text-[10px]">Krishna Yadav — CSE Student</p>
                  </div>
                </div>
                
                <p className="text-xs">
                  <span className="text-primary font-bold">{">"} EDUCATION:</span> B.Tech in Computer Science & Engineering (7.5 CGPA, 3rd Year)
                </p>
                <p className="text-xs">
                  <span className="text-primary font-bold">{">"} CORE SKILLS:</span> React, JavaScript, HTML/CSS, Python, Data Structures & Algorithms, DBMS, Operating Systems
                </p>
                <p className="text-xs">
                  <span className="text-primary font-bold">{">"} EXPERIENCE/NCC:</span> Cadet-level leadership training with NCC, team coordination, discipline, and active project development.
                </p>
              </div>

              <div className="mt-6 p-4 border border-dashed border-border bg-background/50 rounded-sm text-center">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-normal">
                  Need a physical copy? Click the download button to save the complete PDF layout to your system.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
