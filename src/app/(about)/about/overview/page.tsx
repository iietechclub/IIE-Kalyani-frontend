import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { LuTarget } from "react-icons/lu";

import BackendImage from "@/components/BackendImage";
import { Card, CardContent } from "@/components/ui/card";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";
import DynamicIcon from "@/components/ui/dynamic-icon";

import { fetchAboutPageData } from "@/dal/about";
import { cn } from "@/lib/utils";

import WelfareHubSection from "./welfare-hub-section";

export default async function Overview() {
  const data = await fetchAboutPageData();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white pt-6">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        {/* Logo */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <Image
            priority
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
            <BackendImage
              fill
              preload
              src={data.mainImage.url}
              alt={data.mainImage.alternativeText}
              className="object-cover"
            />
          </div>
        </div>

        {/* Key Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
          <KeyPoint
            icon="LuAward"
            title="AICTE Approved"
            description="Recognized institution with quality education standards"
            bgColor="bg-blue-500/10"
            color="text-blue-500"
          />
          <KeyPoint
            icon="LuGraduationCap"
            title="10+ Years of Excellence"
            description="Proven track record in engineering education"
            bgColor="bg-green-500/10"
            color="text-green-500"
          />
          <KeyPoint
            icon="LuUsers"
            title={`${data.alumni}+ Alumni`}
            description="Successful graduates across the globe"
            bgColor="bg-purple-500/10"
            color="text-purple-500"
          />
          <KeyPoint
            icon="LuTrendingUp"
            title={`100% Placement`}
            description="Excellent placement record with top companies"
            bgColor="bg-orange-500/10"
            color="text-orange-500"
          />
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
              {data.why_choose_points.map(({ id, text }) => (
                <div key={id} className="flex items-start gap-2 sm:gap-3">
                  <CheckmarkIcon className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-muted-foreground text-xs leading-snug sm:text-sm md:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Welfare Hub Section */}
      <WelfareHubSection
        description={data.welfare_hub_description}
        tagline={data.welfare_hub_tagline}
        org_description={data.welfare_hub_org_description}
        org_tagline={data.welfare_hub_org_tagline}
      />
    </div>
  );
}

type KeyPointProps = {
  title: string;
  description: string;
  icon?: string;
  color: string;
  bgColor: string;
};
const KeyPoint = (props: KeyPointProps) => (
  <Card
    key={props.title}
    className="border border-white/20 bg-white/70 backdrop-blur-lg transition-all duration-300 hover:shadow-lg"
  >
    <CardContent className="p-4 text-center sm:p-6">
      <div
        className={cn(
          "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12",
          props.bgColor,
        )}
      >
        {props.icon && (
          <DynamicIcon
            name={props.icon}
            className={cn("size-5 sm:size-6", props.color)}
          />
        )}
      </div>
      <h3 className="mb-1 font-semibold text-foreground text-sm sm:text-base md:text-lg">
        {props.title}
      </h3>
      <p className="text-muted-foreground text-xs sm:text-sm">
        {props.description}
      </p>
    </CardContent>
  </Card>
);
