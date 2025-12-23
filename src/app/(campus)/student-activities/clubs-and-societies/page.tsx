"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { LuUsers } from "react-icons/lu";

import { MotionDiv } from "@/components/animated/motion";
import { Badge } from "@/components/ui/badge";
<<<<<<< Updated upstream
=======
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
>>>>>>> Stashed changes

// import { Button } from "@/components/ui/button";

/**
 * ClubsTwoRowGrid — 4-column modern grid (no glass overlay)
 * - Hero same as before
 * - Clean attractive cards
 * - Responsive with hover lift & smooth animations
 */

type Club = {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  members: string;
  image: string;
};

export default function ClubsTwoRowGrid() {
  const clubs: Club[] = [
    {
      id: "coding",
      name: "Coding Club",
      category: "tech",
      subtitle: "Code, Create, Innovate",
      description:
        "A community exploring new technologies, hackathons, and practical projects.",
      members: "120+",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: "robotics",
      name: "Robotics Club",
      category: "tech",
      subtitle: "Building the Future",
      description:
        "Design, build, and program robots — competitions and hands-on workshops.",
      members: "85+",
      image:
        "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "arts",
      name: "Fine Arts Club",
      category: "arts",
      subtitle: "Express Your Creativity",
      description:
        "Painting, digital art, and campus beautification initiatives.",
      members: "95+",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "music",
      name: "Music & Dance Club",
      category: "arts",
      subtitle: "Rhythm of Life",
      description:
        "Performances and cultural programs to showcase campus talent.",
      members: "110+",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "photo",
      name: "Photography Club",
      category: "arts",
      subtitle: "Capture Moments",
      description: "Photo walks, editing workshops, and campus event coverage.",
      members: "75+",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "lit",
      name: "Literary Club",
      category: "arts",
      subtitle: "Words That Inspire",
      description:
        "Creative writing, debates, poetry slams, and magazine publication.",
      members: "90+",
      image:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "sports",
      name: "Sports Club",
      category: "sports",
      subtitle: "Play Hard, Win Big",
      description: "Inter-college tournaments, coaching, and fitness programs.",
      members: "150+",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "social",
      name: "Social Service Club",
      category: "social",
      subtitle: "Serve & Inspire",
      description: "Community outreach, drives, and environmental initiatives.",
      members: "80+",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "iec",
      name: "Innovation & Entrepreneurship",
      category: "tech",
      subtitle: "Ideas to Impact",
      description: "Startup workshops, pitch competitions, and mentorship.",
      members: "65+",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // const tabs = [
  //   { key: "all", label: "All" },
  //   { key: "tech", label: "Tech" },
  //   { key: "arts", label: "Arts" },
  //   { key: "sports", label: "Sports" },
  //   { key: "social", label: "Social" },
  // ];

  const [
    query,
    // setQuery
  ] = useState("");
  const [
    tab,
    // setTab
  ] = useState("all");
  const [activeClub, setActiveClub] = useState<Club | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clubs.filter(
      (c) =>
        (tab === "all" ? true : c.category === tab) &&
        (!q ||
          c.name.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)),
    );
  }, [tab, query]);

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-blue-50/20">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80"
            alt="Campus clubs hero"
            fill
            className="h-80 w-full object-cover md:h-[460px]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/75 via-purple-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl pt-20 pb-12 text-center text-white"
          >
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
              <LuUsers className="h-5 w-5 text-white" />
              <span className="text-sm">Campus Life</span>
            </div>

            <h1 className="mb-3 font-bold text-3xl leading-tight md:text-4xl">
              Clubs & Societies
            </h1>
            <p className="mx-auto mb-6 max-w-2xl opacity-90">
              Join student-run clubs — tech, arts, sports and social
              initiatives. Build skills, lead projects and make lifelong
              friends.
            </p>
          </MotionDiv>
        </div>
      </header>

      {/* Controls */}
      <div className="container mx-auto px-4 pt-8">
        {/* 4-column Grid */}
        <section className="mx-auto mb-12 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((c) => (
              <MotionDiv
                key={c.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-blue-600 text-white">
                      {c.category}
                    </Badge>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex h-52 flex-col justify-between p-4">
                  <div>
                    <h3 className="mb-1 font-semibold text-lg">{c.name}</h3>
                    <p className="mb-2 text-muted-foreground text-sm">
                      {c.subtitle}
                    </p>
                    <p className="line-clamp-3 text-gray-600 text-xs">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-muted-foreground text-xs">
                      {c.members} Members
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">
              No clubs match your filter.
            </div>
          )}
        </section>
      </div>

      {/* Club Modal */}
      {activeClub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/40"
            onClick={() => setActiveClub(null)}
          />

          <MotionDiv
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.16 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex gap-4">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={activeClub.image}
                  alt={activeClub.name}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{activeClub.name}</h3>
                <div className="mb-2 text-muted-foreground text-xs">
                  {activeClub.subtitle} • {activeClub.members}
                </div>
                <p className="text-muted-foreground text-sm">
                  {activeClub.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveClub(null)}
                className="text-slate-500 text-sm"
              >
                Close
              </button>
            </div>
          </MotionDiv>
        </div>
      )}
    </main>
  );
}
