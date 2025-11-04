import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Wrench, 
  RotateCcw, 
  ClipboardCheck, 
  Zap, 
  Home, 
  Building2,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Roof Repairs",
    description: "Expert repairs for leaks, damaged tiles, guttering issues, and general wear. Fast response and guaranteed workmanship.",
    features: ["Same-day service available", "10-year warranty", "All roof types"]
  },
  {
    icon: RotateCcw,
    title: "Roof Replacement",
    description: "Complete roof replacements using premium materials. Transform your home with a brand new roof built to last decades.",
    features: ["Free consultation", "Lifetime warranty", "Financing available"]
  },
  {
    icon: ClipboardCheck,
    title: "Roof Inspections",
    description: "Thorough inspections for insurance claims, property purchases, or preventative maintenance. Detailed reports provided.",
    features: ["FREE inspections", "Same-day reports", "Insurance approved"]
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency roofing services for storm damage, severe leaks, and urgent repairs. We're here when you need us most.",
    features: ["24/7 availability", "Rapid response", "Temporary fixes"]
  },
  {
    icon: Home,
    title: "Residential Roofing",
    description: "Specialized in residential roofing for houses, extensions, and conservatories across North London.",
    features: ["All property types", "Period properties", "Modern homes"]
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Professional commercial roofing services for offices, retail spaces, and multi-unit properties. Minimal disruption guaranteed.",
    features: ["Flexible scheduling", "Site safety", "Large projects"]
  }
];

export function Services() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Comprehensive <span className="text-blue-900">Roofing Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From minor repairs to complete replacements, we provide expert roofing solutions tailored to your needs and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                    <Icon className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-blue-900"
                    onClick={scrollToContact}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="mb-6 text-blue-100">
            Book a free, no-obligation inspection and we'll assess your roof and provide expert recommendations.
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700"
            onClick={scrollToContact}
          >
            Schedule Free Inspection
          </Button>
        </div>
      </div>
    </section>
  );
}
