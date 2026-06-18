interface PageHeaderProps {
  tag: string;
  title: string;
  emphasis: string;
  subtitle?: string;
}

export const PageHeader = ({ tag, title, emphasis, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-[#F8F5EF] pt-36 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs tracking-[0.22em] uppercase text-[#8B6914] mb-4 block">
          ✦ {tag}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1C2B4A] leading-tight">
          {title}{' '}
          <em className="text-[#C9A84C] italic">{emphasis}</em>
        </h1>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
        {subtitle && (
          <p className="text-gray-500 text-base mt-5 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
