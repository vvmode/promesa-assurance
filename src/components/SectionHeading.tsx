interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light = false, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {subtitle && (
        <span className={`text-xs font-semibold tracking-[0.3em] uppercase ${light ? "text-gold-light" : "text-gold-dark"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-gold-line mx-auto mb-4" style={!centered ? { marginLeft: 0 } : {}} />
      {description && (
        <p className={`text-base leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
