
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <div
      className={cn(
        "relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center justify-center",
        className
      )}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <img 
              src="/assets/cuceklogo.png" 
              alt="CUCEK Logo" 
              className="h-20 md:h-24 mx-auto" 
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-down">
            Welcome to CUCEK
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-slide-down" style={{ animationDelay: "100ms" }}>
            Your all-in-one digital campus companion. Navigate college life with ease and stay connected to essential services.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-slide-down" style={{ animationDelay: "200ms" }}>
            <Link 
              to="/campus-map" 
              className="btn-primary"
            >
              Explore Campus Map
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              to="/doubt-forum" 
              className="btn-outline border-white text-white hover:bg-white/20"
            >
              Join Doubt Forum
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
