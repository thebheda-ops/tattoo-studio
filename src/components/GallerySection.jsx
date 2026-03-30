import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
const categories = ["All", "Realism", "Traditional", "Japanese", "Neo-Traditional", "Blackwork", "Watercolor", "Portrait", "Geometric"];
const galleryItems = [
    { src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=700&fit=crop", category: "Realism", alt: "Realistic tattoo artwork by Jade Ink studio" },
    { src: "https://images.unsplash.com/photo-1590246815117-be3e4f992cdc?w=600&h=700&fit=crop", category: "Traditional", alt: "Traditional style tattoo from Jade Ink" },
    { src: "https://images.unsplash.com/photo-1542727313-4f3e99aa2568?w=600&h=700&fit=crop", category: "Japanese", alt: "Japanese Irezumi style tattoo by Jade Ink artists" },
    { src: "https://images.unsplash.com/photo-1560707303-4e9808f1c5f1?w=600&h=700&fit=crop", category: "Neo-Traditional", alt: "Neo-traditional tattoo design from Jade Ink Kathmandu" },
    { src: "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?w=600&h=700&fit=crop", category: "Blackwork", alt: "Bold blackwork tattoo by Jade Ink studio" },
    { src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&h=700&fit=crop", category: "Watercolor", alt: "Watercolor style tattoo from Jade Ink" },
    { src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=700&fit=crop", category: "Portrait", alt: "Portrait tattoo artwork by Jade Ink artists" },
    { src: "https://images.unsplash.com/photo-1550537628-35375e8f5ce3?w=600&h=700&fit=crop", category: "Geometric", alt: "Geometric pattern tattoo from Jade Ink studio" },
];
const GallerySection = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
    return (<section id="gallery" className="section-padding" aria-label="Portfolio gallery">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">Our Work</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">OUR PORTFOLIO</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Browse our collection of completed works and find inspiration for your next piece
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Gallery filters">
            {categories.map((cat) => (<button key={cat} onClick={() => setActiveFilter(cat)} role="tab" aria-selected={activeFilter === cat} className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all duration-300 font-body ${activeFilter === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"}`}>
                {cat}
              </button>))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, index) => (<ScrollReveal key={item.src} delay={index * 80}>
              <div className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-300 flex items-end p-4">
                  <span className="text-foreground font-display text-lg tracking-wider opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.category}
                  </span>
                </div>
              </div>
            </ScrollReveal>))}
        </div>
      </div>
    </section>);
};
export default GallerySection;
