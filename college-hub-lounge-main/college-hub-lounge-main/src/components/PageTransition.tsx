
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className 
}) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Remove any existing animation classes
    if (pageRef.current) {
      pageRef.current.classList.remove('opacity-0', 'animate-fade-in');
      
      // Force a reflow
      void pageRef.current.offsetWidth;
      
      // Add the animation classes
      pageRef.current.classList.add('animate-fade-in');
    }
  }, [location.pathname]);

  return (
    <div 
      ref={pageRef} 
      className={cn(
        "page-transition-wrapper animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageTransition;
