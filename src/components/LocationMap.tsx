import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation, Car, Directions, ExternalLink } from "lucide-react";

const LocationMap = () => {
  const locationData = {
    address: "4630 Jefferson LN NE Suite B",
    city: "Albuquerque, NM 87109",
    phone: "(505) 501-7541",
    email: "help@abqmri.com",
    coordinates: "35.133515, -106.5920335",
    googleMapsUrl: "https://www.google.com/maps/place/ABQ+MRI+%7C+MRI,+X-Ray,+NCV,+EEG+Facility+In+Albuquerque,+NM/@35.133515,-106.5920335,17z/data=!3m1!4b1!4m6!3m5!1s0x872273bbbafbdca5:0xcbba6bd488552ed3!8m2!3d35.133515!4d-106.5920335!16s%2Fg%2F11kqtss93k?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI1MDIyMy4xIPu8ASoASAFQAw%3D%3D"
  };

  const directions = [
    {
      icon: Car,
      title: "From I-25 North",
      steps: [
        "Take I-25 N to Jefferson St NE",
        "Take exit 226 for Jefferson St NE",
        "Turn right onto Jefferson St NE",
        "Destination will be on the right"
      ]
    },
    {
      icon: Car,
      title: "From I-25 South", 
      steps: [
        "Take I-25 S to Jefferson St NE",
        "Take exit 226 for Jefferson St NE",
        "Turn left onto Jefferson St NE",
        "Destination will be on the right"
      ]
    },
    {
      icon: Navigation,
      title: "From Downtown Albuquerque",
      steps: [
        "Head north on 2nd St NW",
        "Turn right onto Lomas Blvd NW",
        "Turn left onto Jefferson St NE",
        "Continue straight to destination"
      ]
    }
  ];

  const nearbyLandmarks = [
    "University of New Mexico Hospital - 2.5 miles",
    "Presbyterian Hospital - 3.2 miles", 
    "Albuquerque International Sunport - 8.7 miles",
    "Old Town Albuquerque - 4.1 miles",
    "Sandia Peak Tramway - 12.3 miles"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Find Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Our <span className="text-gradient-logo">Location</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conveniently located in Albuquerque with easy access and ample parking. 
            We're here to serve you with state-of-the-art diagnostic imaging services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Interactive Map Section */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Interactive Map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Embedded Google Map */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.234567890123!2d-106.5920335!3d35.133515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872273bbbafbdca5%3A0xcbba6bd488552ed3!2sABQ%20MRI%20%7C%20MRI%2C%20X-Ray%2C%20NCV%2C%20EEG%20Facility%20In%20Albuquerque%2C%20NM!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    variant="logo" 
                    size="lg" 
                    className="gap-3"
                    onClick={() => window.open(locationData.googleMapsUrl, '_blank')}
                  >
                    <Directions className="w-5 h-5" />
                    Get Directions
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="gap-3"
                    onClick={() => window.open(`tel:${locationData.phone.replace(/[^\d]/g, '')}`, '_self')}
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Details */}
            <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Navigation className="w-6 h-6 text-primary" />
                  Location Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{locationData.address}</p>
                      <p className="text-muted-foreground">{locationData.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a 
                      href={`tel:${locationData.phone.replace(/[^\d]/g, '')}`}
                      className="text-foreground hover:text-primary transition-colors font-semibold"
                    >
                      {locationData.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href={`mailto:${locationData.email}`}
                      className="text-foreground hover:text-primary transition-colors font-semibold"
                    >
                      {locationData.email}
                    </a>
                  </div>
                </div>

                {/* Nearby Landmarks */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Nearby Landmarks</h4>
                  <ul className="space-y-2">
                    {nearbyLandmarks.map((landmark, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Directions Section */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Directions className="w-6 h-6 text-primary" />
                  Driving Directions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {directions.map((direction, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <direction.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{direction.title}</h4>
                    </div>
                    <ol className="space-y-2 ml-11">
                      {direction.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Hours & Contact */}
            <Card className="bg-white/80 backdrop-blur-sm border border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Hours & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Emergency Contact</h4>
                    <p className="text-sm text-muted-foreground">
                      For urgent medical imaging needs, please call our main number.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full gap-3"
                    onClick={() => window.open(`tel:${locationData.phone.replace(/[^\d]/g, '')}`, '_self')}
                  >
                    <Phone className="w-5 h-5" />
                    Call (505) 501-7541
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
