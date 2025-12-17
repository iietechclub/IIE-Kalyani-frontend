import Image from "next/image";
import {
  LuAward,
  LuBookOpen,
  LuMedal,
  // LuStar,
  // LuTrendingUp,
  LuTrophy,
  // LuUsers,
} from "react-icons/lu";
import { MotionDiv, MotionH2 } from "@/components/animated/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Achievements() {
  const studentAchievements = [
    {
      title: "First Prize - Smart India Hackathon 2024",
      winner: "Team CodeCrafters (CSE Department)",
      date: "November 2024",
      description: "Developed an AI-powered traffic management system.",
      icon: LuTrophy,
      category: "Competition",
    },
    {
      title: "Best Paper Award - IEEE Conference",
      winner: "Rahul Kumar & Priya Singh",
      date: "October 2024",
      description: "Research on Machine Learning in Healthcare.",
      icon: LuAward,
      category: "Research",
    },
    {
      title: "Gold Medal - State Level Sports Championship",
      winner: "Amit Sharma (ME Department)",
      date: "September 2024",
      description: "Athletics - 100m Sprint.",
      icon: LuMedal,
      category: "Sports",
    },
    {
      title: "Top 10 - NPTEL Online Course Completion",
      winner: "50+ Students",
      date: "August 2024",
      description: "Highest scorers in various NPTEL courses.",
      icon: LuBookOpen,
      category: "Academic",
    },
    {
      title: "Winner - Technical Quiz Competition",
      winner: "Neha Patel (ECE Department)",
      date: "July 2024",
      description: "Inter-college technical quiz championship.",
      icon: LuTrophy,
      category: "Competition",
    },
    {
      title: "Second Prize - Project Exhibition",
      winner: "IoT Team (EE Department)",
      date: "June 2024",
      description: "Smart Energy Management System.",
      icon: LuAward,
      category: "Project",
    },
  ];

  const _institutionalAchievements = [
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

  const _facultyAchievements = [
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
      className="mt-10 min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 text-gray-900 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 dark:text-gray-100"
      // biome-ignore lint/suspicious/noExplicitAny: dynamic property used
      style={{ ["--iie-primary" as any]: "#c53030" }}
    >
      {/* Hero Section */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden text-center md:h-[420px]">
        <div className="absolute inset-0">
          <Image
            fill
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1080"
            alt="Achievement Hero"
            className="size-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-(--iie-primary)/70 to-black/80" />
        </div>
        <MotionDiv
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="mb-4 font-bold text-4xl text-white md:text-5xl">
            Achievements & Excellence
          </h1>
          <p className="mx-auto max-w-2xl text-white/90">
            Celebrating the triumphs of our students, faculty, and the
            institution that make IIE Kalyani proud.
          </p>
        </MotionDiv>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        {/* Student Achievements */}
        <section>
          <MotionH2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center font-semibold text-(--iie-primary) text-3xl"
          >
            Student Achievements
          </MotionH2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studentAchievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <MotionDiv
                  key={achievement.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-lg transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-900/70">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div
                          className={`rounded-lg p-3 ${getCategoryColor(
                            achievement.category,
                          )} text-white`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-semibold text-lg">
                            {achievement.title}
                          </CardTitle>
                          <Badge
                            className="mt-2 bg-(--iie-primary) text-white"
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
                        <span className="font-medium">
                          {achievement.winner}
                        </span>
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {achievement.date}
                      </p>
                      <p className="text-gray-600 text-sm dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
