import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white mb-4">Finsbury Roofing & Builders</h3>
            <p className="text-sm mb-4">
              North London's trusted roofing experts since 1998. Providing exceptional service and quality workmanship for over 25 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Roof Repairs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roof Inspections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Roofing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guttering Services</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Finsbury Park</li>
              <li>Highbury</li>
              <li>Islington</li>
              <li>Holloway</li>
              <li>Stroud Green</li>
              <li>Hornsey</li>
              <li>All North London (M25)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:02071234567" className="hover:text-white transition-colors">
                    020 7123 4567
                  </a>
                  <div className="text-xs text-gray-500">24/7 Emergency Line</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@finsburyroofing.co.uk" className="hover:text-white transition-colors">
                  info@finsburyroofing.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  123 Seven Sisters Road<br />
                  Finsbury Park, London N4 3PX
                </address>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            © 2024 Finsbury Roofing & Builders Ltd. All rights reserved.
            <span className="block md:inline md:ml-4 text-gray-500">
              Company Registration: 12345678 | VAT: GB123456789
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="text-sm text-gray-500 mb-3">Licensed & Certified</div>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="px-3 py-1 bg-gray-800 rounded">FMB Licensed</span>
            <span className="px-3 py-1 bg-gray-800 rounded">Fully Insured</span>
            <span className="px-3 py-1 bg-gray-800 rounded">TrustMark Registered</span>
            <span className="px-3 py-1 bg-gray-800 rounded">Checkatrade Verified</span>
            <span className="px-3 py-1 bg-gray-800 rounded">Trading Standards Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
