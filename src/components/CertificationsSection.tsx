import { motion } from "framer-motion";
import { Award, Trophy, Star, CheckCircle, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "participated in Hackathon 2025",
    description: "Developed a full-stack AI-powered platform during a hackathon to simplify access to Karnataka government schemes, gaining hands-on experience in real-world problem-solving, teamwork, and rapid development.",
    icon: <Star className="w-6 h-6 text-primary"/>
  },
  {
    title: "Idea strom",
    description: "Consistently solved complex algorithmic Participated in IdeaStorm-2025 on the theme Urban Living, where we presented ideas on Smart Waste Management and Women Safety.and maintained a top ranking.",
    icon: <Star className="w-6 h-6 text-primary" />
  },
  {
    title: "National Science Day 2025",
    description: "Created a model on Science and Innovation for a Better Tomorrow showcasing the integration of human intelligence, biology, technology, and space science to highlight interdisciplinary innovation.",
    icon: <Star className="w-6 h-6 text-primary" />
  },
  {
    title: "Renewable Energy",
    description: "Developed a solar-powered irrigation system that uses photovoltaic energy to operate a water pump, providing a cost-effective and sustainable solution for farmers, especially in areas with limited electricity.",
    icon: <Star className="w-6 h-6 text-primary" />
  }
];

const certifications = [
  {
    title: "Idea Storm",
    issuer: "SDM Institute of Technology",
    date: "2025",
    icon: <CheckCircle className="w-5 h-5 text-accent" />,
    file: "/certificates/Idea Storm.pdf"
  },
  {
    title: "National Science Day",
    issuer: "SDM Institute of Technology",
    date: "2025",
    icon: <CheckCircle className="w-5 h-5 text-accent" />,
    file: "/certificates/National Science Day 2025.pdf"
  },
   {
    title: "Introduction to Python",
    issuer: "Infosys",
    date: "2024",
    icon: <CheckCircle className="w-5 h-5 text-accent" />,
    file: "/certificates/Introduction to Python.pdf"
  },
  {
    title: "Artificial Intelligence",
    issuer: "Infosys",
    date: "2024",
    icon: <CheckCircle className="w-5 h-5 text-accent" />,
    file: "/certificates/Introduction to artificial Intelligence.pdf"
  },
  {
    title: "Deep Learning",
    issuer: "Infosys",
    date: "2024",
    icon: <CheckCircle className="w-5 h-5 text-accent" />,
    file: "/certificates/Introduction to deep learning.pdf"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Achievements Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text font-display">
              Key Achievements
            </h2>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-foreground/5 border border-foreground/5 p-6 rounded-2xl hover:bg-foreground/10 transition-colors duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="flex items-start gap-4 h-full relative z-10">
                  <div className="mt-1 p-3 bg-foreground/5 rounded-xl border border-foreground/10 shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{achievement.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text font-display">
              Certifications
            </h2>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-background border border-foreground/10 rounded-2xl hover:border-primary/50 transition-colors duration-300 group gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors tracking-tight">{cert.title}</h4>
                    <p className="text-foreground/50 font-medium text-sm">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                  <div className="hidden sm:flex items-center gap-2 bg-foreground/5 px-3 py-1.5 rounded-full border border-foreground/5 shrink-0">
                    {cert.icon}
                    <span className="text-xs font-semibold text-foreground/70">{cert.date}</span>
                  </div>
                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors text-sm font-semibold whitespace-nowrap shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;

