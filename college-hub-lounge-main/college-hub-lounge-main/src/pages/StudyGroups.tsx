
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";
import { Users, Search, Calendar, Clock, BookOpen } from "lucide-react";

const StudyGroups = () => {
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
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Study Groups</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow students, form study groups, and collaborate on course materials.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search for study groups by course, topic, or name..."
                className="w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">
                      {["Calculus I", "Data Structures", "Organic Chemistry", "Digital Logic", "Microeconomics", "Algorithm Analysis"][index - 1]} Study Group
                    </h3>
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                      {["Mathematics", "Computer Science", "Chemistry", "Electronics", "Economics", "Computer Science"][index - 1]}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {[
                      "Group focused on solving complex calculus problems and preparing for the midterm exam.",
                      "Discussing implementation of various data structures and algorithm complexity.",
                      "Reviewing reaction mechanisms and preparing for laboratory sessions.",
                      "Working through digital circuit designs and boolean algebra simplifications.",
                      "Analyzing economic models and solving problem sets together.",
                      "Deep diving into algorithm design techniques and optimization strategies."
                    ][index - 1]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Week 5", "Problem Sets", "Chapter 3-4"].map((tag, i) => (
                      <span key={i} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{Math.floor(Math.random() * 8) + 3}/10 Members</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Next: Today</span>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/50 p-4 flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {["3:00 PM", "5:30 PM", "2:00 PM", "4:15 PM", "1:00 PM", "6:00 PM"][index - 1]} - {["5:00 PM", "7:30 PM", "4:00 PM", "6:15 PM", "3:00 PM", "8:00 PM"][index - 1]}
                    </span>
                  </div>
                  <button className="btn-primary py-1.5 px-4 text-sm">
                    Join Group
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Create Your Own Study Group</h2>
            <p className="text-muted-foreground mb-4">
              Don't see a group for your course or topic? Start your own and invite classmates!
            </p>
            <button className="btn-primary">
              <BookOpen className="mr-2 h-5 w-5" />
              Create New Study Group
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StudyGroups;
