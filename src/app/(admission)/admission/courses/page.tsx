"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuBookOpen,
  LuBrain,
  LuBuilding2,
  LuCog,
  LuGraduationCap,
  LuLaptop,
  LuStar,
  LuUsers,
  LuZap,
} from "react-icons/lu";
import { MotionArticle } from "@/components/animated/motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * CoursesOffered — modern & responsive (uses `font-nanito` class, no font imports)
 */

export default function CoursesOffered() {
  const courses = [
    {
      title: "B.Tech in Computer Science & Engineering",
      duration: "4 Years",
      seats: "60",
      affiliation: "MAKAUT",
      icon: LuGraduationCap,
      description:
        "Comprehensive program covering software development, data structures, algorithms, AI, and emerging technologies.",
      highlights: [
        "Industry-oriented curriculum",
        "Hands-on projects",
        "Industry partnerships",
        "Research opportunities",
      ],
      badge: "Popular",
      accent: "from-rose-500 to-red-500",
      link: "/academic/departments/cse",
    },
    {
      title: "B.Tech in Electronics & Communication Engineering",
      duration: "4 Years",
      seats: "60",
      affiliation: "MAKAUT",
      icon: LuBookOpen,
      description:
        "Focus on electronics, communication systems, signal processing, and embedded systems.",
      highlights: [
        "Advanced laboratories",
        "Industry exposure",
        "Modern equipment",
        "Expert faculty",
      ],
      badge: "New",
      accent: "from-indigo-500 to-violet-500",
      link: "/academic/departments/ece",
    },
    {
      title: "B.Tech in Electrical Engineering",
      duration: "4 Years",
      seats: "60",
      affiliation: "MAKAUT",
      icon: LuBuilding2,
      description:
        "Study of electrical systems, power generation, distribution, and control systems.",
      highlights: [
        "Power systems lab",
        "Control systems",
        "Industry training",
        "Placement support",
      ],
      badge: null,
      accent: "from-emerald-500 to-teal-500",
      link: "/academic/departments/ee",
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      seats: "60",
      affiliation: "MAKAUT",
      icon: LuUsers,
      description:
        "Comprehensive business management program focusing on leadership, entrepreneurship, and management skills.",
      highlights: [
        "Management skills",
        "Industry internships",
        "Entrepreneurship development",
        "Corporate exposure",
      ],
      badge: null,
      accent: "from-yellow-500 to-orange-500",
      link: "/academic/departments/bba",
    },

    /* Additional courses you provided (normalized) */
    {
      icon: LuLaptop,
      title: "Computer Science & Engineering (Specialization)",
      duration: "4 Years",
      seats: "60",
      affiliation: "MAKAUT",
      description:
        "Leading the way in software development, artificial intelligence, machine learning, and emerging technologies.",
      highlights: [
        "Advanced AI & ML labs",
        "Capstone projects",
        "Industry mentorship",
        "Hackathons & workshops",
      ],
      badge: "CSE",
      accent: "from-blue-500 to-cyan-500",
      link: "/academic/departments/cse",
    },
    {
      icon: LuCog,
      title: "Mechanical Engineering",
      duration: "4 Years",
      seats: "60",
      affiliation: "MAKAUT",
      description:
        "Traditional engineering excellence with modern applications in automation, robotics, and manufacturing.",
      highlights: [
        "Robotics & automation lab",
        "CAD/CAM workshops",
        "Industry internships",
        "Manufacturing projects",
      ],
      badge: "ME",
      accent: "from-orange-500 to-red-500",
      link: "/academic/departments/me",
    },
    {
      icon: LuZap,
      title: "Electrical Engineering (Power & Control)",
      duration: "4 Years",
      seats: "60",
      affiliation: "MAKAUT",
      description:
        "Power the future with expertise in electrical systems, renewable energy, power electronics, and smart grids.",
      highlights: [
        "Renewable energy labs",
        "Power electronics",
        "Smart-grid projects",
        "Industry tie-ups",
      ],
      badge: "EE",
      accent: "from-yellow-500 to-orange-500",
      link: "/academic/departments/ee",
    },
    {
      icon: LuBuilding2,
      title: "Civil Engineering",
      duration: "4 Years",
      seats: "60",
      affiliation: "MAKAUT",
      description:
        "Build sustainable infrastructure and shape the world with innovative design and construction techniques.",
      highlights: [
        "Structural design studio",
        "Site visits & internships",
        "Sustainable construction",
        "Project-based learning",
      ],
      badge: "CE",
      accent: "from-green-500 to-emerald-500",
      link: "/academic/departments/ce",
    },
    {
      icon: LuBrain,
      title: "Artificial Intelligence & Machine Learning",
      duration: "4 Years",
      seats: "40",
      affiliation: "MAKAUT",
      description:
        "Explore the frontiers of AI, deep learning, neural networks, and intelligent systems.",
      highlights: [
        "Deep learning lab",
        "GPU-backed research",
        "Industry projects",
        "Interdisciplinary AI electives",
      ],
      badge: "AI&ML",
      accent: "from-purple-500 to-pink-500",
      link: "/academic/departments/ai-ml",
    },
  ];

  const _lateralEntry = {
    title: "B.Tech Lateral Entry",
    duration: "3 Years",
    eligibility: "Diploma holders in relevant stream",
    seats: "Available in all branches",
    description:
      "Direct admission to 2nd year for diploma holders with excellent career prospects.",
  };

  // const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-rose-50/30 font-nanito">
      {/* HERO */}
      <header className="relative bg-linear-to-r from-rose-600 to-red-600 py-14 text-white sm:py-18">
        <div className="pointer-events-none absolute inset-0 bg-black/6" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="transform-gpu rounded-2xl bg-white/10 px-3 py-2 backdrop-blur">
                <LuGraduationCap className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="font-extrabold text-2xl leading-tight sm:text-3xl md:text-4xl">
              Courses Offered
            </h1>

            <p className="mx-auto mt-3 max-w-3xl text-rose-50 text-sm sm:text-base">
              AICTE-approved & MAKAUT-affiliated undergraduate programs —
              designed for industry readiness and future careers.
            </p>

            {/* small hero stats */}
            {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              <MiniStat icon={<Users className="w-4 h-4" />} label="Applicants" value="1,240+" accent="text-rose-500" />
              <MiniStat icon={<GraduationCap className="w-4 h-4" />} label="Seats" value="420" accent="text-green-500" />
              <MiniStat icon={<Sparkles className="w-4 h-4" />} label="Scholarships" value="Merit & Need" accent="text-yellow-500" />
            </div> */}

            {/* <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/admission/apply"
                className="inline-flex items-center gap-3 bg-white text-rose-600 px-5 py-2.5 rounded-lg shadow hover:scale-[1.02] transition"
                aria-label="Apply Now"
              >
                Apply Now
              </Link>
              <Link
                to="/admission/courses"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-5 py-2.5 rounded-lg hover:bg-white/10 transition"
                aria-label="Program Details"
              >
                Program Details
              </Link>
            </div> */}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* intro */}
        <section className="mb-10 text-center">
          <p className="mx-auto max-w-4xl text-gray-700 text-sm sm:text-base">
            IIE Kalyani offers industry-relevant undergraduate programs approved
            by AICTE and affiliated to MAKAUT — emphasising hands-on learning,
            research and employability.
          </p>
        </section>

        {/* Programs grid */}
        <section className="mb-12">
          <div className="mb-8 text-center">
            <h2 className="font-semibold text-gray-900 text-xl sm:text-2xl md:text-3xl">
              Undergraduate Programs
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-linear-to-r from-rose-500 to-red-500" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <MotionArticle
                  key={course.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="relative"
                >
                  <Card className="group h-full overflow-visible border border-transparent bg-white/90 p-6 shadow-sm transition-all duration-300 hover:border-white/10 hover:shadow-2xl sm:p-6">
                    {/* ribbon badge */}
                    {course.badge && (
                      <div className="absolute top-1.5 right-4 mb-1">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 font-semibold text-rose-600 text-xs shadow">
                          <LuStar className="h-3 w-3 text-amber-400" />
                          {course.badge}
                        </span>
                      </div>
                    )}

                    <div className="mb-4 flex items-start gap-4">
                      <div
                        className={cn(
                          "transform rounded-lg bg-linear-to-br p-3 text-white shadow-md transition group-hover:scale-105",
                          course.accent,
                        )}
                        aria-hidden
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg sm:text-xl">
                          {course.title}
                        </h3>

                        <div className="mt-2 flex flex-row flex-wrap gap-2 text-[12px] text-gray-700 sm:text-sm">
                          <span>Duration: {course.duration}</span>
                          <span>•</span>
                          {/* <span>Seats: {course.seats}</span> */}
                          {/* <span>•</span> */}
                          <span>Affiliation: {course.affiliation}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 text-gray-700 text-sm sm:text-base">
                      {course.description}
                    </p>

                    {/* Highlights: grid on sm+, accordion on xs */}
                    {/* <div>
                      <div className="hidden sm:grid sm:grid-cols-2 gap-2">
                        {course.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-2 rounded-md bg-gray-50"
                          >
                            <span className="h-2 w-2 bg-rose-500 rounded-full shrink-0" />
                            <span className="text-sm text-gray-700">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="sm:hidden mt-2">
                        <button
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                          className="w-full flex items-center justify-between gap-3 px-3 py-2 bg-gray-50  rounded-md"
                          aria-expanded={openIndex === index}
                        >
                          <div className="text-sm font-medium">Key Highlights</div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                          />
                        </button>

                        {openIndex === index && (
                          <div className="mt-2 space-y-2 px-3">
                            {course.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-3 p-2 rounded-md bg-gray-50 ">
                                <span className="h-2 w-2 bg-rose-500 rounded-full" />
                                <span className="text-sm text-gray-700 ">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div> */}

                    <div className="mt-6 flex items-center justify-end gap-3">
                      <Link
                        href="/academic/departments"
                        className="text-gray-600 text-sm hover:underline"
                      >
                        Know More →
                      </Link>
                    </div>
                  </Card>
                </MotionArticle>
              );
            })}
          </div>
        </section>

        {/* Lateral Entry */}
        <section className="relative mb-16 px-4">
          {/* Background Gradient + Glow */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-rose-100 via-red-50 to-orange-50 shadow-[0_8px_40px_rgba(255,100,100,0.25)]" />

          {/* Soft radial glow bottom-right */}
          <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl"></div>

          {/* Content (positioned above background) */}
          <div className="relative py-12 md:py-16">
            <div className="mb-10 text-center">
              <h2 className="font-bold text-2xl text-gray-900 sm:text-3xl">
                Achievements & Milestones
              </h2>
              <p className="mt-2 text-base text-gray-600 sm:text-lg">
                Sneak peek Of Our Success Story
              </p>
            </div>

            {/* Cards */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl">
                <Image
                  width={48}
                  height={48}
                  alt="Medal icon"
                  src="/icons/medal1.png"
                  className="mx-auto mb-4 w-12"
                />
                <h3 className="font-semibold text-gray-900">
                  Innovation Award
                </h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Acknowledged for innovation and change.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl">
                <Image
                  width={48}
                  height={48}
                  alt="Medal icon"
                  src="/icons/medal2.png"
                  className="mx-auto mb-4 w-12"
                />
                <h3 className="font-semibold text-gray-900">Customer Award</h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Recognized for customer satisfaction.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl">
                <Image
                  width={48}
                  height={48}
                  alt="Medal icon"
                  src="/icons/medal3.png"
                  className="mx-auto mb-4 w-12"
                />
                <h3 className="font-semibold text-gray-900">Global Award</h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Empowering brands worldwide.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl">
                <Image
                  width={48}
                  height={48}
                  alt="Medal icon"
                  src="/icons/medal4.png"
                  className="mx-auto mb-4 w-12"
                />
                <h3 className="font-semibold text-gray-900">Design Award</h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Recognized for design excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="relative mb-16 px-4">
          {/* Decorative background */}
          {/* <div
    aria-hidden
    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-50 via-rose-100 to-orange-50 shadow-inner"
  />
  <div aria-hidden className="absolute -left-8 top-6 w-44 h-44 rounded-full bg-rose-200/30 blur-3xl pointer-events-none" />
  <div aria-hidden className="absolute right-6 -bottom-8 w-56 h-56 rounded-full bg-yellow-200/20 blur-3xl pointer-events-none" /> */}

          <div className="relative mx-auto max-w-7xl py-12 md:py-16">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="font-extrabold text-2xl text-gray-900 md:text-3xl">
                Why Choose Our Programs
              </h2>
              <p className="mt-2 text-gray-600 text-sm">
                Designed for industry, backed by accreditation — built for your
                future.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="block h-1 w-10 rounded bg-rose-500" />
                <span className="block h-1 w-4 rounded bg-rose-300" />
              </div>
            </div>

            {/* Cards grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card A */}
              <div className="hover:-translate-y-3 relative transform-gpu transition-all duration-300 hover:scale-[1.02]">
                <div className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-md backdrop-blur-md hover:shadow-xl">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-rose-500 to-orange-400 text-white shadow-inner">
                      <LuGraduationCap className="size-6" />
                    </div>
                  </div>

                  <h3 className="text-center font-semibold text-gray-900 text-lg">
                    AICTE Approved
                  </h3>
                  <p className="mt-2 text-center text-gray-600 text-sm">
                    All programs follow AICTE standards and regular audits to
                    ensure quality.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-full border border-rose-100 bg-rose-50 px-2 py-1 text-[11px] text-rose-600">
                      Accredited
                    </span>
                    <span className="rounded-full border border-rose-100 bg-rose-50 px-2 py-1 text-[11px] text-rose-600">
                      Quality
                    </span>
                  </div>
                </div>

                {/* soft floating accent */}
                <div className="-right-6 -top-6 pointer-events-none absolute h-20 w-20 rounded-full bg-rose-200/30 blur-2xl"></div>
              </div>

              {/* Card B */}
              <div className="hover:-translate-y-3 relative transform-gpu transition-all duration-300 hover:rotate-1">
                <div className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-md backdrop-blur-md hover:shadow-xl">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-rose-500 text-white shadow-inner">
                      <LuBookOpen className="size-6" />
                    </div>
                  </div>

                  <h3 className="text-center font-semibold text-gray-900 text-lg">
                    MAKAUT Affiliated
                  </h3>
                  <p className="mt-2 text-center text-gray-600 text-sm">
                    Degrees recognized across India with strong university
                    collaboration.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2 py-1 text-[11px] text-indigo-700">
                      Recognized
                    </span>
                    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2 py-1 text-[11px] text-indigo-700">
                      Trusted
                    </span>
                  </div>
                </div>

                <div className="-left-6 -bottom-6 pointer-events-none absolute h-24 w-24 rounded-full bg-indigo-100/20 blur-3xl"></div>
              </div>

              {/* Card C */}
              <div className="hover:-translate-y-3 hover:-rotate-1 relative transform-gpu transition-all duration-300">
                <div className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-md backdrop-blur-md hover:shadow-xl">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-rose-400 to-yellow-400 text-white shadow-inner">
                      <LuBuilding2 className="size-6" />
                    </div>
                  </div>

                  <h3 className="text-center font-semibold text-gray-900 text-lg">
                    Industry Ready
                  </h3>
                  <p className="mt-2 text-center text-gray-600 text-sm">
                    Curriculum shaped with industry partners, internships &
                    placement focus.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-full border border-amber-100 bg-amber-50 px-2 py-1 text-[11px] text-amber-700">
                      Internships
                    </span>
                    <span className="rounded-full border border-amber-100 bg-amber-50 px-2 py-1 text-[11px] text-amber-700">
                      Placements
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute top-2 right-2 h-20 w-20 rounded-full bg-yellow-100/30 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------- Helper component ---------------- */

interface MiniStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: string;
}

function _MiniStat({
  icon,
  label,
  value,
  accent = "text-foreground",
}: MiniStatProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-white/95 p-3 shadow-sm">
      <div className="rounded-md bg-rose-50 p-2">{icon}</div>
      <div>
        <div className="text-muted-foreground text-xs">{label}</div>
        <div className={`font-semibold ${accent} text-sm sm:text-base`}>
          {value}
        </div>
      </div>
    </div>
  );
}
