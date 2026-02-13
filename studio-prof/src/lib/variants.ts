export type VariantType = 'a' | 'b';

export interface VariantConfig {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaSubtext: string;
  heroLayout: 'centered' | 'split';
}

export const variantConfigs: Record<VariantType, VariantConfig> = {
  a: {
    headline: 'Professzionális Üzleti Megoldások a Sikeres Vállalkozásoknak',
    subheadline: 'Digitális eszközök és stratégiák, amelyek valóban működnek. Több mint 500+ elégedett ügyfél országszerte.',
    ctaText: 'Kezdje el ingyen',
    ctaSubtext: 'Nincs hitelkártya szükség • 14 napos próbaidőszak',
    heroLayout: 'centered',
  },
  b: {
    headline: '3x Gyorsabb Növekedés 90 Nap Alatt',
    subheadline: 'Csatlakozzon a 500+ vállalkozáshoz, akik már megduplázták bevételüket a rendszerünkkel. Garantált eredmények vagy visszaadjuk a pénzét.',
    ctaText: 'Igen, nézze meg hogyan',
    ctaSubtext: '100% pénzvisszafizetési garancia • Azonnali hozzáférés',
    heroLayout: 'split',
  },
};

export function getVariant(searchParams: URLSearchParams | ReadonlyURLSearchParams | string): VariantType {
  const params = typeof searchParams === 'string' ? new URLSearchParams(searchParams) : searchParams;
  const variant = params.get('v');
  return variant === 'b' ? 'b' : 'a';
}
