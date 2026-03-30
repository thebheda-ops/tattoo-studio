import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
const testimonials = [
    {
        name: "Anish Thapa",
        text: "Absolutely incredible work! Shyam captured every detail of my portrait tattoo perfectly. The studio is clean, professional, and the team made me feel completely comfortable.",
        rating: 5,
        tattoo: "Portrait Sleeve",
    },
    {
        name: "Priya Sharma",
        text: "I was nervous about my first tattoo but the team at Jade Ink made the experience amazing. The custom design exceeded my expectations. Highly recommend!",
        rating: 5,
        tattoo: "Custom Mandala",
    },
    {
        name: "David Chen",
        text: "Travelled from Singapore specifically for Ram's Japanese work. Worth every mile. The attention to detail and understanding of traditional Irezumi is unmatched.",
        rating: 5,
        tattoo: "Japanese Half Sleeve",
    },
    {
        name: "Sita Rai",
        text: "Raj did an incredible watercolor piece for me. The colors are vibrant and the blending is seamless. Everyone keeps asking where I got it done!",
        rating: 5,
        tattoo: "Watercolor Floral",
    },
];
const TestimonialsSection = () => {
    return (<section id="testimonials" className="section-padding bg-secondary/30" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">Reviews</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">WHAT CLIENTS SAY</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Don't just take our word for it — hear from our satisfied clients
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (<ScrollReveal key={t.name} delay={index * 150}>
              <div className="glass-card p-8 hover-lift h-full flex flex-col">
                <Quote size={32} className="text-primary/30 mb-4"/>
                <p className="text-foreground/90 font-body leading-relaxed mb-6 flex-1">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl text-foreground tracking-wide">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.tattoo}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (<Star key={i} size={14} className="fill-primary text-primary"/>))}
                  </div>
                </div>
              </div>
            </ScrollReveal>))}
        </div>
      </div>
    </section>);
};
export default TestimonialsSection;
