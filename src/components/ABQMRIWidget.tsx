import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  X, 
  ChevronUp, 
  ChevronDown,
  Clock,
  Shield,
  Star,
  Zap
} from "lucide-react";

const ABQMRIWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const quickActions = [
    {
      icon: Phone,
      label: "Call Now",
      action: () => window.open("tel:5055017541"),
      color: "from-emerald-500 to-emerald-600",
      description: "Speak with our team"
    },
    {
      icon: Calendar,
      label: "Schedule",
      action: () => window.open("https://calendly.com/abqmri", "_blank"),
      color: "from-blue-500 to-blue-600",
      description: "Book appointment"
    },
    {
      icon: MapPin,
      label: "Directions",
      action: () => window.open("https://www.google.com/maps/place/ABQ+MRI+%7C+MRI,+X-Ray,+NCV,+EEG+Facility+In+Albuquerque,+NM/@35.133515,-106.5920335,17z", "_blank"),
      color: "from-amber-500 to-amber-600",
      description: "Get directions"
    },
    {
      icon: MessageCircle,
      label: "Contact",
      action: () => window.open("mailto:info@abqmri.com", "_blank"),
      color: "from-purple-500 to-purple-600",
      description: "Send message"
    }
  ];

  const features = [
    { icon: Shield, text: "Board Certified", color: "text-emerald-400" },
    { icon: Clock, text: "Same Day Results", color: "text-blue-400" },
    { icon: Star, text: "5-Star Rated", color: "text-amber-400" },
    { icon: Zap, text: "Fast Service", color: "text-purple-400" }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Widget Container */}
      <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl shadow-slate-900/50 border border-amber-400/20 backdrop-blur-xl transition-all duration-500 ${
        isExpanded ? 'w-80 h-96' : 'w-16 h-16'
      }`}>
        
        {/* Widget Header - Always Visible */}
        <div className="flex items-center justify-between p-4">
          {!isExpanded ? (
            <button
              onClick={() => setIsExpanded(true)}
              className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative">
                <Phone className="w-6 h-6 text-white animate-pulse" />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-ping" />
              </div>
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">ABQ MRI</h3>
                <p className="text-amber-400 text-sm font-medium">Advanced Diagnostic Imaging</p>
              </div>
            </div>
          )}
          
          {isExpanded && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 text-slate-400 hover:text-red-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="px-4 pb-4 space-y-4 animate-fade-in">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-white text-xs font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-sm mb-3">Quick Actions</h4>
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-slate-700/50 hover:to-slate-600/50 rounded-xl border border-slate-600/30 hover:border-amber-400/40 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-semibold text-sm">{action.label}</p>
                    <p className="text-slate-400 text-xs">{action.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-xl p-4 border border-amber-400/20">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-white font-bold text-sm">(505) 501-7541</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300 text-xs">4630 Jefferson LN NE Suite B</span>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-3 border border-red-400/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                <span className="text-white text-xs font-semibold">24/7 Emergency Services Available</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Animation Ring */}
      <div className="absolute inset-0 rounded-3xl border border-amber-400/30 animate-ping" />
    </div>
  );
};

export default ABQMRIWidget;
