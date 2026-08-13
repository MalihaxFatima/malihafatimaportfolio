import { ArrowLeft, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyAnomalyDetection = () => {
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
          <Cpu className="w-8 h-8 text-primary" />
          <span className="text-primary/40 font-mono text-4xl font-bold">01</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-2">
          AI-Assisted Anomaly Detection System for Industrial Control Systems
        </h1>
        <p className="text-primary font-mono text-sm mb-6">GRFICSv3 + Ollama — Independent Security Research Project</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {["ICS/OT Security", "Offensive Security", "Detection Engineering", "AI Integration"].map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-12 text-muted-foreground leading-relaxed text-sm">
          <Section title="Summary">
            <p>Built an end-to-end security research lab simulating an industrial chemical plant, then designed and executed real attacks against it, engineered a detection system to catch them, and integrated a local AI model to explain what the detector found — demonstrating the full lifecycle from offensive research to defensive tooling to AI-assisted analysis.</p>
            <p>This project demonstrates my ability to operate across the full ICS/OT security lifecycle: building realistic infrastructure, thinking like an attacker, engineering evidence-based detection logic, and applying AI responsibly in a security context where accuracy is non-negotiable.</p>
          </Section>

          <Section title="Context">
            <p>Industrial control systems increasingly connect operational technology (OT) to broader networks, exposing physical processes — plant equipment, valves, sensors — to the same categories of attack traditional IT systems face, but with real-world physical consequences.</p>
            <p className="mt-3">The objective was to:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Build a realistic, functioning ICS/OT lab environment",
                "Understand the target from an attacker's perspective through real attack execution",
                "Engineer detection logic grounded in actual attack evidence rather than assumptions",
                "Apply AI to make detection output usable, without sacrificing factual accuracy",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-4">The environment simulated a chemical plant using GRFICSv3 (Fortiphyd Logic's open-source ICS/OT security lab) — a 7-container Docker environment including a PLC (OpenPLC), HMI (ScadaLTS), physics-based process simulation, network router/firewall, and attacker tooling (Kali Linux, MITRE Caldera).</p>
          </Section>

          <Section title="Infrastructure & Environment">
            <p>Getting the lab running was its own engineering problem before any security work could begin.</p>
            <p className="mt-3">I initially attempted to run GRFICSv3 via Docker Desktop on macOS, but discovered a macvlan networking incompatibility with Docker Desktop's virtualization layer that prevented the multi-container industrial network from functioning correctly. I resolved this by provisioning and administering a native Linux VM (Ubuntu Server, UTM/QEMU on Apple Silicon) to run Docker natively, which fully resolved the networking constraint.</p>
            <p className="mt-3">I independently diagnosed and resolved several further infrastructure issues along the way, including disk and partition resizing across VM and LVM layers, network interface misconfiguration, and container race conditions during startup.</p>
          </Section>

          <Section title="Protocol Analysis">
            <p>Before I could detect abnormal behavior, I needed to deeply understand what normal behavior looked like.</p>
            <p className="mt-3">I performed deep packet analysis using Wireshark on 40,000+ captured Modbus/TCP packets, reverse-engineering the system's data encoding scheme and control-loop behavior through controlled, isolated-variable experiments — changing one variable at a time and confirming its effect at the packet level rather than assuming behavior from documentation alone.</p>
            <p className="mt-3">This analysis surfaced two real architectural findings:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Sequential, single-threaded PLC polling creates a single point of failure — one device's connection issue can stall the entire control loop",
                "Modbus has no native authentication or encryption, a protocol-level security weakness I validated directly through live traffic inspection",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Offensive Security / Attack Simulation">
            <p>To build detection logic grounded in real evidence rather than guesswork, I first had to think and act like an attacker.</p>
            <p className="mt-3">From an isolated attacker host, I designed and executed:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Reconnaissance attacks using Nmap Modbus discovery scripts",
                "Unauthorized write attacks using custom Python (pymodbus) scripts",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3">I demonstrated and verified a complete attack chain — from an unauthenticated Modbus write, to persistent PLC memory modification, to real-time physical process impact (a simulated valve actuation). I also developed and confirmed a "dormant trigger" technique, where a malicious write sat inactive until it was later activated by an unrelated, legitimate operator action — a realistic and harder-to-detect attack pattern.</p>
          </Section>

          <Section title="Detection Engineering">
            <p>With real attack evidence in hand, I built a Python-based Modbus/TCP anomaly detector (using Scapy and manual binary protocol parsing via struct) implementing detection rules directly derived from what I'd observed: function-code allowlisting, device IP allowlisting, and connection-behavior heuristics.</p>
            <p className="mt-3">I designed a severity-scoring system with point values directly justified by demonstrated attack consequence — write-type anomalies, for example, were weighted higher only after I'd proven their physical impact, not by assumption. During testing, I identified a blind spot in my initial scoring logic and corrected it through systematic testing rather than shipping a detector that looked complete but hadn't actually been stress-tested against edge cases.</p>
            <p className="mt-3">The final detector achieved a 100% detection rate across real attack captures, with 0 false positives across 28,000+ legitimate packets in the baseline.</p>
          </Section>

          <Section title="AI Integration">
            <p>Detection output alone isn't useful if a human still has to manually interpret raw alerts. I integrated a locally-hosted LLM (Ollama, running Llama 3.2) to generate plain-English alert explanations and structured incident reports from the detector's output — chosen specifically for data-privacy suitability in an OT security context, since no data leaves the local environment.</p>
            <p className="mt-3">Early testing surfaced a real problem: the LLM would occasionally hallucinate — reversing factual roles in an incident or inventing network topology details that weren't real. Rather than trying to prompt my way around this, I diagnosed the failure mode and redesigned the architecture: all factual claims are generated deterministically in code from the actual detection data, and the LLM's role is limited strictly to interpreting and explaining those pre-verified facts. This eliminated the hallucination failure mode structurally, instead of just reducing its likelihood.</p>
          </Section>

          <Section title="Key Findings">
            <ul className="list-none space-y-2">
              {[
                "Sequential PLC polling architecture creates a single point of failure in control-loop reliability",
                "Modbus's lack of native authentication/encryption is a fundamental, exploitable protocol weakness",
                "A complete attack chain — from unauthenticated write to physical process impact — is achievable with minimal tooling",
                "'Dormant trigger' attacks, where malicious writes activate later via unrelated legitimate actions, are a realistic and evasive technique",
                "Detection logic built from actual attack evidence outperforms detection logic built from assumptions",
                "LLM hallucination in a security context is a structural risk that requires architectural mitigation, not just prompting",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Impact">
            <p>This project demonstrates the complete ICS/OT security lifecycle: building realistic infrastructure, executing real attacks to generate genuine evidence, engineering detection logic grounded in that evidence, and applying AI to make results actionable — all while treating factual accuracy in a security context as non-negotiable rather than a nice-to-have.</p>
            <p className="mt-3">The resulting detector's measured performance (100% detection rate, 0 false positives across 28,000+ packets) demonstrates that evidence-derived detection logic can be both highly accurate and rigorously validated, not just theoretically sound.</p>
          </Section>

          <Section title="Tools & Techniques">
            <ul className="list-none space-y-2">
              {[
                "GRFICSv3 (PLC/HMI/physics simulation), Docker, Linux VM administration (UTM/QEMU)",
                "Wireshark (deep packet analysis), Modbus/TCP protocol reverse engineering",
                "Nmap (reconnaissance), Python/pymodbus (attack scripting), MITRE Caldera, Kali Linux",
                "Python, Scapy, struct (binary protocol parsing) — custom anomaly detection engine",
                "Ollama (Llama 3.2) — locally-hosted LLM integration, prompt engineering",
                "Purdue Model for ICS network architecture",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <div className="mt-12 p-6 rounded-lg border border-primary/30 bg-primary/5">
            <h4 className="text-primary font-mono font-semibold mb-3">Key Takeaways</h4>
            <ul className="list-none space-y-2 text-foreground text-sm">
              {[
                "Real attack execution produces far better detection logic than theoretical threat modeling alone",
                "Infrastructure problems (networking, virtualization) are often the first real obstacle in ICS/OT security work, and solving them is itself a security engineering skill",
                "A detector's value comes from what it's validated against, not just what it's designed to catch",
                "AI can meaningfully assist security workflows, but only when its failure modes are diagnosed and architecturally addressed, not assumed away",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-6 rounded-lg border border-border bg-card/40">
            <h4 className="text-foreground font-mono font-semibold mb-2">GitHub Repository</h4>
            <a
              href="https://github.com/MalihaxFatima/ics-modbus-anomaly-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-mono text-sm hover:underline break-all"
            >
              github.com/MalihaxFatima/ics-modbus-anomaly-detection →
            </a>
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

export default CaseStudyAnomalyDetection;
