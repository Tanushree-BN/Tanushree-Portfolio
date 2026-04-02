import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-foreground/5 bg-background relative overflow-hidden">
    {/* Subtle gradient blob in background */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
      <div className="text-center md:text-left">
        <a href="#" className="font-display text-xl font-bold tracking-tighter text-white mb-2 block">
          Tanushree BN
        </a>
        <p className="text-sm text-foreground/60 max-w-xs mx-auto md:mx-0">
          Crafting intelligent solutions using AI, Data Science, and modern web technologies.
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <a href="https://github.com/Tanushree-BN" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-foreground/5 text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all border border-foreground/5">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/tanushree-bn-94536a25a/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-foreground/5 text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all border border-foreground/5">
          <Linkedin size={20} />
        </a>
        <a href="mailto:tanushreebn2282004@gmail.com" className="p-3 rounded-full bg-foreground/5 text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all border border-foreground/5">
          <Mail size={20} />
        </a>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
      <p className="font-sans text-xs text-foreground/50">
        © {new Date().getFullYear()} Tanushree BN. All rights reserved.
      </p>
      <p className="font-sans text-xs text-foreground/50">
        Designed digitally and fully coded.
      </p>
    </div>
  </footer>
);

export default Footer;
