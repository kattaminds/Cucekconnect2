
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <HeroSection />
      <FeatureSection />
    </PageTransition>
  );
};

export default Index;
