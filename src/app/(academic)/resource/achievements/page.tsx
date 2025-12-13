import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Award,
  Medal,
  TrendingUp,
  Users,
  BookOpen,
  Star,
} from "lucide-react";

export default function Achievements() {
  const studentAchievements = [
    {
      title: "First Prize - Smart India Hackathon 2024",
      winner: "Team CodeCrafters (CSE Department)",
      date: "November 2024",
      description: "Developed an AI-powered traffic management system.",
      icon: Trophy,
      category: "Competition",
    },
    {
      title: "Best Paper Award - IEEE Conference",
      winner: "Rahul Kumar & Priya Singh",
      date: "October 2024",
      description: "Research on Machine Learning in Healthcare.",
      icon: Award,
      category: "Research",
    },
    {
      title: "Gold Medal - State Level Sports Championship",
      winner: "Amit Sharma (ME Department)",
      date: "September 2024",
      description: "Athletics - 100m Sprint.",
      icon: Medal,
      category: "Sports",
    },
    {
      title: "Top 10 - NPTEL Online Course Completion",
      winner: "50+ Students",
      date: "August 2024",
      description: "Highest scorers in various NPTEL courses.",
      icon: BookOpen,
      category: "Academic",
    },
    {
      title: "Winner - Technical Quiz Competition",
      winner: "Neha Patel (ECE Department)",
      date: "July 2024",
      description: "Inter-college technical quiz championship.",
      icon: Trophy,
      category: "Competition",
    },
    {
      title: "Second Prize - Project Exhibition",
      winner: "IoT Team (EE Department)",
      date: "June 2024",
      description: "Smart Energy Management System.",
      icon: Award,
      category: "Project",
    },
  ];

  const institutionalAchievements = [
    {
      title: "NAAC A Grade Accreditation",
      year: "2024",
      description: "Received A grade in NAAC accreditation with high scores.",
    },
    {
      title: "95% Placement Record",
      year: "2024",
      description: "Achieved the highest placement percentage in the region.",
    },
    {
      title: "Best Engineering College Award",
      year: "2023",
      description: "Recognized by the Education Excellence Awards.",
    },
    {
      title: "Industry Collaboration Excellence",
      year: "2023",
      description:
        "Partnered with 20+ leading companies for training and placements.",
    },
  ];

  const facultyAchievements = [
    {
      name: "Dr. Rajesh Kumar",
      achievement: "Published 5 research papers in top-tier journals.",
      year: "2024",
    },
    {
      name: "Dr. Priya Sharma",
      achievement: "Received Best Teacher Award by MAKAUT.",
      year: "2024",
    },
    {
      name: "Prof. Amit Patel",
      achievement: "Won prestigious research grant worth ₹10 lakhs.",
      year: "2023",
    },
    {
      name: "Dr. Sneha Gupta",
      achievement: "Completed PhD and received University Gold Medal.",
      year: "2023",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Competition":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      case "Research":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Sports":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Academic":
        return "bg-gradient-to-r from-orange-500 to-yellow-500";
      case "Project":
        return "bg-gradient-to-r from-purple-500 to-indigo-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className="min-h-screen mt-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100"
      style={{ ["--iie-primary" as any]: "#c53030" }}
    >
      {/* Hero Section */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1080"
            alt="Achievement Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--iie-primary)]/70 to-black/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Excellence
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Celebrating the triumphs of our students, faculty, and the
            institution that make IIE Kalyani proud.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Student Achievements */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-center mb-10 text-[var(--iie-primary)]"
          >
            Student Achievements
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentAchievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-3 rounded-lg ${getCategoryColor(
                            achievement.category
                          )} text-white`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold">
                            {achievement.title}
                          </CardTitle>
                          <Badge
                            className="mt-2 bg-[var(--iie-primary)] text-white"
                            variant="outline"
                          >
                            {achievement.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Winner:</span>{" "}
                        <span className="font-medium">{achievement.winner}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.date}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

     
    </div>
  );
}
