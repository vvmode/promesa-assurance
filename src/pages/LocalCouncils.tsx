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

    </div>
  );
};

export default LocalCouncils;
