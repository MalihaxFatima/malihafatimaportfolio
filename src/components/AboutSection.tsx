import { GraduationCap, Target, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">01 //</span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
            ABOUT<span className="text-primary">_</span>ME
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              desc: "First-year M.S. in Computer & Information Technology (Cybersecurity) — Purdue University.\nB.S. in Cybersecurity — Purdue University.",
            },
            {
              icon: Target,
              title: "Focus Areas",
              desc: "Incident response, vulnerability management, and security awareness — analyzing real-world attack scenarios and developing practical mitigation strategies.",
            },
            {
              icon: BookOpen,
              title: "Research",
              desc: "Currently researching social engineering mitigation strategies and exploring automation within SOC and vulnerability management workflows.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group"
            >
              <Icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow transition-all" />
              <h3 className="text-lg font-mono font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-lg border border-border bg-card/30">
          <p className="text-muted-foreground leading-relaxed">
            Graduate student with hands-on experience in incident response, vulnerability management, and security awareness. 
            I focus on analyzing real-world attack scenarios, reducing security risk, and developing practical mitigation strategies 
            aligned with industry best practices like NIST CSF.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
