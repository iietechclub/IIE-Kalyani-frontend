import Image from "next/image";
import {
  // LuCalendar,
  // LuCamera,
  // LuChevronLeft,
  // LuChevronRight,
  // LuMic,
  // LuMusic,
  // LuPalette,
  LuSparkles,
  // LuTheater,
  // LuTrophy,
  // LuUsers,
} from "react-icons/lu";

import { MotionDiv } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import DynamicIcon from "@/components/ui/dynamic-icon";

import { fetchCulturalEventsPageData } from "@/dal/cultural-events";
import { cn } from "@/lib/utils";

function BentoGallery({
  gallery,
  removeMiddleSmall = true,
}: {
  gallery: GalleryItemWithoutTag[];
  removeMiddleSmall?: boolean;
}) {
  // optionally remove a lonely mid tile (prevents odd gap)
  if (removeMiddleSmall && gallery.length > 5) {
    const mid = Math.floor(gallery.length / 2);
    gallery.splice(mid, 1);
  }

  // desktop bento pattern (repeats)
  const pattern = [
    { col: 4, row: 2 },
    { col: 2, row: 2 },
    { col: 2, row: 1 },
    { col: 2, row: 1 },
    { col: 2, row: 1 },
    { col: 2, row: 1 },
  ];

  const colClassMap: Record<number, string> = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
  };
  const rowClassMap: Record<number, string> = {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
    3: "lg:row-span-3",
    4: "lg:row-span-4",
  };

  return (
    <section id="gallery" className="py-6">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-bold text-3xl">Gallery</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Moments from cultural nights and performances
          </p>
        </div>

        {/* dense grid helps pack tiles tightly; rows kept small to limit height */}
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-dense lg:grid-cols-6"
          style={{ gridAutoRows: "minmax(72px, auto)" }}
        >
          {gallery.map((entry, idx) => {
            const pat = pattern[idx % pattern.length];

            const lgCol = colClassMap[pat.col] ?? colClassMap[1];
            const lgRow = rowClassMap[pat.row] ?? rowClassMap[1];

            const classes = [
              "rounded-lg",
              "overflow-hidden",
              "relative",
              "col-span-1",
              "sm:col-span-1",
              "md:col-span-1",
              "shadow-sm",
              "border",
              "border-gray-100",
              lgCol,
              lgRow,
            ].join(" ");

            // smaller/minimized image heights to avoid big vertical gaps
            const imgClass =
              "w-full h-full object-cover object-center block min-h-[72px] md:min-h-[88px] lg:min-h-[96px]";

            // cap height for double-row tiles
            const style =
              pat.row === 2
                ? { maxHeight: 240, overflow: "hidden" }
                : undefined;

            return (
              <MotionDiv
                key={entry.documentId}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.36, delay: 0.03 * idx }}
                className={classes}
                style={style}
              >
                {entry.image ? (
                  <BackendImage
                    fill
                    src={entry.image.url}
                    alt={`gallery: ${entry.image.alternativeText}`}
                    className={imgClass}
                  />
                ) : (
                  <div className="flex h-full min-h-[72px] w-full items-center justify-center font-bold text-2xl text-slate-700 md:min-h-[88px] lg:min-h-24">
                    Image
                  </div>
                )}
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CulturalEventsPage -------------------- */
export default async function CulturalEventsPage() {
  const { activities, gallery_images, upcoming_events } =
    await fetchCulturalEventsPageData();

  const activity_colors = [
    "bg-teal-50 text-teal-600",
    "bg-indigo-50 text-indigo-600",
    "bg-blue-50 text-blue-600",
    "bg-orange-50 text-orange-600",
    "bg-pink-50 text-pink-600",
    "bg-purple-50 text-purple-600",
  ];

  // ensure small gallery arrays are handled without awkward gaps
  // const galleryImgs = useMemo(() => gallery, [gallery]);

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-orange-50/30 to-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            fill
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=80"
            alt="Cultural Events Hero"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-orange-900/70 via-pink-700/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <MotionDiv
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
                <LuSparkles className="h-5 w-5 text-white" />
                <span className="text-sm">Campus Life • Cultural Events</span>
              </div>

              <h1 className="mb-4 font-bold text-3xl leading-tight md:text-4xl">
                Celebrate Creativity — Cultural Events at IIE Kalyani
              </h1>

              <p className="mb-6 max-w-xl text-white/90">
                A year-round programme of music, dance, theatre, cinema and art
                — offering students a stage to shine, learn and collaborate.
              </p>

              {/* <div className="flex flex-wrap gap-3">
                <a href="pages/academic/AcademicCalendar">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100"
                  >
                    View Calendar
                  </Button>
                </a>
                <a
                  href="#upcoming"
                  className="ml-2 inline-flex items-center text-white underline"
                >
                  See Upcoming →
                </a>
              </div> */}
            </MotionDiv>

            {/* <MotionDiv
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-first lg:order-last"
            >
              <div className="mx-auto max-w-md rounded-2xl bg-white/90 p-3 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-gray-500 text-xs">Next Big Event</div>
                    <div className="font-semibold">
                      Spring Cultural Festival
                    </div>
                    <div className="text-gray-500 text-sm">
                      March 12–13, 2025 • Campus Grounds
                    </div>
                  </div>
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                    <Image
                      fill
                      src={upcomingEvents[1].image}
                      alt="next event"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="text-gray-500 text-xs">Events</div>
                    <div className="font-semibold">50+</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Participants</div>
                    <div className="font-semibold">5000+</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Prizes</div>
                    <div className="font-semibold">₹5L</div>
                  </div>
                </div>
              </div>
            </MotionDiv> */}
          </div>
        </div>
      </header>

      {/* Activities grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2">Cultural Activities</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              An active calendar of creative programs run by student clubs &
              faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, idx) => (
              <MotionDiv
                key={a.documentId}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <BackendImage
                      fill
                      src={a.image.url}
                      alt={a.title}
                      className="size-full object-cover transition-transform duration-400 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    {a.icon && (
                      <div className="absolute top-4 left-4">
                        <div
                          className={cn(
                            `flex size-12 items-center justify-center rounded-lg`,
                            activity_colors[idx],
                          )}
                        >
                          <DynamicIcon name={a.icon} className="size-5" />
                        </div>
                      </div>
                    )}
                    <div className="absolute right-4 bottom-4 left-4 text-white">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{a.title}</h3>
                        <Badge className="border-white/30 bg-white/20 text-white">
                          {a.timing}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm">
                      {a.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Gallery (Bento style) */}
      <section className="py-12">
        <div className="container mx-auto items-start gap-8 px-4">
          <div>
            {/* BentoGallery with compact images */}
            <BentoGallery gallery={gallery_images} removeMiddleSmall={true} />
          </div>
        </div>
      </section>

      {/* Upcoming events timeline */}
      {/* Upcoming events (updated) */}
      <section id="upcoming" className="bg-white/50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2">Upcoming Events</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Plan ahead — mark the dates for major cultural celebrations.
            </p>
          </div>

          <div className="mx-auto">
            {/* grid: 1 col mobile, 2 col md, 3 col lg */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming_events.map((ev) => (
                <MotionDiv
                  key={ev.documentId}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
                >
                  <div className="grid h-full grid-cols-5 items-stretch gap-0">
                    {/* thumbnail */}
                    <div className="col-span-2">
                      <div className="relative size-full">
                        <BackendImage
                          fill
                          src={ev.image.url}
                          alt={ev.title}
                          className="size-full rounded-l-2xl object-cover"
                        />
                      </div>
                    </div>

                    {/* content */}
                    <div className="col-span-3 flex flex-col justify-between p-4 md:p-5">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-lg leading-snug">
                              {ev.title}
                            </h3>
                            {/* <div className="mt-1 text-muted-foreground text-sm">
                              {ev.venue}
                            </div> */}
                          </div>

                          {/* date badge */}
                          {/* <div className="flex flex-col items-end"> */}
                          {/* formatted date: month/day */}
                          {/* <div className="inline-flex flex-col items-center px-3 py-2 rounded-lg bg-rose-50 text-rose-700 font-semibold"> */}
                          {/* <span className="text-xs uppercase tracking-wide"> {new Date(ev.date).toLocaleString('default', { month: 'short' })} </span> */}
                          {/* <span className="text-xl md:text-2xl leading-none">{new Date(ev.date).getDate()}</span> */}
                          {/* </div> */}
                          {/* <div className="text-xs text-slate-500 mt-2">{ev.time}</div> */}
                          {/* </div> */}
                        </div>

                        <p className="mt-3 line-clamp-3 text-muted-foreground text-sm">
                          {ev.description}
                        </p>
                      </div>

                      {/* Venue */}
                      {/* <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="text-muted-foreground text-sm">
                          <div>{ev.venue}</div>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* hidden expanded details area (can be shown in a modal later) */}
                  <div
                    id={`event-${ev.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="sr-only"
                    aria-hidden
                  />
                </MotionDiv>
              ))}
            </div>

            {/* fallback when empty */}
            {upcoming_events.length === 0 && (
              <div className="py-12 text-center text-muted-foreground">
                No upcoming events — check back later.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
