"use client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
  LuHandshake,
  LuLinkedin,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";
import { MotionDiv } from "@/components/animated/motion";

/**
 * AlumniRelationFullModern.tsx
 * - Replaces the Testimonials area with a modern animated carousel (3-card "viewport" like your example)
 * - Includes ImageWithFallback (simple local implementation)
 * - Tailwind classes for aesthetic gradients, soft shadows, and subtle motion
 *
 * Notes:
 * - Replace `heroImage` and `pdfHref` with your real hosted assets
 * - If you use Next.js/SSR, import motion/react dynamically to avoid SSR mismatches
 */

/* ------------------------------
   Small helpers & sample data
   ------------------------------ */

type Alumni = {
  id: number;
  name: string;
  batch: string;
  dept: string;
  city: string;
  linkedin: string;
};

const heroImage = "/assets/alumni-hero.jpg";
const _pdfHref = "/assets/alumni-brochure.pdf";

const _objectives = [
  {
    icon: LuUsers,
    title: "Network Building",
    description:
      "Create a strong alumni network to foster connections and professional relationships.",
  },
  {
    icon: LuTrendingUp,
    title: "Career Guidance",
    description:
      "Provide mentorship and career guidance to current students from successful alumni.",
  },
  {
    icon: LuHandshake,
    title: "Industry Connect",
    description:
      "Bridge academia and industry through alumni expertise, internships and hiring.",
  },
  {
    icon: LuCalendar,
    title: "Events & Reunions",
    description:
      "Organize alumni meets, reunions and knowledge-sharing events.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Asha Sen",
    batch: "2018",
    role: "Software Engineer — Google",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    quote:
      "IIE Kalyani prepared me for industry — the alumni network helped me land my first role at Google.",
  },
  {
    id: 2,
    name: "Ravi Das",
    batch: "2017",
    role: "Senior Manager — TCS",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    quote:
      "Mentoring students is a great way to give back. The placement office is responsive and organized.",
  },
  {
    id: 3,
    name: "Mina Roy",
    batch: "2019",
    role: "Founder — Healthtech",
    image:
      "https://images.unsplash.com/photo-1545996124-1b7b9d3f9b1b?w=800&q=80",
    quote:
      "I found cofounders and first hires through alumni meetups — real value in these events.",
  },
  {
    id: 4,
    name: "Arjun K",
    batch: "2016",
    role: "Project Manager — Infosys",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
    quote:
      "Events and meetups helped me build a strong professional network across cities.",
  },
  {
    id: 5,
    name: "Sree Banerjee",
    batch: "2015",
    role: "Hardware Architect — Startup",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80",
    quote:
      "The alumni community is active, supportive and always willing to help students and fellow alumni.",
  },
];

