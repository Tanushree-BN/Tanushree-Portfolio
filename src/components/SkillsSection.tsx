import { motion } from "framer-motion";
import { Code2, Monitor, Server, Smartphone, Database, Wrench, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React 18", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express", "Django", "FastAPI", "Spring Boot"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["React Native", "Flutter", "Android (Java/Kotlin)"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"],
  },
  {
    title: "AI / ML Tools",
    icon: <Monitor className="w-5 h-5" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "OpenCV"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git & GitHub", "Docker", "AWS", "Vercel", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background flare */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-4">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text font-display">
               Technical Skills
             </h2>
          </div>
          <p className="text-foreground/60 max-w-lg mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-6 hover:bg-foreground/5 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground/90">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-background/50 border border-foreground/5 rounded-full text-foreground/70 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
