type PageHeroProps = {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[var(--cream)] from-60% to-[rgba(212,98,26,0.06)] px-8 pb-16 pt-[10rem] text-center md:pb-20">
      <span className="mb-5 inline-block rounded-full bg-[rgba(212,98,26,0.1)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--orange)]">
        {badge}
      </span>
      <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black text-[var(--brown)] mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto max-w-[550px] text-[var(--text-light)] text-[1.1rem] leading-relaxed">
          {subtitle}
        </p>
      )}
    </section>
  );
}
