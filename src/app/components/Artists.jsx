/* eslint-disable @next/next/no-img-element */
"use client";


const artistsData = [
  {
    name: "Shyam",
    username: "shyam.ink",
    bio: "12 years of experience specializing in Realism & Portraits.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    stats: { following: 142, followers: 8500, posts: 320 },
    socialLinks: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Hari",
    username: "hari.tattoo",
    bio: "8 years of experience in Traditional & Neo-Traditional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    stats: { following: 231, followers: 5200, posts: 198 },
    socialLinks: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Ram",
    username: "ram.irezumi",
    bio: "15 years mastering Japanese & Blackwork styles.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    stats: { following: 89, followers: 12400, posts: 450 },
    socialLinks: { twitter: "#" },
  },
  {
    name: "Raj",
    username: "raj.colors",
    bio: "6 years creating vivid Watercolor & Abstract designs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    stats: { following: 445, followers: 3100, posts: 112 },
    socialLinks: { linkedin: "#", github: "#" },
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
          {artistsData.map((artist, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-4 aspect-square bg-zinc-800">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-1">
                {artist.name}
              </h3>
              <p className="text-[#ff3333] text-sm uppercase tracking-widest mb-2">
                {artist.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
