import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Upload } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    service: "", 
    size: "",
    style: "",
    budget: "",
    message: "" 
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Please tell us about your tattoo idea";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setSending(true);
    
    // Format message for WhatsApp
    const phoneNumber = "9779705086562";
    const message = `*New Booking Request - Jade Ink Tattoo Studio*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Service:* ${formData.service || "Not specified"}
*Size:* ${formData.size || "Not specified"}
*Style:* ${formData.style || "Not specified"}
*Budget:* ${formData.budget || "Not specified"}

*Details:*
${formData.message}

📎 *Reference Images:* Please send any reference images separately via WhatsApp

---
Sent from jadeinktattoo.com`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Show toast and open WhatsApp
    toast.success("Opening WhatsApp with your booking details...");
    
    // Small delay to show toast before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        service: "", 
        size: "",
        style: "",
        budget: "",
        message: "" 
      });
      setErrors({});
      setSending(false);
    }, 500);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact us">
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
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5 font-body">Name *</label>
                  <input 
                    id="name" 
                    type="text" 
                    value={formData.name} 
                    onChange={handleChange("name")} 
                    className={`w-full px-4 py-3 bg-secondary border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body ${errors.name ? "border-destructive" : "border-border"}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-1.5 font-body">Email *</label>
                  <input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange("email")} 
                    className={`w-full px-4 py-3 bg-secondary border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body ${errors.email ? "border-destructive" : "border-border"}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted-foreground mb-1.5 font-body">Phone</label>
                  <input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange("phone")} 
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" 
                    placeholder="+977 XXX XXXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm text-muted-foreground mb-1.5 font-body">Service</label>
                  <select 
                    id="service" 
                    value={formData.service} 
                    onChange={handleChange("service")} 
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
                  >
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="size" className="block text-sm text-muted-foreground mb-1.5 font-body">Tattoo Size</label>
                  <select 
                    id="size" 
                    value={formData.size} 
                    onChange={handleChange("size")} 
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
                  >
                    <option value="">Select size</option>
                    <option>Small (up to 5cm)</option>
                    <option>Medium (5-15cm)</option>
                    <option>Large (15-25cm)</option>
                    <option>XL (Full sleeve, back piece)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="style" className="block text-sm text-muted-foreground mb-1.5 font-body">Tattoo Style</label>
                  <select 
                    id="style" 
                    value={formData.style} 
                    onChange={handleChange("style")} 
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
                  >
                    <option value="">Select style</option>
                    <option>Realism</option>
                    <option>Traditional</option>
                    <option>Neo-Traditional</option>
                    <option>Japanese</option>
                    <option>Watercolor</option>
                    <option>Blackwork</option>
                    <option>Geometric</option>
                    <option>Custom Design</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm text-muted-foreground mb-1.5 font-body">Budget Range</label>
                  <select 
                    id="budget" 
                    value={formData.budget} 
                    onChange={handleChange("budget")} 
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
                  >
                    <option value="">Select budget</option>
                    <option>NPR 5,000 - 15,000</option>
                    <option>NPR 15,000 - 30,000</option>
                    <option>NPR 30,000 - 50,000</option>
                    <option>NPR 50,000 - 100,000</option>
                    <option>100,000+ (Custom quote)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="reference" className="block text-sm text-muted-foreground mb-1.5 font-body">Reference Images</label>
                  <div className="relative">
                    <input 
                      id="reference" 
                      type="file" 
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          toast.info(`${files.length} file(s) selected. Please attach them manually in WhatsApp.`);
                        }
                      }}
                    />
                    <label 
                      htmlFor="reference" 
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-secondary border border-dashed border-border rounded text-foreground text-sm hover:bg-secondary/80 hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <Upload size={18} />
                      Upload images (optional)
                    </label>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">Max 5 images. You'll attach them in WhatsApp.</p>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-1.5 font-body">Message *</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange("message")} 
                  className={`w-full px-4 py-3 bg-secondary border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-body resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                  placeholder="Tell us about your tattoo idea... (size, placement, style, reference images)"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={sending} className="w-full py-3.5 bg-green-600 text-white font-semibold text-sm rounded tracking-wider uppercase hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
                <MessageCircle size={18}/>
                {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="glass-card p-4 sm:p-8 space-y-6">
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

              <div className="glass-card overflow-hidden rounded-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.28495805!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2np" width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Jade Ink studio location in Kathmandu, Nepal" className="grayscale hover:grayscale-0 transition-all duration-500"/>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
