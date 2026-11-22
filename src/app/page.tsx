import {
  HeroSection,
  AboutSection,
  ServicesSection,
  WhyChooseSection,
  ProcessSection,
  CtaSection,
  ContactSection,
} from "@/features/home";
import { getHomePageContent } from "@/lib/vinyas-cms";

export default async function HomePage() {
  const { hero, about, cta } = await getHomePageContent();

  return (
    <>
      <HeroSection content={hero} />
      <AboutSection content={about} />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <CtaSection content={cta} />
      <ContactSection />
    </>
  );
}
