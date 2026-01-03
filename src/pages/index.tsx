import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { AboutSection } from "@/components/sections/about-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Hero />
      </section>

      <section id="kuhusu">
        <AboutSection />
      </section>

      <section id="matunzio">
        <GallerySection />
      </section>

      <section id="vifurushi">
        <PricingSection />
      </section>

      <section id="maswali" className="py-16">
        <FAQSection />
      </section>

      <section id="mawasiliano">
        <ContactSection />
      </section>

    </DefaultLayout>
  );
}