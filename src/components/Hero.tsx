import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Star, Shield, Award, Phone, CheckCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.serviceType) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Thank you! We'll contact you within 2 hours.");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: ""
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1669044719920-87e5f6167c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHJvb2Z8ZW58MXx8fHwxNzYyMjY3MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-3 h-3 mr-1" />
                Licensed & Insured
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Award className="w-3 h-3 mr-1" />
                25+ Years Experience
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Protect Your Home with <span className="text-red-400">Finsbury Park's</span> Most Trusted Roofing Experts
            </h1>

            <p className="text-xl text-blue-100">
              Expert roof repairs, replacements & inspections serving North London homeowners since 1998
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <span className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </span>
              <span>4.9/5 from 200+ Reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={scrollToContact}
              >
                Get Free Estimate
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900"
                asChild
              >
                <a href="tel:02071234567">
                  <Phone className="w-4 h-4 mr-2" />
                  020 7123 4567
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl">5,000+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl">Lifetime</div>
                <div className="text-sm text-blue-200">Warranty</div>
              </div>
              <div>
                <div className="text-2xl">24/7</div>
                <div className="text-sm text-blue-200">Emergency Service</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative pb-8">
            <Card className="shadow-2xl bg-white text-gray-900">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-6">
                <CardTitle className="text-2xl">Get Your Free Estimate</CardTitle>
                <p className="text-red-100 mt-2">
                  Schedule your free inspection today. No obligation!
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We'll contact you within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="hero-name" className="text-sm">Full Name *</Label>
                      <Input
                        id="hero-name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="hero-phone" className="text-sm">Phone Number *</Label>
                      <Input
                        id="hero-phone"
                        type="tel"
                        placeholder="020 7123 4567"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="hero-email" className="text-sm">Email Address *</Label>
                      <Input
                        id="hero-email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <Label htmlFor="hero-service" className="text-sm">Service Needed *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleChange("serviceType", value)}
                      >
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="repair">Roof Repair</SelectItem>
                          <SelectItem value="replacement">Roof Replacement</SelectItem>
                          <SelectItem value="inspection">Roof Inspection</SelectItem>
                          <SelectItem value="emergency">Emergency Service</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 h-11 mt-5"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get Free Estimate"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center pt-2">
                      We respect your privacy. Your information is secure.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Promotional Badge */}
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-3 rounded-lg shadow-xl">
              <div className="text-xl">£500 OFF</div>
              <div className="text-xs">Full Replacements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
