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
          <span className="text-primary/40 font-mono text-4xl font-bold">04</span>
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
            <p>Built an end-to-end security research lab simulating an industrial chemical plant, then designed and executed real attacks against it, and built a working anomaly detection system with AI-assisted incident reporting to catch them — demonstrating both offensive security research and defensive tooling in a single project.</p>
            <p>This project demonstrates my ability to operate across the full security lifecycle: standing up a realistic ICS/OT environment, thinking like an attacker, building detection logic grounded in real evidence, and applying AI responsibly in a high-stakes, data-sensitive context.</p>
          </Section>

          <Section title="Context">
            <p>Industrial control systems (ICS) run the physical world — power grids, manufacturing lines, chemical plants — but they're frequently built on protocols with no authentication or encryption, like Modbus/TCP. I wanted hands-on experience with the full ICS/OT security lifecycle: not just reading about these weaknesses, but proving them, then building something that catches them.</p>
            <p className="mt-3">The objective was to:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Stand up a realistic, physics-based ICS/OT lab environment",
                "Understand normal system behavior at the protocol level",
                "Design and execute real attacks against the simulated plant",
                "Build detection logic grounded in demonstrated attack impact, not assumption",
                "Apply AI to make detection output usable — without compromising the data-sensitivity requirements of an OT environment",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Infrastructure & Environment">
            <p>I deployed GRFICSv3 (Fortiphyd Logic's open-source ICS/OT security lab) — a 7-container Docker environment simulating a chemical plant's PLC (OpenPLC), HMI (ScadaLTS), physics-based process simulation, network router/firewall, and attacker tooling (Kali Linux, MITRE Caldera).</p>
            <p className="mt-3">Early on, I hit a hard infrastructure blocker: Docker Desktop on Mac doesn't support the macvlan networking GRFICSv3 requires. Rather than work around it superficially, I diagnosed the root cause and provisioned a native Linux VM (Ubuntu Server, UTM/QEMU on Apple Silicon) to run Docker natively. Along the way, I independently resolved several additional infrastructure issues — disk/partition resizing across VM and LVM layers, network interface misconfiguration, and container race conditions.</p>
          </Section>

          <Section title="Protocol Analysis">
            <p>Before attacking or defending anything, I needed to understand what "normal" looked like. I performed deep packet analysis (Wireshark) on 40,000+ captured Modbus/TCP packets, reverse-engineering the system's data encoding scheme and control-loop behavior through controlled, isolated-variable experiments — changing one thing at a time and confirming the effect at the packet level, not by assumption.</p>
            <p className="mt-3">This surfaced a real architectural finding: the PLC's sequential, single-threaded polling design creates a single point of failure, where one device's connection issue can stall the entire control loop. I also confirmed, through live traffic inspection, that Modbus has no native authentication or encryption — a protocol-level weakness that makes everything downstream possible.</p>
          </Section>

          <Section title="Offensive Security / Attack Simulation">
            <p>Understanding the protocol meant I could attack it. From an isolated attacker host, I designed and executed:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Reconnaissance — Nmap Modbus discovery scripts to map the environment",
                "Unauthorized write attacks — custom Python (pymodbus) scripts to write directly to device registers without authentication",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
            <p className="mt-3">I demonstrated and verified a complete attack chain end-to-end: an unauthenticated Modbus write → persistent PLC memory modification → real-time physical process impact (a simulated valve actuation I could watch happen live on the HMI). I also built a "dormant trigger" technique, where a malicious write sat inactive until a later, unrelated legitimate operator action triggered it — showing how an attack can be staged well before its effect is visible.</p>
          </Section>

          <Section title="Detection Engineering">
            <p>With real attack data in hand, I built a Python-based Modbus/TCP anomaly detector (Scapy, manual binary protocol parsing via struct) using detection rules derived directly from evidence: function-code allowlisting, device IP allowlisting, and connection-behavior heuristics.</p>
            <p className="mt-3">I designed a severity-scoring system where point values are justified by demonstrated attack consequence — write-type anomalies score higher specifically because I'd already proven they cause physical impact, not because they seemed intuitively worse. During testing, I identified and fixed a blind spot in my initial scoring logic through systematic testing against edge cases.</p>
            <p className="mt-3">I validated the detector against a clean baseline (0 false positives across 28,000+ legitimate packets) and against multiple real attack captures (100% detection rate).</p>
          </Section>

          <Section title="AI Integration">
            <p>Raw detection output isn't useful to a human under pressure. I integrated a locally-hosted LLM (Ollama, Llama 3.2) — chosen specifically because it keeps all data on-device, which matters in an OT security context where sending operational data to an external API isn't acceptable — to generate plain-English alert explanations and structured incident reports from detection output.</p>
            <p className="mt-3">The LLM initially hallucinated: it invented network topology details and reversed attacker/victim roles in its explanations. Rather than trying to prompt my way around this, I diagnosed it as a structural problem and fixed it structurally — a hybrid architecture where all facts (IPs, function codes, timestamps, severity scores) are generated deterministically in code, and the LLM's only job is interpreting and explaining those pre-verified facts in plain English. This eliminated the hallucination failure mode rather than just reducing its likelihood.</p>
          </Section>

          <Section title="Key Findings">
            <ul className="list-none space-y-2">
              {[
                "Modbus/TCP's lack of native authentication makes unauthorized writes trivially easy once network access is achieved",
                "Sequential PLC polling architecture creates a single point of failure for the entire control loop",
                "Attacks can be staged with delayed, 'dormant' triggers that activate via unrelated legitimate actions — a detection blind spot most simple monitoring would miss",
                "Detection rules grounded in demonstrated attack consequence (not assumption) produce a more defensible, explainable severity model",
                "LLM hallucination in a security context is a structural risk, not just a prompting problem — and it's solvable by keeping facts deterministic and letting AI handle interpretation only",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Impact">
            <p>This project shows the full security lifecycle in one place: building a realistic environment, thinking like an attacker, and building defenses grounded in what I actually proved was possible — then applying AI responsibly to make that defense usable, with data-privacy constraints treated as a design requirement rather than an afterthought.</p>
            <p className="mt-3">The detector's validated performance (100% detection rate, 0 false positives across 28,000+ packets) and the resolved hallucination architecture demonstrate that AI-assisted security tooling can be both effective and trustworthy when built carefully.</p>
          </Section>

          <Section title="Tools & Techniques">
            <ul className="list-none space-y-2">
              {[
                "GRFICSv3 (Docker, 7-container ICS/OT simulation)",
                "Linux VM administration (Ubuntu Server, UTM/QEMU)",
                "Wireshark (protocol analysis, packet-level reverse engineering)",
                "Python (Scapy, pymodbus, struct — binary protocol parsing)",
                "Nmap (Modbus service discovery)",
                "Ollama (locally-hosted LLM, Llama 3.2)",
                "Purdue Model, Modbus/TCP protocol internals",
                "Systematic debugging and root-cause analysis",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>{i}</li>
              ))}
            </ul>
          </Section>

          <div className="mt-12 p-6 rounded-lg border border-primary/30 bg-primary/5">
            <h4 className="text-primary font-mono font-semibold mb-3">Key Takeaways</h4>
            <ul className="list-none space-y-2 text-foreground text-sm">
              {[
                "Understanding 'normal' at the protocol level has to come before you can detect 'abnormal' — baseline work isn't optional",
                "Real attacker tradecraft (staged/dormant triggers) reveals detection gaps that theoretical threat modeling alone won't surface",
                "Severity scoring is more defensible when every weight traces back to demonstrated, not assumed, consequence",
                "AI integration in sensitive domains requires treating hallucination as an architecture problem, not a prompt-engineering problem",
                "Infrastructure debugging (macvlan, VM provisioning, disk/partition issues) is itself a real, transferable security engineering skill — not just a prerequisite to 'the real work'",
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
