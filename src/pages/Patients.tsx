import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, CheckCircle2, FileText, Phone, MapPin, Calendar, ArrowRight, AlertTriangle, Stethoscope, User, Mail } from "lucide-react";

const Patients = () => {
  const services = [
    {
      icon: FileText,
      title: "MRI Scans",
      description: "Magnetic Resonance Imaging (MRI) is a noninvasive way for your doctor to examine your organs, tissues, and skeletal systems by producing high-resolution images of the inside of the body.",
      features: ["3T High-Field MRI", "Open MRI Available", "Same-Day Results"]
    },
    {
      icon: FileText,
      title: "X-Ray Services",
      description: "X-rays are a type of radiation called electromagnetic waves. An X-ray is a quick, painless test that produces images of the structures inside your body-particularly your bones.",
      features: ["Digital Imaging", "Instant Results", "All Body Areas"]
    },
    {
      icon: FileText,
      title: "NCV Testing",
      description: "Nerve Conduction Velocity Test (NCV). This is used to diagnose nerve injuries of the cervical or lumbar spine causing radiating pain to the upper and lower extremities.",
      features: ["Expert Analysis", "Pain-Free Testing", "Detailed Reports"]
    },
    {
      icon: FileText,
      title: "EEG Studies",
      description: "An Electroencephalogram (EEG) is a test that detects abnormalities in your brain waves, or in the electrical activity of your brain. This test is used in diagnosing Traumatic Brain Injuries.",
      features: ["Board Certified", "Video EEG", "Fast Scheduling"]
    }
  ];

  const metalDevices = [
    "Metallic joint prostheses",
    "Artificial heart valves", 
    "An implantable heart defibrillator",
    "Implanted drug infusion pumps",
    "Implanted nerve stimulators",
    "A pacemaker",
    "Metal clips",
    "Metal pins, screws, plates, stents or surgical staples",
    "Cochlear implants",
    "A bullet, shrapnel or any other type of metal fragment"
  ];

  const preparationItems = [
    "Jewelry",
    "Hairpins", 
    "Eyeglasses",
    "Watches",
    "Wigs",
    "Dentures",
    "Hearing aids",
    "Underwire bras",
    "Cosmetics that contain metal particles"
  ];

  const testimonials = [
    {
      name: "Beatrice Romero",
      date: "February 21, 2025",
      text: "This was the most comfortable place to get help during a rough time, a car accident, the people are so nice, like Grace and James and the receptionist, and always concerning how I was feeling! Their wonderful and one of my best experiences medically!!",
      rating: 5
    },
    {
      name: "Eric Perkins", 
      date: "February 20, 2025",
      text: "James was extremely helpful. He made me feel comfortable. Grace was very pleasant and was concerned with my experience. I would highly recommend this company. They went out of their way to make me feel valued.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Patient Information</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Patient <span className="text-gradient-logo">Information</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are an MRI and X-Ray Center specializing in providing imaging services for auto accident and personal injury patients. 
              Our experienced staff is dedicated to providing the highest standard of care for our patients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" variant="hero" className="gap-3 px-8 py-6 text-lg font-semibold">
                Schedule Your Appointment
                <Calendar className="w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="gap-3 px-8 py-6 text-lg font-semibold">
                <Phone className="w-6 h-6" />
                Call (505) 501-7541
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
              Our <span className="text-gradient-logo">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive diagnostic imaging services designed specifically for auto accident and personal injury patients.
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

      {/* Important Safety Information */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 border border-red-200 rounded-full mb-6">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-sm font-semibold text-red-600">Important Safety Information</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Things to <span className="text-gradient-logo">Tell Us!</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Because MRI uses powerful magnets, the presence of metal in your body can be a safety hazard if attracted to the magnet. 
                Even if not attracted to the magnet, metal objects can distort the MRI image.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-red-600">
                Unless the device you have is certified as MRI safe, you might not be able to have an MRI. 
                Please let us know if you have any of the following devices:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metalDevices.map((device, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">!</span>
                    </div>
                    <span className="text-red-800 font-medium">{device}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Additional <span className="text-gradient-logo">Information</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Tattoos & Makeup</h3>
                  <p className="text-muted-foreground">
                    If you have tattoos or permanent makeup, ask your doctor whether they might affect your MRI. 
                    Some of the darker inks contain metal.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Pregnancy</h3>
                  <p className="text-muted-foreground">
                    Before you schedule an MRI, tell your doctor if you think you're pregnant. The effects of magnetic 
                    fields on fetuses aren't well understood.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Kidney & Liver</h3>
                  <p className="text-muted-foreground">
                    It's important to discuss kidney or liver problems with your doctor and the technologist, 
                    because problems with these organs might limit the use of injected contrast agents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Prepare */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              How You <span className="text-gradient-logo">Prepare</span>
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl">
              <p className="text-lg text-muted-foreground mb-8">
                Before an MRI exam, eat normally and continue to take your usual medications, unless otherwise instructed. 
                You will typically be asked to change into a gown and to remove things that might affect the magnetic imaging, such as:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {preparationItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              What You Can <span className="text-gradient-logo">Expect</span>
            </h2>
            
            <div className="space-y-12">
              <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    During The Test
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The MRI machine is open on three sides. You lie down on a movable table that slides under the magnet. 
                    A technologist monitors you from a few feet away. You can talk with the person by microphone.
                  </p>
                  <p className="text-muted-foreground">
                    Our unit is an open model so claustrophobia shouldn't be an issue. If you have a fear of enclosed spaces (claustrophobia), 
                    you might be given a drug to help you feel sleepy and less anxious. Most people get through the exam without difficulty.
                  </p>
                  <p className="text-muted-foreground">
                    The MRI machine creates a strong magnetic field around you, and radio waves are directed at your body. 
                    The procedure is painless. You don't feel the magnetic field or radio waves, and there are no moving parts around you.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    After The Test
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you haven't been sedated, you can resume your usual activities immediately after the scan.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A doctor specially trained to interpret MRIs (radiologist) will analyze the images from your scan and report the findings to your doctor. 
                    Your doctor will discuss important findings and next steps with you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient-logo">Patients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real testimonials from patients who have experienced our compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Contact <span className="text-gradient-logo">Information</span>
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl">
              <p className="text-xl text-muted-foreground mb-8">
                We are an MRI and X-Ray Center specializing in providing imaging services for auto accident and personal injury patients. 
                Our experienced staff is dedicated to providing the highest standard of care for our patients, ensuring accurate diagnostic results and a speedy recovery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground">help@abqmri.com</p>
                </div>
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-muted-foreground">(505) 501-7541</p>
                </div>
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-logo rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Location</h3>
                  <p className="text-muted-foreground">4630 Jefferson LN NE Suite B</p>
                  <p className="text-muted-foreground">Albuquerque, NM 87109</p>
                </div>
              </div>
              
              <div className="pt-8">
                <Button size="lg" variant="hero" className="gap-3 px-8 py-6 text-lg font-semibold">
                  Schedule Your Appointment
                  <Calendar className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patients;
