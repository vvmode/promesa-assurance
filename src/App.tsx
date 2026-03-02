import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";

import Services from "./pages/Services";
import ServiceAudit from "./pages/ServiceAudit";
import ServiceAccounting from "./pages/ServiceAccounting";
import ServiceTax from "./pages/ServiceTax";
import Contact from "./pages/Contact";
import LocalCouncils from "./pages/LocalCouncils";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/services/audit" element={<ServiceAudit />} />
            <Route path="/services/accounting" element={<ServiceAccounting />} />
            <Route path="/services/tax" element={<ServiceTax />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/local-councils" element={<LocalCouncils />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
