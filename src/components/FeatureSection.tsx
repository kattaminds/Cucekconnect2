
import { Book, Map, Users, Coffee, AlertTriangle, Bell, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: "Campus Map",
    description: "Interactive map with real-time information on building occupancy and available study spaces.",
    link: "/campus-map",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Study Groups",
    description: "Find or create study groups with fellow students for collaborative learning.",
    link: "/study-groups",
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
    title: "Anonymous Doubt Forum",
    description: "Ask questions and get answers while maintaining your privacy.",
    link: "/doubt-forum",
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary" />,
    title: "Food Delivery",
    description: "Order food from campus cafeterias and local restaurants.",
    link: "/food-delivery",
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-primary" />,
    title: "Incident Report",
    description: "Report incidents or issues on campus for quick resolution.",
    link: "/incident-report",
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Emergency Alerts",
    description: "Stay informed about campus emergencies and important announcements.",
    link: "/emergency",
  },
  {
    icon: <Book className="h-10 w-10 text-primary" />,
    title: "Automated Library",
    description: "Check book availability, reserve books, and receive return reminders.",
    link: "/library",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all the digital services you need for a seamless campus experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="feature-card group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
