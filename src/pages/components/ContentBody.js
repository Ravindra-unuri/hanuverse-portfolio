import HeroSection from "./herosection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServicesSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";

export default function ContentBody() {
    return (
        <div className="mt-12">
            <HeroSection />
            <ServiceSection />
            <PricingSection />
            <ContactSection />
            <AboutSection />
        </div>
    );
}