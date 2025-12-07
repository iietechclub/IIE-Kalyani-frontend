// Full updated VisionMission component with new hero header and reduced spacing

import {
  LuAward,
  LuEye,
  LuHeart,
  LuLightbulb,
  LuShield,
  LuSparkles,
  LuTarget,
  LuUsers,
} from "react-icons/lu";

import { MotionDiv } from "@/components/animated/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VisionMission() {
  const coreValues = [
    {
      icon: LuAward,
      title: "Excellence",
      description:
        "Commitment to academic and professional excellence in all endeavors",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: LuShield,
      title: "Integrity",
      description: "Upholding highest standards of honesty and ethical conduct",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: LuLightbulb,
      title: "Innovation",
      description:
        "Encouraging creativity and innovative thinking in education and research",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: LuUsers,
      title: "Inclusivity",
      description:
        "Creating an inclusive environment for diverse perspectives and backgrounds",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: LuHeart,
      title: "Social Responsibility",
      description:
        "Contributing positively to society and environmental sustainability",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: LuSparkles,
      title: "Continuous Learning",
      description: "Fostering a culture of lifelong learning and adaptation",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white pb-12">
      {/* Hero Banner */}
      <div className="relative mb-6 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-60 w-full bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')] bg-center bg-cover opacity-40"
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-r from-red-700/60 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-8 md:py-12 lg:flex-row">
          <div className="z-10 flex-1 text-white">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 rounded-xl bg-linear-to-r from-red-600/20 to-transparent p-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-600/90">
                  <LuEye className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-3xl leading-tight md:text-4xl lg:text-5xl">
                    Vision &amp; Mission
                  </h1>
                  <p className="mt-1 max-w-xl text-sm text-white/90 md:text-base">
                    Guiding principles that drive our commitment to excellence
                    in education — nurturing leaders, innovators and responsible
                    citizens.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>

          <div className="z-10 hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <MotionDiv
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
            >
              <div className="text-sm text-white">
                <strong className="block text-lg">Our Promise</strong>
                <span className="block text-white/80 text-xs">
                  Excellence • Integrity • Innovation
                </span>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Vision & Mission Cards */}
        <section className="mb-8 grid grid-cols-1 gap-4 px-4 sm:mb-12 sm:gap-6 md:grid-cols-2">
          <Card className="transform-gpu border border-white/10 bg-white/75 backdrop-blur transition-transform hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                  <LuEye className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <span className="font-semibold">Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                To be a globally recognized center of excellence in technical
                education, research, and innovation.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                We aspire to nurture leaders and innovators who contribute
                positively to the world.
              </p>
            </CardContent>
          </Card>

          <Card className="transform-gpu border border-white/10 bg-white/75 backdrop-blur transition-transform hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                  <LuTarget className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <span className="font-semibold">Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside space-y-2 text-muted-foreground text-xs sm:space-y-3 sm:text-sm md:text-base">
                {[
                  "Provide quality education with industry-relevant curriculum",
                  "Foster research, innovation, and entrepreneurship",
                  "Develop well-rounded professionals with strong ethics",
                  "Build partnerships with industry, academia, and research bodies",
                  "Promote sustainability and social responsibility",
                  "Focus on holistic personality and skill development",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 text-primary">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="mb-8 px-4 sm:mb-12">
          <h2 className="mb-4 text-center font-semibold text-foreground text-xl sm:mb-6 sm:text-2xl md:text-3xl">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="hover:-translate-y-1 border border-white/10 bg-white/75 backdrop-blur transition-transform hover:shadow-md"
                >
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div
                        className={`${value.bgColor} flex shrink-0 items-center justify-center rounded-lg p-2 sm:p-3`}
                      >
                        <Icon
                          className={`${value.color} h-5 w-5 sm:h-6 sm:w-6`}
                        />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground text-sm sm:text-base md:text-lg">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Objectives */}
        <section className="rounded-2xl bg-linear-to-r from-primary/10 via-red-500/8 to-primary/10 p-4 px-4 backdrop-blur-sm sm:p-6 md:p-8">
          <h2 className="mb-4 text-center font-semibold text-foreground text-lg sm:text-2xl md:text-3xl">
            Our Objectives
          </h2>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {[
              "To impart quality technical education and develop industry-ready engineers",
              "To encourage research and development activities",
              "To build strong industry-institute partnerships",
              "To nurture entrepreneurial mindset and innovation",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] text-white sm:h-8 sm:w-8 sm:text-xs">
                  ✓
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mt-6 mb-10 px-4 text-center sm:mt-8 sm:mb-12">
          <blockquote className="mx-auto max-w-3xl font-bold text-[24px] text-base text-gray-600 italic sm:text-lg md:text-xl">
            “Empowering students with knowledge, values, and innovation to shape
            a better tomorrow.”
          </blockquote>
        </section>
      </div>
    </div>
  );
}
