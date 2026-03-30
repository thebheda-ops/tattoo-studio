"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import BookingModal from "./BookingModal";
import studioBg from "@/assets/studio-photo.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const letterVars = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-black overflow-hidden"
    >
      {/* Background Image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 select-none pointer-events-none">
        <Image 
          src={studioBg} 
          alt="Jade Ink Tattoo Studio" 
          fill 
          className="object-cover opacity-30 mix-blend-luminosity"
          priority
        />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.h1 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 flex flex-col items-center"
        >
          <div className="overflow-hidden flex">
            {"WE CREATE".split("").map((char, i) => (
              <motion.span key={i} variants={letterVars} className={char === " " ? "w-4" : "block"}>{char}</motion.span>
            ))}
          </div>
          <div className="overflow-hidden flex text-[#D32F2F]">
            {"PERMANENT ART".split("").map((char, i) => (
              <motion.span key={i} variants={letterVars} className={char === " " ? "w-4" : "block"}>{char}</motion.span>
            ))}
          </div>
        </motion.h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Award-winning tattoo studio specializing in custom designs, 
          realism, traditional, and neo-traditional tattoos
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-[#D32F2F] hover:bg-[#911414] px-8 py-4 text-lg uppercase tracking-widest font-semibold transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(211,47,47,0.3)] hover:shadow-[0_0_30px_rgba(211,47,47,0.5)]"
          >
            Book Consultation
          </button>
          <a
            href="#gallery"
            className="border-2 border-white/20 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg uppercase tracking-widest font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            View Portfolio
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Licensed Artists</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sterile Environment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Custom Designs</span>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
