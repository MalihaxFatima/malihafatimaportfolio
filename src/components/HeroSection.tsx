import { Shield, Terminal, Lock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-mono text-primary">
              AVAILABLE FOR INTERNSHIP — SUMMER 2026
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-foreground mb-4 opacity-0 animate-fade-up-delay-1">
          MALIHA <span className="text-primary text-glow">FATIMA</span>
        </h1>

        <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-10 opacity-0 animate-fade-up-delay-2">
          Cybersecurity Graduate Student · Purdue University
        </p>

        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up-delay-3">
          {[
            { icon: Shield, label: "Incident Response" },
            { icon: Terminal, label: "Vulnerability Management" },
            { icon: Lock, label: "Security Operations" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:border-glow transition-all duration-300"
            >
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-card-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 opacity-0 animate-fade-up-delay-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:text-glow transition-all"
          >
            <span>EXPLORE MY WORK</span>
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
