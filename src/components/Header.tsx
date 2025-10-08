import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Patients", href: "#patients" },
    { name: "Physicians", href: "#physicians" },
    { name: "Attorneys", href: "#attorneys" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <a href="tel:5055017541" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(505) 501-7541</span>
          </a>
          <a 
            href="https://maps.google.com/?q=4630+Jefferson+LN+NE+Suite+B,+Albuquerque,+NM+87109" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>4630 Jefferson LN NE Suite B., Albuquerque, NM 87109</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img src={logo} alt="ABQ MRI" className="h-12 md:h-16 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="hero" size="lg">
                Schedule A Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4">
                Schedule A Consultation
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
