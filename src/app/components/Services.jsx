"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Design",
    description: "Bring your vision to life with our custom tattoo design services. Our artists work closely with you to create unique, one-of-a-kind pieces.",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  },
  {
    title: "Realism",
    description: "Photorealistic tattoos that capture every detail. From portraits to nature scenes, our realism artists bring images to life on skin.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Traditional",
    description: "Classic bold lines and vibrant colors. Traditional tattoos with timeless appeal that never goes out of style.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Neo-Traditional",
    description: "A modern twist on classic styles with more detailed linework, varied line weights, and broader color palettes.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Japanese",
    description: "Authentic Irezumi-style tattoos featuring dragons, koi fish, cherry blossoms, and traditional Japanese imagery.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Cover-Ups",
    description: "Transform old or unwanted tattoos into stunning new artwork. Our artists specialize in creative cover-up solutions.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            OUR <span className="text-[#D32F2F]">SERVICES</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From custom designs to cover-ups, we offer a full range of professional tattoo services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-colors duration-500 hover:bg-white/10"
            >
              <div className="mb-6 relative z-10">
                <svg
                  className="w-12 h-12 text-[#D32F2F] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(211,47,47,0.6)] group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 className="relative z-10 text-xl font-bold mb-3 uppercase tracking-wider">
                {service.title}
              </h3>
              <p className="relative z-10 text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
