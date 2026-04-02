import { motion } from "framer-motion";
import { Code2, BrainCircuit, Rocket } from "lucide-react";

const cards = [
  {
    title: "Full-Stack Development",
    description: "Building responsive, performant, and scalable web applications from frontend to backend.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "AI & Data Science",
    description: "Deriving insights from data and creating intelligent solutions using machine learning.",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
  },
  {
    title: "Continuous Learning",
    description: "Always exploring new technologies and solving meaningful real-world problems.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text font-display">
              About Me
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-foreground/70 leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-foreground font-medium">Tanushree BN</span>, a passionate AI & Data Science undergraduate and Full-Stack Developer. My journey into tech is driven by an insatiable curiosity to understand how things work and a desire to build solutions that have a real-world impact.
            </p>
            <p>
              I thrive at the intersection of <span className="text-primary font-medium">Artificial Intelligence</span> and <span className="text-primary font-medium">Web Engineering</span>. Whether it's crafting a beautiful, responsive user interface, designing a scalable backend architecture, or training a machine learning model to solve a meaningful problem—I love bringing ideas to life through code.
            </p>
            <p>
              Continuous learning is at the core of my identity. I am constantly experimenting with modern frameworks, exploring new libraries, and pushing the boundaries of my knowledge to deliver high-quality, production-ready software.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="group relative bg-foreground/5 border border-foreground/5 p-6 rounded-2xl hover:bg-foreground/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(45,212,191,0.1)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center border border-foreground/10 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{card.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
