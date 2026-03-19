export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 ease-out';

  const variants = {
    primary:
      'bg-gold text-charcoal hover:bg-gold-dark active:bg-gold-dark border border-gold hover:border-gold-dark shadow-sm hover:shadow-md',
    secondary:
      'bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal hover:text-ivory',
    ghost:
      'bg-transparent text-charcoal hover:text-gold border border-transparent',
    ivory:
      'bg-ivory text-charcoal border border-ivory hover:bg-white hover:border-white shadow-sm',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs uppercase tracking-widest',
    md: 'px-7 py-3 text-sm uppercase tracking-widest',
    lg: 'px-9 py-4 text-sm uppercase tracking-widest',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
