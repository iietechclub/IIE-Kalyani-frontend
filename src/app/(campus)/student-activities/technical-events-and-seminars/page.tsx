import { LuCalendar, LuCpu } from "react-icons/lu";
import { MotionArticle, MotionDiv } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";
import GithubImage from "@/components/GithubImage";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fetchTechnicalEventsAndSeminarsPageData } from "@/dal/technical-events-and-seminars";

// type EventType = {
//   id?: string;
//   title: string;
//   image: string;
//   date?: string;
//   dateLabel?: string;
//   description?: string;
//   venue?: string;
//   tags?: string[];
// };
/**
 * TechnicalEventsPage.jsx
 * - Hero preserved
 * - Upcoming events: fixed-card-width responsive grid (min 280px, max 360px)
 * - More sample events included
 * - Past events: two-column layout
 * - Event details modal
 */

export default async function TechnicalEventsPage() {
  // const upcomingEvents = [
  //   {
  //     id: "techfest-2025",
  //     title: "Hands-on Workshop at Webel Technology Limited (WTL)",
  //     date: "April 19, 2024",
  //     dateLabel: "19 April 2024",
  //     description:
  //       "A 3-day technical extravaganza featuring paper presentations, workshops and industry panels. Students and professionals come together to showcase innovations, attend hands-on workshops and participate in competitions.",
  //     category: "Symposium",
  //     image:
  //       "(campus)/student-activities/technical-events-and-seminars/event_card1.jpg",
  //     participants: "500+",
  //     tags: ["Paper Presentations", "Workshops", "Competitions"],
  //     venue: "Main Auditorium",
  //     speakers: ["Dr. A. Expert", "Ms. Industry Lead"],
  //   },
  //   {
  //     id: "ml-ai-2025",
  //     title: "Global Entrepreneurship Summit ’25 at IIT Kharagpur",
  //     date: "February 7-9, 2025",
  //     dateLabel: "7-9 February 2025",
  //     description:
  //       "Applied workshop on ML & AI fundamentals with hands-on model-building, evaluation and deployment. Work on real datasets with industry mentors.",
  //     category: "Workshop",
  //     image:
  //       "(campus)/student-activities/technical-events-and-seminars/event_card2.jpeg",
  //     participants: "120",
  //     tags: ["Hands-on", "ML", "Deep Learning"],
  //     venue: "Computer Lab 1",
  //     speakers: ["AI Specialist"],
  //   },
  //   {
  //     id: "web-bootcamp-2025",
  //     title: "Tata Social Enterprise Challenge 2025 | IIM Calcutta",
  //     date: "May 10-12, 2025",
  //     dateLabel: "10-12 May 2025",
  //     description:
  //       "3-day intensive bootcamp covering modern frontend & backend stacks, deployment pipelines and performance best practices.",
  //     category: "Workshop",
  //     image:
  //       "(campus)/student-activities/technical-events-and-seminars/event_card5.jpg",
  //     participants: "150",
  //     tags: ["Full-stack", "React", "Node.js"],
  //     venue: "Computer Lab 2",
  //     speakers: ["Fullstack Dev"],
  //   },
  //   {
  //     id: "iot-2025",
  //     title: "IoT & Embedded Systems Intensive",
  //     date: "June 5-7, 2025",
  //     dateLabel: "5-7 June 2025",
  //     description:
  //       "Hands-on sessions covering sensors, microcontrollers (Arduino/RPi), and cloud integration. Build a prototype during the workshop.",
  //     category: "Workshop",
  //     image:
  //       "(campus)/student-activities/technical-events-and-seminars/event_card4.jpg",
  //     participants: "80",
  //     tags: ["IoT", "Embedded", "Hardware"],
  //     venue: "Electronics Lab",
  //     speakers: ["IoT Specialist"],
  //   },
  // ];

  // const pastEvents = [
  //   {
  //     title: "Hands-on Workshop at Webel Technology Limited (WTL)",
  //     date: "April 19, 2024",
  //     description:
  //       "24-hour coding challenge with teams building innovative solutions across tracks.",
  //     highlights: ["50+ teams", "3 winners", "Industry mentorship"],
  //     image:
  //       "(campus)/student-activities/technical-events-and-seminars/event_card1.jpg",
  //   },
  //   {
  //     title: "Global Entrepreneurship Summit ’25 at IIT Kharagpur",
  //     date: "February 7-9, 2025",
  //     description:
  //       "Students designed and built autonomous robots competing on a defined track.",
  //     highlights: ["35 teams", "Live demos", "Best innovation award"],
  //     image:
  //       "(campus)/student-activities/technical-events-and-seminars/event_card2.jpeg",
  //   },
  //   {
  //     title: "Web Development Bootcamp",
  //     date: "October 20-22, 2024",
  //     description:
  //       "Intensive 3-day bootcamp covering modern web technologies and hands-on projects.",
  //     highlights: ["100+ trained", "Live projects", "Certificate"],
  //     image:
  //       "(campus)/student-activities/clubs-and-societies/webdev-bootcamp.avif",
  //   },
  //   {
  //     title: "IoT & Embedded Systems Workshop",
  //     date: "September 10-11, 2024",
  //     description:
  //       "Practical session on sensors, microcontrollers and cloud integration.",
  //     highlights: ["30+ projects", "Hardware kits provided"],
  //     image:
  //       "(campus)/student-activities/technical-events-and-seminars/event_card4.jpg",
  //   },
  // ];

  // const [query, setQuery] = useState("");
  // const [activeCategory, setActiveCategory] = useState("All");
  // const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  // const filteredUpcoming = useMemo(() => {
  //   const q = query.trim().toLowerCase();
  //   return upcomingEvents.filter((e) => {
  //     const matchesCat =
  //       activeCategory === "All" || e.category === activeCategory;
  //     const matchesQ =
  //       !q ||
  //       e.title.toLowerCase().includes(q) ||
  //       e.description.toLowerCase().includes(q) ||
  //       e.date.toLowerCase().includes(q) ||
  //       e.tags?.join(" ").toLowerCase().includes(q);
  //     return matchesCat && matchesQ;
  //   });
  // }, [query, activeCategory]);

  const { upcoming_events, past_events } =
    await fetchTechnicalEventsAndSeminarsPageData();

  const excerpt = (text: string, n: number = 120) =>
    text.length > n ? `${text.slice(0, n).trim()}…` : text;

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-blue-50/30 to-white">
      {/* Hero (kept as-is) */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-[500px] w-full scale-105 object-center md:h-[520px]">
            <GithubImage
              fill
              src="(campus)/student-activities/technical-events-and-seminars/banner.png"
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
              <LuCpu className="size-5 text-white" />
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Upcoming Events - fixed card width grid */}
        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-2xl">
              Upcoming Technical Events
            </h2>
            <div className="text-muted-foreground text-sm">
              {upcoming_events.length} result
              {upcoming_events.length !== 1 && "s"}
            </div>
          </div>

          {upcoming_events.length === 0 ? (
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
              {upcoming_events.map((ev, idx) => (
                <MotionArticle
                  key={ev.documentId}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                  style={{ width: "100%", maxWidth: 360 }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <BackendImage
                      src={ev.image.url}
                      alt={ev.title}
                      fill
                      className="h-full w-full object-cover"
                    />

                    {/* <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-600 text-white">
                        {ev.category}
                      </Badge>
                    </div> */}
                    <div className="absolute top-3 right-3 rounded-md bg-white/80 px-2 py-1 text-slate-700 text-xs">
                      {ev.start} {ev.end && `- ${ev.end}`}
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
                          {ev.tags.map(({ id, text }) => (
                            <Badge
                              key={id}
                              className="bg-gray-100 text-gray-700"
                            >
                              {text}
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
            {past_events.map((pe, i) => (
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
                      <BackendImage
                        fill
                        src={pe.image.url}
                        alt={pe.title}
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between p-6 md:col-span-2">
                      <div>
                        <div className="mb-2 flex items-center gap-3 text-muted-foreground text-sm">
                          <LuCalendar className="h-4 w-4 text-blue-600" />
                          <span>
                            {pe.start} {pe.end && `- ${pe.end}`}
                          </span>
                        </div>

                        <h3 className="mb-2 font-semibold text-lg">
                          {pe.title}
                        </h3>
                        <p className="mb-4 text-muted-foreground text-sm">
                          {pe.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {pe.tags.map(({ id, text }) => (
                            <Badge
                              key={id}
                              className="bg-gray-100 text-gray-700"
                            >
                              {text}
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
      </div>

      {/* Event Details Modal */}
      {/* {selectedEvent && (
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
                <GithubImage
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
      )} */}
    </main>
  );
}
