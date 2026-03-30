import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import artist1 from "@/assets/artist-1.png";
import artist2 from "@/assets/artist-2.png";
import artist3 from "@/assets/artist-3.png";
import artist4 from "@/assets/artist-4.png";
const artists = [
    {
        name: "Shyam",
        specialty: "Realism & Portraits",
        experience: "12 years experience",
        image: artist1,
    },
    {
        name: "Hari",
        specialty: "Traditional & Neo-Traditional",
        experience: "8 years experience",
        image: artist2,
    },
    {
        name: "Ram",
        specialty: "Japanese & Blackwork",
        experience: "15 years experience",
        image: artist3,
    },
    {
        name: "Raj",
        specialty: "Watercolor & Abstract",
        experience: "6 years experience",
        image: artist4,
    },
];
const ArtistsSection = () => {
    return (<section id="artists" className="section-padding bg-secondary/30" aria-label="Our artists">
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
          {artists.map((artist, index) => (<ScrollReveal key={artist.name} delay={index * 150}>
              <div className="glass-card overflow-hidden hover-lift group">
                <div className="relative h-72 overflow-hidden bg-muted">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} - ${artist.specialty} tattoo artist at Jade Ink Kathmandu`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"/>
                </div>
                <div className="p-6 relative -mt-12">
                  <h3 className="font-display text-2xl text-foreground mb-1">{artist.name}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{artist.specialty}</p>
                  <p className="text-muted-foreground text-xs">{artist.experience}</p>
                </div>
              </div>
            </ScrollReveal>))}
        </div>
      </div>
    </section>);
};
export default ArtistsSection;
