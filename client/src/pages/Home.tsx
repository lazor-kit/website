import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import DemoSection from "@/components/sections/DemoSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CTASection from "@/components/sections/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <DemoSection />
      <EcosystemSection />
      <ComparisonSection />
      <CTASection />
    </>
  );
};

export default Home;
