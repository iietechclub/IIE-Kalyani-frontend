import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import {
  LuAward,
  LuGraduationCap,
  LuTarget,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

import { CheckmarkIcon } from "@/components/checkmark-icon";
import { Card, CardContent } from "@/components/ui/card";

import { fetchAboutPageData } from "@/dal/about";
import { cn } from "@/lib/utils";

import WelfareHubSection from "./welfare-hub-section";

export default async function Overview() {
  const data = await fetchAboutPageData();

  const keyPoints = [
    {
      icon: LuAward,
      title: "AICTE Approved",
      description: "Recognized institution with quality education standards",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: LuGraduationCap,
      title: "15+ Years of Excellence",
      description: "Proven track record in engineering education",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: LuUsers,
      title: "2000+ Alumni",
      description: "Successful graduates across the globe",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: LuTrendingUp,
      title: "95% Placement",
      description: "Excellent placement record with top companies",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  const highlights = [
    "AICTE approved institution offering quality technical education",
    "Highly qualified and experienced faculty with industry expertise",
    "Modern infrastructure with state-of-the-art laboratories",
    "Strong industry partnerships and collaborations",
    "Comprehensive placement assistance and career guidance",
    "Regular workshops, seminars, and guest lectures by industry experts",
    "Active student clubs and technical societies",
    "Focus on practical learning and hands-on experience",
    "Digital library with extensive collection of books and e-resources",
    "Sports facilities and cultural activities for holistic development",
    "Affordable fee structure with scholarship opportunities",
    "Excellent connectivity and transportation facilities",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white pt-6">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        {/* Logo */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <Image
            width="128"
            height="128"
            src="/logo.png"
            alt="IIE Kalyani Logo"
            className="h-20 w-auto object-contain sm:h-28 md:h-32"
          />
        </div>

        {/* Header */}
        <div className="mb-10 text-center sm:mb-12">
          <h1 className="mb-3 font-bold text-2xl text-foreground sm:mb-4 sm:text-3xl md:text-5xl">
            About IIE Kalyani
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base md:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-2xl sm:mb-14">
          <div className="relative h-48 w-full sm:h-72 md:h-96">
            <Image
              fill
              src="https://images.unsplash.com/photo-1724436781032-c1645c5783ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="IIE Kalyani Campus"
              className="object-cover"
            />
          </div>
        </div>

        {/* Key Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
          {keyPoints.map((point) => (
            <Card
              key={point.title}
              className="border border-white/20 bg-white/70 backdrop-blur-lg transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-4 text-center sm:p-6">
                <div
                  className={cn(
                    "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12",
                    point.bgColor,
                  )}
                >
                  <point.icon className={cn("size-5 sm:size-6", point.color)} />
                </div>
                <h3 className="mb-1 font-semibold text-foreground text-sm sm:text-base md:text-lg">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="mb-12 grid grid-cols-1 items-center gap-x-2 gap-y-8 sm:mb-16 sm:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-semibold text-foreground text-xl sm:mb-6 sm:text-2xl md:text-3xl">
              Welcome to Ideal Institute of Engineering
            </h2>
            <div className="space-y-3 text-muted-foreground text-xs leading-relaxed sm:space-y-4 sm:text-sm md:text-base">
              <BlocksRenderer content={data.welcome_description} />
            </div>
          </div>

          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl shadow-xl sm:h-72 sm:w-auto md:h-80 lg:h-64 xl:h-80">
            <iframe
              className="size-full rounded-2xl object-cover"
              src={`${data.welcome_video_youtube_link}?autoplay=1&mute=1&controls=1&playsinline=1&loop=1&playlist=nGXb2P9oF6k&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1`}
              title="IIE Kalyani"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>

        {/* Why Choose Section */}
        <Card className="mb-12 border border-white/20 bg-white/70 backdrop-blur-lg sm:mb-16">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <h2 className="mb-4 flex items-center gap-2 font-semibold text-foreground text-lg sm:mb-6 sm:gap-3 sm:text-xl md:text-3xl">
              <LuTarget className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              Why Choose IIE Kalyani?
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <CheckmarkIcon className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-muted-foreground text-xs leading-snug sm:text-sm md:text-base">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div className="mb-8 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 via-red-500/10 to-primary/10 p-4 backdrop-blur-sm sm:mb-12 sm:p-6 md:p-8">
          <h2 className="mb-4 text-center font-semibold text-foreground text-xl sm:mb-6 sm:text-2xl md:text-3xl">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
            {[
              { number: "50+", label: "Industry Partners" },
              { number: "100+", label: "Student Projects" },
              { number: "25+", label: "Awards Won" },
              { number: "15+", label: "Publications" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="mb-1 text-2xl text-primary sm:mb-2 sm:text-3xl md:text-4xl">
                  {item.number}
                </div>
                <div className="text-[10px] text-muted-foreground sm:text-xs md:text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Welfare Hub Section */}
      <WelfareHubSection />
    </div>
  );
}
