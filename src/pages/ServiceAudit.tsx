import { CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Internal Control Assessment",
    desc: "Design, effectiveness, and efficiency evaluation. Our team identifies control gaps, weaknesses, and potential risks, providing clear insights into the overall control environment.",
  },
  {
    title: "Risk Identification and Mitigation",
    desc: "We support you in identifying and prioritizing risks that could affect your business operations. Our specialists assist in developing effective risk mitigation strategies and in designing and implementing strong internal controls to minimize both the likelihood and impact of identified risks.",
  },
];

const ServiceAudit = () => {
  return (
    <div>
      <PageHero title="Audit & Assurance" subtitle="Strengthening governance, improving controls, and managing risk effectively" />
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Our Audit and Assurance services are designed to strengthen governance, improve controls, and manage risk effectively.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Our internal audit team delivers a full spectrum of services, from developing strategic internal audit plans and restructuring existing departments to providing specialized expertise or managing the complete outsourcing of the internal audit function.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            We provide high quality audit consultancy for businesses, local councils and other government institutions for improving governance and service delivery which are not limited to the following.
          </p>
          <SectionHeading subtitle="What We Offer" title="Our Audit Services" />
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-card border rounded-lg p-6">
                <CheckCircle className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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

export default ServiceAudit;
