import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyIncidentResponse from "./pages/CaseStudyIncidentResponse";
import CaseStudyVulnerabilityManagement from "./pages/CaseStudyVulnerabilityManagement";
import CaseStudyPhishingLab from "./pages/CaseStudyPhishingLab";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/malihafatimaportfolio">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/incident-response" element={<CaseStudyIncidentResponse />} />
          <Route path="/case-study/vulnerability-management" element={<CaseStudyVulnerabilityManagement />} />
          <Route path="/case-study/phishing-lab" element={<CaseStudyPhishingLab />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
