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
          <Section title="Overview">
            <p>I conducted an end-to-end incident response investigation on a simulated enterprise breach involving initial exploitation, privilege escalation, lateral movement, data exfiltration, and ransomware deployment.</p>
            <p>The objective was to identify the root cause, analyze attacker behavior across systems, and develop structured, actionable mitigation strategies to reduce organizational risk.</p>
          </Section>

          <Section title="Business Impact">
            <p>The attack resulted in compromise of multiple systems and unauthorized access to sensitive employee data. If this occurred in a real environment, it could lead to:</p>
            <ul className="list-none space-y-2 mt-3">
              {["Operational disruption due to ransomware", "Exposure of sensitive data", "Financial loss and regulatory consequences", "Reputational damage"].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-4 text-primary/80 font-mono text-xs border-l-2 border-primary/30 pl-4">
              This case highlights how a single unpatched vulnerability in a public-facing system can escalate into a full enterprise compromise.
            </p>
          </Section>

          <Section title="My Role">
            <p>As part of the incident response team, I focused on log analysis and timeline reconstruction:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Identifying indicators of compromise (IOCs)",
                "Correlating system and network activity across hosts",
                "Mapping attacker movement across the environment",
                "Contributing to root cause analysis and final reporting",
                "Supporting development of prioritized mitigation strategies",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Investigation Approach">
            <p>I followed a structured incident response methodology aligned with industry best practices.</p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">1. Log Analysis & Timeline Reconstruction</h4>
            <ul className="list-none space-y-2">
              {[
                "Analyzed logs from web, Linux, and domain systems",
                "Identified suspicious authentication events and command execution",
                "Correlated timestamps across systems to reconstruct attack progression",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3 text-primary/80 font-mono text-xs border-l-2 border-primary/30 pl-4">
              Key Finding: Initial access was gained through a malicious .aspx file deployed on a public-facing web server, followed by unauthorized command execution and privilege escalation.
            </p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">2. Attack Chain Analysis</h4>
            <p>I traced the full attack lifecycle across multiple systems:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Exploitation of CVE-2021-31166 (HTTP.sys Remote Code Execution)",
                "Privilege escalation to SYSTEM-level access",
                "Use of Living-off-the-Land Binaries (LOLBins) to evade detection",
                "Lateral movement using tools such as WinSCP and PuTTY",
                "Registry modification (NoLMHash) to weaken credential protections",
                "Data exfiltration via SFTP to an external IP",
                "Final-stage ransomware deployment targeting ESXi infrastructure",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3 italic">This demonstrated a coordinated, multi-stage attack leveraging both vulnerabilities and native system tools.</p>

            <h4 className="text-foreground font-mono font-semibold mt-6 mb-2">3. Detection & Control Gaps Identified</h4>
            <ul className="list-none space-y-2">
              {[
                "Lack of timely patching for known critical vulnerabilities",
                "Insufficient monitoring of registry changes and process activity",
                "Limited visibility into lateral movement across systems",
                "Absence of network segmentation allowing attacker spread",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Root Cause">
            <p>The primary root cause was the exploitation of an unpatched HTTP.sys vulnerability (CVE-2021-31166) on a public-facing IIS server.</p>
            <p className="mt-3">Contributing factors included:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Weak credential protection mechanisms",
                "Lack of network segmentation",
                "Insufficient centralized logging and monitoring",
                "Absence of application control mechanisms",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Recommendations & Mitigation Strategy">
            <p>Based on findings, I contributed to developing prioritized, risk-based recommendations aligned with the NIST Cybersecurity Framework (CSF):</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Immediate patching of HTTP.sys and other critical vulnerabilities",
                "Implementation of network segmentation to limit lateral movement",
                "Deployment of centralized logging and SIEM for improved visibility",
                "Credential hardening (disable LM hashes, enforce NTLMv2/Kerberos)",
                "Application allowlisting (AppLocker/WDAC)",
                "Monitoring for registry changes and suspicious process execution",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Outcome & Key Learnings">
            <p>This investigation strengthened my ability to:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Analyze complex, multi-stage cyberattacks",
                "Correlate logs and reconstruct attack timelines",
                "Identify root causes and contributing factors",
                "Translate technical findings into actionable risk mitigation strategies",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-4">Most importantly, I learned that effective incident response is not just about identifying what happened — it's about connecting technical evidence to business risk and implementing controls that prevent recurrence.</p>
          </Section>

          <div className="mt-12 p-6 rounded-lg border border-primary/30 bg-primary/5">
            <h4 className="text-primary font-mono font-semibold mb-2">Key Takeaway</h4>
            <p className="text-foreground">A single unpatched vulnerability can lead to full enterprise compromise if not supported by layered defenses. Effective security requires proactive vulnerability management, strong monitoring, and defense-in-depth controls to reduce both likelihood and impact of attacks.</p>
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
