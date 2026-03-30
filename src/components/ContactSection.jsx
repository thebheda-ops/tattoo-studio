import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";
const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [sending, setSending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        // Simulate send
        setTimeout(() => {
            toast.success("Message sent! We'll get back to you within 24 hours.");
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
            setSending(false);
        }, 1000);
    };
    const whatsappUrl = `https://wa.me/9779705086562?text=${encodeURIComponent("Hi! I'd like to book a tattoo session at Jade Ink.")}`;
    return (<section id="contact" className="section-padding" aria-label="Contact us">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">Get In Touch</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">BOOK YOUR SESSION</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Ready to get inked? Fill out the form or reach out directly
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5 font-body">Name *</label>
                  <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" placeholder="Your name"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-1.5 font-body">Email *</label>
                  <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" placeholder="your@email.com"/>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted-foreground mb-1.5 font-body">Phone</label>
                  <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" placeholder="+977 XXX XXXXXXX"/>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm text-muted-foreground mb-1.5 font-body">Service</label>
                  <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body">
                    <option value="">Select a service</option>
                    <option>Custom Design</option>
                    <option>Realism</option>
                    <option>Traditional</option>
                    <option>Neo-Traditional</option>
                    <option>Japanese</option>
                    <option>Cover-Up</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-1.5 font-body">Message *</label>
                <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body resize-none" placeholder="Tell us about your tattoo idea..."/>
              </div>
              <button type="submit" disabled={sending} className="w-full py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
                <Send size={16}/>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </ScrollReveal>

          {/* Info + Map */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-4 hover-lift group block">
                <div className="w-14 h-14 rounded-full bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors flex-shrink-0">
                  <MessageCircle size={24} className="text-green-500"/>
                </div>
                <div>
                  <p className="font-display text-xl text-foreground tracking-wide">Book via WhatsApp</p>
                  <p className="text-muted-foreground text-sm font-body">Quick response, usually within 30 minutes</p>
                </div>
              </a>

              {/* Info cards */}
              <div className="glass-card p-8 space-y-6">
                <h3 className="font-display text-2xl text-foreground tracking-wide">Visit Our Studio</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0"/>
                    <div>
                      <p className="text-foreground font-body text-sm">Jade Ink Tattoo Studio</p>
                      <p className="text-muted-foreground text-sm font-body">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primary flex-shrink-0"/>
                    <a href="tel:+9779705086562" className="text-foreground hover:text-primary transition-colors text-sm font-body">
                      +977 (970) 5086562
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-primary flex-shrink-0"/>
                    <a href="mailto:jadeink@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm font-body">
                      jadeink@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-primary mt-1 flex-shrink-0"/>
                    <div className="text-sm font-body">
                      <p className="text-foreground">Sun - Fri: 11:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Saturday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="glass-card overflow-hidden rounded-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.28495805!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Jade Ink studio location in Kathmandu, Nepal" className="grayscale hover:grayscale-0 transition-all duration-500"/>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);
};
export default ContactSection;
