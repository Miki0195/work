import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import AudienceSection from '../components/sections/AudienceSection';
import EventsSection from '../components/sections/EventsSection';
import VendorsSection from '../components/sections/VendorsSection';
import GallerySection from '../components/sections/GallerySection';
import CTASection from '../components/sections/CTASection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <AudienceSection />
      <EventsSection />
      <VendorsSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
