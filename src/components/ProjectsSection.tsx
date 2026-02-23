import { AlertTriangle, Search, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: AlertTriangle,
    number: "01",
    title: "Incident Response – Enterprise Attack Investigation",
    subtitle: "Stark Enterprises Simulation",
    caseStudyLink: "/case-study/incident-response",
    overview:
      "Full-scale incident response investigation on a simulated enterprise breach involving exploitation, lateral movement, data exfiltration, and ransomware deployment.",
    highlights: [
      "Identified exploitation of CVE-2021-31166 (HTTP.sys RCE)",
      "Tracked web shell deployment & LOLBins usage",
      "Data exfiltration via SFTP analysis",
      "Mapped recommendations to NIST CSF",
    ],
    skills: ["Incident Response", "Log Analysis", "Threat Detection", "NIST CSF", "Risk Prioritization"],
  },
  {
    icon: Search,
    number: "02",
    title: "Vulnerability Management",
    subtitle: "TRUGlobal Internship",
    overview:
      "Supported vulnerability assessment and remediation efforts across organizational systems during internship.",
    highlights: [
      "Conducted vulnerability scans using Nessus",
      "Analyzed findings based on CVSS severity",
      "Collaborated to remediate critical vulnerabilities",
      "Tracked remediation progress & risk reduction",
    ],
    skills: ["Nessus", "CVSS", "Risk Assessment", "Remediation Workflows", "Security Reporting"],
  },
  {
    icon: Mail,
    number: "03",
    title: "Phishing Simulation & Security Awareness",
    subtitle: "Academic Project",
    overview:
      "Designed and analyzed a phishing simulation to understand attacker techniques and improve user awareness against social engineering attacks.",
    highlights: [
      "Simulated phishing attacks with SSL & web server config",
      "Crafted realistic phishing email templates",
      "Analyzed spear phishing, clone phishing & whaling",
      "Developed user awareness training materials",
    ],
    skills: ["Social Engineering", "Security Awareness", "Email Attack Simulation", "DMARC"],
  },
  {
    icon: Users,
    number: "04",
    title: "Teaching Assistant",
    subtitle: "Purdue University",
    overview:
      "Teaching Assistant for cybersecurity and system administration courses, guiding students through hands-on labs and technical concepts.",
    highlights: [
      "Guided students through hands-on labs",
      "Assisted with troubleshooting & problem-solving",
      "Communicated complex cybersecurity topics clearly",
    ],
    skills: ["Technical Communication", "Mentorship", "Problem-solving"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-primary font-mono text-sm">02 //</span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
            PROJECTS<span className="text-primary">_</span>
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.number}
                className="group p-8 rounded-lg border border-border bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:border-glow transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary/40 font-mono text-3xl font-bold">
                        {project.number}
                      </span>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-mono font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-4">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.overview}
                    </p>
                    {project.caseStudyLink && (
                      <Link
                        to={project.caseStudyLink}
                        className="inline-block mt-4 text-primary font-mono text-xs hover:underline"
                      >
                        View Case Study →
                      </Link>
                    )}
                  </div>

                  <div className="lg:w-1/3">
                    <h4 className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-card-foreground">
                          <span className="text-primary mt-1 text-xs">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:w-1/3">
                    <h4 className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">
                      Skills & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary text-secondary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
