import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote } from "lucide-react";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Finsbury Park",
    rating: 5,
    text: "Absolutely fantastic service! They repaired our storm-damaged roof within 48 hours. Professional, punctual, and the quality is outstanding. Highly recommend to anyone in North London.",
    service: "Storm Damage Repair",
    initials: "SM"
  },
  {
    name: "James O'Connor",
    location: "Stroud Green",
    rating: 5,
    text: "Best roofing company we've worked with. They replaced our entire roof and the transformation is incredible. Fair pricing, excellent communication, and they left the site spotless every day.",
    service: "Full Replacement",
    initials: "JO"
  },
  {
    name: "Priya Sharma",
    location: "Highbury",
    rating: 5,
    text: "Called them for an emergency leak on a Sunday evening. They came out within the hour and fixed it temporarily, then completed permanent repairs the next morning. Lifesavers!",
    service: "Emergency Service",
    initials: "PS"
  }
];

const certifications = [
  "GAF Certified",
  "CertainTeed Approved",
  "Trading Standards Approved",
  "Checkatrade Verified",
  "TrustMark Registered",
  "FMB Member"
];

export function SocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Trusted by <span className="text-blue-900">5,000+ Homeowners</span> Across North London
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers say about their experience with Finsbury Roofing & Builders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar>
                    <AvatarFallback className="bg-blue-900 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>

                <Badge className="mt-3" variant="secondary">
                  {testimonial.service}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-blue-900 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl text-blue-900 mb-2">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl text-blue-900 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl text-blue-900 mb-2">98%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="mb-6 text-gray-700">Certified & Trusted By Leading Industry Bodies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
