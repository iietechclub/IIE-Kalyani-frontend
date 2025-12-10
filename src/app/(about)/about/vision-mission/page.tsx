// Full updated VisionMission component with new hero header and reduced spacing

import {
  LuEye,
  LuTarget,
} from "react-icons/lu";

import { MotionDiv } from "@/components/animated/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DynamicIcon from "@/components/ui/dynamic-icon";

import { fetchVisionAndMissionPageData } from "@/dal/vision-and-mission";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function VisionMission() {
  const data = await fetchVisionAndMissionPageData();

  const coreValueColors = [
    { color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { color: "text-green-500", bgColor: "bg-green-500/10" },
    { color: "text-orange-500", bgColor: "bg-orange-500/10" },
    { color: "text-purple-500", bgColor: "bg-purple-500/10" },
    { color: "text-red-500", bgColor: "bg-red-500/10" },
    { color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white pb-12">
      {/* Hero Banner */}
      <div className="relative mb-6 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-60- h-full w-full bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')] bg-center bg-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
        </div>

        <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:py-12 lg:flex-row">
          <div className="z-10 flex-1 text-white">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-x-8 rounded-xl bg-linear-to-r from-red-600/20- to-transparent p-3">
                <LuEye className="size-8 shrink-0 rounded-lg bg-red-600/90 p-2 text-white md:size-11 md:p-2.5 lg:size-12 lg:p-3 xl:size-14 xl:p-3.5" />
                <div>
                  <h1 className="font-bold text-3xl leading-tight md:text-4xl xl:text-5xl">
                    Vision &amp; Mission
                  </h1>
                  <p className="mt-1 max-w-xl text-sm text-white/90 md:text-base">
                    {data.subtitle}
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
              className="inset-shadow-sm rounded-2xl border-accent bg-white/10 p-4 shadow-md backdrop-blur-sm"
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
              <BlocksRenderer content={data.vision}/>
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
                {data.missions.map(({id, text}) => (
                    <li key={id} className="flex items-start gap-3">
                      <span className="mt-0.5 text-primary">•</span>
                      <span className="leading-relaxed">{text}</span>
                    </li>
                  )
                )}
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
            {data.core_values.map(({ id, title, icon, description }, idx) => {
              const { color, bgColor } =
                coreValueColors[idx % coreValueColors.length];
              return (
                <Card
                  key={id}
                  className="hover:-translate-y-1 border border-white/10 bg-white/75 backdrop-blur transition-transform hover:shadow-md"
                >
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex shrink-0 items-center justify-center rounded-lg p-2 sm:p-3",
                          bgColor,
                        )}
                      >
                        {icon && (
                          <DynamicIcon
                            name={icon}
                            className={cn("size-5 sm:size-6", color)}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground text-sm sm:text-base md:text-lg">
                          {title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {description}
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
            {data.objectives.map(({id, text}) => {
              return(
                <div key={id} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] text-white sm:size-8 sm:text-xs">
                    ✓
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm md:text-base">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quote */}
        <section className="mt-10 mb-1 px-4 text-center sm:mt-12 sm:mb-6 md:mt-14 md:mb-7">
          <blockquote className="relative mx-auto max-w-3xl px-8 text-base sm:text-lg md:py-4 md:text-xl xl:text-2xl">
            {data.quote}
          </blockquote>
        </section>
      </div>
    </div>
  );
}
