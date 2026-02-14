import PageHero from "@/components/PageHero";
import teamPhoto1 from "@/assets/team-placeholder-1.jpg";
import teamPhoto2 from "@/assets/team-placeholder-2.jpg";

const team = [
  {
    name: "Partner Name",
    role: "Managing Partner",
    bio: "A qualified professional with extensive experience in audit, accounting, and financial advisory services in the Maldives. Leads the firm's strategic direction and client relationships.",
    image: teamPhoto1,
  },
  {
    name: "Partner Name",
    role: "Partner – Tax & Compliance",
    bio: "Specializes in Maldivian tax compliance and MIRA regulations. Brings deep expertise in tax planning, filing, and advisory services for businesses across diverse sectors.",
    image: teamPhoto2,
  },
];

const Team = () => {
  return (
    <div>
      <PageHero
        title="Our Team"
        subtitle="Our team of financial experts and auditors provides comprehensive audit, accounting and tax services anchored in our promise of excellence."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            We take pride in delivering highly personalized support, ensuring our solutions are perfectly aligned with the unique operational needs of your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-gold font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
