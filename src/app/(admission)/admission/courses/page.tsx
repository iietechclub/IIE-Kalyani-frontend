"use client"; 

import { useState } from "react";
import Link from "next/link"; 
import { Laptop, Cog, Zap, Brain } from "lucide-react";
import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Building2,
  Users,
  ChevronDown,
  Star,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";

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
    icon: GraduationCap,
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
    icon: BookOpen,
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
    icon: Building2,
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
    icon: Users,
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
    icon: Laptop,
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
    icon: Cog,
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
    icon: Zap,
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
    icon: Building2,
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
    icon: Brain,
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


  const lateralEntry = {
    title: "B.Tech Lateral Entry",
    duration: "3 Years",
    eligibility: "Diploma holders in relevant stream",
    seats: "Available in all branches",
    description:
      "Direct admission to 2nd year for diploma holders with excellent career prospects.",
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="font-nanito min-h-screen bg-gradient-to-br from-gray-50 to-rose-50/30 ">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-rose-600 to-red-600 text-white py-14 sm:py-18">
        <div className="absolute inset-0 bg-black/6 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur px-3 py-2 transform-gpu">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Courses Offered
            </h1>

            <p className="mt-3 text-sm sm:text-base text-rose-50 max-w-3xl mx-auto">
              AICTE-approved & MAKAUT-affiliated undergraduate programs — designed for industry readiness and future careers.
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* intro */}
        <section className="mb-10 text-center">
          <p className="text-sm sm:text-base text-gray-700  max-w-4xl mx-auto">
            IIE Kalyani offers industry-relevant undergraduate programs approved by AICTE and affiliated to MAKAUT — emphasising hands-on learning, research and employability.
          </p>
        </section>

        {/* Programs grid */}
        <section className="mb-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 ">
              Undergraduate Programs
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-rose-500 to-red-500 mx-auto rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="relative"
                >
                  <Card className="p-6 sm:p-6 bg-white/90 border border-transparent hover:border-white/10 hover:shadow-2xl transition-all duration-300 group overflow-visible">
                    {/* ribbon badge */}
                    {course.badge && (
                      <div className="absolute right-4 mb-1 top-1.5">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-rose-600 shadow">
                          <Star className="w-3 h-3 text-amber-400" />
                          {course.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${course.accent} text-white shadow-md transform transition group-hover:scale-105`}
                        aria-hidden
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 ">
                          {course.title}
                        </h3>

                        <div className="mt-2 flex flex-wrap flex-row text-[12px] gap-2 sm:text-sm text-gray-700">
                          <span>Duration: {course.duration}</span>
                          <span>•</span>
                          {/* <span>Seats: {course.seats}</span> */}
                          {/* <span>•</span> */}
                          <span>Affiliation: {course.affiliation}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 mb-4">
                      {course.description}
                    </p>

                    {/* Highlights: grid on sm+, accordion on xs */}
                    {/* <div>
                      <div className="hidden sm:grid sm:grid-cols-2 gap-2">
                        {course.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-900/40"
                          >
                            <span className="h-2 w-2 bg-rose-500 rounded-full shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="sm:hidden mt-2">
                        <button
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                          className="w-full flex items-center justify-between gap-3 px-3 py-2 bg-gray-50 dark:bg-gray-900/40 rounded-md"
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
                              <div key={i} className="flex items-center gap-3 p-2 rounded-md bg-gray-50 dark:bg-gray-900/40">
                                <span className="h-2 w-2 bg-rose-500 rounded-full" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div> */}

                    <div className="mt-6 flex items-center justify-end gap-3">
                    
                      <Link
                        href="/academic/departments"
                        className="text-sm text-gray-600  hover:underline"
                      >
                         Know More → 
                      </Link>
                    </div>
                  </Card>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Lateral Entry */}
       <section className="relative mb-16 px-4">
  {/* Background Gradient + Glow */}
  <div className="
    absolute inset-0 
    bg-gradient-to-br from-rose-100 via-red-50 to-orange-50 
    
    rounded-3xl 
    shadow-[0_8px_40px_rgba(255,100,100,0.25)]
  " />

  {/* Soft radial glow bottom-right */}
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-300/30 blur-3xl rounded-full pointer-events-none"></div>

  {/* Content (positioned above background) */}
  <div className="relative py-12 md:py-16">
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
        Achievements & Milestones
      </h2>
      <p className="text-gray-600 mt-2 text-base sm:text-lg">
        Sneak peek Of Our Success Story
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl 
                      transition-all duration-300 text-center">
        <img src="/icons/medal1.png" className="w-12 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 ">Innovation Award</h3>
        <p className="text-sm text-gray-500 mt-1">Acknowledged for innovation and change.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl 
                      transition-all duration-300 text-center">
        <img src="/icons/medal2.png" className="w-12 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 ">Customer Award</h3>
        <p className="text-sm text-gray-500 mt-1">Recognized for customer satisfaction.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white  rounded-xl p-6 shadow-md hover:shadow-xl 
                      transition-all duration-300 text-center">
        <img src="/icons/medal3.png" className="w-12 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 ">Global Award</h3>
        <p className="text-sm text-gray-500 mt-1">Empowering brands worldwide.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white  rounded-xl p-6 shadow-md hover:shadow-xl 
                      transition-all duration-300 text-center">
        <img src="/icons/medal4.png" className="w-12 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 ">Design Award</h3>
        <p className="text-sm text-gray-500 mt-1">Recognized for design excellence.</p>
      </div>
    </div>
  </div>
</section>


        {/* Why choose */}
     <section className="relative mb-16 px-4">
  {/* Decorative background */}
  {/* <div
    aria-hidden
    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-50 via-rose-100 to-orange-50 dark:from-rose-900/10 dark:via-red-900/6 dark:to-orange-900/6 shadow-inner"
  />
  <div aria-hidden className="absolute -left-8 top-6 w-44 h-44 rounded-full bg-rose-200/30 blur-3xl pointer-events-none" />
  <div aria-hidden className="absolute right-6 -bottom-8 w-56 h-56 rounded-full bg-yellow-200/20 blur-3xl pointer-events-none" /> */}

  <div className="relative max-w-7xl mx-auto py-12 md:py-16">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 ">
        Why Choose Our Programs
      </h2>
      <p className="mt-2 text-sm text-gray-600 ">
        Designed for industry, backed by accreditation — built for your future.
      </p>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-1 w-10 rounded bg-rose-500 block" />
        <span className="h-1 w-4 rounded bg-rose-300 block" />
      </div>
    </div>

    {/* Cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Card A */}
      <div className="relative transform-gpu hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300">
        <div className="rounded-2xl bg-white/90  backdrop-blur-md border border-gray-100 p-6 shadow-md hover:shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-inner">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900  text-center">AICTE Approved</h3>
          <p className="mt-2 text-sm text-gray-600 text-center">
            All programs follow AICTE standards and regular audits to ensure quality.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-[11px] px-2 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100">Accredited</span>
            <span className="text-[11px] px-2 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100">Quality</span>
          </div>
        </div>

        {/* soft floating accent */}
        <div className="pointer-events-none absolute -right-6 -top-6 w-20 h-20 rounded-full bg-rose-200/30 blur-2xl"></div>
      </div>

      {/* Card B */}
      <div className="relative transform-gpu hover:-translate-y-3 hover:rotate-1 transition-all duration-300">
        <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 p-6 shadow-md hover:shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-indigo-500 to-rose-500 text-white shadow-inner">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900  text-center">MAKAUT Affiliated</h3>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Degrees recognized across India with strong university collaboration.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">Recognized</span>
            <span className="text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">Trusted</span>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-indigo-100/20 blur-3xl"></div>
      </div>

      {/* Card C */}
      <div className="relative transform-gpu hover:-translate-y-3 hover:-rotate-1 transition-all duration-300">
        <div className="rounded-2xl bg-white/90  backdrop-blur-md border border-gray-100 p-6 shadow-md hover:shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-rose-400 to-yellow-400 text-white shadow-inner">
              <Building2 className="w-6 h-6" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 text-center">Industry Ready</h3>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Curriculum shaped with industry partners, internships & placement focus.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">Internships</span>
            <span className="text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">Placements</span>
          </div>
        </div>

        <div className="pointer-events-none absolute right-2 top-2 w-20 h-20 rounded-full bg-yellow-100/30 blur-2xl"></div>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}

/* ---------------- Helper component ---------------- */

function MiniStat({ icon, label, value, accent = "text-foreground" }: any) {
  return (
    <div className="bg-white/95 dark:bg-gray-800/85 rounded-lg p-3 shadow-sm flex items-center gap-3">
      <div className="p-2 rounded-md bg-rose-50 dark:bg-rose-900/20">{icon}</div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className={`font-semibold ${accent} text-sm sm:text-base`}>{value}</div>
      </div>
    </div>
  );
}
