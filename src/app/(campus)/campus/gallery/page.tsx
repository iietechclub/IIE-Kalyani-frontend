"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { MotionDiv, MotionFigure } from "@/components/animated/motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function GalleryPageWithHero() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "campus" | "events" | "academics" | "sports"
  >("all");

  const galleryCategories = [
    { id: "all", name: "All", aria: "All Photos" },
    { id: "campus", name: "Campus", aria: "Campus Life" },
    { id: "events", name: "Events", aria: "Events" },
    { id: "academics", name: "Academics", aria: "Academics" },
    { id: "sports", name: "Sports", aria: "Sports" },
  ] as const;

  const galleryImages = [
    {
      id: 1,
      title: "Annual Convocation 2024",
      category: "events",
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
      date: "Dec 2024",
    },
    {
      id: 2,
      title: "Campus Infrastructure",
      category: "campus",
      src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80",
      date: "Nov 2024",
    },
    {
      id: 3,
      title: "Tech Fest 2024",
      category: "events",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
      date: "Oct 2024",
    },
    {
      id: 4,
      title: "Computer Lab Session",
      category: "academics",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
      date: "Sep 2024",
    },
    {
      id: 5,
      title: "Cricket Championship",
      category: "sports",
      src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1600&q=80",
      date: "Aug 2024",
    },
    {
      id: 6,
      title: "Cultural Night",
      category: "events",
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
      date: "Aug 2024",
    },
    {
      id: 7,
      title: "Central Library",
      category: "campus",
      src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80",
      date: "Jul 2024",
    },
    {
      id: 8,
      title: "Engineering Workshop",
      category: "academics",
      src: "https://images.unsplash.com/photo-1581093458791-9d42e1bbf0c5?auto=format&fit=crop&w=1600&q=80",
      date: "Jun 2024",
    },
    {
      id: 9,
      title: "Football Tournament",
      category: "sports",
      src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=80",
      date: "May 2024",
    },
    {
      id: 10,
      title: "Independence Day Celebration",
      category: "events",
      src: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1600&q=80",
      date: "Aug 2024",
    },
    {
      id: 11,
      title: "Student Lounge Area",
      category: "campus",
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
      date: "Apr 2024",
    },
    {
      id: 12,
      title: "Science Exhibition",
      category: "academics",
      src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80",
      date: "Mar 2024",
    },
  ] as const;

  // generate random heights once so layout is 'random' and stable
  const _imageHeights = useMemo(() => {
    const rng = (seed: number) => {
      let s = seed;
      return () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
      };
    };
    const rand = rng(12345);
    return galleryImages.reduce<Record<number, number>>((acc, img) => {
      const h = Math.round(160 + Math.floor(rand() * 260)); // 160..420
      acc[img.id] = h;
      return acc;
    }, {});
  }, [galleryImages.reduce]);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-indigo-50/30 to-white text-black">
      {/* Breadcrumb */}
      <div className="/* responsive vertical padding */ border-gray-200 border-b bg-white/80 py-2 backdrop-blur-sm sm:py-3 md:py-4">
        <div className="container mx-auto px-2 sm:px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-[0.70rem] sm:text-sm md:text-base">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/campus">Campus Life</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Gallery</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* HERO BANNER */}
      <header className="relative">
        <div
          className="/* responsive height */ relative h-48 w-full bg-center bg-cover bg-no-repeat sm:h-64 md:h-80 lg:h-96"
          style={{
            backgroundImage:
              "url('https://iiekalyani.com/wp-content/uploads/2025/04/outDoor4.jpg')",
          }}
        >
          {/* dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* subtle decorative shapes (hidden on very small screens) */}
          <div className="-left-10 -top-10 pointer-events-none absolute hidden h-36 w-36 rounded-full bg-white/8 blur-2xl sm:block"></div>
          <div className="pointer-events-none absolute right-8 bottom-4 hidden h-44 w-44 rounded-full bg-pink-400/15 blur-2xl sm:block"></div>

          <div className="container relative z-10 mx-auto flex h-full items-center px-3 sm:px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-white"
            >
              {/* badge */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-2 py-0.5 sm:mb-4 sm:px-3 sm:py-1">
                <Camera className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                <span className="text-[0.7rem] sm:text-sm">Campus Gallery</span>
              </div>

              {/* heading — same font, responsive size */}
              <h1 className="mb-2 font-semibold text-[1rem] sm:mb-3 sm:text-[1.50rem] md:text-[1.75rem]">
                Memories, Moments & Events — IIE Kalyani
              </h1>

              {/* paragraph */}
              <p className="mb-3 text-[0.50rem] text-white/90 sm:mb-4 sm:text-sm md:text-base">
                Browse through highlights from past events, campus life and
                academic moments. Click an image to view the full-sized photo.
              </p>

              {/* button */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("gallery-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-md bg-red-600 px-3 py-1 text-[0.7rem] text-white shadow hover:bg-red-700 sm:px-4 sm:py-2 sm:text-sm"
                >
                  View Photos
                </button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Intro + category buttons */}
      <section className="container mx-auto px-4 pt-10">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-muted-foreground">
            Our photo gallery captures the spirit of campus: energetic fests,
            focused academic sessions, sports moments and everyday student life.
          </p>
        </div>

        {/* category buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-2 py-1.5 text-[0.70rem] transition-shadow sm:px-3 sm:py-2 sm:text-sm md:px-4 md:text-base ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-lg"
                  : "border bg-white text-gray-700"
              }
              `}
              aria-pressed={activeCategory === cat.id}
              aria-label={cat.aria}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <main id="gallery-grid" className="container mx-auto px-4 pb-20">
        <div className="grid auto-rows-[120px] grid-cols-3 gap-3 sm:auto-rows-[150px] sm:grid-cols-4 lg:auto-rows-[180px] lg:grid-cols-5">
          {filtered.map((img, idx) => (
            <MotionFigure
              key={img.id}
              className={`relative overflow-hidden rounded-lg bg-gray-100 shadow-sm ${
                idx % 7 === 0
                  ? "col-span-2 row-span-2"
                  : idx % 5 === 0
                    ? "row-span-2"
                    : idx % 6 === 0
                      ? "col-span-2"
                      : ""
              }
        `}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(img.src, "_blank", "noopener,noreferrer")
              }
            >
              {/* IMAGE */}
              <Image
                src={img.src}
                alt={img.title}
                loading={idx < 6 ? "eager" : "lazy"}
                fill
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* CAPTION — hidden on mobile */}
              <figcaption className="absolute inset-x-0 bottom-0 hidden bg-white/80 p-2 text-[0.75rem] text-gray-700 sm:block">
                <div className="font-medium">{img.title}</div>
                <div className="text-[0.65rem] text-muted-foreground">
                  {img.date}
                </div>
              </figcaption>
            </MotionFigure>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            No images in this category.
          </div>
        )}
      </main>
    </div>
  );
}
