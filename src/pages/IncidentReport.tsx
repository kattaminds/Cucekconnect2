
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";
import { AlertTriangle, Building, Calendar, Clock, MapPin, Send } from "lucide-react";

const IncidentReport = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Incident Report</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Report campus issues or incidents to ensure a safe and functional environment for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Report an Incident</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="incidentType" className="block text-sm font-medium mb-2">
                      Incident Type
                    </label>
                    <select
                      id="incidentType"
                      className="w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    >
                      <option value="" disabled selected>Select incident type</option>
                      <option value="maintenance">Maintenance Issue</option>
                      <option value="security">Security Concern</option>
                      <option value="hazard">Safety Hazard</option>
                      <option value="cleanliness">Cleanliness Issue</option>
                      <option value="noise">Noise Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <select
                          id="location"
                          className="w-full pl-10 rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                        >
                          <option value="" disabled selected>Select building</option>
                          <option value="admin">Administration Building</option>
                          <option value="library">Library</option>
                          <option value="sciencelab">Science Lab</option>
                          <option value="computerlab">Computer Lab</option>
                          <option value="studentcenter">Student Center</option>
                          <option value="dorm">Dormitories</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="specificLocation" className="block text-sm font-medium mb-2">
                        Specific Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <input
                          type="text"
                          id="specificLocation"
                          placeholder="Room number, floor, area, etc."
                          className="w-full pl-10 rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">
                        Date of Incident
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <input
                          type="date"
                          id="date"
                          className="w-full pl-10 rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-2">
                        Time of Incident
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <input
                          type="time"
                          id="time"
                          className="w-full pl-10 rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      placeholder="Please provide a detailed description of the incident or issue..."
                      className="w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="photo" className="block text-sm font-medium mb-2">
                      Attach Photo (optional)
                    </label>
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      className="w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="anonymous"
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="anonymous" className="text-sm">
                      Submit this report anonymously
                    </label>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Report
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="glass-card rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Reporting Guidelines</h3>
                <ul className="text-sm text-muted-foreground space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Be as specific as possible about the location and nature of the incident
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Include photos if available to help maintenance staff assess the issue
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    For urgent safety concerns, please call campus security directly
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Reports are tracked and you can check their status using the reference number
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Emergency Contacts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Campus Security</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium">Maintenance</p>
                    <p className="text-muted-foreground">+1 (555) 765-4321</p>
                  </div>
                  <div>
                    <p className="font-medium">IT Support</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                  <div className="pt-2">
                    <button className="btn-outline w-full py-2 text-sm">
                      View All Contacts
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Report Status</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check the status of your previously submitted reports.
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Enter report reference number"
                    className="w-full rounded-md border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="btn-secondary w-full py-2 text-sm">
                    Check Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default IncidentReport;
