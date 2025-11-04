import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { 
  Phone, 
  Menu, 
  X,
  ChevronDown,
  Home as HomeIcon,
  Wrench,
  RotateCcw,
  ClipboardCheck,
  Zap,
  Building2,
  Star,
  Image as ImageIcon,
  Mail
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";

const services = [
  {
    icon: RotateCcw,
    title: "Roof Replacement",
    description: "Complete roof replacement with premium materials"
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description: "Expert repairs for leaks and damage"
  },
  {
    icon: ClipboardCheck,
    title: "Roof Inspection",
    description: "Thorough inspections and detailed reports"
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency roofing assistance"
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Professional solutions for businesses"
  },
  {
    icon: HomeIcon,
    title: "Residential Roofing",
    description: "Expert care for your home"
  }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-1' 
          : 'bg-white/95 backdrop-blur-sm py-1'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="flex items-center gap-3">
              {/* Logo Image */}
              <img 
                src="/logo-mark.png" 
                alt="Finsbury Roofing Logo"
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              
              {/* Company Name */}
              <div className="hidden sm:block">
                <div className="text-blue-900 text-md font-bold tracking-wide">
                  Finsbury Roofing
                </div>
                <div className="text-lg text-gray-600 italic font-bold tracking-wide">& Builders</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-900 text-md">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <NavigationMenuLink
                              key={index}
                              onClick={() => scrollToSection('services')}
                              className="block p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors group"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-900 transition-colors">
                                  <Icon className="w-5 h-5 text-blue-900 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                  <div className="text-sm mb-1">{service.title}</div>
                                  <p className="text-xs text-gray-600">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('why-choose-us')}
                    className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    About Us
                  </button>
                </NavigationMenuItem>

                {/* Gallery/Projects */}
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('social-proof')}
                    className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    Gallery
                  </button>
                </NavigationMenuItem>

                {/* Reviews */}
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('social-proof')}
                    className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    Reviews
                  </button>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('contact-form')}
                    className="px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    Contact
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Section - Phone & CTA */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Desktop */}
            <a 
              href="tel:02071234567"
              className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-900 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-900" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Call Us Now</div>
                <div className="leading-tight">020 7123 4567</div>
              </div>
            </a>

            {/* CTA Button - Desktop & Tablet */}
            <Button 
              className="hidden sm:flex bg-red-600 hover:bg-red-700"
              onClick={() => scrollToSection('contact-form')}
            >
              Free Estimate
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <img 
                      src="/logo-mark.png" 
                      alt="Finsbury Roofing Logo"
                      className="w-14 h-14 object-contain flex-shrink-0"
                    />
                    <div>
                      <div className="text-blue-900">Finsbury Roofing</div>
                      <div className="text-xs text-gray-600">& Builders</div>
                    </div>
                  </div>

                  {/* Mobile Services Dropdown */}
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-900"
                    >
                      <span>Services</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <button
                              key={index}
                              onClick={() => scrollToSection('services')}
                              className="flex items-center gap-3 w-full py-2 text-sm text-gray-600 hover:text-blue-900"
                            >
                              <Icon className="w-4 h-4" />
                              {service.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* Mobile Menu Items */}
                  <button
                    onClick={() => scrollToSection('why-choose-us')}
                    className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-900 text-left"
                  >
                    <Star className="w-5 h-5" />
                    About Us
                  </button>

                  <button
                    onClick={() => scrollToSection('social-proof')}
                    className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-900 text-left"
                  >
                    <ImageIcon className="w-5 h-5" />
                    Gallery
                  </button>

                  <button
                    onClick={() => scrollToSection('social-proof')}
                    className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-900 text-left"
                  >
                    <Star className="w-5 h-5" />
                    Reviews
                  </button>

                  <button
                    onClick={() => scrollToSection('contact-form')}
                    className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-900 text-left"
                  >
                    <Mail className="w-5 h-5" />
                    Contact
                  </button>

                  <Separator />

                  {/* Mobile CTA Section */}
                  <div className="space-y-3 pt-2">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => scrollToSection('contact-form')}
                    >
                      Get Free Estimate
                    </Button>

                    <Button 
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a href="tel:02071234567" className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        020 7123 4567
                      </a>
                    </Button>
                  </div>

                  {/* Mobile Trust Indicators */}
                  <div className="bg-blue-50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-center text-gray-700">
                      <div className="mb-2">⭐⭐⭐⭐⭐</div>
                      <div>4.9/5 from 200+ Reviews</div>
                      <div className="text-xs text-gray-600 mt-1">
                        Licensed & Insured • 25+ Years
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
