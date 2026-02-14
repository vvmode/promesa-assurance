import { Link } from "react-router-dom";
import { Shield, DollarSign, ShoppingCart, Package, Target, Users, Scale, Lightbulb, ShieldCheck, TrendingDown, Landmark, PiggyBank, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const offerings = [
  {
    icon: Target,
    title: "Risk-Based Audits",
    desc: "Our risk-based audits identify potential vulnerabilities within council operations, ensuring that resources are effectively allocated and risks are managed in alignment with organizational objectives.",
  },
  {
    icon: DollarSign,
    title: "Financial Reviews",
    desc: "We conduct financial reviews to assess the accuracy and reliability of financial statements, providing councils with insights to enhance financial integrity and accountability in their operations.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Audits",
    desc: "Our procurement audits evaluate the efficiency and effectiveness of purchasing processes, ensuring compliance with regulations and promoting transparency in the acquisition of goods and services.",
  },
  {
    icon: Package,
    title: "Asset Management",
    desc: "We offer comprehensive asset management assessments to optimize the utilization and safeguarding of council assets, contributing to improved operational performance and long-term sustainability.",
  },
];

const whyPromesa = [
  {
    icon: Users,
    title: "Local Experience",
    desc: "Promesa brings extensive experience working with Maldivian councils, ensuring our services are tailored to local needs and governance structures, enhancing accountability and transparency across all operations.",
  },
  {
    icon: Landmark,
    title: "Public Sector Expertise",
    desc: "Our team comprises seasoned professionals with specialized knowledge in public sector auditing, ensuring compliance with regulations while promoting best practices in financial management and oversight for councils.",
  },
  {
    icon: Scale,
    title: "Independence",
    desc: "We pride ourselves on our independence, ensuring that our audits are objective and impartial, providing councils with unbiased insights that foster trust and facilitate informed decision-making.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    desc: "Promesa focuses on delivering practical solutions that address the unique challenges faced by councils, equipping them with tools and strategies to enhance operations and achieve their governance objectives.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Improved Controls",
    desc: "Our internal audit services strengthen existing controls, ensuring that local councils operate effectively and efficiently, leading to a more transparent governance structure that safeguards public resources.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Risks",
    desc: "By identifying and mitigating potential risks early, we help councils manage their operations more effectively, ultimately leading to a decrease in unforeseen challenges and financial losses.",
  },
  {
    icon: Shield,
    title: "Better Governance",
    desc: "Implementing best practices in internal audits promotes accountability and transparency, fostering trust within the community and ensuring that councils meet their governance obligations diligently.",
  },
  {
    icon: PiggyBank,
    title: "Efficient Use of Funds",
    desc: "Our audits provide insights that enable councils to allocate resources wisely, ensuring that taxpayer money is spent effectively on essential services and community development initiatives.",
  },
];

const LocalCouncils = () => {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Internal Audit Services for Local Councils"
        subtitle="A Promise of Integrity and Assurance"
      />

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionHeading subtitle="Who We Are" title="Dedicated to Local Governance" />
          <p className="text-muted-foreground leading-relaxed">
            Promesa is a Maldivian audit firm dedicated to enhancing governance, accountability, and compliance for local councils, ensuring they meet the highest standards of service delivery.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading subtitle="What We Offer" title="Our Services for Councils" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Our Approach */}
      <section className="section-padding bg-navy-gradient">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionHeading subtitle="Our Approach" title="How We Work" light />
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Promesa employs a risk-focused, evidence-based, and practical audit approach, ensuring alignment with LGA expectations, which enhances the effectiveness of local council governance and accountability.
          </p>
        </div>
      </section>

      {/* Why Promesa */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading subtitle="Why Promesa" title="What Sets Us Apart" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPromesa.map((item) => (
              <div key={item.title} className="flex items-start gap-5 p-6 rounded-lg border hover:border-gold/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value to Councils */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading subtitle="Value to Councils" title="The Impact We Deliver" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <div key={item.title} className="bg-card border rounded-lg p-6 text-center hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
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
            Strengthen your council's governance, accountability, and compliance with our expert internal audit services.
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
