const skillCategories = [
  {
    title: "Security Tools",
    skills: ["Nessus", "Wireshark", "Nmap", "Kali Linux", "Elasticsearch (ELK Stack)", "Velociraptor (DFIR / Endpoint Investigation)"],
  },
  {
    title: "Frameworks & Standards",
    skills: ["NIST Cybersecurity Framework (CSF)", "MITRE ATT&CK", "CVSS (Common Vulnerability Scoring System)", "Incident Response Lifecycle"],
  },
  {
    title: "Domains",
    skills: [
      "Threat Detection",
      "Incident Response",
      "Vulnerability Management",
      "Log Analysis",
      "Phishing Analysis",
      "Risk Assessment",
      "Web Security",
      "Security Awareness",
    ],
  },
  {
    title: "Systems & Networking",
    skills: ["Windows", "Linux", "TCP/IP", "Network Protocols"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-primary font-mono text-sm">03 //</span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
            SKILLS<span className="text-primary">_</span>
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-sm font-mono text-primary mb-5 tracking-widest uppercase">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="text-sm text-card-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
