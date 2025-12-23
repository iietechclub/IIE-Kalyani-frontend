"use client";
import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
  LuBookOpen,
  LuCode,
  LuCpu,
  LuDatabase,
  LuNetwork,
  LuSmartphone,
  LuX,
} from "react-icons/lu";
import { MotionDiv } from "@/components/animated/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  title: string;
  department: string;
  year: string;
  students: string[];
  guide: string;
  category: string;
  icon: IconType;
  description: string;
};

const PROJECTS: Project[] = [
  {
    title: "AI-Based Disease Prediction System",
    department: "CSE",
    year: "2024",
    students: ["Rahul Kumar", "Priya Singh"],
    guide: "Dr. Rajesh Kumar",
    category: "Artificial Intelligence",
    icon: LuCpu,
    description:
      "Machine learning system for predicting diseases based on symptoms and medical history.",
  },
  {
    title: "Smart Campus Management System",
    department: "CSE",
    year: "2024",
    students: ["Amit Sharma", "Neha Patel"],
    guide: "Prof. Amit Patel",
    category: "Web Development",
    icon: LuCode,
    description:
      "Comprehensive web application for managing campus activities, attendance, and resources.",
  },
  {
    title: "IoT-Based Smart Agriculture",
    department: "ECE",
    year: "2024",
    students: ["Sandeep Verma", "Anjali Gupta"],
    guide: "Dr. Sneha Banerjee",
    category: "IoT",
    icon: LuNetwork,
    description:
      "IoT system for monitoring soil moisture, temperature, and automated irrigation.",
  },
  {
    title: "Blockchain-Based Supply Chain",
    department: "CSE",
    year: "2023",
    students: ["Vikram Singh", "Pooja Sharma"],
    guide: "Dr. Priya Sharma",
    category: "Blockchain",
    icon: LuDatabase,
    description:
      "Decentralized supply chain management system using blockchain technology.",
  },
  {
    title: "Mobile App for Mental Health",
    department: "AIML",
    year: "2023",
    students: ["Ravi Kumar", "Meera Joshi"],
    guide: "Dr. Arjun Malhotra",
    category: "Mobile Development",
    icon: LuSmartphone,
    description:
      "Mental health monitoring and support application with AI-based chatbot.",
  },
  {
    title: "Renewable Energy Monitoring System",
    department: "EE",
    year: "2023",
    students: ["Arun Patel", "Kavita Desai"],
    guide: "Dr. Rajiv Kumar",
    category: "Power Systems",
    icon: LuCpu,
    description:
      "Real-time monitoring and analysis of solar and wind energy generation.",
  },
  {
    title: "AI-Based Disease Prediction System",
    department: "CSE",
    year: "2024",
    students: ["Rahul Kumar", "Priya Singh"],
    guide: "Dr. Rajesh Kumar",
    category: "Artificial Intelligence",
    icon: LuCpu,
    description:
      "Machine learning system for predicting diseases based on symptoms and medical history.",
  },
  {
    title: "Smart Campus Management System",
    department: "CSE",
    year: "2024",
    students: ["Amit Sharma", "Neha Patel"],
    guide: "Prof. Amit Patel",
    category: "Web Development",
    icon: LuCode,
    description:
      "Comprehensive web application for managing campus activities, attendance, and resources.",
  },
  {
    title: "IoT-Based Smart Agriculture",
    department: "ECE",
    year: "2024",
    students: ["Sandeep Verma", "Anjali Gupta"],
    guide: "Dr. Sneha Banerjee",
    category: "IoT",
    icon: LuNetwork,
    description:
      "IoT system for monitoring soil moisture, temperature, and automated irrigation.",
  },
  {
    title: "Blockchain-Based Supply Chain",
    department: "CSE",
    year: "2023",
    students: ["Vikram Singh", "Pooja Sharma"],
    guide: "Dr. Priya Sharma",
    category: "Blockchain",
    icon: LuDatabase,
    description:
      "Decentralized supply chain management system using blockchain technology.",
  },
  {
    title: "Mobile App for Mental Health",
    department: "AIML",
    year: "2023",
    students: ["Ravi Kumar", "Meera Joshi"],
    guide: "Dr. Arjun Malhotra",
    category: "Mobile Development",
    icon: LuSmartphone,
    description:
      "Mental health monitoring and support application with AI-based chatbot.",
  },
  {
    title: "Renewable Energy Monitoring System",
    department: "EE",
    year: "2023",
    students: ["Arun Patel", "Kavita Desai"],
    guide: "Dr. Rajiv Kumar",
    category: "Power Systems",
    icon: LuCpu,
    description:
      "Real-time monitoring and analysis of solar and wind energy generation.",
  },
  {
    title: "AI-Based Disease Prediction System",
    department: "CSE",
    year: "2024",
    students: ["Rahul Kumar", "Priya Singh"],
    guide: "Dr. Rajesh Kumar",
    category: "Artificial Intelligence",
    icon: LuCpu,
    description:
      "Machine learning system for predicting diseases based on symptoms and medical history.",
  },
  {
    title: "Smart Campus Management System",
    department: "CSE",
    year: "2024",
    students: ["Amit Sharma", "Neha Patel"],
    guide: "Prof. Amit Patel",
    category: "Web Development",
    icon: LuCode,
    description:
      "Comprehensive web application for managing campus activities, attendance, and resources.",
  },
  {
    title: "IoT-Based Smart Agriculture",
    department: "ECE",
    year: "2024",
    students: ["Sandeep Verma", "Anjali Gupta"],
    guide: "Dr. Sneha Banerjee",
    category: "IoT",
    icon: LuNetwork,
    description:
      "IoT system for monitoring soil moisture, temperature, and automated irrigation.",
  },
  {
    title: "Blockchain-Based Supply Chain",
    department: "CSE",
    year: "2023",
    students: ["Vikram Singh", "Pooja Sharma"],
    guide: "Dr. Priya Sharma",
    category: "Blockchain",
    icon: LuDatabase,
    description:
      "Decentralized supply chain management system using blockchain technology.",
  },
  {
    title: "Mobile App for Mental Health",
    department: "AIML",
    year: "2023",
    students: ["Ravi Kumar", "Meera Joshi"],
    guide: "Dr. Arjun Malhotra",
    category: "Mobile Development",
    icon: LuSmartphone,
    description:
      "Mental health monitoring and support application with AI-based chatbot.",
  },
  {
    title: "Renewable Energy Monitoring System",
    department: "EE",
    year: "2023",
    students: ["Arun Patel", "Kavita Desai"],
    guide: "Dr. Rajiv Kumar",
    category: "Power Systems",
    icon: LuCpu,
    description:
      "Real-time monitoring and analysis of solar and wind energy generation.",
  },
  // ... (rest of projects omitted for brevity in this view - keep full array in your file)
];

