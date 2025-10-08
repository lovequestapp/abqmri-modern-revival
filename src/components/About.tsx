import { Card } from "@/components/ui/card";
import { Heart, Shield, Clock, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We understand that medical situations can be stressful. Our staff provides comfort and support throughout your journey.",
    },
    {
      icon: Shield,
      title: "Expert Specialists",
      description: "Our experienced physicians and radiologists are dedicated to accurate diagnostics and your speedy recovery.",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Quick turnaround times on imaging reports so you can get the treatment you need without delay.",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Specializing in auto accident and personal injury patients with tailored care for your specific needs.",
    },
  ];

  return (
    <section id="patients" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(174 72% 56%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold">About ABQ MRI</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Specializing in auto accidents and{" "}
              <span className="text-gradient">personal injury patients</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are an MRI and X-Ray Center specializing in providing imaging services for auto accident
              and personal injury patients. Our experienced staff is dedicated to providing the highest
              standard of care for our patients, ensuring accurate diagnostic results and a speedy recovery.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Compassionate Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                At ABQ MRI, we understand that auto accidents and personal injuries can be a stressful
                experience. That's why we strive to make the entire process as stress-free and comfortable
                as possible. Our experienced and compassionate staff is here to answer any questions you may
                have and to provide the highest quality of care.
              </p>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group p-6 bg-card/60 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-scale"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-xl inline-block group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
