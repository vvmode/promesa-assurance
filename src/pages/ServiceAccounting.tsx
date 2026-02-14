import { CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Bookkeeping & Day-to-Day Accounting",
    items: [
      "Accurate recording of income, expenses, and business transactions",
      "Maintenance of general ledgers and supporting schedules",
      "Bank, cash, and supplier reconciliations",
      "Ongoing maintenance of accounting records",
    ],
  },
  {
    title: "Bank & Business Compliance Support",
    items: [
      "Assistance with financial documents required by banks",
      "Support with updating business information for banking purposes",
      "Coordination of accounting and tax records for loan applications",
    ],
  },
  {
    title: "Financial Statements & Reporting",
    items: [
      "Preparation of financial statements for tax filing purposes",
      "Financial statements for bank loan applications and renewals",
      "Management-ready reports to support business decisions",
    ],
  },
];

const ServiceAccounting = () => {
  return (
    <div>
      <PageHero title="Financial Accounting & Reporting" subtitle="Streamline your processes, boost accuracy, and optimize operations" />
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            A reliable accounting system is key to business success. We offer Accounting System Planning, Implementation, and Consulting to streamline your processes, boost accuracy, and optimize your financial operations.
          </p>
          <div className="flex flex-col gap-10">
            {categories.map((cat) => (
              <div key={cat.title}>
                <SectionHeading title={cat.title} centered={false} />
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-gold mt-1 shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
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

export default ServiceAccounting;
