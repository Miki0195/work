import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const { ref, isVisible } = useScrollReveal();

  const alignClass = {
    center: 'text-center',
    left: 'text-left',
  };

  return (
    <div
      ref={ref}
      className={`mb-14 md:mb-18 ${alignClass[align]} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h2
        className={`font-serif text-display-sm md:text-display font-medium tracking-tight ${
          light ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <>
          <div className={`gold-divider mt-6 mb-6 ${align === 'left' ? 'mx-0' : ''}`} />
          <p
            className={`max-w-2xl text-base md:text-lg leading-relaxed ${
              align === 'center' ? 'mx-auto' : ''
            } ${light ? 'text-ivory/80' : 'text-charcoal-lighter'}`}
          >
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
}
