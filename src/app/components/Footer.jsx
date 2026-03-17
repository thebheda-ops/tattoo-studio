"use client";

export default function Footer() {
  return (
    <footer className='bg-zinc-950 border-t border-zinc-800 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='text-2xl font-bold tracking-wider mb-4'>
              <span className='text-[#ff3333]'>JADE</span> INK
            </h3>
            <p className='text-zinc-400 text-sm leading-relaxed'>
              Award-winning tattoo studio bringing your artistic visions to life
              since 2012.
            </p>
          </div>
          <div>
            <h4 className='text-lg font-bold mb-4 uppercase tracking-wider'>
              Quick Links
            </h4>
            <ul className='space-y-2 text-zinc-400'>
              {["Home", "Services", "Artists", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className='hover:text-[#ff3333] transition-colors'
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-bold mb-4 uppercase tracking-wider'>
              Newsletter
            </h4>
            <p className='text-zinc-400 text-sm mb-4'>
              Subscribe for flash designs and special offers
            </p>
            <form className='flex'>
              <input
                type='email'
                placeholder='Your email'
                className='flex-1 bg-black border border-zinc-700 px-4 py-2 text-white focus:border-[#ff3333] focus:outline-none transition-colors'
              />
              <button
                type='submit'
                className='bg-[#ff3333] hover:bg-[#cc0000] px-4 py-2 uppercase tracking-wider text-sm font-semibold transition-colors'
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className='border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-zinc-500 text-sm'>
            © 2026 Jade Ink. All rights reserved.
          </p>
          <div className='flex gap-6 text-zinc-500 text-sm'>
            <a href='#' className='hover:text-[#ff3333] transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-[#ff3333] transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
