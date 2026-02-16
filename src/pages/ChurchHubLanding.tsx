import { useEffect, useState } from "react";
import {
  HeroSection,
  PricingSection,
  FeaturesSection,
  InstallationSection,
  SecuritySection,
  TestimonialsSection,
  ContactSection,
  FAQSection,
  Footer,
  AnimatedSection,
  Navbar,
  ClientsSection,
} from "../components";
import { detectOS, type OS } from "../types/DetectOS";

type SectionConfig = {
  Component: React.FC<any>;
  props?: any;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
};

export default function ChurchHubLanding() {
  const [os, setOs] = useState<OS>("unknown");

  useEffect(() => {
    const platform = detectOS();
    setOs(platform);
  }, []);

  const sections: SectionConfig[] = [
    { Component: HeroSection, props: { os } },
    { Component: ClientsSection, delay: 0.05, direction: "up" },
    { Component: PricingSection, delay: 0.1, direction: "left" },
    { Component: FeaturesSection, delay: 0.15, direction: "right" },
    { Component: InstallationSection, delay: 0.2, direction: "up" },
    { Component: SecuritySection, delay: 0.25, direction: "up" },
    { Component: TestimonialsSection, delay: 0.3, direction: "down" },
    { Component: ContactSection, delay: 0.35, direction: "up" },
    { Component: FAQSection, delay: 0.4, direction: "left" },
    { Component: Footer, delay: 0.45, direction: "up" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />

      {sections.map(({ Component, props, delay, direction, distance }, i) => (
        <AnimatedSection
          key={i}
          delay={delay ?? i * 0.05}
          direction={direction ?? "up"}
          distance={distance ?? 40}
        >
          <Component {...props} />
        </AnimatedSection>
      ))}
    </div>
  );
}
