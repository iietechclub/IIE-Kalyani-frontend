import { MotionDiv, MotionH2 } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";
import GithubImage from "@/components/GithubImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchAchievementsPageData } from "@/dal/achievements";

export default async function Achievements() {
  const { student_achievements } = await fetchAchievementsPageData();
  // const studentAchievements = [
  //   {
  //     title: "First Prize - Smart India Hackathon 2024",
  //     winner: "Team CodeCrafters (CSE Department)",
  //     date: "November 2024",
  //     description: "Developed an AI-powered traffic management system.",
  //     icon: LuTrophy,
  //     category: "Competition",
  //   },
  //   {
  //     title: "Best Paper Award - IEEE Conference",
  //     winner: "Rahul Kumar & Priya Singh",
  //     date: "October 2024",
  //     description: "Research on Machine Learning in Healthcare.",
  //     icon: LuAward,
  //     category: "Research",
  //   },
  //   {
  //     title: "Gold Medal - State Level Sports Championship",
  //     winner: "Amit Sharma (ME Department)",
  //     date: "September 2024",
  //     description: "Athletics - 100m Sprint.",
  //     icon: LuMedal,
  //     category: "Sports",
  //   },
  //   {
  //     title: "Top 10 - NPTEL Online Course Completion",
  //     winner: "50+ Students",
  //     date: "August 2024",
  //     description: "Highest scorers in various NPTEL courses.",
  //     icon: LuBookOpen,
  //     category: "Academic",
  //   },
  //   {
  //     title: "Winner - Technical Quiz Competition",
  //     winner: "Neha Patel (ECE Department)",
  //     date: "July 2024",
  //     description: "Inter-college technical quiz championship.",
  //     icon: LuTrophy,
  //     category: "Competition",
  //   },
  //   {
  //     title: "Second Prize - Project Exhibition",
  //     winner: "IoT Team (EE Department)",
  //     date: "June 2024",
  //     description: "Smart Energy Management System.",
  //     icon: LuAward,
  //     category: "Project",
  //   },
  // ];

  return (
    <div
      className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      // biome-ignore lint/suspicious/noExplicitAny: dynamic property used
      style={{ ["--iie-primary" as any]: "#c53030" }}
    >
      {/* Hero Section */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden text-center md:h-[420px]">
        <div className="absolute inset-0">
          <GithubImage
            fill
            src="(academic)/resource/achievements/banner.jpg"
            alt="Achievement Hero"
            className="size-full object-cover opacity-40"
            preload
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
            {student_achievements.map((achievement) => (
              <MotionDiv
                key={achievement.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-lg transition hover:shadow-lg">
                  <CardHeader className="relative h-52">
                    <BackendImage
                      fill
                      src={achievement.image.url}
                      alt="Achievement showcase"
                      className="object-cover"
                    />
                  </CardHeader>
                  <CardContent className="relative space-y-2">
                    <CardTitle className="font-semibold text-lg">
                      {achievement.title}
                    </CardTitle>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Winner:</span>{" "}
                      <span className="font-medium">{achievement.winner}</span>
                    </p>

                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>

                    <p className="absolute right-4 bottom-2 bg-white text-muted-foreground text-sm">
                      {achievement.date}
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
