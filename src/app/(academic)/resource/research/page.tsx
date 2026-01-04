"use client";
import { useMemo, useState } from "react";
import { LuAward, LuBookOpen, LuTrendingUp, LuUsers } from "react-icons/lu";
import { MotionDiv } from "@/components/animated/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Research() {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Deep learning, neural networks, computer vision, and natural language processing",
      faculty: 5,
      publications: 12,
      icon: LuTrendingUp,
    },
    {
      title: "Internet of Things & Embedded Systems",
      description: "Smart devices, sensor networks, and embedded system design",
      faculty: 4,
      publications: 8,
      icon: LuBookOpen,
    },
    {
      title: "Power Systems & Renewable Energy",
      description: "Solar energy, wind power, and smart grid technologies",
      faculty: 3,
      publications: 6,
      icon: LuAward,
    },
    {
      title: "Communication Networks",
      description: "5G networks, wireless communication, and network security",
      faculty: 4,
      publications: 10,
      icon: LuUsers,
    },
  ];

  const publications = [
    {
      title: "Deep Learning Approach for Medical Image Analysis",
      authors: "Dr. Rajesh Kumar, Dr. Priya Sharma",
      journal: "International Journal of AI Research",
      year: "2024",
      impact: "4.5",
    },
    {
      title: "IoT-Based Smart Agriculture: A Comprehensive Study",
      authors: "Dr. Sneha Banerjee, Prof. Amit Patel",
      journal: "Journal of Agricultural Technology",
      year: "2024",
      impact: "3.8",
    },
    {
      title: "Optimization Techniques for Renewable Energy Systems",
      authors: "Dr. Rajiv Kumar, Dr. Anita Desai",
      journal: "IEEE Transactions on Power Systems",
      year: "2023",
      impact: "5.2",
    },
    {
      title: "Blockchain Applications in Supply Chain Management",
      authors: "Dr. Priya Sharma, Dr. Arjun Malhotra",
      journal: "Journal of Information Systems",
      year: "2023",
      impact: "4.1",
    },
  ];

  const ongoingProjects = [
    {
      title: "Smart City Infrastructure Development",
      duration: "2023-2026",
      funding: "MeitY",
      pi: "Dr. Rajesh Kumar",
      progress: 65,
    },
    {
      title: "AI-Powered Healthcare Diagnostics",
      duration: "2024-2027",
      funding: "DST",
      pi: "Dr. Priya Sharma",
      progress: 30,
    },
    {
      title: "Renewable Energy Integration in Microgrids",
      duration: "2023-2025",
      funding: "MNRE",
      pi: "Dr. Rajiv Kumar",
      progress: 85,
    },
  ];

  // search/filter state used in hero compact card
  const [query, _setQuery] = useState("");
  const [areaFilter, _setAreaFilter] = useState<string>("All");

  const _areaOptions = useMemo(
    () => ["All", ...researchAreas.map((r) => r.title)],
    // biome-ignore lint/correctness/useExhaustiveDependencies: not needed
    [researchAreas],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: needed
  const _filteredPublications = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter(
      (p) =>
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q)) &&
        (areaFilter === "All" ||
          p.journal.toLowerCase().includes(areaFilter.toLowerCase())),
    );
  }, [publications, query, areaFilter]);

  // Library-style hero image (swap if you want)
  const heroImage =
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80";

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      {/* Hero (library design) */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-80 w-full bg-center bg-cover"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 lg:flex-row">
          <div className="z-10 flex-1 text-white">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 rounded-xl p-3">
                <LuBookOpen className="size-12 text-white" />
                <div>
                  {/* Heading & description kept exactly as-is */}
                  <h1 className="font-bold text-3xl md:text-4xl">
                    Research & Development
                  </h1>
                  <p className="mt-1 max-w-xl text-sm text-white/90 md:text-base">
                    Advancing knowledge through cutting-edge research, strong
                    industry partnerships, and student-faculty collaboration —
                    explore our focus areas, publications and ongoing funded
                    projects.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Main content (kept unchanged) */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* === Responsive Research Data (unchanged) === */}

        {/* RESEARCH AREAS */}
        <section className="mb-10">
          <h2 className="mb-4 font-semibold text-2xl">Research Focus Areas</h2>

          {/* Desktop: table */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-lg border border-gray-100">
              <table className="w-full table-fixed border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Area
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Description
                    </th>
                    <th className="px-6 py-3 text-right font-medium text-sm">
                      Faculty
                    </th>
                    <th className="px-6 py-3 text-right font-medium text-sm">
                      Publications
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {researchAreas.map((r) => (
                    <tr key={r.title} className="hover:bg-gray-50">
                      <td className="px-6 py-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="rounded bg-red-50 p-2">
                            <r.icon className="h-5 w-5 text-red-600" />
                          </div>
                          <div className="font-medium">{r.title}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">
                        {r.description}
                      </td>
                      <td className="px-6 py-4 text-right">{r.faculty}</td>
                      <td className="px-6 py-4 text-right">{r.publications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile: stacked collapsible cards */}
          <div className="space-y-4 lg:hidden">
            {researchAreas.map((r) => (
              <details
                key={r.title}
                className="group rounded-lg border border-gray-100"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded bg-red-50 p-2">
                      <r.icon className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-medium">{r.title}</div>
                      <div className="text-muted-foreground text-xs">
                        {r.faculty} faculty • {r.publications} pubs
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm transition-transform group-open:rotate-180">
                    ▾
                  </div>
                </summary>

                <div className="px-4 pb-4 text-muted-foreground text-sm">
                  {r.description}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ONGOING PROJECTS */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-2xl">Ongoing Projects</h2>
            <a
              href="/research/projects"
              className="text-red-600 text-sm hover:underline"
            >
              View all projects →
            </a>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-lg border border-gray-100">
              <table className="w-full table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      PI
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Funding
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-right font-medium text-sm">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ongoingProjects.map((p) => (
                    <tr key={p.title} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{p.title}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">
                        {p.pi}
                      </td>
                      <td className="px-6 py-4 text-sm">{p.funding}</td>
                      <td className="px-6 py-4 text-sm">{p.duration}</td>
                      <td className="px-6 py-4">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-2 bg-red-600"
                            style={{ width: `${p.progress}%` }}
                            aria-hidden
                          />
                        </div>
                        <div className="mt-1 text-right text-muted-foreground text-xs">
                          {p.progress}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile stacked cards */}
          <div className="space-y-4 lg:hidden">
            {ongoingProjects.map((p) => (
              <Card key={p.title}>
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-muted-foreground text-sm">
                        {p.pi} • {p.funding}
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm">
                        {p.duration}
                      </div>
                    </div>

                    <div className="w-32 text-right">
                      <div className="font-medium text-sm">{p.progress}%</div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-2 bg-red-600"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">Recent Publications</h2>

          {/* Desktop table */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-lg border border-gray-100">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Authors
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-sm">
                      Journal
                    </th>
                    <th className="px-6 py-3 text-right font-medium text-sm">
                      Year
                    </th>
                    <th className="px-6 py-3 text-right font-medium text-sm">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {publications.map((pub) => (
                    <tr key={pub.title} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{pub.title}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">
                        {pub.authors}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">
                        {pub.journal}
                      </td>
                      <td className="px-6 py-4 text-right">{pub.year}</td>
                      <td className="px-6 py-4 text-right">
                        <Badge className="bg-blue-500">{pub.impact}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile list */}
          <div className="space-y-4 lg:hidden">
            {publications.map((pub) => (
              <Card key={pub.title}>
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold">{pub.title}</div>
                      <div className="mt-1 text-muted-foreground text-sm">
                        {pub.authors}
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm italic">
                        {pub.journal}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{pub.year}</div>
                      <div className="mt-2">
                        <Badge className="bg-blue-500">{pub.impact}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
