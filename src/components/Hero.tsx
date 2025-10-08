import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock, CheckCircle2, Activity, Star, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-8 md:pt-20">
      {/* Advanced MRI Scanner Animation with Teal Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Premium Royal Overlay with Sophisticated Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/30 to-slate-900/20 backdrop-blur-[1px]" />
        
        {/* Royal Gold Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        
        {/* Premium Corner Accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-amber-400/40 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-amber-400/40 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg" />
        
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

      <div className="container mx-auto px-4 relative z-10 py-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Left Aligned */}
          <div className="text-left space-y-4 md:space-y-8 animate-fade-in">
            {/* Premium Royal Badge */}
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 border border-amber-400/30 rounded-2xl backdrop-blur-xl shadow-2xl shadow-amber-400/20 hover:shadow-amber-400/30 transition-all duration-500 group">
              <div className="relative">
                <Activity className="w-6 h-6 text-amber-400 animate-pulse" />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md animate-ping" />
              </div>
              <span className="text-sm font-bold text-amber-400 tracking-wide uppercase">State-of-the-Art MRI Technology</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>

            {/* Premium Royal Heading */}
            <div className="space-y-6 md:space-y-8 max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="block text-white drop-shadow-2xl">Superior Quality &</span>
                <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Unrivaled Service
                </span>
                <span className="block text-white drop-shadow-2xl">You Can Depend On!</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light tracking-wide">
                Cutting-edge technology, the most knowledgeable physicians and radiologists, and fast accurate reports is what defines 
                <span className="text-amber-400 font-semibold"> ABQ MRI</span>.
              </p>
            </div>

            {/* Premium Royal CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button size="lg" variant="hero" className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold px-10 py-6 text-xl rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40 transition-all duration-500 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-3">
                  Schedule A Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              <Button size="lg" variant="logo" className="group relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-bold px-10 py-6 text-xl rounded-2xl border border-amber-400/30 hover:border-amber-400/60 shadow-2xl shadow-slate-800/30 hover:shadow-slate-700/40 transition-all duration-500 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Contact Us Today
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </div>

            {/* Premium Royal Contact Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 shadow-2xl shadow-slate-900/30 hover:shadow-amber-400/20 hover:scale-105">
                <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <MapPin className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-amber-400/20 rounded-2xl blur-md animate-pulse" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-2">Location</p>
                  <p className="text-slate-300 text-base font-medium">4630 Jefferson LN NE Suite B</p>
                  <p className="text-slate-300 text-base font-medium">Albuquerque, NM 87109</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 shadow-2xl shadow-slate-900/30 hover:shadow-amber-400/20 hover:scale-105">
                <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Phone className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-amber-400/20 rounded-2xl blur-md animate-pulse" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-2">Phone</p>
                  <p className="text-slate-300 text-base font-medium">(505) 501-7541</p>
                  <p className="text-amber-400 text-base font-bold">Call Now</p>
                </div>
              </div>
            </div>


            {/* Premium Royal Key Features */}
            <div className="flex flex-wrap gap-6 pt-8">
              {[
                { icon: Shield, text: "Board Certified Radiologists", color: "from-emerald-500 to-emerald-600" },
                { icon: Clock, text: "Same-Day Results Available", color: "from-blue-500 to-blue-600" },
                { icon: CheckCircle2, text: "All Insurance Accepted", color: "from-green-500 to-green-600" },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-slate-900/30 hover:shadow-amber-400/20"
                >
                  <div className={`relative p-3 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-md animate-pulse" />
                  </div>
                  <span className="font-bold text-white text-base group-hover:text-amber-400 transition-colors duration-300">{feature.text}</span>
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
