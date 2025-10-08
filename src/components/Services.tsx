import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scan, X as XRay, Activity, Brain, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Scan,
    title: "MRI Scans",
    description: "State-of-the-art magnetic resonance imaging with ultra-high resolution detail for precise diagnosis of soft tissue injuries, spinal conditions, and neurological assessment.",
    features: ["3T High-Field MRI", "Open MRI Available", "Same-Day Reports"],
    link: "#",
  },
  {
    number: "02",
    icon: XRay,
    title: "X-Ray Services",
    description: "Advanced digital radiography providing crystal-clear images for comprehensive bone and joint injury assessment with minimal radiation exposure.",
    features: ["Digital Imaging", "Instant Results", "All Body Areas"],
    link: "#",
  },
  {
    number: "03",
    icon: Activity,
    title: "NCV Testing",
    description: "Comprehensive nerve conduction velocity studies utilizing cutting-edge technology to accurately evaluate nerve damage and peripheral neuropathy.",
    features: ["Expert Analysis", "Pain-Free Testing", "Detailed Reports"],
    link: "#",
  },
  {
    number: "04",
    icon: Brain,
    title: "EEG Studies",
    description: "Advanced electroencephalogram testing for detailed brain activity analysis, critical for traumatic brain injury evaluation and neurological disorders.",
    features: ["Board Certified", "Video EEG", "Fast Scheduling"],
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* MRI Scanner Ring Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] border border-primary/10 rounded-full animate-mri-pulse-ring" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] border border-primary/10 rounded-full animate-mri-pulse-ring" style={{ animationDelay: '1.5s' }} />
      
      {/* Scanning Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-mri-scan" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-mri-scan" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Advanced Diagnostics</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Our Elite <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fortune 500-level diagnostic imaging solutions with cutting-edge technology and expert analysis for personal injury and auto accident cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Scanner Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scanner-line" />
              </div>

              <CardContent className="p-8 md:p-10 relative z-10">
                {/* Service Number & Icon */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-7xl md:text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {service.number}
                  </span>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <service.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto hover:bg-transparent text-base font-semibold"
                >
                  <span className="flex items-center gap-2 text-primary">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-6 text-lg">
            Need help choosing the right diagnostic service?
          </p>
          <Button variant="premium" size="lg" className="gap-3 px-8 py-6 text-lg font-semibold">
            Speak with a Specialist
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
