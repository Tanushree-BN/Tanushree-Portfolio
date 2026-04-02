import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, FileText, Sparkles } from "lucide-react";

// Extracted Profile Image component for clean responsive re-use
const ProfileImage = () => (
  <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
    <div className="absolute inset-0 rounded-full border border-primary/30 p-2 animate-[spin_10s_linear_infinite]">
      <div className="absolute top-0 right-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(45,212,191,1)]"></div>
      <div className="absolute bottom-10 left-0 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(45,212,191,1)]"></div>
    </div>
    
    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-foreground/10 bg-foreground/5 backdrop-blur-sm z-10 flex items-center justify-center p-2">
       <div className="w-full h-full rounded-full overflow-hidden">
         <img 
           src="/profile.jpeg" 
           alt="Tanushree BN" 
           className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform 
           
           
           duration-700"
           onError={(e) => {
             // Fallback image looking like an abstract tech visual, or a developer avatar
             (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"; 
           }}
         />
         <div className="absolute inset-0 bg-primary/10 rounded-full mix-blend-overlay"></div>
       </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center lg:items-stretch z-10 w-full min-h-[70vh]">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start self-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary tracking-wide">Open to Work / Opportunities</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-4 gradient-text font-display leading-[1.15]">
            Hi, I'm <br />
            Tanushree BN
          </h1>
          
          {/* Mobile Profile Image - Appears below name, hidden on large screens */}
          <div className="flex lg:hidden w-full my-6 md:my-8">
            <ProfileImage />
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 mb-4 md:mb-6 flex items-center gap-2 flex-wrap mt-2 lg:mt-0">
            AI & Data Science Student <span className="text-primary hidden sm:inline">•</span> Full-Stack Developer
          </h2>
          
          <p className="text-sm border-foreground/5 sm:text-base md:text-lg text-foreground/60 max-w-lg mb-8 md:mb-10 leading-relaxed">
            Crafting intelligent solutions by blending AI, data, and scalable web technologies. Passionate about building real-world applications that make a difference.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="group relative flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-medium shadow-[0_0_20px_rgba(204,138,112,0.2)] hover:shadow-[0_0_30px_rgba(204,138,112,0.4)] transition-all hover:-translate-y-1"
            >
              <Sparkles size={18} className="group-hover:animate-pulse" />
              Explore My Work
            </a>
            <a 
              href="/Tanushree_BN_Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/10 transition-all hover:-translate-y-1"
            >
              <FileText size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
             <div className="h-[1px] w-12 bg-foreground/20"></div>
             <a href="https://github.com/Tanushree-BN" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary hover:-translate-y-1 transition-all">
               <Github size={22} />
             </a>
             <a href="https://www.linkedin.com/in/tanushree-bn-94536a25a/" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary hover:-translate-y-1 transition-all">
               <Linkedin size={22} />
             </a>
             <a href="mailto:tanushreebn2282004@gmail.com" className="text-foreground/50 hover:text-primary hover:-translate-y-1 transition-all">
               <Mail size={22} />
             </a>
          </div>
        </motion.div>

        {/* Desktop Image / Visuals - Hidden on mobile, shown on large screens */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:flex relative lg:ml-auto w-full justify-end lg:self-start lg:-mt-4"
        >
          <ProfileImage />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex"
      >
        <a href="#about" className="text-foreground/50 hover:text-primary transition-colors p-2 bg-background/50 rounded-full backdrop-blur-sm border border-foreground/5 flex">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
