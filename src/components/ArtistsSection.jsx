"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Award, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import artist1 from "@/assets/artist-1.png";
import artist2 from "@/assets/artist-2.png";
import artist3 from "@/assets/artist-3.png";
import artist4 from "@/assets/artist-4.png";
const artists = [
  {
    id: 1,
    name: "Shyam",
    specialty: "Realism & Portraits",
    experience: "12 years experience",
    image: artist1,
    bio: "Shyam is our lead realism artist with over a decade of experience creating lifelike portraits and photorealistic tattoos. His attention to detail has earned him recognition across Nepal and internationally.",
    awards: ["Best Portrait Artist 2022", "Nepal Tattoo Expo Winner"],
    instagram: "@shyam_ink",
    available: "Mon, Wed, Fri",
    rate: "From NPR 8,000/hr",
  },
  {
    id: 2,
    name: "Hari",
    specialty: "Traditional & Neo-Traditional",
    experience: "8 years experience",
    image: artist2,
    bio: "Hari brings a fresh perspective to classic American traditional tattoos while mastering neo-traditional techniques. His bold lines and vibrant color palettes make every piece stand out.",
    awards: ["Best Traditional Design 2021"],
    instagram: "@hari_traditional",
    available: "Tue, Thu, Sat",
    rate: "From NPR 6,000/hr",
  },
  {
    id: 3,
    name: "Ram",
    specialty: "Japanese & Blackwork",
    experience: "15 years experience",
    image: artist3,
    bio: "With 15 years dedicated to Japanese Irezumi and bold blackwork, Ram is our most experienced artist. He trained under master tattooists in Japan and brings authentic techniques to every piece.",
    awards: ["Japanese Arts Award 2020", "Lifetime Achievement"],
    instagram: "@ram_irezumi",
    available: "Mon - Fri",
    rate: "From NPR 10,000/hr",
  },
  {
    id: 4,
    name: "Raj",
    specialty: "Watercolor & Abstract",
    experience: "6 years experience",
    image: artist4,
    bio: "Raj pushes boundaries with his watercolor and abstract style tattoos. His background in fine arts brings a unique artistic vision to the studio, creating pieces that look like paintings on skin.",
    awards: ["Most Creative Artist 2023"],
    instagram: "@raj_watercolor",
    available: "Wed - Sun",
    rate: "From NPR 5,000/hr",
  },
];

const ArtistModal = ({ artist, onClose }) => {
  if (!artist) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors z-10"
            >
              <X size={20} />
            </button>
          </div>

          <div className="px-8 pb-8 -mt-20">
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <div className="relative w-32 h-40 rounded-lg overflow-hidden border-4 border-background shadow-xl flex-shrink-0">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>
              <div className="flex-1 pt-20 sm:pt-0">
                <h2 className="font-display text-3xl text-foreground mb-1">{artist.name}</h2>
                <p className="text-primary font-medium mb-2">{artist.specialty}</p>
                <p className="text-muted-foreground text-sm font-body mb-4">{artist.experience}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    {artist.available}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin size={14} />
                    Kathmandu
                  </span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {artist.bio}
            </p>

            {artist.awards.length > 0 && (
              <div className="mb-6">
                <h3 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  Awards & Recognition
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artist.awards.map((award, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-body"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg mb-6">
              <span className="text-muted-foreground font-body">Starting Rate</span>
              <span className="font-display text-xl text-foreground">{artist.rate}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://instagram.com/${artist.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground font-semibold text-sm rounded hover:bg-secondary/80 transition-colors"
              >
                <Instagram size={18} />
                {artist.instagram}
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                Book with {artist.name}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
const ArtistsSection = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <section id="artists" className="section-padding bg-secondary/30" aria-label="Our artists">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">The Team</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">MEET OUR ARTISTS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Our team of award-winning artists brings decades of combined experience and unique artistic visions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <ScrollReveal key={artist.id} delay={index * 150}>
              <button
                onClick={() => setSelectedArtist(artist)}
                className="w-full text-left glass-card overflow-hidden hover-lift group transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden bg-muted">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} - ${artist.specialty} tattoo artist at Jade Ink Kathmandu`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6 relative -mt-12">
                  <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">{artist.specialty}</p>
                  <p className="text-muted-foreground text-xs">{artist.experience}</p>
                  <p className="text-muted-foreground text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view profile →
                  </p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ArtistModal
        artist={selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />
    </section>
  );
};
export default ArtistsSection;