const _CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Web Development",
  "Mobile Development",
  "IoT",
  "Blockchain",
  "Power Systems",
];

export default function ProjectBank() {
  const [query, _setQuery] = useState("");
  const [category, _setCategory] = useState<string>("All");
  const [sort, _setSort] = useState<"new" | "alpha">("new");
  const [selected, setSelected] = useState<Project | null>(null);

  // Pagination state
  const [page, setPage] = useState<number>(1);
  const [pageSize, _setPageSize] = useState<number>(6);

  // reset page to 1 whenever filters change (preserve filters/search across pagination)
  // biome-ignore lint/correctness/useExhaustiveDependencies: dependencies needed
  useEffect(() => {
    setPage(1);
  }, [query, category, sort, pageSize]);

  const filtered = useMemo(() => {
    let list = PROJECTS.filter((p) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.department.toLowerCase().includes(q) ||
        p.students.join(" ").toLowerCase().includes(q) ||
        p.guide.toLowerCase().includes(q);

      const matchesCategory = category === "All" || p.category === category;

      return matchesQuery && matchesCategory;
    });

    if (sort === "alpha") {
      list = list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      list = list.sort((a, b) => Number(b.year) - Number(a.year));
    }

    return list;
  }, [query, category, sort]);

  // pagination calculations
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  // helper to build a compact page range (shows window + first/last + ellipsis)
  function getPageRange() {
    const range: (number | "...")[] = [];
    const maxButtons = 7; // total visible buttons including first/last

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
      return range;
    }

    const left = Math.max(2, currentPage - 2);
    const right = Math.min(totalPages - 1, currentPage + 2);

    range.push(1);
    if (left > 2) range.push("...");

    for (let i = left; i <= right; i++) range.push(i);

    if (right < totalPages - 1) range.push("...");
    range.push(totalPages);

    return range;
  }

  // --- HEADER: replaced with LibraryPage header design (copied) ---
  const heroImage =
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80";

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-80 w-full bg-center bg-cover opacity-40"
            style={{ backgroundImage: `url('${heroImage}')` }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-r from-red-700/60 to-transparent"></div>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 lg:flex-row">
          <div className="z-10 flex-1 text-white">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 rounded-xl p-3">
                <LuBookOpen className="h-12 w-12 text-white" />
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">
                    Project Bank
                  </h1>
                  <p className="mt-1 text-sm text-white/90 md:text-base">
                    Explore innovative projects by our students — filter by
                    category, search titles or guides, and preview details.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* --- END HEADER --- */}

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* stats / status */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-gray-600 text-sm">
            Showing{" "}
            <strong>{Math.min(total, (currentPage - 1) * pageSize + 1)}</strong>{" "}
            — <strong>{Math.min(total, currentPage * pageSize)}</strong> of{" "}
            <strong>{total}</strong> projects
          </div>

          <div className="text-gray-500 text-sm">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((project, i) => {
            const Icon = project.icon || LuBookOpen;
            return (
              <MotionDiv
<<<<<<< Updated upstream
                // biome-ignore lint/suspicious/noArrayIndexKey: not needed
=======
>>>>>>> Stashed changes
                key={project.title + i}
                whileHover={{
                  translateY: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                className="rounded-2xl"
                transition={{ duration: 0.18 }}
              >
                <Card className="overflow-hidden rounded-2xl">
                  <div className="relative">
                    {/* gradient header */}
                    <div className="flex h-40 items-end bg-linear-to-br from-red-600 to-red-400 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="mb-8">
                          <div className="text-sm text-white/90">
                            {project.department}
                          </div>
                          <div className="font-semibold text-lg text-white leading-tight">
                            {project.title}
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="-mt-6 rounded-b-2xl bg-white p-5">
                      <p className="mb-3 line-clamp-3 text-gray-600 text-sm">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-100 text-black">
                            {project.year}
                          </Badge>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            onClick={() => setSelected(project)}
                            className="rounded-md border border-red-600 bg-white px-3 py-1 text-red-600 transition hover:bg-red-50"
                          >
                            Preview
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </MotionDiv>
            );
          })}
        </div>

        {/* Pagination controls */}
        <nav
          className="mt-8 flex items-center justify-between"
          aria-label="Pagination Navigation"
        >
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setPage(1)}
              disabled={currentPage === 1}
              className="rounded-md border bg-white px-3 py-1 text-gray-600 disabled:opacity-50"
              aria-label="Go to first page"
            >
              « First
            </Button>

            <Button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-md border bg-white px-3 py-1 text-gray-600 disabled:opacity-50"
              aria-label="Go to previous page"
            >
              ‹ Prev
            </Button>

            <div className="ml-2 flex items-center gap-1" aria-hidden>
              {getPageRange().map((p, idx) =>
                p === "..." ? (
                  <span
<<<<<<< Updated upstream
                    // biome-ignore lint/suspicious/noArrayIndexKey: not needed
=======
>>>>>>> Stashed changes
                    key={`ellipsis-${idx}`}
                    className="px-3 py-1 text-gray-500 text-sm"
                  >
                    …
                  </span>
                ) : (
                  <Button
                    key={p}
                    onClick={() => setPage(Number(p))}
                    aria-current={p === currentPage ? "page" : undefined}
                    className={`rounded-md border px-3 py-1 focus:outline-none ${p === currentPage ? "bg-red-600 text-white" : "bg-white text-grey-900"}`}
                  >
                    {p}
                  </Button>
                ),
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-md border bg-white px-3 py-1 text-grey-900 disabled:opacity-50"
              aria-label="Go to next page"
            >
              Next ›
            </Button>
            <Button
              onClick={() => setPage(totalPages)}
              disabled={currentPage === totalPages}
              className="rounded-md border bg-white px-3 py-1 text-grey-900 disabled:opacity-50"
              aria-label="Go to last page"
            >
              Last »
            </Button>
          </div>
        </nav>

        {/* CTA (optional) */}
      </div>

      {/* Project modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/** biome-ignore lint/a11y/noStaticElementInteractions: not needed */}
          {/** biome-ignore lint/a11y/useKeyWithClickEvents: not needed */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <MotionDiv
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-gray-100 border-b p-5">
              <div>
                <div className="text-gray-500 text-sm">
                  {selected.department} • {selected.year}
                </div>
                <h3 className="font-semibold text-xl">{selected.title}</h3>
                <div className="mt-2 text-gray-600 text-sm">
                  {selected.category}
                </div>
              </div>
              <Button
                className="rounded-md p-2 hover:bg-gray-100"
                onClick={() => setSelected(null)}
              >
                <LuX className="h-5 w-5 text-gray-600" />
              </Button>
            </div>

            <div className="space-y-4 p-6">
              <p className="text-gray-700 text-sm">{selected.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-gray-500 text-xs">Students</div>
                  <div className="text-sm">{selected.students.join(", ")}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Guide</div>
                  <div className="text-sm">{selected.guide}</div>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <Button
                  onClick={(e) => e.preventDefault()}
                  className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Download ZIP
                </Button>
                <Button
                  onClick={(e) => e.preventDefault()}
                  className="rounded-md border border-gray-200 px-4 py-2"
                >
                  View Repository
                </Button>
              </div>
            </div>
          </MotionDiv>
        </div>
      )}
    </main>
  );
}
