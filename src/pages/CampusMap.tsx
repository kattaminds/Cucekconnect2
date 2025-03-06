
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";
import { Map, Info } from "lucide-react";

const CampusMap = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Map className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Campus Map</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive map with real-time information on building occupancy, available study spaces, and event locations.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border mb-8">
            <div className="aspect-[4/3] md:aspect-[16/9] w-full relative">
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1QsAERbGgnr-MHt-BAeS4v8rwnEdmbAc&ehbc=2E312F" 
                width="100%" 
                height="100%" 
                className="absolute inset-0"
                title="CUCEK Campus Map"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-4 flex items-start space-x-3 mb-8">
            <div className="shrink-0">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">How to use the map</h3>
              <p className="text-sm text-muted-foreground">
                Pan and zoom to navigate the campus. Click on buildings for more information about occupancy, available study spaces, and ongoing events.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Building Occupancy</h3>
              <p className="text-sm text-muted-foreground">
                Check real-time occupancy levels for various campus buildings.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Study Spaces</h3>
              <p className="text-sm text-muted-foreground">
                Find available study areas, group rooms, and quiet zones.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Event Locations</h3>
              <p className="text-sm text-muted-foreground">
                See where current and upcoming campus events are taking place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CampusMap;
