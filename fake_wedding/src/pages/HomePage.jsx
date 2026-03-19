import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import AudienceSection from '../components/sections/AudienceSection';
import VendorsSection from '../components/sections/VendorsSection';
import EventsSection from '../components/sections/EventsSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <HowItWorksSection />
      <AudienceSection />
      <VendorsSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
