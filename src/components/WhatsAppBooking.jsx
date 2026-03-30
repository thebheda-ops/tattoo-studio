import { MessageCircle, Clock, CheckCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WhatsAppBooking = () => {
  const phoneNumber = "9779705086562";
  const message = "Hi! I'd like to book a tattoo session at Jade Ink.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const benefits = [
    "Instant response",
    "Direct artist consultation",
    "Send reference images",
    "Get price estimates",
  ];

  return (
    <section id="whatsapp-booking" className="section-padding bg-secondary/30" aria-label="Book via WhatsApp">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Info */}
          <ScrollReveal>
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">
                Fastest Way to Book
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                BOOK VIA WHATSAPP
              </h2>
              <p className="text-muted-foreground font-body mb-8 max-w-lg">
                Skip the form and chat directly with us. Share your ideas, reference images, 
                and get quick responses — usually within 30 minutes during business hours.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-body">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                <Clock size={16} className="text-primary" />
                <span>Available Sun - Fri, 11:00 AM - 8:00 PM</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: CTA Card */}
          <ScrollReveal delay={150}>
            <div className="glass-card p-6 sm:p-8 lg:p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={40} className="text-green-500" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-2">
                Start Chat Now
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Click below to open WhatsApp and begin your booking
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded tracking-wider uppercase transition-all duration-300 group"
              >
                <MessageCircle size={18} />
                Open WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-muted-foreground text-xs font-body mt-4">
                Or save our number: +977 (970) 5086562
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppBooking;
