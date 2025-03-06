
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";
import { Coffee, Clock, Star, Search, ShoppingBag, MapPin } from "lucide-react";

const FoodDelivery = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const restaurants = [
    {
      name: "Campus Café",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      deliveryTime: "10-15",
      tags: ["Coffee", "Sandwiches", "Breakfast"],
      location: "Student Center"
    },
    {
      name: "Tech Bites",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      deliveryTime: "15-20",
      tags: ["Burgers", "Fries", "Shakes"],
      location: "Engineering Building"
    },
    {
      name: "Green Leaf",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      deliveryTime: "15-25",
      tags: ["Salads", "Healthy", "Vegan"],
      location: "Life Sciences Building"
    },
    {
      name: "Spice Junction",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      deliveryTime: "20-30",
      tags: ["Indian", "Curry", "Spicy"],
      location: "Off Campus - 0.5 miles"
    },
    {
      name: "Pizza Plaza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      rating: 4.3,
      deliveryTime: "25-35",
      tags: ["Pizza", "Italian", "Fast Food"],
      location: "Off Campus - 0.8 miles"
    },
    {
      name: "Wok This Way",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      deliveryTime: "20-30",
      tags: ["Chinese", "Asian", "Noodles"],
      location: "Off Campus - 1.2 miles"
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Food Delivery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Order food from campus cafeterias and local restaurants, delivered right to your location.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for food, restaurants, cuisines..."
                  className="w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <select className="rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                <option>Sort by: Recommended</option>
                <option>Fastest Delivery</option>
                <option>Top Rated</option>
                <option>Distance</option>
              </select>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "On Campus", "Fast Delivery", "Healthy", "Vegetarian", "Breakfast", "Lunch", "Dinner"].map((filter, i) => (
              <button 
                key={i} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary hover:bg-secondary/70 text-secondary-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden transition-transform hover:-translate-y-1">
                <div className="relative h-48">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.tags.map((tag, i) => (
                      <span key={i} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{restaurant.deliveryTime} min</span>
                    </div>
                    <button className="btn-primary py-1.5 px-3 text-sm">
                      <ShoppingBag className="h-4 w-4 mr-1" />
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-3">Don't see what you're looking for?</p>
            <button className="btn-outline">View All Restaurants</button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FoodDelivery;
