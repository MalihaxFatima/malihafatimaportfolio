import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyIncidentResponse = () => {
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
          <AlertTriangle className="w-8 h-8 text-primary" />
          <span className="text-primary/40 font-mono text-4xl font-bold">01</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-2">
          Enterprise Security Incident Investigation & Mitigation
        </h1>
        <p className="text-primary font-mono text-sm mb-6">Stark Enterprises Simulation</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {["Incident Response", "Threat Investigation", "Root Cause Analysis", "Risk Mitigation"].map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-12 text-muted-foreground leading-relaxed text-sm">
          <Section title="Summary">
            <p>Investigated a simulated enterprise cyberattack involving remote code execution (CVE-2021-31166), credential harvesting, data exfiltration, and ransomware deployment. I reconstructed the full attack timeline, identified key vulnerabilities exploited by the attacker, and developed actionable recommendations to strengthen detection and response capabilities.</p>
            <p>This project demonstrates my ability to analyze attacker behavior and contribute to incident response workflows in a SOC-like environment.</p>
          </Section>

          <Section title="Context">
            <p>This project simulated a real-world enterprise breach scenario where an attacker gained initial access to a Windows-based system and progressed through multiple stages of the attack lifecycle.</p>
            <p className="mt-3">The objective was to:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Investigate how the attack occurred",
                "Identify the techniques and vulnerabilities used",
                "Reconstruct the attack timeline",
                "Recommend mitigation strategies to prevent similar incidents",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-4">The environment included compromised systems, logs, and artifacts representing attacker activity across multiple days.</p>
          </Section>

          <Section title="Investigation">
            <p>I focused on analyzing system artifacts and logs to understand how the attacker progressed through the environment and escalated their impact.</p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">Initial Access</h4>
            <p>The attack began with exploitation of CVE-2021-31166 (HTTP.sys Remote Code Execution), allowing the attacker to gain unauthorized access to the system.</p>
            <p className="mt-3 text-primary/80 font-mono text-xs border-l-2 border-primary/30 pl-4">
              I identified this as a critical entry point because it enabled remote execution without authentication, significantly increasing risk exposure.
            </p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">Persistence & Credential Harvesting</h4>
            <p>After gaining access, the attacker modified registry settings (e.g., NoLMHash) to weaken credential protections and enable easier harvesting.</p>
            <p className="mt-2">I analyzed these changes and recognized that they allowed the attacker to extract password hashes, facilitating lateral movement.</p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">Lateral Movement & Tool Usage</h4>
            <p>The attacker leveraged legitimate tools (Living-off-the-Land Binaries) such as:</p>
            <ul className="list-none space-y-2 mt-3">
              {["WinSCP", "PuTTY"].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3">This made detection more difficult because these tools are commonly used in legitimate administrative workflows.</p>
            <p className="mt-2 text-primary/80 font-mono text-xs border-l-2 border-primary/30 pl-4">
              I identified this as an attempt to blend malicious activity with normal system behavior to evade detection.
            </p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">Data Exfiltration</h4>
            <p>The attacker used mysqldump and secure file transfer methods to extract sensitive data from the environment.</p>
            <p className="mt-2">I correlated command execution with network activity to confirm that data was being staged and transferred externally.</p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">Final Impact: Ransomware Deployment</h4>
            <p>The attack concluded with ransomware execution, encrypting system data and disrupting operations.</p>
            <p className="mt-2">By reconstructing the sequence of events, I was able to show how earlier vulnerabilities and missed detection opportunities led to this final impact.</p>
          </Section>

          <Section title="Key Findings">
            <ul className="list-none space-y-2">
              {[
                "Critical vulnerability (CVE-2021-31166) enabled initial access",
                "Weak credential protections allowed credential harvesting",
                "Use of legitimate tools (LOLBins) helped attacker evade detection",
                "Data exfiltration occurred prior to ransomware deployment",
                "Lack of monitoring and segmentation contributed to full compromise",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Recommendations">
            <p>Based on my analysis, I proposed the following security improvements:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Patch critical vulnerabilities (especially externally exposed services)",
                "Strengthen credential protection mechanisms",
                "Implement network segmentation to limit lateral movement",
                "Enhance monitoring for suspicious use of administrative tools",
                "Improve logging and SIEM integration for early detection",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Impact">
            <p>This investigation highlighted how a single unpatched vulnerability can escalate into a full-scale ransomware attack when combined with weak monitoring and credential controls.</p>
            <p className="mt-3">The analysis provided a clear attack timeline and actionable recommendations that could help:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Reduce attack surface",
                "Improve detection capabilities",
                "Prevent similar incidents in real-world environments",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Tools & Techniques">
            <ul className="list-none space-y-2">
              {[
                "Log analysis and timeline reconstruction",
                "MITRE ATT&CK-based reasoning",
                "Analysis of Windows artifacts and registry changes",
                "Understanding of LOLBins and attacker tradecraft",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <div className="mt-12 p-6 rounded-lg border border-primary/30 bg-primary/5">
            <h4 className="text-primary font-mono font-semibold mb-3">Key Takeaways</h4>
            <ul className="list-none space-y-2 text-foreground text-sm">
              {[
                "Attackers often combine multiple techniques rather than relying on a single exploit",
                "Legitimate tools can be abused to evade detection",
                "Early detection and patch management are critical to preventing escalation",
                "Effective incident response requires both technical analysis and contextual understanding of attacker behavior",
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

export default CaseStudyIncidentResponse;
