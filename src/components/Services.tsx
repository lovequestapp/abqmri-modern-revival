import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scan, X as XRay, Activity, Brain, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      icon: Scan,
      title: "MRI",
      description:
        "Magnetic Resonance Imaging (MRI) is a noninvasive way for your doctor to examine your organs, tissues, and skeletal systems by producing high-resolution images of the inside of the body.",
      link: "#",
    },
    {
      number: "02",
      icon: XRay,
      title: "X-Ray",
      description:
        "X-rays are a type of radiation called electromagnetic waves. An X-ray is a quick, painless test that produces images of the structures inside your body-particularly your bones.",
      link: "#",
    },
    {
      number: "03",
      icon: Activity,
      title: "NCV",
      description:
        "Nerve Conduction Velocity Test (NCV). This test is used to diagnose nerve injuries of the cervical or lumbar spine causing radiating pain to the upper and lower extremities.",
      link: "#",
    },
    {
      number: "04",
      icon: Brain,
      title: "EEG",
      description:
        "An Electroencephalogram (EEG) is a test that detects abnormalities in your brain waves, or in the electrical activity of your brain. This test is used in diagnosing Traumatic Brain Injuries.",
      link: "#",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive diagnostic imaging services for auto accidents and personal injury patients
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-8 relative z-10">
                {/* Service Number & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {service.number}
                  </span>
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300 glow-effect">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  <span className="flex items-center gap-2 text-primary font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
