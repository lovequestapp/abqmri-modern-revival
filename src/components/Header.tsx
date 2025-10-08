import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Patients", href: "/patients" },
    { name: "Physicians", href: "/physicians" },
    { name: "Attorneys", href: "/attorneys" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-3 px-4 md:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-3 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="tel:5055017541" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(505) 501-7541</span>
            </a>
            <a 
              href="https://www.google.com/maps/place/ABQ+MRI+%7C+MRI,+X-Ray,+NCV,+EEG+Facility+In+Albuquerque,+NM/@35.133515,-106.5920335,17z/data=!3m1!4b1!4m6!3m5!1s0x872273bbbafbdca5:0xcbba6bd488552ed3!8m2!3d35.133515!4d-106.5920335!16s%2Fg%2F11kqtss93k?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI1MDIyMy4xIPu8ASoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors text-center"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">4630 Jefferson LN NE Suite B., Albuquerque, NM 87109</span>
              <span className="sm:hidden">4630 Jefferson LN NE Suite B</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.google.com/maps/place/ABQ+MRI+%7C+MRI,+X-Ray,+NCV,+EEG+Facility+In+Albuquerque,+NM/@35.133515,-106.5920335,17z/data=!3m1!4b1!4m6!3m5!1s0x872273bbbafbdca5:0xcbba6bd488552ed3!8m2!3d35.133515!4d-106.5920335!16s%2Fg%2F11kqtss93k?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI1MDIyMy4xIPu8ASoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors text-sm"
            >
              View on Google Maps
            </a>
          </div>
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
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="ABQ MRI" className="h-10 md:h-12 lg:h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors relative group text-sm xl:text-base"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="hero" size="lg" className="text-sm xl:text-base">
                Schedule A Consultation
              </Button>
              <button
                onClick={() => window.open('https://www.google.com/maps/place/ABQ+MRI+%7C+MRI,+X-Ray,+NCV,+EEG+Facility+In+Albuquerque,+NM/@35.133515,-106.5920335,17z/data=!3m1!4b1!4m6!3m5!1s0x872273bbbafbdca5:0xcbba6bd488552ed3!8m2!3d35.133515!4d-106.5920335!16s%2Fg%2F11kqtss93k?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI1MDIyMy4xIPu8ASoASAFQAw%3D%3D', '_blank')}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10 group"
                title="View on Google Maps"
              >
                <MapPin className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors" />
              </button>
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
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button variant="hero" size="lg" className="flex-1">
                  Schedule A Consultation
                </Button>
                <button
                  onClick={() => {
                    window.open('https://www.google.com/maps/place/ABQ+MRI+%7C+MRI,+X-Ray,+NCV,+EEG+Facility+In+Albuquerque,+NM/@35.133515,-106.5920335,17z/data=!3m1!4b1!4m6!3m5!1s0x872273bbbafbdca5:0xcbba6bd488552ed3!8m2!3d35.133515!4d-106.5920335!16s%2Fg%2F11kqtss93k?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI1MDIyMy4xIPu8ASoASAFQAw%3D%3D', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-4 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/20 group flex items-center justify-center"
                  title="View on Google Maps"
                >
                  <MapPin className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
