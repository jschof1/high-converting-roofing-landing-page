import { Button } from "./ui/button";
import { AlertCircle, Phone, Clock } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Message */}
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <AlertCircle className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl mb-2">
                Roofing Emergency?
              </h2>
              <p className="text-red-100 mb-2">
                Storm damage? Severe leak? We're available 24/7 for emergency roofing services across North London.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Average response time: Under 60 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="flex flex-col items-center gap-3">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100"
              asChild
            >
              <a href="tel:02071234567" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Emergency Hotline</div>
                  <div>020 7123 4567</div>
                </div>
              </a>
            </Button>
            <span className="text-sm text-red-100">Open 24 Hours • 7 Days a Week</span>
          </div>
        </div>
      </div>
    </section>
  );
}
