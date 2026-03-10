import "@/App.css";
import { Navbar } from "./components/Navbar";
import { MarqueeRibbon } from "./components/MarqueeRibbon";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { TrustSection } from "./components/TrustSection";
import { BulkOrdersSection } from "./components/BulkOrdersSection";
import { BlogSection } from "./components/BlogSection";
import { EnquirySection } from "./components/EnquirySection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App min-h-screen bg-background">
      {/* Marquee Ribbon */}
      <MarqueeRibbon />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Products Section */}
        <ProductsSection />

        {/* Trust Indicators */}
        <TrustSection />

        {/* Certificates Section */}
        <CertificatesSection />

        {/* Bulk Orders CTA */}
        <BulkOrdersSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Enquiry Section */}
        <EnquirySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
