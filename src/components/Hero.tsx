import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock, CheckCircle2, Activity, Star, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 pt-16 md:pt-20">
      {/* Advanced MRI Scanner Animation with Teal Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Enhanced White Overlay with Depth */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]" />
        
        {/* Advanced Orange & Teal Scan Lines */}
        <div className="absolute w-full h-3 bg-gradient-to-r from-transparent via-orange-500/70 to-transparent animate-mri-orange-scan" style={{ transform: 'rotateX(60deg)' }} />
        <div className="absolute w-full h-2 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent animate-mri-teal-scan" style={{ transform: 'rotateX(60deg)', animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent animate-mri-orange-scan" style={{ transform: 'rotateX(60deg)', animationDelay: '1.5s', animationDuration: '3.5s' }} />
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent animate-mri-teal-scan" style={{ transform: 'rotateX(60deg)', animationDelay: '2s', animationDuration: '4s' }} />
        
        {/* Enhanced Grid Pattern with Teal Accents */}
        <div className="absolute inset-0 opacity-8" style={{ transform: 'rotateX(60deg)' }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(20 75% 60% / 0.15) 1px, transparent 1px),
              linear-gradient(hsl(20 75% 60% / 0.15) 1px, transparent 1px),
              linear-gradient(45deg, hsl(180 35% 45% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}></div>
        </div>
        
        {/* Magnetic Field Lines - Teal & Orange */}
        <div className="absolute inset-0" style={{ transform: 'rotateX(60deg)' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={`field-${i}`}
              className={`absolute w-1 h-20 rounded-full animate-mri-field-line ${
                i % 2 === 0 ? 'bg-gradient-to-b from-teal-500/30 to-teal-300/20' : 'bg-gradient-to-b from-orange-500/30 to-orange-300/20'
              }`}
              style={{
                left: `${15 + (i * 7)}%`,
                top: `${20 + (i * 3)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i * 0.2)}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Data Particles - Mixed Colors */}
        <div className="absolute inset-0" style={{ transform: 'rotateX(60deg)' }}>
          {[...Array(16)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className={`absolute w-2 h-2 rounded-full animate-mri-3d-particle ${
                i % 3 === 0 ? 'bg-teal-500/50' : 
                i % 3 === 1 ? 'bg-orange-500/50' : 
                'bg-gradient-to-r from-teal-400/60 to-orange-400/60'
              }`}
              style={{
                left: `${10 + (i * 5)}%`,
                top: `${25 + (i * 4)}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i * 0.3)}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Data Streams */}
        <div className="absolute inset-0" style={{ transform: 'rotateX(60deg)' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className={`absolute w-1 h-16 rounded-full animate-mri-data-stream ${
                i % 2 === 0 ? 'bg-teal-400/40' : 'bg-orange-400/40'
              }`}
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i * 6)}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + (i * 0.4)}s`
              }}
            />
          ))}
        </div>
        
        {/* 3D Scanner Tunnel Rings */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateX(60deg)' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={`ring-${i}`}
              className={`absolute w-32 h-32 border-2 rounded-full animate-mri-tunnel-ring ${
                i % 2 === 0 ? 'border-teal-500/30' : 'border-orange-500/30'
              }`}
              style={{
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + (i * 0.5)}s`,
                transform: `scale(${0.5 + (i * 0.3)})`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Ambient Glow - Dual Color */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-mri-3d-ambient" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/6 rounded-full blur-2xl animate-mri-teal-glow" style={{ animationDelay: '1s' }} />
        
        {/* Magnetic Field Visualization */}
        <div className="absolute inset-0" style={{ transform: 'rotateX(60deg)' }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={`magnetic-${i}`}
              className="absolute w-0.5 h-12 bg-gradient-to-b from-teal-400/20 via-orange-400/30 to-teal-400/20 rounded-full animate-mri-magnetic-field"
              style={{
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + (i * 2)}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${4 + (i * 0.1)}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Anatomical Structures */}
        <div className="absolute inset-0" style={{ transform: 'rotateX(60deg)' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={`anatomy-${i}`}
              className={`absolute w-8 h-8 rounded-full animate-mri-3d-anatomy ${
                i % 2 === 0 ? 'bg-teal-400/30' : 'bg-orange-400/30'
              }`}
              style={{
                left: `${25 + (i * 12)}%`,
                top: `${40 + (i * 8)}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + (i * 0.3)}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Lighting Effects */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-400/10 rounded-full blur-xl animate-mri-3d-lighting" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-400/10 rounded-full blur-xl animate-mri-3d-lighting" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Left Aligned */}
          <div className="text-left space-y-6 md:space-y-8 animate-fade-in">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 border border-primary/30 rounded-full backdrop-blur-md shadow-lg">
              <Activity className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary">State-of-the-Art MRI Technology</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 md:space-y-6 max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight text-slate-800">
                <span className="text-slate-800">Superior Quality &</span>
                <br />
                <span className="text-primary">Unrivaled Service</span>
                <br />
                <span className="text-slate-800">You Can Depend On!</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Cutting edge technology, the most knowledgeable physicians and radiologists, and fast accurate reports is what defines ABQ MRI.
              </p>
            </div>

            {/* CTA Buttons - Left Aligned */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="hero" className="gap-3 group px-8 py-6 text-lg font-semibold w-full sm:w-auto">
                Schedule A Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="logo" className="gap-3 px-8 py-6 text-lg font-semibold w-full sm:w-auto">
                <Calendar className="w-6 h-6" />
                Contact Us Today
              </Button>
            </div>

            {/* Contact Info Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 md:pt-8">
              <div className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-primary/50 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-logo rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-lg">Location</p>
                  <p className="text-slate-600 text-sm">4630 Jefferson LN NE Suite B</p>
                  <p className="text-slate-600 text-sm">Albuquerque, NM 87109</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-primary/50 transition-all duration-300 shadow-lg">
                <div className="w-12 h-12 bg-gradient-logo rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-lg">Phone</p>
                  <p className="text-slate-600 text-sm">(505) 501-7541</p>
                  <p className="text-primary text-sm font-medium">Call Now</p>
                </div>
              </div>
            </div>


            {/* Key Features */}
            <div className="flex flex-wrap gap-4 pt-6 md:pt-8">
              {[
                { icon: Shield, text: "Board Certified Radiologists" },
                { icon: Clock, text: "Same-Day Results Available" },
                { icon: CheckCircle2, text: "All Insurance Accepted" },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-primary transition-colors">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
