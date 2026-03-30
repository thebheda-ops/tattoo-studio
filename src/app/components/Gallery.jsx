/* eslint-disable @next/next/no-img-element */
"use client";



const galleryItems = [
  {
    category: "Realism",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=500&fit=crop",
  },
  {
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1590246815117-be3e4f992cdc?w=400&h=500&fit=crop",
  },
  {
    category: "Japanese",
    image:
      "https://images.unsplash.com/photo-1542727313-4f3e99aa2568?w=400&h=500&fit=crop",
  },
  {
    category: "Neo-Traditional",
    image:
      "https://images.unsplash.com/photo-1560707303-4e9808f1c5f1?w=400&h=500&fit=crop",
  },
  {
    category: "Blackwork",
    image:
      "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?w=400&h=500&fit=crop",
  },
  {
    category: "Watercolor",
    image:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=400&h=500&fit=crop",
  },
  {
    category: "Portrait",
    image:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400&h=500&fit=crop",
  },
  {
    category: "Geometric",
    image:
      "https://images.unsplash.com/photo-1550537628-35375e8f5ce3?w=400&h=500&fit=crop",
  },
];

export default function Gallery() {
  const getGridItemClasses = (index) => {
    switch(index) {
      case 0: return "col-span-2 md:col-span-2 md:row-span-2";
      case 1: return "col-span-1 md:col-span-1 md:row-span-1";
      case 2: return "col-span-1 md:col-span-1 md:row-span-1";
      case 3: return "col-span-2 md:col-span-2 md:row-span-1";
      case 4: return "col-span-1 md:col-span-1 md:row-span-2";
      case 5: return "col-span-1 md:col-span-2 md:row-span-1";
      case 6: return "col-span-2 md:col-span-1 md:row-span-2";
      case 7: return "col-span-2 md:col-span-2 md:row-span-1";
      default: return "col-span-1 md:col-span-1 md:row-span-1";
    }
  };
  return (
    <section id='gallery' className='py-24 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 perspective-[1000px]'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            OUR <span className='text-[#ff3333]'>PORTFOLIO</span>
          </h2>
          <p className='text-zinc-400 text-lg max-w-2xl mx-auto'>
            Browse our collection of completed works and find inspiration for
            your next piece
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-4'>
            {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-white/5 border-white/20 w-full h-full ${getGridItemClasses(index)}`}
            >
              <img
                src={item.image}
                alt={item.category}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <span className='text-[#ff3333] text-xs uppercase tracking-widest font-bold drop-shadow-md'>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
