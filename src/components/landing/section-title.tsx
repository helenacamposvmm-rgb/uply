type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/70 via-primary to-primary/70">{title}</span>
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
