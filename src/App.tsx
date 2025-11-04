import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Process } from "./components/Process";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { ContactForm } from "./components/ContactForm";
import { Chatbot } from "./components/Chatbot";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content - Add padding to account for fixed nav */}
      <div className="pt-[80px]">
        <Hero />
        <div id="social-proof">
          <SocialProof />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>
        <Process />
        <EmergencyBanner />
        <ContactForm />
        <Footer />
      </div>

      {/* Interactive Chatbot */}
      <Chatbot />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
