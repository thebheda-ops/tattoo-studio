"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isBookingOpen, setIsBookingOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#artists", label: "Artists" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <a href='#home' className='text-2xl font-bold tracking-wider'>
            <span className='text-[#ff3333]'>JADE</span> INK
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm uppercase tracking-widest hover:text-[#ff3333] transition-colors'
              >
                {link.label}
              </a>
            ))}
            {/* <button
              onClick={() => setIsBookingOpen(true)}
              className='bg-[#ff3333] hover:bg-[#cc0000] px-6 py-2 text-sm uppercase tracking-widest font-semibold transition-colors'
            >
              Book Now
            </button> */}
          </div>

          {/* Mobile menu button */}
          <button
            className='md:hidden text-white p-2'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden pb-4'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='block py-2 text-sm uppercase tracking-widest hover:text-[#ff3333] transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* <button
              onClick={() => {
                setIsOpen(false);
                setIsBookingOpen(true);
              }}
              className='block w-full mt-2 bg-[#ff3333] hover:bg-[#cc0000] px-6 py-2 text-sm uppercase tracking-widest font-semibold text-center transition-colors'
            >
              Book Now
            </button> */}
          </div>
        )}
      </div>

      {/* <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      /> */}
    </nav>
  );
}
