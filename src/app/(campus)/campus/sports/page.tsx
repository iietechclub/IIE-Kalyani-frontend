"use client";

import { useEffect, useState } from "react";
import { LuTrophy, LuDumbbell } from "react-icons/lu";
import { MotionArticle, MotionDiv } from "@/components/animated/motion";
import GithubImage from "@/components/GithubImage";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Redesigned SportsPage
 * - modern responsive layout
 * - motion/react entrance and hover effects
 * - alternating feature rows
 * - lightweight responsive gallery
 *
 * Paste into your project and adjust image paths / component imports if necessary.
 */

export default function SportsPageRedesign() {
  // data (kept from your original)
  const outdoorSports = [
    {
      name: 'Cricket',
      image:
        'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Full-size pitch', 'Practice nets', 'Coaching available'],
      teams: "Men's & Women's",
    },
    {
      name: 'Football',
      image:
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80',
      facilities: ['FIFA standard ground', 'Floodlights', 'Training sessions'],
      teams: "Men's & Women's",
    },
    {
      name: 'Basketball',
      image:
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
      facilities: ['2 outdoor courts', 'Training equipment', 'Regular tournaments'],
      teams: "Men's & Women's",
    },
    {
      name: 'Volleyball',
      image:
        'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Sand court', 'Hard court', 'Professional coaching'],
      teams: "Men's & Women's",
    },
  ];

  const indoorSports = [
    {
      name: 'Table Tennis',
      image:
        'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=1200&q=80',
      facilities: ['8 tables', 'Air-conditioned hall', 'Equipment provided'],
    },
    {
      name: 'Badminton',
      image:
        'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
      facilities: ['4 courts', 'Synthetic flooring', 'Rackets & shuttles'],
    },
    {
      name: 'Chess',
      image:
        'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Dedicated hall', 'Chess sets', 'Coaching sessions'],
    },
    {
      name: 'Carrom',
      image:
        'https://urli.info/1eu5-',
      facilities: ['Multiple boards', 'Tournament grade', 'Open all day'],
    },
  ];

  const gymFeatures = [
    'Modern cardio equipment',
    'Free weights section',
    'Strength training machines',
    'Qualified fitness trainer',
    'Personal training sessions',
    'Yoga & aerobics classes',
  ];
  const swimmingFeatures = [
  'Olympic-sized swimming pool',
  'Separate beginner and advanced lanes',
  'Certified lifeguards on duty',
  'Changing rooms with lockers and showers',
  'Aqua aerobics and fitness classes',
  'Regular water quality maintenance',
  'Swimming coaching for all levels',
  'Poolside seating and rest area',
];


  const upcomingEvents = [
    {
      name: 'Annual Sports Meet 2025',
      date: 'March 1-3, 2025',
      description: 'Three-day sports extravaganza with multiple events and competitions',
      participants: 'All students',
    },
    {
      name: 'Inter-Department Cricket Tournament',
      date: 'February 15-20, 2025',
      description: 'Departmental teams compete for the championship trophy',
      participants: 'Department teams',
    },
    {
      name: 'Badminton Championship',
      date: 'February 25-26, 2025',
      description: 'Singles and doubles events for men and women',
      participants: 'Individual registration',
    },
  ];

  // quick counters animation (simple)
  const [counters, setCounters] = useState({ sports: 0, players: 0, trophies: 0 });
  useEffect(() => {
    let start = performance.now();
    const dur = 800;
    let raf = 0;
    function step(t: number) {
      const p = Math.min(1, (t - start) / dur);
      setCounters({
        sports: Math.round(12 * p),
        players: Math.round(1200 * p),
        trophies: Math.round(24 * p),
      });
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-green-50/30 to-white">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-[500px] w-full scale-105 object-center md:h-[520px]">
            <GithubImage
              fill
              src="(campus)/campus/sports/banner.jpg"
              alt="Sports facilities hero"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-green-900/80 via-blue-900/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center text-white pt-24 pb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-4">
              <LuTrophy className="w-5 h-5 text-white" />
              <span className="text-sm">Campus Life</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Sports & Fitness — Play. Train. Excel.
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90">
              World-class outdoor & indoor facilities, professional coaching, and regular competitions to bring out the best in every student.
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Outdoor Sports</h2>
            <p className="text-sm text-muted-foreground">Professionally maintained outdoor grounds</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorSports.map((s, i) => (
              <MotionArticle
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg bg-white dark:bg-gray-800"
              >
                <div className="relative h-44 overflow-hidden">
                  <GithubImage
                    src={s.image}
                    alt={s.name}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <h3 className="text-white text-lg font-semibold">{s.name}</h3>
                    <Badge className="bg-white/20 text-white border-white/10 mt-2">{s.teams}</Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <ul className="text-sm space-y-2">
                    {s.facilities.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Indoor Sports</h2>
            <p className="text-sm text-muted-foreground">Air-conditioned halls & coaching</p>
          </div>

          <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {indoorSports.map((s, idx) => (
              <MotionDiv
                key={s.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="md:col-span-1 h-56 md:h-40 overflow-hidden">
                  <GithubImage src={s.image} alt={s.name} fill className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {s.facilities.slice(0, 3).join(' • ')}
                  </p>
                  
                </div>
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* Gym */}
        <section id="gym" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <MotionDiv initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-1">
              <Card className="h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <GithubImage
                    src="(campus)/campus/sports/gym.jpg"
                    alt="Gymnasium"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-3">Gymnasium & Fitness</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Fully equipped fitness center with structured classes and certified trainers for students and staff.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {gymFeatures.map((g, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                      <LuDumbbell className="w-4 h-4" />
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <MotionDiv initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-1">
              <Card className="h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <GithubImage
                    src="(campus)/campus/sports/swimming.jpg"
                    alt="Swimming Pool"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </MotionDiv>

            <MotionDiv initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-3">Swimming</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Fully equipped fitness center with structured classes and certified trainers for students and staff.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {swimmingFeatures.map((g, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                      <LuDumbbell className="w-4 h-4" />
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Gallery Highlights</h2>
            <a href="/gallery" className="text-sm text-green-700">View full gallery →</a>
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {/* sample images mixed from data */}
            {[
              ...outdoorSports.map(s => s.image),
              ...indoorSports.map(s => s.image),
              'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
            ].map((src, idx) => (
              <MotionDiv key={idx} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }} className="break-inside-avoid">
                <GithubImage src={src} alt={`gallery-${idx}`} fill className="w-full rounded-lg object-cover mb-3" style={{ height: idx % 3 === 0 ? 220 : 160 }} />
              </MotionDiv>
            ))}
          </div>
        </section>

        
      </div>
    </main>
  );
}