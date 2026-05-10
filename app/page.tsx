import { PageWrapper } from "./components/layout/page-wrapper";
import { HeroSection } from "./sections/hero";
import { FeaturesSection } from "./sections/features";
import { ShowcaseSection } from "./sections/showcase";
import { TestimonialsSection } from "./sections/testimonials";
import { CTASection } from "./sections/cta";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <CTASection />
    </PageWrapper>
  );
}
