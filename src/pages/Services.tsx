import { Link } from "react-router-dom";
import { Shield, Calculator, FileText, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const services = [
  {
    icon: Shield,
    title: "Audit & Assurance",
    desc: "From developing strategic internal audit plans to managing the complete outsourcing of the internal audit function.",
    path: "/services/audit",
  },
  {
    icon: Calculator,
    title: "Financial Accounting & Reporting Services",
    desc: "Accounting System Planning, Implementation, and Consulting to streamline your processes and optimize financial operations.",
    path: "/services/accounting",
  },
  {
    icon: FileText,
    title: "Tax Filing & Compliance Support",
    desc: "Comprehensive services to ensure compliance, maximize available incentives, and enhance your organization's tax efficiency.",
    path: "/services/tax",
  },
];

const Services = () => {
  return (
    <div>
      <PageHero title="Our Services" subtitle="We deliver expert accounting, tax, and financial solutions tailored to your needs—streamlining operations and driving your business success." />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.path}
                className="group flex flex-col md:flex-row items-start gap-6 bg-card border rounded-lg p-8 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <s.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
