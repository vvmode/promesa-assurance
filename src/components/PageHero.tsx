interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="bg-navy-gradient pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
        <div className="w-20 h-0.5 bg-gold-line mx-auto mb-4" />
        {subtitle && <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
