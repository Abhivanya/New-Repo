import React from "react";
import Hero from "./_components/Hero";
import StorySection from "./_components/StorySection";
import FeatureSection from "./_components/FeatureSection";
import PricingSection from "./_components/PricingSection";
import FAQSection from "./_components/FaqSection";
import Footer from "./_components/Footer";

export default function page() {
  return (
    <div>
      <Hero />
      <StorySection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <div className="h-screen"></div>
    </div>
  );
}
