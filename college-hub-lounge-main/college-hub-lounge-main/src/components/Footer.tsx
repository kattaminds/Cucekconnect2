
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/assets/cuceklogo.png"
                alt="CUCEK Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-semibold text-lg">CUCEK</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Providing quality education and campus services to help students excel.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/campus-map" className="text-muted-foreground hover:text-primary text-sm">
                  Campus Map
                </Link>
              </li>
              <li>
                <Link to="/library" className="text-muted-foreground hover:text-primary text-sm">
                  Library
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-muted-foreground hover:text-primary text-sm">
                  Emergency
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/study-groups" className="text-muted-foreground hover:text-primary text-sm">
                  Study Groups
                </Link>
              </li>
              <li>
                <Link to="/doubt-forum" className="text-muted-foreground hover:text-primary text-sm">
                  Doubt Forum
                </Link>
              </li>
              <li>
                <Link to="/food-delivery" className="text-muted-foreground hover:text-primary text-sm">
                  Food Delivery
                </Link>
              </li>
              <li>
                <Link to="/incident-report" className="text-muted-foreground hover:text-primary text-sm">
                  Incident Report
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-2">
              <p>CUCEK Campus</p>
              <p>Kerala, India</p>
              <p>Email: info@cucek.edu</p>
              <p>Phone: +91 123 456 7890</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} CUCEK. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> for CUCEK students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
