"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
  LuAward,
  LuBriefcase,
  LuBuilding2,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import BackendImage from "../BackendImage";
import DynamicIcon from "../ui/dynamic-icon";

type Stat = {
  icon: IconType;
  value: string;
  label: string;
  color: string;
  bgColor: string;
};

type Props = {
  tagline: string;
  avg_offers: number;
  internship_offers: number;
  avg_ctc: number;
  recruiting_sectors: IconBadge[];
  companies: CompanyWithoutName[];
  apply_now?: Url;
};

export default function Recruiters({
  tagline,
  avg_offers,
  internship_offers,
  avg_ctc,
  recruiting_sectors,
  companies,
  apply_now,
}: Props) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const SPEED = 80; // pixels per second

  const router = useRouter();

  // Placement / Recruiter Statistics — compact + responsive
  const stats: Stat[] = [
    {
      icon: LuTrendingUp,
      value: "250+",
      label: "Active Recruiters (3 yrs)",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: LuBriefcase,
      value: `${avg_offers}`,
      label: "Avg Offers / Drive",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: LuUsers,
      value: `${internship_offers}+`,
      label: "Internship Offers / Yr",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: LuAward,
      value: `${avg_ctc} LPA`,
      label: "Avg CTC (Top 10%)",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const topCompanies = [...companies, ...companies].map(
    ({ documentId, ...c }, idx) => ({
      ...c,
      id: `${documentId}-${idx}`,
    }),
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleWidth = track.scrollWidth / 2 || 0;
    const durationSec = singleWidth / SPEED || 15;
    track.style.setProperty("--marquee-duration", `${durationSec}s`);

    const handleResize = () => {
      const w = track.scrollWidth / 2 || 0;
      track.style.setProperty("--marquee-duration", `${w / SPEED || 15}s`);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="mb-10 text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
              <LuBuilding2 className="h-4 w-4 text-primary" />
              <span className="text-primary text-xs uppercase tracking-wide sm:text-sm">
                Career Success
              </span>
            </div>
            <h2 className="mb-2 font-semibold text-2xl text-foreground sm:text-3xl lg:text-4xl">
              OUR RECRUITERS
            </h2>
            <p className="mx-auto max-w-3xl px-4 text-muted-foreground text-sm sm:text-base">
              {tagline}
            </p>
          </div>
        </ScrollReveal>

        {/* -------- Compact Placement / Recruiter Statistics -------- */}
        <StaggerContainer
          staggerDelay={0.06}
          className="mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <CompactStatCard stat={stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Sector pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {recruiting_sectors.map(({ id, name, icon }) => (
            <div
              key={id}
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 font-medium text-xs shadow-sm backdrop-blur sm:text-sm"
            >
              <DynamicIcon
                name={icon}
                className="size-4 text-muted-foreground"
              />
              <span className="text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>

        {/* Top Recruiting Companies */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-medium text-foreground text-lg sm:text-xl">
            Top Recruiting Companies
          </h3>
        </div>

        {/* ===== Always Scrolling Marquee Carousel ===== */}
        <div className="relative">
          {/* Fades */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-14 sm:w-20">
            <div className="h-full bg-linear-to-r from-white to-transparent"></div>
          </div>
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-20 w-14 sm:w-20">
            <div className="h-full bg-linear-to-l from-white to-transparent"></div>
          </div>

          {/* Marquee track */}
          {/** biome-ignore lint/a11y/useAriaPropsSupportedByRole: needed */}
          <div className="w-full overflow-hidden" aria-label="Top recruiters">
            <ul ref={trackRef} className="marquee-track">
              {topCompanies.map(({ id, short_name, domain, image }) => (
                <li
                  key={id}
                  className="inline-flex w-28 shrink-0 flex-col items-center justify-center px-2 sm:w-36"
                >
                  <button
                    type="button"
                    onClick={() => router.push("/placement/placement-record")}
                    title={`${short_name} — ${domain}`}
                    className="flex w-full items-center justify-center rounded-md p-2 transition hover:bg-white/10"
                    aria-label={`${short_name} profile`}
                  >
                    <div className="relative h-12 w-full object-contain grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0 sm:h-16">
                      <BackendImage
                        fill
                        src={image.url}
                        alt={short_name}
                        className="object-contain"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-10 text-center sm:mt-14">
            <Card className="border-none bg-linear-to-r from-primary to-red-600">
              <CardContent className="bg-[rgba(0,0,0,0)] p-5 sm:p-8 lg:p-12">
                <h3 className="mb-2 font-semibold text-lg text-white sm:mb-3 sm:text-2xl lg:text-3xl">
                  Ready to Launch Your Career?
                </h3>
                <p className="mx-auto mb-4 max-w-2xl px-4 text-sm text-white/90 sm:mb-6 sm:text-base">
                  Join IIE Kalyani and get access to our extensive network of
                  recruiters and career opportunities.
                </p>
                <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                  <Link
                    href={apply_now?.url ?? "#"}
                    target={apply_now?.newTab ? "_blank" : undefined}
                    rel={apply_now?.newTab ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-primary text-sm shadow transition-colors hover:bg-gray-100 sm:px-8 sm:py-3 sm:text-base"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/placement/placement-record"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-8 sm:py-3 sm:text-base"
                  >
                    View Placement Details
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Helper CSS */}
        <style>{`
          .marquee-track {
            display: inline-flex;
            align-items: center;
            gap: 3.5rem;
            animation: marquee var(--marquee-duration, 20s) linear infinite;
            will-change: transform;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

/* --------------- Compact Stat Card --------------- */
function CompactStatCard({ stat }: { stat: Stat }) {
  const { label, value, icon: Icon, color, bgColor } = stat;
  return (
    <Card className="rounded-xl border border-white/10 bg-white/70 backdrop-blur-sm transition-all hover:shadow-md">
      <CardContent className="flex items-center gap-3 p-2.5 text-center sm:flex-col sm:gap-2 sm:p-4 sm:text-center">
        <div
          className={cn(
            bgColor,
            "flex items-center justify-center rounded-lg p-2 sm:p-3",
          )}
        >
          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
        </div>
        <div className="flex-1 sm:flex-none">
          <div className={`font-semibold text-lg sm:text-2xl ${color}`}>
            {value}
          </div>
          <p className="text-[11px] text-muted-foreground sm:text-xs">
            {label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
