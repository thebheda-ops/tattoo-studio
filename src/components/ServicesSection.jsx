import { Paintbrush, Eye, Flame, Layers, Cherry, RefreshCw } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
const services = [
    {
        icon: Paintbrush,
        title: "Custom Design",
        description: "Bring your vision to life with our custom tattoo design services. Our artists work closely with you to create unique, one-of-a-kind pieces.",
    },
    {
        icon: Eye,
        title: "Realism",
        description: "Photorealistic tattoos that capture every detail. From portraits to nature scenes, our realism artists bring images to life on skin.",
    },
    {
        icon: Flame,
        title: "Traditional",
        description: "Classic bold lines and vibrant colors. Traditional tattoos with timeless appeal that never goes out of style.",
    },
    {
        icon: Layers,
        title: "Neo-Traditional",
        description: "A modern twist on classic styles with more detailed linework, varied line weights, and broader color palettes.",
    },
    {
        icon: Cherry,
        title: "Japanese",
        description: "Authentic Irezumi-style tattoos featuring dragons, koi fish, cherry blossoms, and traditional Japanese imagery.",
    },
    {
        icon: RefreshCw,
        title: "Cover-Ups",
        description: "Transform old or unwanted tattoos into stunning new artwork. Our artists specialize in creative cover-up solutions.",
    },
];
const ServicesSection = () => {
    return (<section id="services" className="section-padding" aria-label="Our services">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">What We Offer</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">OUR SERVICES</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              From custom designs to cover-ups, we offer a full range of professional tattoo services
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (<ScrollReveal key={service.title} delay={index * 100}>
              <div className="glass-card p-6 sm:p-8 hover-lift hover-glow group cursor-default h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={28} className="text-primary"/>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>))}
        </div>
      </div>
    </section>);
};
export default ServicesSection;
