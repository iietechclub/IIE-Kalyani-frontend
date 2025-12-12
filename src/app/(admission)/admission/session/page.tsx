"use client";

import { motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { LuAward, LuCalendar, LuGlobe, LuGraduationCap } from "react-icons/lu";
import { MotionDiv, MotionSection } from "@/components/animated/motion";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";

/**
 * Session2025 — responsive, mobile-first
 */

export default function Session2025() {
  const TARGET_APPLICANTS = 1240;
  const TARGET_SEATS = 420;

  const [_applicants, setApplicants] = useState(0);
  const [_seatsFilled, setSeatsFilled] = useState(0);

  // Removed old state (fixes useEffect warning)
  // const [countersStarted, setCountersStarted] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const countersStartedRef = useRef(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: may not needed
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStartedRef.current) {
          countersStartedRef.current = true;
          startCounters();
          obs.disconnect();
        }
      });
    });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function startCounters() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setApplicants(TARGET_APPLICANTS);
      setSeatsFilled(TARGET_SEATS);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - (1 - t) ** 3;
      setApplicants(Math.floor(ease * TARGET_APPLICANTS));
      setSeatsFilled(Math.floor(ease * TARGET_SEATS));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const importantDates = [
    { event: "Application Form Release", date: "1 Jan 2025" },
    { event: "Last Date for Application", date: "30 Jun 2025" },
    { event: "Entrance Test (if applicable)", date: "5 - 10 Jul 2025" },
    { event: "Merit List Publication", date: "15 Jul 2025" },
    { event: "Counselling & Admission", date: "20 - 31 Jul 2025" },
    { event: "Classes Commence", date: "1 Aug 2025" },
  ];

  const programs = [
    {
      name: "B.Tech Programs",
      seats: "Available",
      branches: ["CSE", "EE", "ME", "CE", "ECE", "AI & ML"],
      color: "from-red-600 to-red-500",
    },
    {
      name: "BBA Program",
      seats: "Available",
      branches: ["Business Administration"],
      color: "from-indigo-600 to-indigo-500",
    },
  ];

  return (
    <div className="mt-10 min-h-screen bg-linear-to-br from-white via-red-50/20 to-white">
      {/* Hero */}
      <MotionSection
        ref={heroRef}
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center gap-3">
              <div className="rounded-xl bg-linear-to-br from-red-600 to-red-700 p-3 shadow-2xl sm:p-4">
                <LuCalendar className="h-9 w-9 text-white sm:h-10 sm:w-10" />
              </div>
            </div>

            <h1 className="mb-1 font-extrabold text-2xl text-black leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Admissions Open — Session{" "}
              <span className="ml-2 text-red-600">2025-2026</span>
            </h1>

            <p
              className="mx-auto mt-4 mb-7 max-w-xl text-xs sm:text-base"
              style={{ color: "#4a5568" }}
            >
              Join Ideal Institute of Engineering and start your engineering
              journey with accredited programs, industry-aligned curriculum and
              hands-on learning.
            </p>

            {/* Accreditation / Stats strip */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <StatCard
                icon={<LuAward className="h-5 w-5 text-yellow-500" />}
                label="Accreditation"
                value="AICTE"
              />
              <StatCard
                icon={<LuGlobe className="h-5 w-5 text-blue-500" />}
                label="Affiliation"
                value="MAKAUT"
              />
              <StatCard
                icon={<LuAward className="h-5 w-5 text-yellow-600" />}
                label="Scholarships"
                value="Merit & Need Based"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Programs Offered */}
      <MotionSection
        className="py-8 sm:py-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h2 className="font-semibold text-2xl">Programs Offered</h2>
              <div className="text-muted-foreground text-sm">
                Choose your program and apply
              </div>
            </div>

            <MotionDiv
              className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {programs.map((program) => (
                <MotionDiv
                  key={program.name}
                  className="hover:-translate-y-2 w-full shrink-0 snap-center rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl sm:w-96 sm:p-6 md:w-80 lg:w-96"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br sm:h-14 sm:w-14 ${program.color} text-white shadow`}
                    >
                      <LuGraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* header row: title + Available badge */}
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="min-w-0 font-semibold text-lg">
                          {program.name}
                        </h3>

                        {/* Available badge (matches Figma look) */}
                        <div className="ml-4 shrink-0">
                          <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 font-medium text-green-800 text-xs shadow-sm">
                            {program.seats}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 mb-3 text-sm">
                        {program.branches.length} branch
                        {program.branches.length > 1 ? "es" : ""} available
                      </div>

                      <div className="mt-1 grid grid-cols-3 gap-2">
                        {program.branches.map((b) => (
                          <div
                            key={b}
                            className="flex items-center gap-2 rounded-md bg-gray-50 p-2 text-gray-700 text-xs sm:text-sm"
                          >
                            <CheckmarkIcon className="h-4 w-4" />
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Important Dates */}
      <MotionSection
        className="py-8 sm:py-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24 }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Headings Row */}
              <div className="mb-10 grid grid-cols-1 items-center md:grid-cols-3">
                <h2 className="font-semibold text-2xl md:col-span-1 md:text-right">
                  Timeline
                </h2>

                <div className="hidden md:block"></div>

                <h2 className="font-semibold text-2xl md:text-left">
                  Important Dates
                </h2>
              </div>
              {importantDates.map((d) => (
                <div
                  key={d.event}
                  className="grid items-center gap-18 md:grid-cols-[80fr_auto_80fr]"
                >
                  <div className="font-semibold text-lg md:text-right">
                    {d.event}
                  </div>

                  <div className="-translate-x-1/2 absolute top-19 bottom-8 left-1/2 w-0.5 bg-linear-to-b from-red-200 via-red-300 to-red-500"></div>

                  <div className="relative hidden items-center justify-center md:flex">
                    {/* Circle (front) */}
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-red-200 bg-white shadow-sm">
                      <div className="h-3.5 w-3.5 rounded-full bg-red-600" />
                    </div>
                  </div>

                  <div className="font-semibold text-muted-foreground text-sm md:text-left">
                    {d.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}

/* ---------------- Helper Component ---------------- */
type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};
function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <div className="shrink-0 rounded-md bg-gray-50 p-2">{icon}</div>
      <div>
        <div className="text-muted-foreground text-xs">{label}</div>
        <div className="mt-1 font-semibold text-lg">{value}</div>
      </div>
    </div>
  );
}
