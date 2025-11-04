import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    address: "",
    message: "",
    contactMethod: "phone"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.serviceType) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Phone validation (basic UK format)
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
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
          serviceType: "",
          address: "",
          message: "",
          contactMethod: "phone"
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl mb-4 text-white">
                Get Your <span className="text-red-400">Free Estimate</span>
              </h2>
              <p className="text-blue-100">
                Fill out the form below and we'll contact you within 2 hours to schedule your free, no-obligation roof inspection.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Request a Free Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your request and will contact you within 2 hours during business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="020 7123 4567"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label htmlFor="serviceType">Service Needed *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleChange("serviceType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="repair">Roof Repair</SelectItem>
                          <SelectItem value="replacement">Roof Replacement</SelectItem>
                          <SelectItem value="inspection">Roof Inspection</SelectItem>
                          <SelectItem value="emergency">Emergency Service</SelectItem>
                          <SelectItem value="commercial">Commercial Roofing</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Address */}
                    <div>
                      <Label htmlFor="address">Property Address</Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="123 High Street, Finsbury Park, N4"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your roofing needs or any specific concerns..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    {/* Contact Method */}
                    <div>
                      <Label>Preferred Contact Method *</Label>
                      <RadioGroup
                        value={formData.contactMethod}
                        onValueChange={(value) => handleChange("contactMethod", value)}
                        className="flex gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-contact" />
                          <Label htmlFor="phone-contact" className="cursor-pointer">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label htmlFor="email-contact" className="cursor-pointer">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="text" id="text-contact" />
                          <Label htmlFor="text-contact" className="cursor-pointer">Text</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get Your Free Estimate"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl mb-4">Contact Information</h3>
              <p className="text-blue-100 mb-6">
                Prefer to speak with us directly? We're here to help! Reach out using any of the methods below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Phone</div>
                  <a href="tel:02071234567" className="text-xl hover:text-red-400 transition-colors">
                    020 7123 4567
                  </a>
                  <p className="text-sm text-blue-200 mt-1">24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Email</div>
                  <a href="mailto:info@finsburyroofing.co.uk" className="text-xl hover:text-red-400 transition-colors">
                    info@finsburyroofing.co.uk
                  </a>
                  <p className="text-sm text-blue-200 mt-1">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Address</div>
                  <address className="not-italic">
                    123 Seven Sisters Road<br />
                    Finsbury Park<br />
                    London N4 3PX
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Business Hours</div>
                  <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p>Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: 9:00 AM - 4:00 PM</p>
                  <p className="text-red-400 mt-2">Emergency Service: 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mt-8">
              <h4 className="mb-3">Service Areas</h4>
              <p className="text-blue-100">
                We proudly serve Finsbury Park, Highbury, Islington, Holloway, Stroud Green, Hornsey, and all of North London within the M25.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
