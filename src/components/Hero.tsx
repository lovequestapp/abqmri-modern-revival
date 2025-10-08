import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock, CheckCircle2, Activity } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
      {/* MRI Scanner Ring Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[800px] h-[800px] border-2 border-primary/20 rounded-full animate-mri-pulse-ring" />
        <div className="absolute w-[600px] h-[600px] border-2 border-primary/30 rounded-full animate-mri-pulse-ring" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[400px] h-[400px] border border-primary/40 rounded-full animate-mri-pulse-ring" style={{ animationDelay: '2s' }} />
      </div>

      {/* MRI Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-mri-scan opacity-50" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-mri-scan opacity-30" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Rotating Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4aded312_1px,transparent_1px),linear-gradient(to_bottom,#4aded312_1px,transparent_1px)] bg-[size:40px_40px] animate-mri-rotate opacity-20" style={{ transformOrigin: 'center center' }} />
      
      {/* Particle Effects */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Floating orbs with scanner glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" style={{ boxShadow: 'var(--shadow-scanner)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', boxShadow: 'var(--shadow-scanner)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
            <Activity className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">State-of-the-Art MRI Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
            Advanced Diagnostic
            <br />
            <span className="text-gradient inline-block mt-2">Imaging Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Fortune 500-level precision imaging for auto accident and personal injury patients. 
            <span className="block mt-2 text-primary/80 font-medium">Expert diagnostics. Fast results. Compassionate care.</span>
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
            {[
              { icon: Shield, text: "Board Certified Radiologists" },
              { icon: Clock, text: "Same-Day Results Available" },
              { icon: CheckCircle2, text: "All Insurance Accepted" },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button size="lg" variant="hero" className="gap-3 group px-8 py-6 text-lg font-semibold">
              Schedule A Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button size="lg" variant="premium" className="gap-3 px-8 py-6 text-lg font-semibold">
              <Calendar className="w-6 h-6" />
              Contact Us Today
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { value: "25+", label: "Years of Excellence", sublabel: "Industry Leading" },
              { value: "50K+", label: "Patients Served", sublabel: "Trusted Partner" },
              { value: "4.9★", label: "Patient Rating", sublabel: "Exceptional Care" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="relative group text-center space-y-3 p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-base font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
