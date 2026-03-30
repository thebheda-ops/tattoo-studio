import { Droplets, Sun, Bandage, AlertCircle, CheckCircle2, Timer } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const aftercareSteps = [
  {
    icon: Bandage,
    title: "First 24 Hours",
    description: "Keep the bandage on for 2-6 hours. Wash hands before touching. Gently wash with unscented soap and lukewarm water.",
    warning: "Don't re-bandage unless advised by your artist",
  },
  {
    icon: Droplets,
    title: "Moisturize",
    description: "Apply a thin layer of unscented moisturizer or tattoo aftercare ointment 2-3 times daily. Keep the tattoo slightly moist, not soaked.",
    warning: "Never use petroleum jelly or scented lotions",
  },
  {
    icon: Sun,
    title: "Protect from Sun",
    description: "Keep your tattoo out of direct sunlight for at least 2 weeks. After healing, always use SPF 50+ sunscreen on the tattoo.",
    warning: "Sun exposure can fade and damage your tattoo",
  },
  {
    icon: Timer,
    title: "Healing Timeline",
    description: "Peeling and flaking is normal days 3-7. Don't pick or scratch! Full healing takes 2-4 weeks depending on size and placement.",
    warning: "Picking scabs can cause ink loss and scarring",
  },
];

const donts = [
  "No swimming or soaking for 2 weeks",
  "No direct sunlight or tanning beds",
  "No picking, scratching, or peeling",
  "No tight clothing over fresh tattoos",
  "No gym/workouts for 48 hours",
  "No alcohol-based products",
];

const AfterCareSection = () => {
  return (
    <section id="aftercare" className="section-padding bg-secondary/30" aria-label="Tattoo aftercare instructions">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">Healing Guide</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">AFTERCARE</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Proper aftercare is essential for beautiful, long-lasting results. Follow these guidelines for optimal healing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Care Steps */}
          <div className="space-y-6">
            {aftercareSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 100}>
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-amber-500 text-xs font-body">
                        <AlertCircle size={14} />
                        <span>{step.warning}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Don'ts List */}
          <ScrollReveal delay={200}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertCircle size={24} className="text-destructive" />
                </div>
                <h3 className="font-display text-2xl text-foreground">Important Don'ts</h3>
              </div>

              <ul className="space-y-4">
                {donts.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-xs font-bold">×</span>
                    </span>
                    <span className="text-muted-foreground font-body">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 size={20} />
                  <span className="font-body text-sm font-medium">
                    Questions? Contact us anytime — we're here to help!
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Emergency Contact */}
        <ScrollReveal delay={300}>
          <div className="mt-10 glass-card p-6 text-center">
            <p className="text-muted-foreground font-body text-sm">
              <span className="text-primary font-medium">Experiencing issues?</span> Contact us immediately at{" "}
              <a href="tel:+9779705086562" className="text-primary hover:underline">
                +977 (970) 5086562
              </a>{" "}
              or message us on WhatsApp. Your healing is our priority.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AfterCareSection;
