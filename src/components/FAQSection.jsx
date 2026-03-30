import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book through our contact form, call us directly at +977 (970) 5086562, or message us on WhatsApp for the fastest response. We recommend booking at least 1-2 weeks in advance for custom designs."
  },
  {
    question: "How much does a tattoo cost?",
    answer: "Pricing varies based on size, complexity, placement, and the artist. Small tattoos start from NPR 5,000, while larger custom pieces are priced by the session or project. We provide free estimates during consultation."
  },
  {
    question: "Is it safe? Do you use new needles?",
    answer: "Absolutely. We follow strict hygiene protocols. All needles are single-use and disposed of after each session. Our equipment is sterilized using autoclave, and we maintain a hospital-grade clean environment."
  },
  {
    question: "Can I see the design before my appointment?",
    answer: "Yes! For custom designs, we'll share the artwork 2-3 days before your session for approval. You can request revisions, and we'll make adjustments until you're completely satisfied."
  },
  {
    question: "What should I do before getting a tattoo?",
    answer: "Get a good night's sleep, eat a full meal, stay hydrated, and avoid alcohol for 24 hours prior. Wear comfortable clothing that allows easy access to the tattoo area. Don't apply lotion or sunscreen to the area."
  },
  {
    question: "How long does a tattoo take to heal?",
    answer: "Initial healing takes 2-4 weeks. The outer layer heals in about a week, but complete healing including the deeper skin layers takes about a month. Follow our aftercare guide for best results."
  },
  {
    question: "Do you do cover-ups?",
    answer: "Yes, we specialize in cover-up tattoos. However, not all tattoos can be covered. We need to see the existing tattoo in person to determine if it's coverable and discuss your options."
  },
  {
    question: "What if I need to reschedule?",
    answer: "We understand plans change. Please give us at least 48 hours notice for rescheduling. Deposits are transferable to a new date if sufficient notice is given. No-shows forfeit their deposit."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">
              Common Questions
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
              FAQ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Everything you need to know before booking your session
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <HelpCircle size={20} className="text-primary" />
                    </div>
                    <span className="font-display text-lg sm:text-xl text-foreground tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={24} className="text-muted-foreground" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pl-20">
                        <p className="text-muted-foreground font-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-body mb-4">
              Still have questions?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-semibold text-sm rounded tracking-wider uppercase hover:bg-primary/20 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
