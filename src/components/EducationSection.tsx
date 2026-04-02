import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const educationDetails = [
  {
    degree: "BE — AI & Data Science",
    institution: "SDM Institute of Technology",
    location: "Ujire, Dakshina Kannada, Karnataka",
    duration: "2022 — Present",
    score: "CGPA: 7.5",
    color: "from-primary/20",
  },
  {
    degree: "Pre-University Course (PCMB)",
    institution: "S.A.V Composite PU College",
    location: "Bhadravathi, Shimoga, Karnataka",
    duration: "2020 — 2022",
    score: null,
    color: "from-accent/20",
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "S.A.V English School",
    location: "Bhadravathi, Shimoga, Karnataka",
    duration: "2020",
    score: null,
    color: "from-secondary/40",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text font-display">
              My Education
            </h2>
          </div>
          <p className="text-foreground/60 max-w-lg mx-auto">
            A timeline of my academic journey and continuous pursuit of knowledge.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-6 md:ml-0 md:space-y-16 space-y-12">
          {educationDetails.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:left-[-11px] top-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary ring-4 ring-background border-2 border-primary shadow-[0_0_10px_rgba(45,212,191,0.5)] z-10" />

              <div className={`md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                <div className="bg-foreground/5 border border-foreground/5 p-6 md:p-8 rounded-2xl hover:bg-foreground/10 transition-colors duration-300 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{item.degree}</h3>
                  
                  <div className={`flex items-center gap-2 mb-4 text-foreground/80 font-medium ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <GraduationCap size={18} className="text-primary hidden md:inline" />
                    <span>{item.institution}</span>
                  </div>

                  <div className={`flex flex-col gap-2 text-sm text-foreground/60 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                     <div className="flex items-center gap-2">
                       <MapPin size={16} className="text-primary/70" />
                       <span>{item.location}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <Calendar size={16} className="text-primary/70" />
                       <span>{item.duration}</span>
                     </div>
                     {item.score && (
                       <div className="flex items-center gap-2 mt-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                         <Award size={16} />
                         <span className="font-semibold">{item.score}</span>
                       </div>
                     )}
                  </div>
                </div>
              </div>

              {/* Connecting line for desktop alternate layout (optional visual enhancement) */}
              <div className={`hidden md:block absolute top-[44px] w-[calc(50%-1.5rem)] h-[2px] bg-primary/20 ${index % 2 === 0 ? "left-6" : "right-6"}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