/* CSV export from earlier */
function _exportToCsv(filename: string, rows: Record<string, unknown>[]) {
  if (!rows || rows.length === 0) return;
  const keys = Object.keys(rows[0]);
  const csv = [keys.join(",")]
    .concat(
      rows.map((r) => keys.map((k) => JSON.stringify(r[k] ?? "")).join(",")),
    )
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ------------------------------
   Modern testimonial carousel
   - shows 3 cards at a time (if available), slides every 6s
   - nav arrows for desktop, dots, and smooth transitions
   ------------------------------ */

function TestimonialsCarousel() {
  // We'll build a sliding window like in your example
  const [currentView, setCurrentView] = useState(0);
  const totalViews = Math.max(1, testimonials.length - 2); // show 3 cards at once; if <=3 then 1 view
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      setCurrentView((prev) => (prev + 1) % totalViews);
    }, 6000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [totalViews]);

  const handleNext = () => setCurrentView((p) => (p + 1) % totalViews);
  const handlePrev = () =>
    setCurrentView((p) => (p - 1 + totalViews) % totalViews);
  const handleDot = (i: number) => setCurrentView(i);
  const pause = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };
  const resume = () => {
    if (!autoplayRef.current)
      autoplayRef.current = window.setInterval(
        () => setCurrentView((p) => (p + 1) % totalViews),
        6000,
      );
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-b from-white to-rose-500/30 p-6 md:p-10">
      {/* Decorative floating blobs */}
      <div className="-right-40 -top-24 pointer-events-none absolute h-80 w-80 rounded-full bg-[#FF6B35]/10 blur-3xl" />
      <div className="-left-40 -bottom-24 pointer-events-none absolute h-72 w-72 rounded-full bg-[#E63946]/8 blur-3xl" />

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-2xl text-rose-600">
            What Our Alumni Say
          </h3>
          <p className="text-slate-500 text-sm">
            Real experiences, real advice — from alumni across industries.
          </p>
        </div>

        {/* Desktop arrows */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
            className="h-11 w-11 rounded-full bg-white shadow transition-transform hover:scale-105"
          >
            <LuChevronLeft className="h-5 w-5 text-rose-500" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            className="h-11 w-11 rounded-full bg-white shadow transition-transform hover:scale-105"
          >
            <LuChevronRight className="h-5 w-5 text-rose-500" />
          </button>
        </div>
      </div>

      {/** biome-ignore lint/a11y/noStaticElementInteractions: not interested */}
      <div
        onMouseEnter={pause}
        onMouseLeave={resume}
        className="overflow-hidden"
      >
        <div className="flex items-stretch justify-center gap-4 md:gap-6">
          {[0, 1, 2].map((offset) => {
            const idx = currentView + offset;
            if (idx >= testimonials.length) return null;
            const t = testimonials[idx];

            return (
              <AnimatePresence key={`${t.id}-${currentView}`} mode="wait">
                <MotionDiv
                  layout
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: offset * 0.06,
                  }}
                  className="w-72 shrink-0 md:w-80"
                >
                  <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div className="relative h-40 overflow-hidden md:h-44">
                      <Image
                        fill
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="flex h-[220px] flex-col p-4 md:h-[220px] md:p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 font-semibold text-rose-600">
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-700">
                            {t.name}
                          </div>
                          <div className="text-slate-700 text-xs">
                            {t.role} • Batch {t.batch}
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 grow text-slate-600 text-sm">
                        {t.quote}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        {/* <a className="text-xs text-rose-600 font-medium" href="#">Read profile</a> */}
                        <div className="text-slate-500 text-xs">Verified</div>
                      </div>

                      {/* animated accent bar */}
                      <div className="mt-3 h-1 w-full scale-x-95 rounded-full bg-linear-to-r from-rose-300 to-rose-600 transition-transform duration-300 group-hover:scale-x-100" />
                    </div>
                  </article>
                </MotionDiv>
              </AnimatePresence>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-3">
        {Array.from({ length: totalViews }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleDot(i)}
            aria-label={`Go to view ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === currentView
                ? "h-3 w-12 bg-linear-to-r from-rose-500 to-rose-700"
                : "h-3 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------
   Main Page (Alumni Relation)
   ------------------------------ */

export default function AlumniRelationPage() {
  // directory + filters (kept simple for demo)
  const [query, _setQuery] = useState("");
  const [deptFilter, _setDeptFilter] = useState<string | null>(null);
  const [batchFilter, _setBatchFilter] = useState<string | null>(null);
  const [directory] = useState<Alumni[]>([
    {
      id: 1,
      name: "Asha Sen",
      batch: "2018",
      dept: "CSE",
      city: "Bengaluru",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Ravi Das",
      batch: "2017",
      dept: "ME",
      city: "Kolkata",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Mina Roy",
      batch: "2019",
      dept: "CSE",
      city: "Mumbai",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Arjun K",
      batch: "2016",
      dept: "CSE",
      city: "Hyderabad",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Sree Banerjee",
      batch: "2015",
      dept: "EE",
      city: "Bengaluru",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Nisha Patel",
      batch: "2014",
      dept: "CE",
      city: "Ahmedabad",
      linkedin: "#",
    },
  ]);
  const _uniqueDepts = useMemo(
    () => Array.from(new Set(directory.map((d) => d.dept))),
    [directory],
  );
  const _uniqueBatches = useMemo(
    () =>
      Array.from(new Set(directory.map((d) => d.batch)))
        .sort()
        .reverse(),
    [directory],
  );

  const filteredDirectory = useMemo(() => {
    const q = query.trim().toLowerCase();
    return directory.filter((a) => {
      if (deptFilter && a.dept !== deptFilter) return false;
      if (batchFilter && a.batch !== batchFilter) return false;
      if (!q) return true;
      return (
        a.name.toLowerCase().includes(q) ||
        a.city.toLowerCase().includes(q) ||
        a.dept.toLowerCase().includes(q)
      );
    });
  }, [directory, query, deptFilter, batchFilter]);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="h-80 w-full bg-center bg-cover opacity-90 md:h-[420px]"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-b from-rose-700/60 to-black/30" />
        </div>

        <div className="container mx-auto px-4 py-20">
          <MotionDiv
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 lg:flex-row">
              <div className="z-10 flex-1 text-center lg:text-left">
                <div className="mb-4 inline-flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br from-rose-500 to-rose-600 text-white shadow">
                    <LuUsers className="h-7 w-7" />
                  </div>
                  <div className="text-white">
                    <h1 className="font-bold text-3xl leading-tight md:text-4xl">
                      Alumni Relations
                    </h1>
                    <p className="mt-1 max-w-xl text-sm text-white/90 md:text-base">
                      Connect, mentor and collaborate — lifelong association
                      with IIE Kalyani.
                    </p>
                  </div>
                </div>

                {/* <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a href="#directory" className="inline-flex items-center gap-2 bg-white text-rose-600 px-4 py-2 rounded-lg shadow"><Users className="w-4 h-4" /> Alumni Directory</a>
                  <a href="#events" className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/6"><Calendar className="w-4 h-4" /> Events</a>
                  <a href={pdfHref} className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20" target="_blank" rel="noreferrer" aria-label="Open brochure PDF">
                    <Mail className="w-4 h-4" /> Brochure (PDF)
                  </a>
                </div> */}
              </div>

              {/* Snapshot */}
              {/* <div className="w-full lg:w-96 z-10">
                <div className="rounded-xl bg-white/95 dark:bg-gray-800/60 p-4 md:p-6 border border-white/10 shadow backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">Active Chapters</div>
                      <div className="font-semibold text-lg">4</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">Alumni</div>
                      <div className="font-semibold text-lg">~1200+</div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">Join chapters, volunteer to mentor, or donate to student initiatives.</div>

                  <div className="mt-4 flex gap-2">
                    <a href="#donate" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-rose-600 text-white">Donate</a>
                    <a href="#mentor" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-rose-100 text-rose-600">Become Mentor</a>
                  </div>
                </div>
              </div> */}
            </div>
          </MotionDiv>
        </div>
      </header>

      <div className="container mx-auto px-4">
        {/* About */}
        <section className="mt-10 mb-8">
          <div className="s mx-auto max-w-7xl p-6 md:p-8">
            <h2 className="font-bold text-4xl">About the Alumni Cell</h2>
            <p className="mt-3 text-slate-600">
              The Alumni Relations Cell fosters lifelong connections:
              mentorship, career support, industry collaborations and
              celebratory events.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Molestiae optio blanditiis dolorum dolore sequi
              similique consequatur repellat cumque molestias, recusandae
              laudantium veritatis, totam, obcaecati sit quod at! Quibusdam, eos
              et.
            </p>
          </div>
        </section>

        {/* Objectives */}
        {/* <section className="mb-10">
          <h3 className="text-center text-xl font-semibold mb-6">Our Objectives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((o, i) => {
              const Icon = o.icon;
              return (
                <MotionArticle key={o.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-semibold">{o.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{o.description}</p>
                    </div>
                  </div>
                </MotionArticle>
              );
            })}
          </div>
        </section> */}

        {/* Modern Testimonials Carousel */}
        <section className="mb-10">
          <TestimonialsCarousel />
        </section>

        {/* Directory (simple) */}
        <section id="directory" className="mb-16">
          <h3 className="mb-4 text-center font-bold text-2xl">
            Alumni Directory{" "}
          </h3>
          <div className="mx-auto max-w-6xl rounded-2xl border border-gray-100 bg-white p-4 md:p-6">
            {/* <div className="flex flex-col md:flex-row gap-3 items-center">
              <div className="flex-1 relative">
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, city or dept" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-rose-400" aria-label="Search alumni" />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"><Search className="w-4 h-4" /></div>
              </div>

              <div className="flex gap-2">
                <select value={deptFilter ?? ""} onChange={(e) => setDeptFilter(e.target.value || null)} className="px-3 py-2 rounded-lg border">
                  <option value="">All Depts</option>
                  {uniqueDepts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>

                <select value={batchFilter ?? ""} onChange={(e) => setBatchFilter(e.target.value || null)} className="px-3 py-2 rounded-lg border">
                  <option value="">All Batches</option>
                  {uniqueBatches.map(b => <option key={b} value={b}>{b}</option>)}
                </select>

                <button onClick={() => exportToCsv("alumni-directory.csv", filteredDirectory as any)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border">
                  <Download className="w-4 h-4" /> Export CSV
                </button>
              </div>
            </div> */}

            {/* simple table */}
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-rose-50">
                    <th className="px-4 py-3 text-sm">Name</th>
                    <th className="px-4 py-3 text-sm">Batch</th>
                    <th className="px-4 py-3 text-sm">Dept</th>
                    <th className="px-4 py-3 text-sm">City</th>
                    <th className="px-4 py-3 text-sm">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDirectory.map((a) => (
                    <tr key={a.id} className="odd:bg-white even:bg-rose-50">
                      <td className="px-4 py-3">{a.name}</td>
                      <td className="px-4 py-3">{a.batch}</td>
                      <td className="px-4 py-3">{a.dept}</td>
                      <td className="px-4 py-3">{a.city}</td>
                      <td className="px-4 py-3">
                        <a
                          href={a.linkedin}
                          className="inline-flex items-center gap-2 rounded-md border border-rose-100 px-3 py-1 text-rose-600"
                        >
                          <LuLinkedin className="h-4 w-4" /> View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        {/* <section className="mb-20">
          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 text-center border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold">Stay Connected — Join the Network</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Sign up to receive event invites, mentoring requests and chapter updates.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a href="/alumni/join" className="px-6 py-2 rounded-md bg-rose-600 text-white">Join Alumni Network</a>
              <a href={pdfHref} className="px-6 py-2 rounded-md border border-rose-600 text-rose-600" target="_blank" rel="noreferrer">Download Brochure (PDF)</a>
            </div>
            <div className="mt-4 text-sm text-slate-500">© {new Date().getFullYear()} IIE Kalyani Alumni Relations</div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
