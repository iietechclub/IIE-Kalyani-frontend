"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { LuCalendar, LuCpu } from "react-icons/lu";
import { MotionArticle, MotionDiv } from "@/components/animated/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type EventType = {
  id?: string;
  title: string;
  image: string;
  date?: string;
  dateLabel?: string;
  description?: string;
  venue?: string;
  tags?: string[];
};
/**
 * TechnicalEventsPage.jsx
 * - Hero preserved
 * - Upcoming events: fixed-card-width responsive grid (min 280px, max 360px)
 * - More sample events included
 * - Past events: two-column layout
 * - Event details modal
 */

export default function TechnicalEventsPage() {
  const upcomingEvents = [
    {
      id: "techfest-2025",
      title: "National Level Technical Symposium - TECHFEST 2025",
      date: "March 15-17, 2025",
      dateLabel: "15-17 March 2025",
      description:
        "A 3-day technical extravaganza featuring paper presentations, workshops and industry panels. Students and professionals come together to showcase innovations, attend hands-on workshops and participate in competitions.",
      category: "Symposium",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
      participants: "500+",
      tags: ["Paper Presentations", "Workshops", "Competitions"],
      venue: "Main Auditorium",
      speakers: ["Dr. A. Expert", "Ms. Industry Lead"],
    },
    {
      id: "ml-ai-2025",
      title: "Machine Learning & AI Workshop",
      date: "April 2-4, 2025",
      dateLabel: "2-4 April 2025",
      description:
        "Applied workshop on ML & AI fundamentals with hands-on model-building, evaluation and deployment. Work on real datasets with industry mentors.",
      category: "Workshop",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80",
      participants: "120",
      tags: ["Hands-on", "ML", "Deep Learning"],
      venue: "Computer Lab 1",
      speakers: ["AI Specialist"],
    },
    {
      id: "web-bootcamp-2025",
      title: "Web Development Bootcamp",
      date: "May 10-12, 2025",
      dateLabel: "10-12 May 2025",
      description:
        "3-day intensive bootcamp covering modern frontend & backend stacks, deployment pipelines and performance best practices.",
      category: "Workshop",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
      participants: "150",
      tags: ["Full-stack", "React", "Node.js"],
      venue: "Computer Lab 2",
      speakers: ["Fullstack Dev"],
    },
    {
      id: "iot-2025",
      title: "IoT & Embedded Systems Intensive",
      date: "June 5-7, 2025",
      dateLabel: "5-7 June 2025",
      description:
        "Hands-on sessions covering sensors, microcontrollers (Arduino/RPi), and cloud integration. Build a prototype during the workshop.",
      category: "Workshop",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
      participants: "80",
      tags: ["IoT", "Embedded", "Hardware"],
      venue: "Electronics Lab",
      speakers: ["IoT Specialist"],
    },
  ];

  const pastEvents = [
    {
      title: "Hackathon 2024 - Code Marathon",
      date: "December 8-9, 2024",
      description:
        "24-hour coding challenge with teams building innovative solutions across tracks.",
      highlights: ["50+ teams", "3 winners", "Industry mentorship"],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Robotics Workshop & Competition",
      date: "November 15-16, 2024",
      description:
        "Students designed and built autonomous robots competing on a defined track.",
      highlights: ["35 teams", "Live demos", "Best innovation award"],
      image:
        "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Web Development Bootcamp",
      date: "October 20-22, 2024",
      description:
        "Intensive 3-day bootcamp covering modern web technologies and hands-on projects.",
      highlights: ["100+ trained", "Live projects", "Certificate"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "IoT & Embedded Systems Workshop",
      date: "September 10-11, 2024",
      description:
        "Practical session on sensors, microcontrollers and cloud integration.",
      highlights: ["30+ projects", "Hardware kits provided"],
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const [
    query,
    // setQuery
  ] = useState("");
  const [
    activeCategory,
    // setActiveCategory
  ] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const filteredUpcoming = useMemo(() => {
    const q = query.trim().toLowerCase();
    return upcomingEvents.filter((e) => {
      const matchesCat =
        activeCategory === "All" || e.category === activeCategory;
      const matchesQ =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.date.toLowerCase().includes(q) ||
        e.tags?.join(" ").toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, activeCategory]);

  const excerpt = (text: string, n: number = 120) =>
    text.length > n ? `${text.slice(0, n).trim()}…` : text;

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50/30 to-white pt-20 md:pt-0">
      {/* Hero (kept as-is) */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-[500px] w-full scale-105 object-center md:h-[520px]">
            <Image
              fill
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80"
              alt="Technical events hero"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-purple-900/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl pt-24 pb-12 text-center text-white"
          >
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
              <LuCpu className="h-5 w-5 text-white" />
              <span className="text-sm">Campus Life</span>
            </div>
            <h1 className="mb-3 font-bold text-3xl leading-tight md:text-4xl">
              Technical Events & Seminars
            </h1>
            <p className="mx-auto mb-6 max-w-2xl opacity-90">
              Explore innovation, build skills and network with industry experts
              — workshops, symposiums, guest lectures and competitions
            </p>
            <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-xs opacity-80">Events / year</div>
                <div className="font-semibold text-lg">50+</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-xs opacity-80">Workshops</div>
                <div className="font-semibold text-lg">15+</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-xs opacity-80">Speakers</div>
                <div className="font-semibold text-lg">200+</div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-xs opacity-80">Students Impacted</div>
                <div className="font-semibold text-lg">5k+</div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-12">
        {/* Upcoming Events - fixed card width grid */}
        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-2xl">
              Upcoming Technical Events
            </h2>
            <div className="text-muted-foreground text-sm">
              {filteredUpcoming.length} result
              {filteredUpcoming.length !== 1 ? "s" : ""}
            </div>
          </div>

          {filteredUpcoming.length === 0 ? (
            <div className="rounded-2xl bg-white p-6 text-center">
              <div className="mb-2 font-medium text-lg">
                No upcoming events found
              </div>
              <div className="text-muted-foreground text-sm">
                Try changing the search or category filter.
              </div>
            </div>
          ) : (
            <div
              className="mx-auto"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 360px))",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {filteredUpcoming.map((ev, idx) => (
                <MotionArticle
                  key={ev.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                  style={{ width: "100%", maxWidth: 360 }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-600 text-white">
                        {ev.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 rounded-md bg-white/80 px-2 py-1 text-slate-700 text-xs">
                      {ev.dateLabel}
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="mb-1 font-semibold text-lg leading-tight">
                          {ev.title}
                        </h3>
                        <div className="mb-3 text-muted-foreground text-xs">
                          {excerpt(ev.description, 120)}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {ev.tags?.map((t) => (
                            <Badge
                              key={t}
                              className="bg-gray-100 text-gray-700"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </MotionArticle>
              ))}
            </div>
          )}
        </section>

        {/* Past events — two-column responsive grid */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">
            Past Events Highlights
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pastEvents.map((pe, i) => (
              <MotionDiv
                key={pe.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="grid items-stretch gap-6 md:grid-cols-3">
                    <div className="relative h-56 w-full overflow-hidden rounded-md md:col-span-1 md:h-64">
                      <Image
                        src={pe.image}
                        alt={pe.title}
                        fill
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between p-6 md:col-span-2">
                      <div>
                        <div className="mb-2 flex items-center gap-3 text-muted-foreground text-sm">
                          <LuCalendar className="h-4 w-4 text-blue-600" />
                          <span>{pe.date}</span>
                        </div>

                        <h3 className="mb-2 font-semibold text-lg">
                          {pe.title}
                        </h3>
                        <p className="mb-4 text-muted-foreground text-sm">
                          {pe.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {pe.highlights.map((h) => (
                            <Badge
                              key={h}
                              className="bg-gray-100 text-gray-700"
                            >
                              {h}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </section>
      </main>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            tabIndex={0}
            onClick={() => setSelectedEvent(null)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedEvent(null)}
          />

          <MotionDiv
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.16 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{selectedEvent.title}</h3>
                <div className="text-muted-foreground text-xs">
                  {selectedEvent.dateLabel} • {selectedEvent.venue}
                </div>
                <div className="mt-3 text-muted-foreground text-sm">
                  {selectedEvent.description}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedEvent.tags?.map((t) => (
                    <Badge key={t} className="bg-gray-100 text-gray-700">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <Button
                    size="sm"
                    className="bg-blue-600 text-white"
                    onClick={() =>
                      alert("Register flow — implement registration")
                    }
                  >
                    Register
                  </Button>
                  <a href="#contact" className="text-rose-600 text-sm">
                    Contact Events Cell
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="text-slate-500 text-sm"
              >
                Close
              </button>
            </div>
          </MotionDiv>
        </div>
      )}
    </div>
  );
}
