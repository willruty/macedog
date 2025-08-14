import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Location from "@/components/home/Location";
import Hours from "@/components/home/Hours";
import Gallery from "@/components/home/Gallery";
import Footer from "@/components/home/Footer";
import WhatsAppFAB from "@/components/common/WhatsAppFAB";

import { SITE, CONTACT } from "@/config/site";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const Index = () => {
  useRevealOnScroll();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: SITE.name,
    description: SITE.description,
    address1: CONTACT.address1,
    address2: CONTACT.address2,
    telephone: CONTACT.phone,
    sameAs: [CONTACT.instagram],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/40 to-background">
      <main>
        <Hero />
        <Services />
        <About />
        <Location />
        <Hours />
        <Gallery />
      </main>

      <Footer />
      <WhatsAppFAB />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
};

export default Index;
