import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User, Calendar } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Beatrice Romero",
    rating: 5,
    date: "February 21, 2025",
    text: "This was the most comfortable place to get help during a rough time, a car accident, the people are so nice, like Grace and James and the receptionist, and always concerning how I was feeling! Their wonderful and one of my best experiences medically!!",
    service: "Auto Accident Imaging"
  },
  {
    id: 2,
    name: "Eric Perkins",
    rating: 5,
    date: "February 20, 2025",
    text: "James was extremely helpful. He made me feel comfortable. Grace was very pleasant and was concerned with my experience. I would highly recommend this company. They went out of their way to make me feel valued.",
    service: "MRI Scan"
  },
  {
    id: 3,
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent service! The staff was very professional and made me feel comfortable throughout the entire MRI process. The facility is clean and modern, and I received my results quickly. Highly recommend ABQ MRI for anyone needing imaging services.",
    service: "MRI Scan"
  },
  {
    id: 4,
    name: "Michael R.",
    rating: 5,
    date: "1 month ago",
    text: "Outstanding experience from start to finish. The technicians were knowledgeable and patient, explaining everything clearly. The facility has state-of-the-art equipment and the results were delivered promptly to my doctor. Five stars!",
    service: "X-Ray Services"
  },
  {
    id: 5,
    name: "Jennifer L.",
    rating: 5,
    date: "3 weeks ago",
    text: "I was referred here after my car accident and couldn't be happier with the service. The staff was compassionate and understanding of my situation. The imaging was thorough and the reports were detailed. Thank you for your excellent care!",
    service: "Personal Injury Imaging"
  },
  {
    id: 6,
    name: "David K.",
    rating: 5,
    date: "2 months ago",
    text: "Professional, efficient, and caring staff. The MRI was completed without any issues and the results were clear and comprehensive. The facility is well-maintained and the equipment is top-notch. Would definitely recommend to others.",
    service: "MRI Scan"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(20 75% 60%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Google Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What Our <span className="text-gradient-logo">Patients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real testimonials from our patients who have experienced our exceptional care and state-of-the-art imaging services.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.8</span>
            </div>
            <div className="text-muted-foreground">
              <p className="text-lg font-semibold">37 Google Reviews</p>
              <p className="text-sm">Based on verified patient experiences</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              <CardContent className="p-6 relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-logo rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Read More Reviews on Google</h3>
            <p className="text-muted-foreground mb-6">
              See what our patients are saying about their experience at ABQ MRI
            </p>
            <a
              href="https://www.google.com/maps/place/ABQ+MRI+%7C+MRI,+X-Ray,+NCV,+EEG+Facility+In+Albuquerque,+NM/@35.133515,-106.5920335,17z/data=!3m1!4b1!4m6!3m5!1s0x872273bbbafbdca5:0xcbba6bd488552ed3!8m2!3d35.133515!4d-106.5920335!16s%2Fg%2F11kqtss93k?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI1MDIyMy4xIPu8ASoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-logo text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5" />
              View All Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
