import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Artists", href: "#artists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Aftercare", href: "#aftercare" },
  { label: "Contact", href: "#contact" },
];
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-lg" : "bg-transparent"}`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-1" aria-label="Jade Ink Home">
            <span className="font-display text-2xl sm:text-3xl text-primary">JADE</span>
            <span className="font-display text-2xl sm:text-3xl text-foreground">INK</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (<a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider uppercase">
                {item.label}
              </a>))}
            <a href="#contact" className="px-5 py-2 bg-primary text-primary-foreground font-semibold text-sm rounded tracking-wider uppercase hover:bg-primary/90 transition-colors">
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden">
            <div className="px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (<a key={item.href} href={item.href} className="text-lg font-display tracking-wider text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>))}
              <a href="#contact" className="mt-2 px-5 py-3 bg-primary text-primary-foreground font-semibold text-center rounded tracking-wider uppercase" onClick={() => setIsOpen(false)}>
                Book Now
              </a>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </nav>);
};
export default Navbar;
