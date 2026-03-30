import { motion } from "framer-motion";
import { Shield, Sparkles, Award } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";
const badges = [
    { icon: Award, label: "Licensed Artists" },
    { icon: Shield, label: "Sterile Environment" },
    { icon: Sparkles, label: "Custom Designs" },
];
const HeroSection = () => {
    return (<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Jade Ink tattoo studio interior with professional equipment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50"/>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-sm sm:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Award-Winning Tattoo Studio · Kathmandu
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-2">
          WE CREATE
        </motion.h1>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-gradient mb-6">
          PERMANENT ART
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Specializing in custom designs, realism, traditional, and neo-traditional tattoos. 
          Every piece tells a story — let us help you tell yours.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 animate-pulse-glow">
            Book Consultation
          </a>
          <a href="#gallery" className="px-8 py-4 border border-foreground/30 text-foreground font-semibold text-sm rounded tracking-wider uppercase hover:bg-foreground/10 transition-all duration-300">
            View Portfolio
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="flex flex-wrap justify-center gap-8">
          {badges.map((badge) => (<div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon size={18} className="text-primary"/>
              <span className="text-sm tracking-wide">{badge.label}</span>
            </div>))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-primary rounded-full mt-2"/>
        </div>
      </motion.div>
    </section>);
};
export default HeroSection;
