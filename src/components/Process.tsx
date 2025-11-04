import { Phone, Calendar, Hammer, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description: "Call us or fill out our form to schedule your free inspection. We'll respond within 2 hours during business hours."
  },
  {
    number: "02",
    icon: Calendar,
    title: "Free Inspection",
    description: "Our expert team visits your property for a thorough assessment. We'll identify issues and provide a detailed quote on the spot."
  },
  {
    number: "03",
    icon: Hammer,
    title: "Expert Installation",
    description: "Once approved, we'll schedule your project at your convenience. Our skilled team completes the work efficiently with minimal disruption."
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Quality Guarantee",
    description: "We conduct a final walkthrough to ensure perfection. Your satisfaction is guaranteed with our lifetime workmanship warranty."
  }
];

export function Process() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Our Simple <span className="text-blue-900">4-Step Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From initial contact to project completion, we make getting a new roof stress-free and straightforward.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-900" 
               style={{ width: 'calc(100% - 12rem)', marginLeft: '6rem' }} 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow relative z-10">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center shadow-lg">
                      <span>{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mt-2">
                      <Icon className="w-8 h-8 text-blue-900" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Info */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            <span className="text-blue-900">Average timeline:</span> Most projects are completed within 3-7 days from approval. Emergency repairs can often be done within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
