import {
  LuAward,
  LuExternalLink,
  LuGithub,
  LuLightbulb,
  LuPlay,
} from "react-icons/lu";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/scroll-reveal";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function StudentCreationSection() {
  const projects = [
    {
      title: "Smart Campus Management System",
      category: "Web Development",
      description:
        "An integrated platform for managing student attendance, academics, and campus facilities with real-time notifications.",
      image:
        "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      students: "Rahul Kumar, Priya Singh",
      year: "2024",
      tags: ["React", "Node.js", "MongoDB"],
      badge: "Award Winner",
      badgeColor: "bg-yellow-500",
    },
    {
      title: "Autonomous Line Following Robot",
      category: "Robotics & IoT",
      description:
        "Self-navigating robot using AI and computer vision for warehouse automation and material handling.",
      image:
        "https://images.unsplash.com/photo-1759395162739-84190996783c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      students: "Amit Das, Sneha Roy",
      year: "2024",
      tags: ["Arduino", "Python", "OpenCV"],
      badge: "Innovation",
      badgeColor: "bg-blue-500",
    },
    {
      title: "Health Monitoring Mobile App",
      category: "App Development",
      description:
        "Cross-platform health tracking application with AI-powered diagnosis suggestions and doctor consultations.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      students: "Ananya Sharma, Vikash Yadav",
      year: "2024",
      tags: ["Flutter", "Firebase", "ML"],
      badge: "Featured",
      badgeColor: "bg-green-500",
    },
    {
      title: "IoT-Based Smart Agriculture System",
      category: "Electronics & IoT",
      description:
        "Automated irrigation and crop monitoring system using sensors and cloud-based analytics for farmers.",
      image:
        "https://images.unsplash.com/photo-1729843420196-1ff32bb39db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      students: "Sourav Ghosh, Ritu Patel",
      year: "2024",
      tags: ["ESP32", "IoT", "Cloud"],
      badge: "Innovation",
      badgeColor: "bg-purple-500",
    },
    {
      title: "AI-Powered Exam Proctoring System",
      category: "Machine Learning",
      description:
        "Automated examination monitoring system using facial recognition and behavior analysis.",
      image:
        "https://images.unsplash.com/photo-1690356107685-3725367f6f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      students: "Arjun Verma, Nisha Jain",
      year: "2024",
      tags: ["TensorFlow", "Python", "OpenCV"],
      badge: "Research",
      badgeColor: "bg-red-500",
    },
    {
      title: "Virtual Lab Simulation Platform",
      category: "Educational Tech",
      description:
        "Interactive 3D virtual laboratory for physics and chemistry experiments with real-time simulations.",
      image:
        "https://images.unsplash.com/photo-1712903911035-6d28a29ac24b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      students: "Karan Singh, Meera Reddy",
      year: "2024",
      tags: ["Unity", "WebGL", "C#"],
      badge: "Featured",
      badgeColor: "bg-orange-500",
    },
  ];

  return (
    <section
      id="student-creations"
      className="bg-linear-to-br from-white to-gray-50 py-8 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="mb-6 text-center sm:mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-red-600 shadow sm:h-12 sm:w-12">
                <LuLightbulb className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
              <h2 className="font-semibold text-[rgb(230,57,70)] text-lg sm:text-2xl md:text-3xl">
                Our Student <span className="text-[#FF6B35]">Creations</span>
              </h2>
            </div>
            <p className="mx-auto max-w-3xl px-1 text-muted-foreground text-xs sm:text-sm">
              Discover innovative projects, research work, and creative
              solutions developed by our talented students.
            </p>

            {/* Stats */}
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-6">
              <StatSimple label="Projects" value="100+" compact />
              <DividerHiddenOnXs />
              <StatSimple label="Awards" value="25+" compact />
              <DividerHiddenOnXs />
              <StatSimple label="Publications" value="15+" compact />
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid
            Mobile-first: 2 columns on smallest screens (grid-cols-2)
            sm: 2 columns (keeps same)
            lg: 3 columns
         */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group">
                <Card className="overflow-hidden rounded-xl border border-white/10 bg-white/85 backdrop-blur transition-all duration-250 hover:shadow-xl">
                  {/* IMAGE: slightly reduced height on mobile to keep cards compact */}
                  <div className="relative h-36 overflow-hidden sm:h-44 lg:h-40">
                    {/* <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                    /> */}

                    {/* gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-2 left-2">
                      <span
                        className={`${project.badgeColor} rounded-full border border-white/20 px-2.5 py-1 text-white text-xs shadow backdrop-blur-sm`}
                        aria-hidden="true"
                      >
                        <LuAward className="-mt-px mr-1 inline-block h-3 w-3" />
                        {project.badge}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="absolute top-2 right-2">
                      <span className="rounded-full border border-white/20 bg-white/90 px-2 py-0.5 text-foreground text-xs shadow">
                        {project.year}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-2 left-2">
                      <Badge
                        variant="secondary"
                        className="border-white/30 bg-white/20 px-2 text-white text-xs backdrop-blur-md"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-3 sm:p-4">
                    <header className="mb-1">
                      <h3 className="font-semibold text-foreground text-sm transition-colors group-hover:text-primary sm:text-base">
                        {project.title}
                      </h3>
                    </header>

                    <p className="mb-2 line-clamp-2 text-muted-foreground text-xs sm:text-sm">
                      {project.description}
                    </p>

                    <div className="mb-2 flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                      <LuAward className="h-4 w-4 shrink-0 text-primary" />
                      <span className="truncate">{project.students}</span>
                    </div>

                    {/* Tags */}
                    <div className="mb-2 flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ACTIONS: stacked on mobile, inline on sm+ */}
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button
                        size="sm"
                        // variant="solid"
                        className="w-full flex-1 justify-center bg-primary text-sm text-white hover:bg-primary/90 sm:w-auto"
                        aria-label={`Watch demo for ${project.title}`}
                      >
                        <LuPlay className="mr-1 h-4 w-4" />
                        <span className="text-sm">Demo</span>
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full flex-1 justify-center text-sm sm:w-auto"
                        aria-label={`View code for ${project.title}`}
                      >
                        <LuGithub className="mr-1 h-4 w-4" />
                        <span className="text-sm">Code</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal direction="up">
          <div className="mt-8 text-center sm:mt-12">
            <div className="rounded-lg border border-primary/10 bg-linear-to-r from-primary/10 via-red-500/8 to-primary/10 p-3 backdrop-blur-sm sm:p-4">
              <h3 className="mb-2 font-semibold text-base text-foreground sm:text-lg">
                Have an Innovative Idea?
              </h3>
              <p className="mx-auto mb-3 max-w-2xl px-2 text-muted-foreground text-xs sm:text-sm">
                Join our community of innovators and bring your ideas to life
                with mentorship, resources, and support.
              </p>
              <div className="flex flex-col justify-center gap-2 px-2 sm:flex-row sm:gap-3">
                <Button
                  // size="md"
                  className="w-full bg-primary p-2.5 text-sm text-white hover:bg-primary/90 sm:w-auto"
                >
                  Submit Your Project
                </Button>
                <Button
                  // size="md"
                  variant="outline"
                  className="w-full text-sm sm:w-auto"
                >
                  View All Projects{" "}
                  <LuExternalLink className="ml-2 inline-block h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Minimal CSS fallback for line-clamp and compact spacing */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

/* Small helpers */
function StatSimple({
  label,
  value,
  compact,
}: {
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div className={`text-center ${compact ? "px-2" : ""}`}>
      <div
        className={`text-lg ${compact ? "sm:text-base" : "sm:text-2xl"} font-semibold text-primary`}
      >
        {value}
      </div>
      <div className="mt-1 text-[14px] text-muted-foreground uppercase tracking-wide sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}

function DividerHiddenOnXs() {
  return (
    <div
      className="my-auto hidden h-6 w-px bg-border sm:block"
      aria-hidden="true"
    />
  );
}
