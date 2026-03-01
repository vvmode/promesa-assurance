import { CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const items = [
  "Preparation and filing of tax returns",
  "Preparation of financial statements required for income tax returns",
  "Support with Personal and Business Income Tax compliance",
  "Review of records to reduce errors and compliance risks",
  "Assistance with obtaining Tax Clearance Reports from MIRA",
  "Preparation of responses to MIRA queries and information requests",
  "Support during MIRA reviews or follow-ups",
];

const ServiceTax = () => {
  return (
    <div>
      <PageHero title="Tax Filing & Compliance Support" subtitle="Expert tax practitioners ensuring compliance and efficiency" />
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Our expert tax practitioners provide comprehensive services to ensure compliance with Maldivian tax laws, maximize available incentives, and enhance your organization's tax efficiency.
          </p>
          <div className="bg-card border rounded-lg p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">What We Provide</h3>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors">
              Discuss Your Needs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTax;
