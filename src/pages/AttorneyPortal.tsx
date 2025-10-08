import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Clock, Users, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";

const AttorneyPortal = () => {
  const features = [
    {
      icon: FileText,
      title: "Secure Case Access",
      description: "Access patient imaging reports and medical records securely through our encrypted portal."
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Receive instant notifications when new imaging results are available for your cases."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Fully compliant with healthcare privacy regulations to protect your clients' information."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Direct access to our medical team for case consultations and expert testimony."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Attorney Portal</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Attorney <span className="text-gradient-logo">Portal</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Secure access to your clients' medical imaging reports, expert consultations, and case management tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                variant="logo" 
                className="gap-3 px-8 py-6 text-lg font-semibold"
                onClick={() => window.open('https://ehr1.siliconmesa.com/client13/attorney/', '_blank')}
              >
                Access Attorney Portal
                <ExternalLink className="w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="gap-3 px-8 py-6 text-lg font-semibold">
                <FileText className="w-6 h-6" />
                Request Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portal <span className="text-gradient-logo">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your clients' medical imaging cases efficiently and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient-logo">ABQ MRI</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Trusted by attorneys across New Mexico for reliable medical imaging services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Medical Testimony</h3>
                    <p className="text-muted-foreground">Our board-certified radiologists provide expert testimony and case consultations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                    <p className="text-muted-foreground">Same-day results available for urgent cases with detailed medical reports.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Imaging</h3>
                    <p className="text-muted-foreground">MRI, X-Ray, NCV, and EEG services for complete diagnostic coverage.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Portal Access</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Secure login credentials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Case management dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Document download center</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Expert consultation requests</span>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button 
                    variant="logo" 
                    size="lg" 
                    className="w-full gap-3"
                    onClick={() => window.open('https://ehr1.siliconmesa.com/client13/attorney/', '_blank')}
                  >
                    Access Portal
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us to set up your attorney portal access and start managing your clients' medical imaging cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="gap-3 px-8 py-6 text-lg font-semibold">
                Contact Us Today
                <ArrowRight className="w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="gap-3 px-8 py-6 text-lg font-semibold">
                <FileText className="w-6 h-6" />
                Request Portal Access
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttorneyPortal;
