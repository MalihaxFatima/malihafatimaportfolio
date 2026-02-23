import { Shield } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <Shield className="w-8 h-8 text-primary mx-auto mb-6" />
        <h2 className="text-2xl font-mono font-bold text-foreground mb-3">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
          Interested in discussing cybersecurity, collaboration opportunities, or the USTA Information Security internship.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:maliha@example.com"
            className="px-6 py-3 rounded-lg border border-primary bg-primary/10 text-primary font-mono text-sm hover:bg-primary/20 hover:border-glow transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-12 font-mono">
          © 2026 Maliha Fatima · Built with purpose
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
