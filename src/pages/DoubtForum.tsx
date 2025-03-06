
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";
import { MessageCircle, ThumbsUp, Search, ArrowUp, Eye } from "lucide-react";

const DoubtForum = () => {
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
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Anonymous Doubt Forum</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask questions and get answers while maintaining your privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search for questions or topics..."
                    className="w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All Topics", "Mathematics", "Computer Science", "Electronics", "Chemistry", "Economics"].map((tag, i) => (
                    <button 
                      key={i} 
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        i === 0 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary hover:bg-secondary/70 text-secondary-foreground"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="glass-card rounded-xl p-6 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center space-y-2">
                      <button className="p-1 rounded-full hover:bg-secondary">
                        <ArrowUp className="h-6 w-6 text-muted-foreground" />
                      </button>
                      <span className="font-medium text-sm">{Math.floor(Math.random() * 50) + 5}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        {[
                          "How to solve this differential equation?",
                          "Understanding memory allocation in C++",
                          "Help with transistor bias calculations",
                          "Confusion about electron configurations",
                          "Best approach for a greedy algorithm problem"
                        ][index - 1]}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {[
                          "I've been stuck on this problem for hours: dy/dx + 2y = x^2 with y(0) = 1. Can someone explain the step-by-step solution?",
                          "I'm confused about when to use malloc vs new, and how to properly free memory to avoid leaks. Any clear examples?",
                          "In this common emitter configuration, I'm not sure how to calculate the correct resistor values for proper biasing.",
                          "Why does the 4s orbital fill before the 3d in transition metals? The explanation in class didn't make sense to me.",
                          "For this coin change problem, I tried using a greedy approach but it fails for certain inputs. What am I missing?"
                        ][index - 1]}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {[
                          ["Calculus", "Differential Equations"],
                          ["C++", "Memory Management", "Programming"],
                          ["Electronics", "Transistors", "Circuit Analysis"],
                          ["Chemistry", "Atomic Structure"],
                          ["Algorithms", "Computer Science", "Problem Solving"]
                        ][index - 1].map((tag, i) => (
                          <span key={i} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {Math.floor(Math.random() * 10) + 2} answers
                          </span>
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {Math.floor(Math.random() * 100) + 20} views
                          </span>
                        </div>
                        <span>Posted {["2 hours", "1 day", "4 hours", "3 days", "12 hours"][index - 1]} ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="glass-card rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Ask a Question</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your identity will remain anonymous. Focus on clear, specific questions for better answers.
                </p>
                <button className="btn-primary w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Post New Question
                </button>
              </div>

              <div className="glass-card rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Popular Topics</h3>
                <div className="space-y-3">
                  {["Calculus", "Programming", "Circuit Design", "Organic Chemistry", "Data Structures", "Physics Mechanics"].map((topic, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm">{topic}</span>
                      <span className="bg-secondary text-xs px-2 py-0.5 rounded-full">
                        {Math.floor(Math.random() * 100) + 20}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Forum Guidelines</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Be respectful and constructive in all interactions</li>
                  <li>• Clearly describe your problem or question</li>
                  <li>• Include relevant context or code snippets</li>
                  <li>• Search before posting to avoid duplicates</li>
                  <li>• Use appropriate tags to categorize your question</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DoubtForum;
