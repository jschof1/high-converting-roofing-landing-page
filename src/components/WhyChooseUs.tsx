import { 
  Shield, 
  Award, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle 
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete peace of mind with comprehensive insurance coverage and all necessary certifications for your protection."
  },
  {
    icon: Award,
    title: "Lifetime Workmanship Warranty",
    description: "We stand behind our work with a lifetime warranty on workmanship. If there's ever an issue, we'll fix it free of charge."
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "Same-day service for emergencies and quick turnaround on all projects. We respect your time and stick to our schedules."
  },
  {
    icon: DollarSign,
    title: "Flexible Financing Options",
    description: "Affordable payment plans available with 0% APR financing. Get the roof you need without breaking the bank."
  },
  {
    icon: Users,
    title: "Local Family Business",
    description: "Proudly serving North London for 25+ years. We're your neighbours, committed to building lasting relationships."
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guaranteed",
    description: "We're not happy until you're happy. Every project includes a final walkthrough and satisfaction guarantee."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Why Choose <span className="text-blue-900">Finsbury Roofing & Builders</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're not just another roofing company. Here's what sets us apart and why thousands of North London homeowners trust us with their biggest investment.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Badge */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto border-t-4 border-blue-900">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-blue-900" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-2">Our Quality Guarantee</h3>
              <p className="text-gray-600">
                Every project comes with our comprehensive guarantee: if you're not completely satisfied with our work, we'll make it right—no questions asked. Plus, we offer a lifetime warranty on workmanship and up to 50-year warranties on materials. Your satisfaction and protection are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
