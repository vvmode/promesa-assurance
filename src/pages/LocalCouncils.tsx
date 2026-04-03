import { Link } from "react-router-dom";
import { DollarSign, Package, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const offerings = [
  {
    icon: DollarSign,
    title: "Financial Reviews",
    desc: "We conduct financial reviews to assess the accuracy and reliability of financial information and records, providing councils with insights that enhance financial integrity, accountability, and transparency.",
  },
  {
    icon: Package,
    title: "Asset Management Reviews",
    desc: "We provide comprehensive asset management assessments to evaluate the utilization, safeguarding, and control of council assets, contributing to improved operational performance and long-term sustainability.",
  },
];

const LocalCouncils = () => {
  return (
    <div>
      <PageHero
        title="Services for Local Councils"
        subtitle="A Promise of Integrity and Assurance"
      />

      {/* What We Offer */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading subtitle="What We Offer" title="Our Services for Councils" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offerings.map((item) => (
              <div key={item.title} className="bg-card border rounded-lg p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Partner With Promesa</h2>
          <div className="w-16 h-0.5 bg-gold-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Strengthen your council's governance, accountability, and compliance with our expert services.
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

export default LocalCouncils;
