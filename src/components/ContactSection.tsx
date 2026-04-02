import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Navigation } from "lucide-react";

const ContactSection = () => {
  const [location, setLocation] = useState<{latitude: number, longitude: number} | null>(null);
  const [locError, setLocError] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocError("");
      },
      (err) => {
        setLocError("Permission denied or unable to fetch location.");
      }
    );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 gradient-text font-display">
            Let's work together.
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-8 backdrop-blur-sm">
               <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
               
               <div className="space-y-6">
                 <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shrink-0">
                     <Mail className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-1">Email</p>
                     <a href="mailto:tanushreebn2282004@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">tanushreebn2282004@gmail.com</a>
                   </div>
                 </div>

                 <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shrink-0">
                     <Phone className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-1">Phone</p>
                     <a href="tel:+917892845383" className="text-foreground hover:text-primary transition-colors font-medium">+91 7892845383</a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4 group">
                   <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shrink-0">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <div className="flex-1">
                     <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-1">Location</p>
                     <p className="text-foreground font-medium mb-4">Karnataka, India</p>
                     
                     {/* Live Location Feature */}
                     <div className="bg-foreground/5 rounded-xl p-4 border border-foreground/10">
                        <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Navigation size={16} className="text-primary"/>
                          Live Location Demo
                        </p>
                        <button 
                          onClick={getLocation} 
                          className="text-xs bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-2 shadow-sm shadow-primary/20"
                        >
                          Get My Location
                        </button>
                        
                        {location && (
                          <div className="mt-3 text-xs space-y-1.5 p-3 bg-background/50 rounded-lg border border-foreground/5">
                            <p className="text-foreground/70 font-mono">Lat: {location.latitude.toFixed(4)}</p>
                            <p className="text-foreground/70 font-mono">Lng: {location.longitude.toFixed(4)}</p>
                            <a
                              href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block mt-1 text-primary hover:underline font-medium"
                            >
                              View on Google Maps
                            </a>
                          </div>
                        )}
                        {locError && <p className="text-xs text-destructive mt-2">{locError}</p>}
                     </div>
                   </div>
                 </div>
               </div>

               <div className="mt-12 pt-8 border-t border-foreground/10">
                 <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-4">Connect with me</p>
                 <div className="flex gap-4">
                   <a href="https://github.com/Tanushree-BN" target="_blank" rel="noreferrer" className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300">
                     <Github className="w-5 h-5" />
                   </a>
                   <a href="https://www.linkedin.com/in/tanushree-bn-94536a25a/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300">
                     <Linkedin className="w-5 h-5" />
                   </a>
                   <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300">
                     <Twitter className="w-5 h-5" />
                   </a>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label htmlFor="name" className="text-sm font-medium text-foreground/80 pl-1">Your Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans text-foreground"
                     placeholder="Your name"
                   />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-medium text-foreground/80 pl-1">Your Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans text-foreground"
                     placeholder="Your@email.com"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium text-foreground/80 pl-1">Message</label>
                 <textarea 
                   id="message" 
                   rows={5}
                   className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans text-foreground resize-none"
                   placeholder="Hello Tanushree, I would like to discuss..."
                 />
               </div>

               <button 
                 type="submit"
                 className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold tracking-wide hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:-translate-y-1 transition-all duration-300 mt-4"
               >
                 <Send className="w-5 h-5" />
                 Send Message
               </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
