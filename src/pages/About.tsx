import { Target, Eye, Heart, Lightbulb, MapPin, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Heart, title: "Integrity", desc: "We uphold highest ethical standards and maintain strict confidentiality in every engagement." },
  { icon: Lightbulb, title: "Clarity", desc: "We communicate clearly and provide guidance that is practical, responsive, and easy to understand." },
  { icon: MapPin, title: "Local Expertise", desc: "We take pride in our deep understanding of the Maldivian regulatory environment and MIRA requirements." },
  { icon: Users, title: "Client Success", desc: "We treat your business goals as our own—your success is our priority." },
];

const About = () => {
  return (
    <div>
      <PageHero title="About Us" subtitle="Built on a promise of integrity and assurance" />

      {/* About intro */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Promesa Audit & Assurance LLP was founded on the principle of <strong className="text-foreground">Promesa</strong>—a promise of integrity and assurance. We are a team of qualified professionals providing expert accounting, tax, audit and financial consulting services to businesses and individuals across the Maldives. We deliver personalized solutions to help businesses and individuals streamline operations, optimize performance, and achieve their financial goals.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-8 border">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the Maldives' premier partner for Audit, Tax, and Financial Reporting, where every service is anchored in our lifelong 'Promesa' of absolute integrity and trust.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We empower businesses with rigorous Audit, precise Financial Reporting, and expert Tax Compliance, delivering ethical assurance and actionable insights for sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading subtitle="What Drives Us" title="Core Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-navy-gradient">
        <div className="container mx-auto text-center max-w-3xl">
          <SectionHeading subtitle="Our Approach" title="How We Work" light />
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            We take a practical, hands-on approach—understanding how your business operates and providing support that is clear, responsive, and aligned with real business needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
