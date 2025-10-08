import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, FileText, Clock, Users, CheckCircle2, Phone, MapPin, ArrowRight, Shield } from "lucide-react";

const Physicians = () => {
  const services = [
    {
      icon: FileText,
      title: "MRI Referrals",
      description: "High-resolution MRI imaging for comprehensive diagnostic assessment.",
      features: ["3T High-Field MRI", "Open MRI Available", "Board-Certified Radiologists"]
    },
    {
      icon: FileText,
      title: "X-Ray Services",
      description: "Digital radiography for immediate diagnostic imaging needs.",
      features: ["Digital Imaging", "Instant Results", "All Body Areas"]
    },
    {
      icon: FileText,
      title: "NCV Testing",
      description: "Nerve conduction velocity studies for neurological assessment.",
      features: ["Expert Analysis", "Detailed Reports", "Fast Scheduling"]
    },
    {
      icon: FileText,
      title: "EEG Studies",
      description: "Electroencephalogram testing for neurological evaluation.",
      features: ["Video EEG", "Board Certified", "Comprehensive Reports"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Same-day results available for urgent cases with detailed medical reports."
    },
    {
      icon: Shield,
      title: "Expert Analysis",
      description: "Board-certified radiologists provide comprehensive diagnostic interpretations."
    },
    {
      icon: Users,
      title: "Direct Communication",
      description: "Direct access to our medical team for case consultations and follow-up."
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Comprehensive medical reports with clear findings and recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Stethoscope className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Physician Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Physician <span className="text-gradient-logo">Portal</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional diagnostic imaging services for healthcare providers. Fast, accurate, and comprehensive 
              imaging solutions for your patients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" variant="hero" className="gap-3 px-8 py-6 text-lg font-semibold">
                Refer a Patient
                <ArrowRight className="w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="gap-3 px-8 py-6 text-lg font-semibold">
                <Phone className="w-6 h-6" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Diagnostic <span className="text-gradient-logo">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive imaging services designed to support your diagnostic needs and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient-logo">ABQ MRI</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Trusted by healthcare providers across New Mexico for reliable diagnostic imaging services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-logo rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referral Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple <span className="text-gradient-logo">Referral Process</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Easy referral process designed to streamline patient care and communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold">Submit Referral</h3>
                <p className="text-muted-foreground">
                  Send us your patient referral with necessary medical information and imaging requirements.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold">Schedule Imaging</h3>
                <p className="text-muted-foreground">
                  We coordinate with your patient to schedule the appropriate imaging study at their convenience.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold">Receive Results</h3>
                <p className="text-muted-foreground">
                  Get detailed imaging reports and results delivered directly to your practice for patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us to learn more about our physician services and referral process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="gap-3 px-8 py-6 text-lg font-semibold">
                Start Referring Patients
                <ArrowRight className="w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="gap-3 px-8 py-6 text-lg font-semibold">
                <Phone className="w-6 h-6" />
                Call (505) 501-7541
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Physicians;
