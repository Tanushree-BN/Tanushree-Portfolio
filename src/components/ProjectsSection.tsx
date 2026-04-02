import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const allProjects = [
  {
    id: 2,
    title: "Nagashree Connect",
    subtitle: "School Website with Admin Dashboard",
    bullets: [
      "School website with Admissions, Gallery, Faculties, and Facilities pages.",
      "Secure admin panel for managing content, applications, and gallery.",
      "Form validation with React Hook Form & Zod. Deployed on cPanel.",
    ],
    tech: ["React 18", "TypeScript", "Tailwind CSS", "PHP"],
    category: "Full Stack",
    date: "Feb 2025",
    github: "https://github.com/Tanushree-BN/nagashree-connect",
    live: "https://nagashreeschoolcrp.in/",
    featured: true,
  },
  {
    id: 3,
    title: "St. Joseph Public School",
    subtitle: "High-Performance School Web Application",
    bullets: [
      "Developed a modern, responsive website tailored for educational institutions.",
      "Integrated seamless navigation, dynamic content mapping, and distinct administrative sections.",
      "Optimized frontend performance utilizing React 18, TypeScript, and Framer Motion.",
    ],
    tech: ["React 18", "TypeScript", "Tailwind CSS", "PHP"],
    category: "Web App",
    date: "Feb 2026",
    github: "https://github.com/Tanushree-BN/st.-joseph-s-bloom",
    live: "https://ka476cisce.org/",
    featured: false,
  },
  {
    id: 1,
    title: "FactCheck AI",
    subtitle: "DeepFake Video Detection System",
    bullets: [
      "Detection system utilizing ResNet-50 for high-accuracy frame-by-frame analysis.",
      "Combats computational misinformation through robust deep learning architectures.",
      "Built natively using PyTorch and OpenCV for real-time video processing pipelines.",
    ],
    tech: ["Python", "PyTorch", "ResNet-50", "OpenCV"],
    category: "ML / AI",
    date: "Aug 2024",
    github:
      "https://github.com/Tanushree-BN/FactCheck-DeepFake-Video-Detection-using-ResNet-50",

    featured: false,
  },
  {
    id: 4,
    title: "Education Insight",
    subtitle: "College Data Visualization using Power BI",
    bullets: [
      "Education Insight uses Power BI by Microsoft to create interactive visualizations of college performance data.",
      "It integrates web technologies like HTML, CSS, and JavaScript to embed these dashboards into a user-friendly website for easy access.",
      "The platform helps students compare colleges based on facilities, ratings, and other metrics, enabling better decision-making through clear visual insights.",
    ],
    tech: ["power BI", "HTML", "CSS", "JavaScript"],
    category: "data visualization",
    date: "Aug 2024",
    github:
      "https://github.com/Tanushree-BN/Smart-College-Analytics-Platform-Using-Power-BI-and-Web-Technologies",

    featured: false,
  },
];

const categories = ["All", "Full Stack", "Web App", "Mobile", "ML / AI"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* ✅ FIXED HEADER (NOW INSIDE COMPONENT) */}
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest text-primary uppercase mb-2">
            Work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>

          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A collection of projects I've developed — ranging from AI/ML models
            using Python and ResNet-50 to modern full-stack web applications.
          </p>
        </div>

        {/* ✅ FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-primary border-primary text-primary-foreground shadow-md"
                  : "bg-background border-foreground/20 text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`bg-background border border-foreground/10 rounded-[20px] p-6 lg:p-8 flex flex-col h-full shadow-sm hover:shadow-lg transition-all duration-300 ${
                  project.featured ? "border-t-[4px] border-t-primary" : ""
                }`}
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full">
                      {project.category}
                    </span>
                    <span className="text-foreground/50 text-sm">
                      {project.date}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={18} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-foreground/60 mb-6">{project.subtitle}</p>

                {/* Bullets */}
                <ul className="flex-1 space-y-3 mb-6">
                  {project.bullets.map((b, i) => (
                    <li key={i}>— {b}</li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs border rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto px-5 py-2 border rounded-lg text-primary hover:bg-primary/10 transition"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
