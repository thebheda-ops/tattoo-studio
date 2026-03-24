/* eslint-disable @next/next/no-img-element */
"use client";

const artists = [
  {
    name: "Shyam",
    specialty: "Realism & Portraits",
    experience: "12 years",
    image: "",
    // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Hari",
    specialty: "Traditional & Neo-Traditional",
    experience: "8 years",
    image: "",
    // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Ram",
    specialty: "Japanese & Blackwork",
    experience: "15 years",
    image: "",
    // "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Raj",
    specialty: "Watercolor & Abstract",
    experience: "6 years",
    image: "",
    // "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export default function Artists() {
  return (
    <section id='artists' className='py-24 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            MEET OUR <span className='text-[#ff3333]'>ARTISTS</span>
          </h2>
          <p className='text-zinc-400 text-lg max-w-2xl mx-auto'>
            Our team of award-winning artists brings decades of combined
            experience and unique artistic visions
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {artists.map((artist, index) => (
            <div key={index} className='group'>
              <div className='relative overflow-hidden mb-4'>
                <div className='aspect-square bg-zinc-800'>
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
                  />
                </div>
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent' />
              </div>
              <h3 className='text-xl font-bold uppercase tracking-wider mb-1'>
                {artist.name}
              </h3>
              <p className='text-[#ff3333] text-sm uppercase tracking-widest mb-2'>
                {artist.specialty}
              </p>
              <p className='text-zinc-500 text-sm'>
                {artist.experience} experience
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
