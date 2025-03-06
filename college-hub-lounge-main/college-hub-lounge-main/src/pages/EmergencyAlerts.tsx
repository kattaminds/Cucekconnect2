
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";
import { Bell, Siren, Volume2, Shield, Phone, Clock, AlertTriangle } from "lucide-react";

const EmergencyAlerts = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const alerts = [
    {
      type: "Weather",
      title: "Heavy Rain Advisory",
      description: "Heavy rain expected this afternoon. Possible flooding in low-lying areas of campus.",
      time: "Today, 8:30 AM",
      severity: "medium",
      icon: <Volume2 className="h-5 w-5" />
    },
    {
      type: "Maintenance",
      title: "Power Outage: Engineering Building",
      description: "Scheduled power outage in the Engineering Building from 2PM-4PM for electrical maintenance.",
      time: "Today, 7:15 AM",
      severity: "low",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      type: "Safety",
      title: "Fire Alarm Test",
      description: "Routine fire alarm testing in all academic buildings tomorrow between 9AM-11AM.",
      time: "Yesterday, 3:00 PM",
      severity: "info",
      icon: <Bell className="h-5 w-5" />
    },
    {
      type: "Security",
      title: "Campus Perimeter Check",
      description: "Security will be conducting routine perimeter checks tonight. Increased security presence is expected.",
      time: "Yesterday, 10:30 AM",
      severity: "info",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const emergencyContacts = [
    { name: "Campus Security", number: "(555) 123-4567" },
    { name: "Health Center", number: "(555) 234-5678" },
    { name: "Local Police", number: "911" },
    { name: "Fire Department", number: "911" },
    { name: "Mental Health Hotline", number: "(555) 456-7890" }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Alerts</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about campus emergencies and important announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Current Alerts</h2>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Updated 5 min ago
                  </span>
                </div>

                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div 
                      key={index} 
                      className={`rounded-lg p-4 border-l-4 ${
                        alert.severity === "high" 
                          ? "border-l-red-500 bg-red-50" 
                          : alert.severity === "medium"
                            ? "border-l-orange-500 bg-orange-50"
                            : alert.severity === "low"
                              ? "border-l-yellow-500 bg-yellow-50"
                              : "border-l-blue-500 bg-blue-50"
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full mr-4 shrink-0 ${
                          alert.severity === "high" 
                            ? "bg-red-100" 
                            : alert.severity === "medium"
                              ? "bg-orange-100"
                              : alert.severity === "low"
                                ? "bg-yellow-100"
                                : "bg-blue-100"
                        }`}>
                          {alert.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between mb-1">
                            <span className="text-xs font-medium bg-black/5 px-2 py-0.5 rounded">
                              {alert.type}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {alert.time}
                            </span>
                          </div>
                          <h3 className="text-base font-medium mb-1">{alert.title}</h3>
                          <p className="text-sm text-muted-foreground">{alert.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-6 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Showing 4 of 12 alerts
                  </span>
                  <button className="btn-outline text-sm py-1.5">
                    View All Alerts
                  </button>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-6">Emergency Procedures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <span className="bg-red-100 p-1.5 rounded-full mr-2">
                        <Siren className="h-4 w-4 text-red-600" />
                      </span>
                      Fire Emergency
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Activate nearest fire alarm</li>
                      <li>• Evacuate using stairs, not elevators</li>
                      <li>• Close doors behind you</li>
                      <li>• Move to designated assembly point</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <span className="bg-blue-100 p-1.5 rounded-full mr-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </span>
                      Shelter in Place
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Move to interior room</li>
                      <li>• Lock and barricade doors</li>
                      <li>• Turn off lights and stay quiet</li>
                      <li>• Silence mobile devices</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <span className="bg-yellow-100 p-1.5 rounded-full mr-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      </span>
                      Severe Weather
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Move to lowest floor</li>
                      <li>• Stay away from windows</li>
                      <li>• Take cover under sturdy furniture</li>
                      <li>• Monitor emergency alerts</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <span className="bg-green-100 p-1.5 rounded-full mr-2">
                        <Phone className="h-4 w-4 text-green-600" />
                      </span>
                      Medical Emergency
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Call campus security immediately</li>
                      <li>• Send someone to meet responders</li>
                      <li>• Do not move the person</li>
                      <li>• Only provide aid if trained</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="btn-primary">
                    Download Complete Emergency Guide
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Notification Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Email Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive alerts via email</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-secondary">
                      <input type="checkbox" id="email-toggle" className="peer sr-only" defaultChecked />
                      <label
                        htmlFor="email-toggle"
                        className="absolute inset-0 rounded-full bg-secondary cursor-pointer peer-checked:bg-primary transition-colors duration-300"
                      >
                        <span className="absolute inset-y-0 left-0 w-6 h-6 rounded-full bg-white translate-x-0 peer-checked:translate-x-6 transition-transform duration-300"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">SMS Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive alerts via text message</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-secondary">
                      <input type="checkbox" id="sms-toggle" className="peer sr-only" defaultChecked />
                      <label
                        htmlFor="sms-toggle"
                        className="absolute inset-0 rounded-full bg-secondary cursor-pointer peer-checked:bg-primary transition-colors duration-300"
                      >
                        <span className="absolute inset-y-0 left-0 w-6 h-6 rounded-full bg-white translate-x-0 peer-checked:translate-x-6 transition-transform duration-300"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Push Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive alerts on this device</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-secondary">
                      <input type="checkbox" id="push-toggle" className="peer sr-only" defaultChecked />
                      <label
                        htmlFor="push-toggle"
                        className="absolute inset-0 rounded-full bg-secondary cursor-pointer peer-checked:bg-primary transition-colors duration-300"
                      >
                        <span className="absolute inset-y-0 left-0 w-6 h-6 rounded-full bg-white translate-x-0 peer-checked:translate-x-6 transition-transform duration-300"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-medium text-sm mb-3">Alert Types</p>
                  <div className="space-y-2">
                    {["Emergency Alerts", "Weather Advisories", "Security Notices", "Campus Closures", "Maintenance Updates"].map((type, i) => (
                      <div key={i} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`type-${i}`} 
                          defaultChecked={i < 3} 
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`type-${i}`} className="ml-2 text-sm text-muted-foreground">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn-primary w-full py-2 text-sm">
                    Save Preferences
                  </button>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Emergency Contacts</h3>
                
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <span className="font-medium text-sm">{contact.name}</span>
                      <a 
                        href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                        className="flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default EmergencyAlerts;
