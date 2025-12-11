import { LuBookOpen, LuCar, LuWifi } from "react-icons/lu";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/scroll-reveal";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import BackendImage from "../BackendImage";
import DynamicIcon from "../ui/dynamic-icon";

type Props = { tagline: string; facilities: Facility[] };

export default function Facilities({ tagline, facilities }: Props) {
  // const facilities = [
  //   {
  //     icon: Microscope,
  //     title: "Advanced Laboratories",
  //     description:
  //       "State-of-the-art labs equipped with the latest technology for hands-on learning.",
  //     image:
  //       "https://images.unsplash.com/photo-1582273953509-3972288b909e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjAyNzEzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     badge: "High-tech",
  //   },
  //   {
  //     icon: BookOpen,
  //     title: "Digital Library",
  //     description:
  //       "Extensive collection of books, journals, and digital resources for comprehensive research.",
  //     image:
  //       "https://images.unsplash.com/photo-1731200301762-af6a21e9037a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc2MDI4NzM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     badge: "Research",
  //   },
  //   {
  //     icon: Dumbbell,
  //     title: "Sports Ground",
  //     description:
  //       "Well-maintained sports grounds for cricket, football, athletics, and outdoor recreational activities.",
  //     image:
  //       "https://images.unsplash.com/photo-1609134154058-860440f6f609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3BvcnRzJTIwZmllbGR8ZW58MXx8fHwxNzYwNDE5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     badge: "Sports",
  //   },
  //   {
  //     icon: Laptop,
  //     title: "Computer Labs",
  //     description:
  //       "Well-equipped computer labs with high-performance systems, latest software, and high-speed internet connectivity.",
  //     image:
  //       "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MDMzMjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     badge: "Technology",
  //   },
  //   {
  //     icon: Users,
  //     title: "Seminar Halls",
  //     description:
  //       "Spacious seminar halls equipped with modern presentation systems for workshops, seminars, and academic events.",
  //     image:
  //       "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwcm9vbSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjA0MjIzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     badge: "Events",
  //   },
  //   {
  //     icon: Utensils,
  //     title: "Canteen",
  //     description:
  //       "Hygienic and spacious canteen serving nutritious meals and refreshments at affordable prices.",
  //     image:
  //       "https://images.unsplash.com/photo-1567480849447-0ec63ac72a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW50ZWVuJTIwY2FmZXRlcmlhfGVufDF8fHx8MTc2MDQxOTI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //     badge: "Food",
  //   },
  //   {
  //     icon: Briefcase,
  //     title: "Swimming Pool",
  //     description:
  //       "Well-maintained and spacious swimming pool offering a refreshing environment for fitness and recreation.",
  //     image:
  //       "https://images.unsplash.com/photo-1730244548329-4ae2f4fcaa7c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     badge: "Swimming Pool",
  //   },
  //   {
  //     icon: Dumbbell,
  //     title: "Gym",
  //     description:
  //       "Well-equipped and spacious gym offering a motivating environment for fitness and training.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1685202713512-5442057c5e77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     badge: "Gym",
  //   },
  //   {
  //     icon: Brain,
  //     title: "Smart Classrooms",
  //     description:
  //       "Modern and well-equipped smart classroom providing an interactive environment for effective learning and collaboration.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1724026586485-f26d4ef7abaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     badge: "Smart Classrooms",
  //   },
  // ];

  const quickFacts = [
    {
      icon: LuWifi,
      title: "Campus WiFi",
      description: "High-speed internet across campus",
    },
    {
      icon: LuCar,
      title: "Parking",
      description: "Ample parking space for students and faculty",
    },
    {
      icon: LuBookOpen,
      title: "24/7 Library",
      description: "Round-the-clock access to learning resources",
    },
  ];

  return (
    <section
      id="facilities"
      className="bg-linear-to-br from-white to-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="mb-16 text-center">
            <h2
              className="mb-3 text-[#E63946] md:mb-4"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              }}
            >
              Our <span className="text-[#FF6B35]">Facilities</span>
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-sm sm:text-base md:text-lg">
              {tagline}
            </p>
          </div>
        </ScrollReveal>

        {/* Main Facilities Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {facilities.map((facility) => (
            <StaggerItem key={facility.documentId}>
              <Card className="group hover:-translate-y-2 h-80- overflow-hidden border border-white/20 bg-white/70 shadow-sm backdrop-blur-lg transition-all duration-300 hover:shadow-2xl sm:h-[360px]">
                {/* Image */}
                <div className="relative h-32 overflow-hidden sm:h-40 md:h-48">
                  <BackendImage
                    fill
                    src={facility.image.url}
                    alt={facility.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {facility.tag && (
                    <div className="absolute top-3 left-3 z-10 sm:top-4 sm:left-4">
                      <Badge className="border border-white/20 bg-primary/80 text-[10px] text-primary-foreground shadow-lg backdrop-blur-sm sm:text-xs">
                        {facility.tag}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
                </div>

                <CardContent className="space-y-3 px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 sm:size-10">
                      {facility.icon && (
                        <DynamicIcon
                          name={facility.icon}
                          className="size-4 text-primary sm:size-5"
                        />
                      )}
                    </div>
                    <h3 className="line-clamp-1 font-bold text-foreground text-sm leading-tight transition-colors group-hover:text-primary sm:text-base md:text-lg">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="line-clamp-2 text-muted-foreground text-xs leading-relaxed sm:line-clamp-3 sm:text-sm md:text-base">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quick Facts */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="inset-shadow-sm rounded-2xl border border-white/20 bg-white/60 p-4 shadow-xl backdrop-blur-xl sm:p-6 md:p-8">
            <h3
              className="mb-3 text-center text-[#E63946] md:mb-4"
              style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
            >
              Additional Amenities
            </h3>
            <StaggerContainer
              staggerDelay={0.15}
              className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3"
            >
              {quickFacts.map((fact) => (
                <StaggerItem key={fact.title}>
                  <div className="space-y-2 text-center sm:space-y-3">
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 sm:h-10 sm:w-10 md:h-12 md:w-12">
                      <fact.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </div>
                    <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-base">
                      {fact.title}
                    </h4>
                    <p className="text-[10px] text-muted-foreground leading-snug sm:text-xs md:text-sm">
                      {fact.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
