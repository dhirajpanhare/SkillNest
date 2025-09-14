import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/landing-hero";
import FeaturesSection from "@/components/ui/features-section";
import AuthSection from "@/components/ui/auth-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AuthSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
