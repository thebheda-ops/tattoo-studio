import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";
const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (<footer className="border-t border-border bg-card/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display text-3xl text-primary">JADE</span>
              <span className="font-display text-3xl text-foreground">INK</span>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Award-winning tattoo studio in Kathmandu, Nepal. Creating permanent art since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4 tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Services", "Artists", "Gallery", "Testimonials", "Contact"].map((link) => (<a key={link} href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">
                  {link}
                </a>))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4 tracking-wide">Follow Us</h4>
            <div className="flex gap-3">
              {[
            { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
        ].map((social) => (<a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow Jade Ink on ${social.label}`} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <social.icon size={18}/>
                </a>))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Jade Ink Tattoo Studio. All rights reserved.
          </p>
          <button onClick={scrollToTop} aria-label="Back to top" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
            <ArrowUp size={18}/>
          </button>
        </div>
      </div>
    </footer>);
};
export default Footer;
