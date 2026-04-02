import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text font-display">
              My Experience
            </h2>
          </div>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Professional trajectory and hands-on industry work.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/[0.03] backdrop-blur-md border border-foreground/10 rounded-3xl p-8 md:p-12 overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(45,212,191,0.1)] transition-all duration-500"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
             <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                   <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 tracking-tight">Software Developer Intern</h3>
                  <p className="text-lg text-primary font-medium">Mitra Softwares</p>
                </div>
             </div>
             <div className="flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full w-fit">
                <Calendar className="w-4 h-4 text-foreground/60" />
                <span className="text-sm font-medium text-foreground/80">Jan 2026 — Present</span>
             </div>
          </div>

          <div className="space-y-4 mb-8 relative z-10 pl-2 md:pl-20">
             {[
               "Contributed to the development of real-world client projects using modern full-stack technologies.",
               "Collaborated with the development team to build and deploy multiple production-level web applications.",
               "Played a key role in successfully delivering client projects efficiently and on time."
             ].map((text, i) => (
                <div key={i} className="flex gap-3 text-foreground/70 leading-relaxed">
                   <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                   <p>{text}</p>
                </div>
             ))}
          </div>

<div className="flex flex-wrap gap-4">
  <div className="flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-5 py-2.5 rounded-xl hover:border-primary/50 transition-colors group/btn">
    <CheckCircle2 className="w-4 h-4 text-primary opacity-70 group-hover/btn:opacity-100" />
    <a 
      href= "https://nagashreeschoolcrp.in" 
      target="_blank" 
      rel="noopener noreferrer"
      className="font-medium text-foreground/90 hover:underline"
    >
      Nagashree School, Channarayapatna, Hassan
    </a>
  </div>

  <div className="flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-5 py-2.5 rounded-xl hover:border-primary/50 transition-colors group/btn">
    <CheckCircle2 className="w-4 h-4 text-primary opacity-70 group-hover/btn:opacity-100" />
    <a 
      href="https://ka476cisce.org/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="font-medium text-foreground/90 hover:underline"
    >
      St. Joseph Public School, Narasimrajapura, Chikkamagaluru.
    </a>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
