import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyPhishingLab = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-12 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-8 h-8 text-primary" />
          <span className="text-primary/40 font-mono text-4xl font-bold">03</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-2">
          Phishing Simulation & Security Awareness
        </h1>
        <p className="text-primary font-mono text-sm mb-6">Academic Project</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {["Social Engineering", "Phishing Detection", "Security Awareness", "Attack Simulation"].map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-12 text-muted-foreground leading-relaxed text-sm">
          <Section title="Summary">
            <p>Analyzed phishing attack patterns and conducted a controlled phishing simulation to understand how attackers exploit human behavior. I identified key phishing indicators, simulated real-world attack techniques, and developed security awareness strategies to improve user-level defenses.</p>
            <p>This project demonstrates my ability to analyze social engineering threats and contribute to phishing detection and awareness initiatives.</p>
          </Section>

          <Section title="Context">
            <p>Phishing remains one of the most common initial access vectors in cyberattacks, often bypassing technical defenses by targeting human behavior.</p>
            <p className="mt-3">This project simulated a real-world scenario where an organization must:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Detect phishing attempts",
                "Understand attacker techniques",
                "Improve user awareness and prevention strategies",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Investigation">
            <h4 className="text-foreground font-mono font-semibold mt-2 mb-2">Phishing Email Analysis</h4>
            <p>I evaluated multiple email samples to determine whether they were legitimate or malicious by analyzing:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Sender domains and spoofing attempts",
                "Email headers and inconsistencies",
                "Language patterns (urgency, fear tactics, impersonation)",
                "Suspicious links and attachments",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3">I classified emails based on risk and documented reasoning for each decision, strengthening my ability to identify real-world phishing indicators.</p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">Phishing Simulation (Attacker Perspective)</h4>
            <p>To understand attacker methodology, I created a controlled phishing environment:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Generated SSL certificates using OpenSSL",
                "Configured a spoofed domain and host mapping",
                "Built a phishing website mimicking a legitimate login portal",
                "Crafted a phishing email designed to prompt user action",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3">This demonstrated how attackers:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Establish credibility using branding and HTTPS",
                "Exploit urgency and trust",
                "Trick users into revealing sensitive information",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">Detection & Awareness</h4>
            <p>I developed security awareness guidelines to help users:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Identify phishing indicators",
                "Avoid interacting with suspicious links or attachments",
                "Recognize common social engineering techniques",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3">This emphasized the importance of combining technical controls with user education.</p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">AI-Based Validation</h4>
            <p>I compared my phishing classifications with AI-generated results and observed alignment across all samples.</p>
            <p className="mt-2 text-primary/80 font-mono text-xs border-l-2 border-primary/30 pl-4">
              This reinforced how AI can support phishing detection workflows, while still requiring human validation.
            </p>
          </Section>

          <Section title="Key Findings">
            <ul className="list-none space-y-2">
              {[
                "Phishing attacks often rely more on psychological manipulation than technical sophistication",
                "Legitimate-looking domains and SSL certificates can create false trust",
                "Users are more likely to fall for attacks that create urgency or authority",
                "Detection improves when combining technical indicators with behavioral awareness",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Impact">
            <p>This project demonstrated how easily phishing attacks can be constructed and how effective they can be without proper user awareness.</p>
            <p className="mt-3">By analyzing both attack techniques and defense strategies, I developed a stronger understanding of how organizations can reduce human-factor risk and improve detection of phishing attempts.</p>
          </Section>

          <Section title="Tools & Techniques">
            <ul className="list-none space-y-2">
              {[
                "OpenSSL (certificate generation)",
                "Linux environment (host configuration, Apache setup)",
                "Email analysis techniques",
                "Social engineering analysis",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <div className="mt-12 p-6 rounded-lg border border-primary/30 bg-primary/5">
            <h4 className="text-primary font-mono font-semibold mb-3">Key Takeaways</h4>
            <ul className="list-none space-y-2 text-foreground text-sm">
              {[
                "Human behavior is a critical attack surface in cybersecurity",
                "Attackers leverage trust, urgency, and impersonation to bypass defenses",
                "Security awareness is essential for reducing phishing success rates",
                "Effective phishing defense requires both technical detection and user training",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xl font-mono font-semibold text-foreground mb-4">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

export default CaseStudyPhishingLab;
