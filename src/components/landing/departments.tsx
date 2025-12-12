import Link from "next/link";
import { LuSparkles } from "react-icons/lu";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/scroll-reveal";
// import { ImageWithFallback } from "figma/ImageWithFallback";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import BackendImage from "../BackendImage";
import DynamicIcon from "../ui/dynamic-icon";

type Props = { tagline: string; departments: Department[] };
export default function Departments({ tagline, departments }: Props) {
  const departmentColors = [
    "from-blue-500 to-cyan-500",
    "from-orange-500 to-red-500",
    "from-yellow-500 to-orange-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-teal-500 to-cyan-500",
    "from-indigo-500 to-blue-500",
  ];

  return (
    <section
      id="departments"
      className="bg-linear-to-br from-white to-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <LuSparkles className="size-4 text-primary" />
              <span className="font-sans text-primary text-sm uppercase tracking-wide">
                Academic Excellence
              </span>
            </div>
            <h2
              className="mb-3 text-[#E63946] md:mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
            >
              Our <span className="text-[#FF6B35]">Departments</span>
            </h2>
            <p className="mx-auto max-w-3xl text-pretty font-sans text-[18px] text-lg text-muted-foreground">
              {tagline}
            </p>
          </div>
        </ScrollReveal>

        {/* Departments Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 [@media(30rem<width<=40rem)]:grid-cols-2"
        >
          {departments.map((department, idx) => {
            const color = departmentColors[idx % departmentColors.length];
            return (
              <StaggerItem
                key={department.documentId}
                className="mx-auto max-w-xs sm:max-w-none"
              >
                <Link href={`/academics/departments/${department.slug}`}>
                  <Card className="group hover:-translate-y-2 h-full cursor-pointer overflow-hidden border border-accent bg-white/70 shadow-sm backdrop-blur-lg transition-all duration-300 hover:shadow-2xl">
                    {/* Image Section */}
                    <div className="relative h-36 overflow-hidden sm:h-48">
                      <div className="size-full transition-transform duration-500 group-hover:scale-110">
                        <BackendImage
                          className="object-cover"
                          src={department.previewImage.url}
                          alt={department.name}
                          fill
                        />
                      </div>
                      <div
                        className={cn(
                          "absolute inset-0 bg-linear-to-br opacity-30 transition-opacity duration-300 group-hover:opacity-40",
                          color,
                        )}
                      ></div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="border border-white/20 bg-white/90 text-gray-900 shadow-lg backdrop-blur-sm">
                          {department.short_name}
                        </Badge>
                      </div>

                      {/* Icon */}
                      {department.icon && (
                        <div className="absolute bottom-4 left-4">
                          <div
                            className={cn(
                              "flex size-9 items-center justify-center rounded-xl bg-linear-to-br shadow-lg sm:size-12",
                              color,
                            )}
                          >
                            <DynamicIcon
                              name={department.icon}
                              className="size-5 text-white sm:size-6"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <CardContent className="space-y-3 p-6 pt-0">
                      <h3 className="font-bold text-base text-foreground transition-colors group-hover:text-primary sm:text-lg md:text-xl">
                        {department.name}
                      </h3>
                      <p className="line-clamp-2 text-muted-foreground text-xs leading-relaxed sm:line-clamp-3 sm:text-sm md:text-base">
                        {department.tagline}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
