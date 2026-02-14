import { Link } from "react-router-dom";
import { Shield, FileText, Calculator, CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Calculator,
    title: "Financial Accounting & Reporting Services",
    desc: "We offer Accounting System Planning, Implementation, and Consulting to streamline your processes, boost accuracy, and optimize your financial operations.",
    path: "/services/accounting",
  },
  {
    icon: FileText,
    title: "Tax Filing & Compliance Support",
    desc: "Comprehensive services to ensure compliance, maximize available incentives, and enhance your organization's tax efficiency.",
    path: "/services/tax",
  },
  {
    icon: Shield,
    title: "Audit & Assurance",
    desc: "A comprehensive range of services including audit strategy development, control framework evaluation, specialized resources, and fully outsourced audit functions.",
    path: "/services/audit",
  },
];

const reasons = [
  "Strong understanding of Maldivian accounting and tax compliance requirements",
  "Integrated accounting, tax filing, and regulatory support",
  "Clear communication and dependable service",
  "High ethical standards and strict confidentiality",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Promesa office" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-navy-gradient opacity-80" />
        </div>
        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Promesa Audit & Assurance LLP
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
              A Promise of <span className="text-gradient-gold">Integrity</span> and Assurance
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Your Financial Partner in the Maldives—Anchoring Audit, Tax, and Accounting in a Promise of Integrity.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/40 text-gold font-semibold rounded-md hover:bg-gold/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading subtitle="What We Do" title="Our Services" description="We deliver expert accounting, tax, and financial solutions tailored to your needs—streamlining operations and driving your business success." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.path}
                className="group bg-card border rounded-lg p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <s.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-navy-gradient">
        <div className="container mx-auto">
          <SectionHeading subtitle="Why Choose Us" title="Why Work With Promesa" light />
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-4 bg-navy-light/20 rounded-lg p-5 border border-navy-light/20">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <div className="w-16 h-0.5 bg-gold-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let us help you navigate your financial journey with confidence and integrity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
