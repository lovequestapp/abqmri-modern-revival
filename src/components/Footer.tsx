import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "MRI Imaging", href: "#services" },
      { name: "X-Ray Services", href: "#services" },
      { name: "NCV Testing", href: "#services" },
      { name: "EEG Testing", href: "#services" },
    ],
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "Patients", href: "#patients" },
      { name: "Physicians", href: "#physicians" },
      { name: "Attorneys", href: "#attorneys" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="ABQ MRI" className="h-16 mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-md">
              Advanced Diagnostic Imaging Center in Albuquerque, NM. Specializing in MRI, X-Ray, NCV,
              and EEG services for auto accident and personal injury patients.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:5055017541"
                className="flex items-center gap-3 text-secondary-foreground/90 hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Phone className="w-4 h-4 group-hover:text-primary-foreground" />
                </div>
                <span className="font-semibold">(505) 501-7541</span>
              </a>

              <a
                href="https://maps.google.com/?q=4630+Jefferson+LN+NE+Suite+B,+Albuquerque,+NM+87109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/90 hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all">
                  <MapPin className="w-4 h-4 group-hover:text-primary-foreground" />
                </div>
                <span>4630 Jefferson LN NE Suite B., Albuquerque, NM 87109</span>
              </a>

              <a
                href="mailto:help@abqmri.com"
                className="flex items-center gap-3 text-secondary-foreground/90 hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Mail className="w-4 h-4 group-hover:text-primary-foreground" />
                </div>
                <span>help@abqmri.com</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} ABQ MRI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
