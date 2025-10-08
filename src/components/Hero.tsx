import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(174_72%_56%/0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(220_40%_15%/0.08),transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Superior Quality &{" "}
              <span className="text-gradient">Unrivaled Service</span>{" "}
              You Can Depend On!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Cutting edge technology, the most knowledgeable physicians and radiologists,
              and fast accurate reports is what defines ABQ MRI.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                "Advanced MRI Technology",
                "Expert Radiologists",
                "Fast Accurate Reports",
                "Compassionate Care",
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Schedule A Consultation
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Trusted by thousands of patients across New Mexico</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
