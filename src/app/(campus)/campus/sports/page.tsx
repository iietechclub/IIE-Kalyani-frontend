import Image from "next/image";
import Link from "next/link";
import { LuDumbbell, LuTrophy } from "react-icons/lu";
import { MotionArticle, MotionDiv } from "@/components/animated/motion";

import BackendImage from "@/components/BackendImage";
import GithubImage from "@/components/GithubImage";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fetchSportsPageData } from "@/dal/sports";
import { urlFromGithub } from "@/lib/utils";

/**
 * Redesigned SportsPage
 * - modern responsive layout
 * - motion/react entrance and hover effects
 * - alternating feature rows
 * - lightweight responsive gallery
 *
 * Paste into your project and adjust image paths / component imports if necessary.
 */

export default async function SportsPage() {
  const data = await fetchSportsPageData();
const gallery_highlights = data?.gallery_highlights ?? [];


  // data (kept from your original)
  const outdoorSports = [
    {
      name: "Cricket",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
      facilities: ["Full-size pitch", "Practice nets", "Coaching available"],
      teams: "Men's & Women's",
    },
    {
      name: "Football",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
      facilities: ["FIFA standard ground", "Floodlights", "Training sessions"],
      teams: "Men's & Women's",
    },
    {
      name: "Basketball",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
      facilities: [
        "2 outdoor courts",
        "Training equipment",
        "Regular tournaments",
      ],
      teams: "Men's & Women's",
    },
    {
      name: "Volleyball",
      image:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80",
      facilities: ["Sand court", "Hard court", "Professional coaching"],
      teams: "Men's & Women's",
    },
  ];

  const indoorSports = [
    {
      name: "Table Tennis",
      image:
        "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=1200&q=80",
      facilities: ["8 tables", "Air-conditioned hall", "Equipment provided"],
    },
    {
      name: "Badminton",
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80",
      facilities: ["4 courts", "Synthetic flooring", "Rackets & shuttles"],
    },
    {
      name: "Chess",
      image:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
      facilities: ["Dedicated hall", "Chess sets", "Coaching sessions"],
    },
    {
      name: "Carrom",
      image: "https://urli.info/1eu5-",
      facilities: ["Multiple boards", "Tournament grade", "Open all day"],
    },
  ];

  const gymFeatures = [
    "Modern cardio equipment",
    "Free weights section",
    "Strength training machines",
    "Qualified fitness trainer",
    "Personal training sessions",
    "Yoga & aerobics classes",
  ];
  const swimmingFeatures = [
    "Olympic-sized swimming pool",
    "Separate beginner and advanced lanes",
    "Certified lifeguards on duty",
    "Changing rooms with lockers and showers",
    "Aqua aerobics and fitness classes",
    "Regular water quality maintenance",
    "Swimming coaching for all levels",
    "Poolside seating and rest area",
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-green-50/30 to-white">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-[500px] w-full scale-105 object-center md:h-[520px]">
            <Image
              fill
              src={urlFromGithub("(campus)/campus/sports/banner.jpg")}
              alt="Sports facilities hero"
              className="object-cover blur-[4px]"
              priority
            />


          </div>
          <div className="absolute inset-0 bg-linear-to-r from-green-900/80 via-blue-900/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl pt-24 pb-12 text-center text-white"
          >
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
              <LuTrophy className="h-5 w-5 text-white" />
              <span className="text-sm">Campus Life</span>
            </div>

            <h1 className="mb-4 font-bold text-3xl leading-tight md:text-5xl">
              Sports & Fitness — Play. Train. Excel.
            </h1>
            <p className="mx-auto max-w-2xl text-sm opacity-90 md:text-lg">
              World-class outdoor & indoor facilities, professional coaching,
              and regular competitions to bring out the best in every student.
            </p>

            {/* <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-white text-green-700 hover:bg-gray-100">Join Sports Club</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                View Timetable
              </Button>
            </div> */}
          </MotionDiv>
        </div>
      </header>

      {/* CONTENT WRAPPER */}
      <div className="container mx-auto px-4 py-12">
        {/* Sections quick-nav */}
        {/* <nav className="flex gap-2 overflow-x-auto py-4 mb-6">
          <a href="#outdoor" className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm shadow-sm">Outdoor</a>
          <a href="#indoor" className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm shadow-sm">Indoor</a>
          <a href="#gym" className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm shadow-sm">Gym</a>
          <a href="#achievements" className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm shadow-sm">Achievements</a>
          <a href="#events" className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm shadow-sm">Events</a>
        </nav> */}

        {/* Outdoor sports grid (masonry-like with cards) */}
        <section id="outdoor" className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-semibold text-2xl">Outdoor Sports</h2>
            <p className="text-muted-foreground text-sm">
              Professionally maintained outdoor grounds
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outdoorSports.map((s, i) => (
              <MotionArticle
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <Image
                    fill
                    src={s.image}
                    alt={s.name}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-semibold text-lg text-white">
                      {s.name}
                    </h3>
                    <Badge className="mt-2 border-white/10 bg-white/20 text-white">
                      {s.teams}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <ul className="space-y-2 text-sm">
                    {s.facilities.map((f, idx) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: not needed
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </MotionArticle>
            ))}
          </div>
        </section>

        {/* Indoor sports with alternating large cards */}
        <section id="indoor" className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-semibold text-2xl">Indoor Sports</h2>
            <p className="text-muted-foreground text-sm">
              Air-conditioned halls & coaching
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
            {indoorSports.map((s, idx) => (
              <MotionDiv
                key={s.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-3"
              >
                <div className="relative h-56 overflow-hidden md:col-span-1 md:h-40">
                  <Image
                    fill
                    src={s.image}
                    alt={s.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <h3 className="mb-2 font-semibold text-lg">{s.name}</h3>
                  <p className="mb-4 text-muted-foreground text-sm">
                    {s.facilities.slice(0, 3).join(" • ")}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* Gym */}
        <section id="gym" className="mb-12">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
            <MotionDiv
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <GithubImage
                    fill
                    src="(home)/facilities/gym.JPG"
                    alt="Gymnasium"
                    className="size-full object-cover"
                  />
                </div>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="mb-3 font-semibold text-2xl">
                Gymnasium & Fitness
              </h2>
              <p className="mb-4 text-muted-foreground text-sm">
                Fully equipped fitness center with structured classes and
                certified trainers for students and staff.
              </p>

              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                {gymFeatures.map((g, i) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: not needed
                    key={i}
                    className="flex items-start gap-3 rounded-lg bg-white p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
                      <LuDumbbell className="h-4 w-4" />
                    </div>
                    <div className="text-sm">{g}</div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </section>
        {/* swimming */}
        <section id="swimming" className="mb-12">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
            <MotionDiv
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <GithubImage
                    fill
                    src="(home)/facilities/Swimming_pool.jpg"
                    alt="Swimming Pool"
                    className="size-full object-cover"
                  />
                </div>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="mb-3 font-semibold text-2xl">Swimming</h2>
              <p className="mb-4 text-muted-foreground text-sm">
                Fully equipped fitness center with structured classes and
                certified trainers for students and staff.
              </p>

              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                {swimmingFeatures.map((g, i) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: not needed
                    key={i}
                    className="flex items-start gap-3 rounded-lg bg-white p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
                      <LuDumbbell className="size-4" />
                    </div>
                    <div className="text-sm">{g}</div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Small responsive gallery (masonry-like) */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-semibold text-2xl">Gallery Highlights</h2>
            <Link href="/campus/gallery" className="text-green-700 text-sm">
              View full gallery →
            </Link>
          </div>

          <div className="columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4">
            {/* sample images mixed from data */}
            {gallery_highlights.map(
              (src, idx) =>
                !!src.image && (
                  <MotionDiv
                    key={src.documentId}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="break-inside-avoid"
                  >
                    <div
                      className="relative mb-3 w-full rounded-lg"
                      style={{ height: idx % 3 === 0 ? 220 : 160 }}
                    >
                      <BackendImage
                        fill
                        src={src.image.url}
                        alt={src.image.alternativeText}
                        className="object-cover"
                      />
                    </div>
                  </MotionDiv>
                ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
